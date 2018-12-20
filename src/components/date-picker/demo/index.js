import React from 'react';
import DatePicker from '../index';
import PopDatePicker from '../PopupPicker';
import zhCn from '../locale/zh_CN';
import enUs from '../locale/en_US';
import { cn, format, minDate, maxDate, now } from './utils';

const TestChild = props => <h1 onClick={props.onClick}>{props.value}</h1>;

export default class Demo extends React.Component {
  static defaultProps = {
    locale: cn ? zhCn : enUs,
  };

  constructor(props) {
    super(props);
    this.state = {
      date: new Date(2017, 2, 31, 15, 1, 1),
      mode: 'datetime',
    };
  }

  onDateChange = (date) => {
    console.log('onChange', format(date));
    this.setState({
      date,
    });
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
    const props = this.props;
    const { date, mode } = this.state;

    const datePicker = (
      <DatePicker
        rootNativeProps={{ 'data-xx': 'yy' }}
        minDate={minDate}
        maxDate={maxDate}
        defaultDate={now}
        onValueChange={this.onValueChange}
        onDateChange={this.onDateChange}
        mode={props.mode}
        locale={props.locale}
      />
    );

    return (
      <div style={{ margin: '10px 30px' }}>
        <h2>date picker</h2>

        <select value={this.state.mode} onChange={this.changeMode}>
          <option>datetime</option>
          <option>date</option>
          <option>time</option>
          <option>month</option>
          <option>year</option>
        </select>

        <div>
          <span>{(date && format(date)) || format(now)}</span>
          <DatePicker
            rootNativeProps={{ 'data-xx': 'yy' }}
            defaultDate={date || now}
            mode={mode}
            locale={props.locale}
            maxDate={maxDate}
            minDate={minDate}
            onDateChange={this.onDateChange}
            onValueChange={this.onValueChange}
            onScrollChange={this.onScrollChange}
            use12Hours
          />

          <PopDatePicker
            value={this.state.date}
            onChange={this.onDateChange}
          >
            <TestChild />
          </PopDatePicker>
        </div>
      </div>);
  }
}
