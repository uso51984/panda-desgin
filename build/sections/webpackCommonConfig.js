
'use strict';
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const getBabelCommonConfig = require('./getBabelCommonConfig');
const autoprefixerConfig = require('./autoprefixerConfig');

function getResolve() {
  const resolve = {
    modules: [process.cwd(), 'node_modules'],
    extensions: ['.js', '.jsx']
  };

  return resolve;
}

module.exports = {
  getResolve,
  getResolveLoader() {
    return {
      modules: [
        path.resolve(__dirname, '../node_modules'),
        path.resolve(__dirname, '../'),
      ],
      moduleExtensions: ['-loader'],
    };
  },
  getLoaders() {
    return [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        options: getBabelCommonConfig()
      },
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
    const styleLoader = {
      loader: 'style',
    };

    const postcssLoader = {
      loader: 'postcss',
      options: { plugins: [autoprefixerConfig] },
    };

    const cssLoader = [
      {
        loader: 'css',
        options: {
          importLoaders: 1,
          sourceMap: true,
        },
      },
      postcssLoader,
    ];

    const lessLoader = cssLoader.concat([
      {
        loader: 'less',
        options: {
          sourceMap: true,
          javascriptEnabled: true
        },
      },
    ]);

    if (extractCss) {
      const extractCssLoader = {
        loader: MiniCssExtractPlugin.loader,
        options: {
          // you can specify a publicPath here
          // by default it use publicPath in webpackOptions.output
        }
      }
      cssLoader.unshift(extractCssLoader);
      lessLoader.unshift(extractCssLoader);
    } else {
      cssLoader.unshift(styleLoader);
      lessLoader.unshift(styleLoader);
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
