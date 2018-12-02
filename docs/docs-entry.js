// This file is auto gererated by build/build-entry.js
import React from 'react';
import Button from 'src/components/Button/zh-CN.md';
import Alert from 'src/components/Alert/zh-CN.md';
import Icon from 'src/components/Icon/zh-CN.md';
import Grid from 'src/components/Grid/zh-CN.md';
import Cell from 'src/components/Cell/zh-CN.md';

import CodeBlock from './CodeBlock';

const ReactMarkdown = require('react-markdown');

export const Markdown = docData => () => <ReactMarkdown source={docData} escapeHtml={false} renderers={{ code: CodeBlock }} />;

export default {
  button: Markdown(Button),
  alert: Markdown(Alert),
  icon: Markdown(Icon),
  grid: Markdown(Grid),
  cell: Markdown(Cell),
};
