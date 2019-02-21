const exec = require('./utils/exec');

exec('npm run build:components', { stage: 'build:components' })
  .then(() => exec('npm run build:panda', { stage: 'build:panda' }))
  .then(() => exec('npm run build:style', { stage: 'build:style' }))
  .catch(error => console.error(error));
