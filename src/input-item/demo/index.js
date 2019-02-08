import React from 'react';
import DemoBlock from 'docs/mobileComponents/DemoBlock';
import Icon from '../../Icon';
import InputItem from '../index';

export default class Demo extends React.PureComponent {
  state = {
    value: '',
  }
  render() {
    return (
      <div>
        <DemoBlock title="基础用法">
          <InputItem
            placeholder="请输入姓名"
            clear
          />
          <InputItem
            label="年龄"
            placeholder="请输入年龄"
          />
        </DemoBlock>
        <DemoBlock title="show clear">
          <InputItem label="标题" clear />
        </DemoBlock>
        <DemoBlock title="自定义 suffix">
          <InputItem
            label="标题"
            placeholder="auto focus"
            suffix={<Icon type="check" />}
          />
        </DemoBlock>

        <DemoBlock title="受控组件">
          <InputItem
            label="地址"
            value={this.state.value}
            onChange={value => this.setState({ value })}
            placeholder="请输入地址"
          />
        </DemoBlock>
        <DemoBlock title="格式化">
          <InputItem
            label="银行卡"
            defaultValue="9999 9999 9999 9999"
            onChange={value => console.log(value)}
            type="bankCard"
            placeholder="请输入银行卡"
          />
          <InputItem
            label="电话"
            defaultValue="1588 235 7025"
            onChange={value => console.log(value)}
            type="phone"
            placeholder="请输入电话"
          />
          <InputItem
            label="密码"
            type="password"
            placeholder="****"
          />
          <InputItem
            label="数字"
            type="number"
            placeholder="输入数字"
          />
        </DemoBlock>
        <DemoBlock title="disabled and readOnly">
          <InputItem
            label="电话"
            readOnly
            defaultValue="1588 235 7025"
          />
          <InputItem
            label="电话"
            disabled
            defaultValue="1588 235 7025"
          />
        </DemoBlock>
        <DemoBlock title="错误验证">
          <InputItem
            label="邮箱"
            error
            defaultValue="gith@"
          />
        </DemoBlock>
      </div>
    );
  }
}
