// This file is auto gererated by build/build-entry.js
import React from 'react';
import Button from 'src/components/Button/zh-CN.md';
import Icon from 'src/components/Icon/zh-CN.md';
import Grid from 'src/components/Grid/zh-CN.md';
import Cell from 'src/components/Cell/zh-CN.md';
import Collapse from 'src/components/Collapse/zh-CN.md';
import NavBar from 'src/components/nav-bar/zh-CN.md';
import Dialog from 'src/components/dialog/zh-CN.md';
import Modal from 'src/components/modal/zh-CN.md';
import Checkbox from 'src/components/checkbox/zh-CN.md';
import InputItem from 'src/components/input-item/zh-CN.md';
import NumberKeyboard from 'src/components/number-keyboard/zh-CN.md';

import CodeBlock from './CodeBlock';

const ReactMarkdown = require('react-markdown');

export const Markdown = docData => () => <ReactMarkdown source={docData} escapeHtml={false} renderers={{ code: CodeBlock }} />;

export default {
  button: Markdown(Button),
  icon: Markdown(Icon),
  grid: Markdown(Grid),
  cell: Markdown(Cell),
  collapse: Markdown(Collapse),
  'nav-bar': Markdown(NavBar),
  dialog: Markdown(Dialog),
  modal: Markdown(Modal),
  checkbox: Markdown(Checkbox),
  'input-item': Markdown(InputItem),
  'number-keyboard': Markdown(NumberKeyboard),
};
