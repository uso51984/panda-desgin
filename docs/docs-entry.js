// This file is auto gererated by build/build-entry.js
import Quickstart from './markdown/quickstart.md';
import React from 'react';
import Button from 'src/button/zh-CN.md';
import Icon from 'src/icon/zh-CN.md';
import Grid from 'src/grid/zh-CN.md';
import Cell from 'src/cell/zh-CN.md';
import Collapse from 'src/collapse/zh-CN.md';
import NavBar from 'src/nav-bar/zh-CN.md';
import Dialog from 'src/dialog/zh-CN.md';
import Modal from 'src/modal/zh-CN.md';
import Checkbox from 'src/checkbox/zh-CN.md';
import InputItem from 'src/input-item/zh-CN.md';
import NumberKeyboard from 'src/number-keyboard/zh-CN.md';
import Notification from 'src/notification/zh-CN.md';
import Toast from 'src/toast/zh-CN.md';
import Radio from 'src/radio/zh-CN.md';
import Switch from 'src/switch/zh-CN.md';
import FabButton from 'src/fab-button/zh-CN.md';
import PickerView from 'src/picker-view/zh-CN.md';
import Picker from 'src/picker/zh-CN.md';
import Stepper from 'src/stepper/zh-CN.md';
import Rate from 'src/rate/zh-CN.md';
import DatePicker from 'src/date-picker/zh-CN.md';
import Badge from 'src/badge/zh-CN.md';
import TextareaItem from 'src/textarea-item/zh-CN.md';
import Progress from 'src/progress/zh-CN.md';
import List from 'src/list/zh-CN.md';
import Carousel from 'src/carousel/zh-CN.md';
import Countdown from 'src/countdown/zh-CN.md';

import CodeBlock from './CodeBlock';

const ReactMarkdown = require('react-markdown');

export const Markdown = docData => () => <ReactMarkdown source={docData} escapeHtml={false} renderers={{ code: CodeBlock }} />;

export default {
  quickstart: Markdown(Quickstart),
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
  carousel: Markdown(Carousel),
  countdown: Markdown(Countdown),
};
