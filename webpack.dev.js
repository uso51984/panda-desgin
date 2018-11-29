const getwebpackDevConfig =  require('bee-build-tools/lib/getwebpackDevConfig')

const config = getwebpackDevConfig({});

config.entry = {
  app: './doc/index.js',
},

module.exports = getwebpackDevConfig({});