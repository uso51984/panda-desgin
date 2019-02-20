const fs = require('fs-extra');
const path = require('path');
const babel = require('babel-core');
const getBabelCommonConfig = require('./getBabelCommonConfig');

const esDir = path.join(__dirname, '../es');
const libDir = path.join(__dirname, '../lib');
const srcDir = path.join(__dirname, '../src');

const isDir = dir => fs.lstatSync(dir).isDirectory();
const isJs = path => /\.js$/.test(path);
const isCode = path => !/(demo|test|\.md)$/.test(path);

function compile(dir, modules) {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const filePath = path.join(dir, file);
    // reomve unnecessary files
    if (!isCode(file)) {
      return fs.removeSync(filePath);
    }
    // scan dir
    if (isDir(filePath)) {
      return compile(filePath, modules);
    }

    // compile js
    if (isJs(file)) {
      const { code } = babel.transformFileSync(filePath, getBabelCommonConfig(modules));
      fs.outputFileSync(filePath, code);
    }
  });
}

// clear dir
fs.emptyDirSync(esDir);
fs.emptyDirSync(libDir);

// compile es dir
fs.copySync(srcDir, esDir);
compile(esDir, false);

// // compile lib dir
process.env.BABEL_MODULE = 'commonjs';
fs.copySync(srcDir, libDir);
compile(libDir, 'commonjs');
