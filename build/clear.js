const fs = require('fs-extra');
const shelljs = require('shelljs');
const resolveCwd = require('./utils/resolveCwd');
const colors = require('colors');

function cleanCompile() {
  if (fs.existsSync(resolveCwd('lib'))) {
    shelljs.rm('-rf', resolveCwd('lib'));
  }
  if (fs.existsSync(resolveCwd('es'))) {
    shelljs.rm('-rf', resolveCwd('es'));
  }
}

function cleanBuild() {
  if (fs.existsSync(resolveCwd('dist'))) {
    shelljs.rm('-rf', resolveCwd('dist'));
  }
}

function cleanDocBuild() {
  if (fs.existsSync(resolveCwd('docs/dist'))) {
    shelljs.rm('-rf', resolveCwd('docs/dist'));
  }
}

console.log('Start Clear'.green)
console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
cleanCompile()
cleanBuild()
cleanDocBuild()
console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
console.log('Complete Clear'.green)
