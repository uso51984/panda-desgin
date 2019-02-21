### DatePicker 日期选择
用于选择日期或者时间。

### 规则
- 最多展示 5 个独立滚轮，每个滚轮表示一个不同的值。
```jsx
import React from 'react';
import DemoBlock from 'docs/mobileComponents/DemoBlock';
import { Row, Col } from '../../grid';
import { Cell } from '../../cell';
import { RadioGroup } from '../../radio';
import Checkbox from '../../checkbox';
import DatePicker from '../index';
import PopupDatePicker from '../PopupDatePicker';
import zhCn from '../locale/zh_CN';
import enUs from '../locale/en_US';
import { minDate, maxDate, now } from './utils';

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

  render() {
    const { date, mode, localeType, disabled } = this.state;

    return (
      <div>
        <DemoBlock title="date picker view">
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
      </div>);
  }
}

```

## API

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| mode  | 日期选择的类型, 可以是日期`date`,时间`time`,日期+时间`datetime`,年`year`,月`month` | String | `date` |
| value | 当前选中时间 | Date | 无 |
| minDate   | 最小可选日期 | Date  | `new Date(2000, 1, 1, 0, 0, 0)` |
| maxDate   | 最大可选日期 | Date  | `new Date(2030, 1, 1, 23, 59, 59)` |
| use12Hours | 12小时制 | Boolean | false |
| minuteStep |  分钟数递增步长设置   | Number | 1 |
| locale   | 国际化的配置 | Object: {DatePickerLocale: {year, month, day, hour, minute, am?, pm?}, okText, dismissText } | - |
| disabled   | 是否不可用      | Boolean |    false  |
| onChange   | 时间发生变化的回调函数  | (date: Object): void | - |
| onValueChange | 每列 picker 改变时的回调 | (vals: any, index: number) => void | - |
| title  | 弹框的标题 | string/React.ReactElement |  无  |
| prefixCls |  class前缀 | string | `am-picker` |
| className |  样式类名 | string | - |
| onOk  | 点击选中时执行的回调 | (val): void  |  无 |
| onDismiss  | 点击取消时执行的回调 | (): void  |  无  |

注意：日期字符串在不同浏览器有不同的实现，例如 `new Date('2017-1-1')` 在 Safari 上是 Invalid Date，而在 Chrome 上是能正常解析的。

注意：`DatePicker` children，可以传出`value`，
