/* eslint no-console:0 */

import React from 'react';
import DemoBlock from 'docs/mobileComponents/DemoBlock';
import Radio from '../index';
import RadioGroup from '../RadioGroup';
import { Cell } from '../../Cell';
import './index.less';

function onChange(e) {
  console.log('Radio checked:', (e.target.checked));
}

function groupChange(e) {
  console.log('groupChange checked:', (e.target.value));
}

export default class Demo extends React.Component {
  state = {
    value: 1,
  }

  render() {
    const optionsWithDisabled = [
      { label: 'Apple', value: 'Apple' },
      { label: 'Pear', value: 'Pear' },
      { label: 'Orange', value: 'Orange', disabled: true },
    ];
    return (
      <div className="demo-radio">
        <DemoBlock title="基础用法" className="has-padding">
          <Radio
            onChange={onChange}
          >
            Radio
          </Radio>
        </DemoBlock>
        <DemoBlock title="禁用状态" className="has-padding">
          <Radio
            onChange={onChange}
            disabled
          >
            单选框
          </Radio>
          <br />
          <Radio
            defaultChecked
            onChange={onChange}
            disabled
          >
            单选框
          </Radio>
        </DemoBlock>

        <DemoBlock title="自定义样式" className="has-padding">
          <Radio
            defaultChecked
            className="selected-red"
            onChange={onChange}
          >
            单选框
          </Radio>
        </DemoBlock>

        <DemoBlock title="单选框组" className="has-padding">
          <RadioGroup
            name="test"
            options={optionsWithDisabled}
            defaultValue="Pear"
            onChange={groupChange}
          />
        </DemoBlock>

        <DemoBlock title="搭配单元格组件使用">
          <Cell title="单元格" onClick={() => { this.setState({ value: 1 }); }} value={<Radio checked={this.state.value === 1} />} />
          <Cell title="单元格" onClick={() => { this.setState({ value: 2 }); }} value={<Radio checked={this.state.value === 2} />} />
        </DemoBlock>
      </div>
    );
  }
}
