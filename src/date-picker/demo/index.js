import React from 'react';
import DemoBlock from 'docs/mobileComponents/DemoBlock';
import { Row, Col } from '../../grid';
import Button from '../../button';
import { Cell } from '../../cell';
import { RadioGroup } from '../../radio';
import Checkbox from '../../checkbox';
import DatePicker from '../index';
import PopupDatePicker from '../PopupDatePicker';
import zhCn from '../locale/zh_CN';
import enUs from '../locale/en_US';
import { minDate, maxDate } from './utils';

const now = new Date();
const locale = {
  zhCn,
  enUs,
};

const optionsWithDisabled = [
  { label: 'datetime', value: 'datetime' },
  { label: 'date', value: 'date' },
  { label: 'month', value: 'month' },
  { label: 'year', value: 'year' },
];

const optionsI18n = [
  { label: '中文', value: 'zhCn' },
  { label: '英文', value: 'enUs' },
];
export default class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(2017, 2, 31, 15, 1, 1),
      mode: 'datetime',
      use12Hours: true,
      localeType: 'zhCn',
      disabled: false,
    };
  }

  onDateChange = (date) => {
    this.setState({ date });
  }

  onDismiss = () => {
    console.log('onDismiss');
  }

  show = () => {
    console.log('my click');
  }

  onValueChange = (values, index) => {
    console.log('onValueChange', values, index);
  }

  onScrollChange = (values, index) => {
    console.log('onScrollChange', values, index);
  }

  changeMode = (e) => {
    this.setState({
      mode: e.target.value,
    });
  }

  onClick = () => {
    console.log('-------')
  }

  render() {
    const { date, mode, localeType, disabled } = this.state;

    return (
      <div>
        <DemoBlock title="date picker view">
          <Button onClick={this.onClick}>点击</Button>
          <Row gutter="10" type="flex" align="center" style={{ padding: 10 }}>
            <Col span="3">模式</Col>
            <Col span="21">
              <RadioGroup
                options={optionsWithDisabled}
                defaultValue="datetime"
                onChange={e => this.setState({ mode: e.target.value })}
              />
            </Col>
          </Row>

          <Row gutter="10" type="flex" align="center" style={{ padding: 10 }}>
            <Col span="6">12小时制</Col>
            <Col span="20">
              <Checkbox
                defaultChecked
                onChange={(e) => { this.setState({ use12Hours: e.target.checked }); }}
              />
            </Col>
          </Row>

          <Row gutter="10" type="flex" align="center" style={{ padding: 10 }}>
            <Col span="4">国际化</Col>
            <Col span="20">
              <RadioGroup
                options={optionsI18n}
                defaultValue="zhCn"
                onChange={e => this.setState({ localeType: e.target.value })}
              />
            </Col>
          </Row>

          <Row gutter="10" type="flex" align="center" style={{ padding: 10 }}>
            <Col span="6">disabled</Col>
            <Col span="20">
              <Checkbox
                onChange={(e) => { this.setState({ disabled: e.target.checked }); }}
              />
            </Col>
          </Row>

          <DatePicker
            defaultDate={date || now}
            mode={mode}
            locale={locale[localeType]}
            maxDate={maxDate}
            minDate={minDate}
            onDateChange={this.onDateChange}
            onValueChange={this.onValueChange}
            onScrollChange={this.onScrollChange}
            use12Hours={this.state.use12Hours}
            disabled={disabled}
          />
        </DemoBlock>
        <DemoBlock title="Popup date picker">
          <PopupDatePicker
            value={this.state.date}
            onChange={this.onDateChange}
            mode={mode}
          >
            <Cell title="日期" value={this.state.date} />
          </PopupDatePicker>
        </DemoBlock>
      </div>
    );
  }
}
