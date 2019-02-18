
'use strict';
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const getBabelCommonConfig = require('./babelCommonConfig');
const assign = require('object-assign');
const autoprefixer = require('autoprefixer');

function getResolve() {
  const resolve = {
    modules: [process.cwd(), 'node_modules'],
    extensions: ['.js', '.jsx']
  };

  return resolve;
}

const postcssLoader = {
  loader: 'postcss',
  options: { plugins: [autoprefixer({remove: false})] },
};

module.exports = {
  getResolve,
  getResolveLoader() {
    return {
      modules: [
        path.resolve(__dirname, '../node_modules'),
        path.resolve(__dirname, '../../'),
      ],
      moduleExtensions: ['-loader'],
    };
  },
  getLoaders() {
    const babelConfig = getBabelCommonConfig();
    const babelLoader = {
      loader: 'babel',
      options: babelConfig,
    };
    return [
      assign(
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
        },
        babelLoader
      ),
      {
        test: /\.svg$/,
        loader: 'svg-sprite',
      },
      {
        test: /\.woff2?(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url',
        options: {
          limit: 10000,
          minetype: 'application/font-woff',
        },
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url',
        options: {
          limit: 10000,
          minetype: 'application/octet-stream',
        },
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file',
      },
      {
        test: /\.(png|jpg|jpeg|webp)$/i,
        loader: 'file',
      },
      {
        test: /\.md/,
        use: ['raw-loader'],
      },
    ];
  },

  getCssLoaders(extractCss) {
    let cssLoader = [
      {
        loader: 'css',
        options: {
          importLoaders: 1,
          sourceMap: true,
        },
      },
      postcssLoader,
    ];
    let lessLoader = cssLoader.concat([
      {
        loader: 'less',
        options: {
          sourceMap: true,
        },
      },
    ]);
      const styleLoader = {
        loader: 'style',
      };

      cssLoader.unshift(styleLoader);
      lessLoader.unshift(styleLoader);
    if (extractCss) {
      const test = {
        loader: MiniCssExtractPlugin.loader,
        options: {
          // you can specify a publicPath here
          // by default it use publicPath in webpackOptions.output
        }
      }
      cssLoader.unshift(test);
      lessLoader.unshift(test);
    }
    return [
      {
        test: /\.css$/,
        use: cssLoader,
      },
      {
        test: /\.less$/,
        use: lessLoader,
      },
    ];
  },
};
