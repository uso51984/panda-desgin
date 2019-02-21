import React from 'react';
import DemoBlock from 'docs/mobileComponents/DemoBlock';
import Checkbox from '../Checkbox';
import CheckboxGroup from '../CheckboxGroup';
import { Cell } from '../../cell';
import './index.less';

function onChange(e) {
  console.log('Checkbox checked:', (e.target.checked));
}

function groupChange(value) {
  console.log('groupChange checked:', value);
}

export default class Demo extends React.Component {
  state = {
    value: false,
  }

  render() {
    const optionsWithDisabled = [
      { label: 'Apple', value: 'Apple' },
      { label: 'Pear', value: 'Pear' },
      { label: 'Orange', value: 'Orange', disabled: true },
    ];
    return (
      <div className="demo-checkbox">
        <DemoBlock title="基础用法" className="has-padding">
          <Checkbox
            checked
            onChange={onChange}
          >
            复选框(受控)
          </Checkbox>
          <br />
          <Checkbox
            defaultChecked
            onChange={onChange}
          >
            复选框(非受控)
          </Checkbox>
        </DemoBlock>
        <DemoBlock title="禁用状态" className="has-padding">
          <Checkbox
            onChange={onChange}
            disabled
          >
            复选框
          </Checkbox>
          <br />
          <Checkbox
            defaultChecked
            onChange={onChange}
            disabled
          >
            复选框
          </Checkbox>
        </DemoBlock>

        <DemoBlock title="自定义样式" className="has-padding">
          <Checkbox
            defaultChecked
            className="selected-green"
            onChange={onChange}
          >
            复选框
          </Checkbox>
        </DemoBlock>

        <DemoBlock title="复选框组" className="has-padding">
          <CheckboxGroup
            options={optionsWithDisabled}
            defaultValue={['Apple']}
            onChange={groupChange}
          />
        </DemoBlock>

        <DemoBlock title="搭配单元格组件使用" className="has-padding">
          <Cell title="单元格" onClick={() => { this.setState({ value: !this.state.value }); }} value={<Checkbox checked={this.state.value} />} />
        </DemoBlock>
      </div>
    );
  }
}
