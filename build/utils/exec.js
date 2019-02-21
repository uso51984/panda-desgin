const processExec = require('child-process-promise').exec;
const colors = require('colors');

module.exports = function exec(command, options = {}) {
  const title = options.title || command;
  const stage = options.stage || '';

  console.log(`[${title}]`, `Start ${stage}......`.cyan);

  const output = (type, data) => console.log(`[${title}] ${type}:`, data);

  return processExec(command, options).progress((result) => {
    result.stdout.on('data', data => output('progress:', data));
    result.stderr.on('data', data => output('error', data));
  })
  .then((result) => {
    console.log(`[${title}]`, 'Complete!'.green);
    return result;
  });
};
