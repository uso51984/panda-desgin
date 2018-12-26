import React from 'react';
import DemoBlock from 'docs/mobileComponents/DemoBlock';
import { Row, Col } from '../../Grid';
import { Cell } from '../../Cell';
import { RadioGroup } from '../../radio';
import Checkbox from '../../checkbox';
import DatePicker from '../index';
import PopupDatePicker from '../PopupDatePicker';
import zhCn from '../locale/zh_CN';
import enUs from '../locale/en_US';
import { cn, minDate, maxDate, now } from './utils';

export default class Demo extends React.Component {
  static defaultProps = {
    locale: cn ? zhCn : enUs,
  };

  constructor(props) {
    super(props);
    this.state = {
      date: new Date(2017, 2, 31, 15, 1, 1),
      mode: 'datetime',
      use12Hours: true,
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

  render() {
    const { date, mode } = this.state;
    const optionsWithDisabled = [
      { label: 'datetime', value: 'datetime' },
      { label: 'date', value: 'date' },
      { label: 'month', value: 'month' },
      { label: 'year', value: 'year' },
    ];


    return (
      <div>
        <DemoBlock title="date picker view">
          <Row gutter="10" type="flex" align="center">
            <Col span="3">模式</Col>
            <Col span="21">
              <RadioGroup
                style={{ padding: 10 }}
                options={optionsWithDisabled}
                defaultValue="datetime"
                onChange={e => this.setState({ mode: e.target.value })}
              />
            </Col>
          </Row>

          <Row gutter="10" type="flex" align="center">
            <Col span="6">12小时制</Col>
            <Col span="20">
              <Checkbox
                defaultChecked
                onChange={(e) => { this.setState({ use12Hours: e.target.checked }); }}
              />
            </Col>
          </Row>

          <DatePicker
            rootNativeProps={{ 'data-xx': 'yy' }}
            defaultDate={date || now}
            mode={mode}
            locale={zhCn}
            maxDate={maxDate}
            minDate={minDate}
            onDateChange={this.onDateChange}
            onValueChange={this.onValueChange}
            onScrollChange={this.onScrollChange}
            use12Hours={this.state.use12Hours}
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
      </div>);
  }
}
