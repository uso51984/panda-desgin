
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const getWebpackCommonConfig = require('./sections/webpackCommonConfig');
const resolveCwd = require('./utils/resolveCwd');
const plugins = [new ProgressBarPlugin()];

function setHtmlWebpackPlugin(name) {
  plugins.push(
    new HtmlWebpackPlugin({
      chunks: [name],
      title: name,
      template: './build/sections/doc.Template.html',
      filename: `${name}.html`,
      favicon: './build/sections/favicon.ico',
      inject: true
    })
  );
}

const entry = {
  index: [
    "./docs/index.js"
  ],
  mobile: [
    "./docs/mobile.js"
  ]
}

for (let key in entry) {
  setHtmlWebpackPlugin(key)
}

module.exports = () => {
  return {
    devtool: '#source-map',
    resolveLoader: getWebpackCommonConfig.getResolveLoader(),
    entry,
    output: {
      path: resolveCwd('docs/dist'),
      filename: '[name].js'
    },
    module: {
      rules: getWebpackCommonConfig.getLoaders().concat(getWebpackCommonConfig.getCssLoaders(false)),
    },
    resolve: getWebpackCommonConfig.getResolve(),
    plugins,
    mode: 'development',
    devServer: {
      host: '0.0.0.0',
      port: 9700,
      open: true,
      compress: true,
      historyApiFallback: true,
      hot: false,
      publicPath: '/',
      quiet: false,
      lazy: false
    }
  };
};