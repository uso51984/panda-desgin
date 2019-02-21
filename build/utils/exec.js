const processExec = require('child-process-promise').exec;
const colors = require('colors');
const _debug = require('debug');

const debug = _debug('react-base-ui:bin:exec');

function logWithPrefix(prefix, message) {
  debug(
    message.toString().trim()
    .split('\n')
    .map(line => `${prefix.grey} ${line}`)
    .join('\n')
  );
}

module.exports = function exec(command, options = {}) {
  const title = options.title || command;
  const stage = options.stage || '';

  logWithPrefix(`[${title}]`, `Start ${stage}......`.cyan);

  const output = (type, data) => logWithPrefix(`[${title}] ${type}:`, data);

  return processExec(command, options).progress((result) => {
    result.stdout.on('data', data => output('progress:', data));
    result.stderr.on('data', data => output('error', data));
  })
  .then((result) => {
    logWithPrefix(`[${title}]`, 'Complete!'.green);
    return result;
  });
};
