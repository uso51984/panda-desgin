const semver = require('semver');
const prompt = require('readline-sync').question;
const resolvePath = require('path').resolve;
const argv = require('yargs').argv;
const pkg = require('../package.json');
const exec = require('./utils/exec');

if (process.cwd() !== resolvePath(__dirname, '..')) {
  console.error('The release script must be run from the repo root');
  process.exit(1);
}

const auto = !!argv['release-version'] || !!argv.auto;
const pre = argv.pre;
const preid = 'beta';
const curVersion = pkg.version;
let nextVersion = argv['release-version'] || semver.inc(curVersion, pre ? 'prerelease' : 'release', preid);

if (!auto) {
  nextVersion = prompt(`Current version is (${curVersion}).\nPress ENTER to use (${nextVersion}) or type your own for next version:`) || nextVersion;
}

const nver = nextVersion;
nextVersion = semver.clean(nextVersion);
if (!nextVersion || !semver.valid(nextVersion)) {
  console.error(`ERROR: Invalid next version (${nver})!`);
  process.exit(0);
}

if (semver.lte(nextVersion, curVersion)) {
  console.error(`ERROR: Use a value larger than current version (${curVersion}!`);
  process.exit(0);
}

//Make sure the lint pass
exec('npm run lint', { stage: 'linting' })
  //Make sure the test pass
  .then(() => exec('npm run test', { stage: 'test' }))
  .then(() => exec('npm run build:lib', { stage: 'building' }))
  // npm version
  // [<newversion> | major | minor | patch | premajor | preminor | prepatch | prerelease | from-git]
  .then(() => exec(`npm version ${nextVersion} --force -m "Release version to %s"`, { stage: 'bumping version' }))
  //Push to the same branch on the git remote
  // Do this before we publish in case anyone has pushed since we last pulled
  .then(() => exec('git push origin HEAD:master', { stage: 'pushing to remote' }))
  //Push the v* tag to Git server
  .then(() => exec(`git push -f --no-verify origin v${nextVersion}`), { stage: `Push the v${nextVersion} tag` })
  .then(() => exec('npm publish --registry https://registry.npmjs.org'), { stage: 'npm publish' })
  .then(() => exec('npm run clear'), { stage: 'Clear'} )
  .catch(error => console.error(error));
