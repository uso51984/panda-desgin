const processExec = require('child-process-promise').exec;
const colors = require('colors');

module.exports = function exec(command, options = {}) {
  const title = options.title || command;
  const stage = options.stage || '';

  console.log(`[${title}]`, `${stage} Start`.cyan);

  const output = (type, data) => console.log(`[${title}] ${type}:`, data);

  return processExec(command, options).progress((result) => {
    result.stdout.on('data', data => output('progress....'.cyan, data));
    result.stderr.on('data', data => output(data));
  })
  .then((result) => {
    console.log(`${title} Complete!`.green);
    return result;
  });
};
