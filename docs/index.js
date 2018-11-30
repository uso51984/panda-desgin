import React from 'react';
import ReactDOM from 'react-dom';
import DocsApp from './DocsApp';
import './style/index.less';

const ua = navigator.userAgent.toLowerCase();
const isMobile = /ios|iphone|ipod|ipad|android/.test(ua);

if (isMobile) {
  location.replace(`mobile.html${location.hash}`);
} else if (location.pathname === 'mobile.html') {
  location.replace(`${location.hash}`);
}

ReactDOM.render(
  <DocsApp />,
  document.getElementById('root'),
);

