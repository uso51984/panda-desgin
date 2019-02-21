const webpack = require('webpack');
const path = require('path');
const assign = require('object-assign');
const shelljs = require('shelljs');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const getWebpackCommonConfig = require('./webpackCommonConfig');
const config = require('./webpack.dev.js')(true);

delete config.devServer;
config.plugins.push(new MiniCssExtractPlugin({
  filename: "[name].css",
  chunkFilename: "[id].css"
}))

const webpackDocConfig = assign(config, {
  mode: 'production',
  output: {
    path: path.join(__dirname, '../docs/dist'),
    filename: '[name].[hash:8].js'
  },
  module: {
    rules: getWebpackCommonConfig.getLoaders().concat(getWebpackCommonConfig.getCssLoaders(true)),
  },
  optimization: {
    minimize: true
  },
  performance: {
    hints: false
  }
});


module.exports = () => {
  shelljs.rm('-rf', 'docs/dist');
  return webpackDocConfig
}