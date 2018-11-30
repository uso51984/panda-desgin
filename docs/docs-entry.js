// This file is auto gererated by build/build-entry.js
import React from 'react';
import Button from 'src/button/zh-CN.md';
import Alert from 'src/Alert/zh-CN.md';
import CodeBlock from './CodeBlock';

const ReactMarkdown = require('react-markdown');

const Markdown = docData => () => <ReactMarkdown source={docData} renderers={{ code: CodeBlock }} />;


export default {
  button: Markdown(Button),
  alert: Markdown(Alert),
};
