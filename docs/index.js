import React from 'react';
import ReactDOM from 'react-dom';
import 'codemirror/mode/jsx/jsx';
import 'codemirror/mode/css/css';
import 'src/index.less';

import DocsApp from './DocsApp';
import './style/index.less';
// window.CodeMirror = CodeMirror;

const ua = navigator.userAgent.toLowerCase();
const isMobile = /ios|iphone|ipod|ipad|android/.test(ua);

const { location } = window;

if (isMobile) {
  location.replace(`mobile.html${location.hash}`);
} else if (location.pathname === 'mobile.html') {
  location.replace(`${location.hash}`);
}

ReactDOM.render(
  <DocsApp />,
  document.getElementById('root'),
);
