const getwebpackDevConfig = require('bee-build-tools/lib/getwebpackDevConfig');

const config = getwebpackDevConfig({});


console.log('config', config);

module.exports = config;
