const autoprefixer = require('autoprefixer');

module.exports = autoprefixer({
  remove: false,
  browsers: ['Android >= 4.0', 'iOS >= 7']
});