'use strict';
const webpack = require('webpack');
const path = require('path');
const shelljs = require('shelljs');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const assign = require('object-assign');
const getWebpackCommonConfig = require('./webpackCommonConfig');
const { measureFileSizesBeforeBuild, printFileSizesAfterBuild } = require('./fileSizeReporter');
const cwd = process.cwd();

function printResult(stats) {
  if (stats.toJson) {
    stats = stats.toJson();
  }

  (stats.errors || []).forEach(err => {
    console.error('error', err);
  });

  stats.assets.forEach(item => {
    const size = `${(item.size / 1024.0).toFixed(2)}kB`;
    console.log('generated', item.name, size);
  });
}


const getWebpackConfig = ({ common, inlineSourceMap }) => {
  const plugins = [new ProgressBarPlugin()];
  return {
    devtool: inlineSourceMap ? '#inline-source-map' : '#source-map',

    resolveLoader: getWebpackCommonConfig.getResolveLoader(),
    module: {
      noParse: [/moment.js/],
      rules: getWebpackCommonConfig.getLoaders().concat(getWebpackCommonConfig.getCssLoaders(true)),
    },
    resolve: getWebpackCommonConfig.getResolve(),
    plugins,
  };
};

const entry = {
  'panda-desgin': path.join(cwd, 'src/index.js')
}

let webpackConfig;
const buildFolder = path.join(cwd, 'dist/');
  webpackConfig = assign(
    getWebpackConfig({
      common: false,
      inlineSourceMap: false,
    }),
    {
      entry,
      output: Object.assign(
        {
          path: buildFolder,
          filename: '[name].js',
          libraryTarget: 'umd',
          libraryExport: 'default',
        }
      ),
      mode: 'development',
      externals: {
        react: {
          root: 'React',
          commonjs2: 'react',
          commonjs: 'react',
          amd: 'react',
        },
        'react-dom': {
          root: 'ReactDOM',
          commonjs2: 'react-dom',
          commonjs: 'react-dom',
          amd: 'react-dom',
        },
      },
    }
  );
  const compressedWebpackConfig = Object.assign({}, webpackConfig);
  compressedWebpackConfig.entry = {};
  compressedWebpackConfig.mode='production';

  Object.keys(entry).forEach(e => {
    compressedWebpackConfig.entry[`${e}.min`] = entry[e];
  });

  webpackConfig.entry = entry;
  webpackConfig = [webpackConfig, compressedWebpackConfig];
  measureFileSizesBeforeBuild(buildFolder).then(previousFileSizes => {
    shelljs.rm('-rf', buildFolder);
    webpack(webpackConfig, (err, stats) => {
      if (err) {
        console.error('error', err);
      }
      stats.toJson().children.forEach(printResult);
      printFileSizesAfterBuild(stats, previousFileSizes, buildFolder);
    });
  });
