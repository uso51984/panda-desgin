const shell = require('shelljs');
const signale = require('signale');
const { Signale } = signale;
const tasks = [
  'build:components',
  'build:panda',
  'build:style',
];

tasks.forEach(task => {
  signale.start(task);

  const interactive = new Signale({ interactive: true });
  interactive.pending(task);
  const result = shell.exec(`npm run ${task} --silent`);
  console.log('result', result);
  interactive.success(task);
});
