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
import Notification from 'src/components/notification/zh-CN.md';
import Toast from 'src/components/toast/zh-CN.md';
import Radio from 'src/components/radio/zh-CN.md';
import Switch from 'src/components/switch/zh-CN.md';
import FabButton from 'src/components/fab-button/zh-CN.md';
import PickerView from 'src/components/picker-view/zh-CN.md';
import Picker from 'src/components/picker/zh-CN.md';
import Stepper from 'src/components/stepper/zh-CN.md';
import Rate from 'src/components/rate/zh-CN.md';
import DatePicker from 'src/components/date-picker/zh-CN.md';
import Badge from 'src/components/badge/zh-CN.md';
import TextareaItem from 'src/components/textarea-item/zh-CN.md';
import Progress from 'src/components/progress/zh-CN.md';
import List from 'src/components/list/zh-CN.md';

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
  notification: Markdown(Notification),
  toast: Markdown(Toast),
  radio: Markdown(Radio),
  switch: Markdown(Switch),
  'fab-button': Markdown(FabButton),
  'picker-view': Markdown(PickerView),
  picker: Markdown(Picker),
  stepper: Markdown(Stepper),
  rate: Markdown(Rate),
  'date-picker': Markdown(DatePicker),
  badge: Markdown(Badge),
  'textarea-item': Markdown(TextareaItem),
  progress: Markdown(Progress),
  list: Markdown(List),
};
