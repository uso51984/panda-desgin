/* eslint no-console:0 */

import React from 'react';
import DemoBlock from 'docs/mobileComponents/DemoBlock';
import Switch from '../index';
import Cell from '../../Cell';

export default class Demo extends React.Component {
  state = {
    checked: false,
    cellChecked: false,
  }
  render() {
    return (
      <div className="demo-radio">
        <DemoBlock title="基础用法" className="has-padding">
          <Switch
            defaultChecked
            checked={this.state.checked}
            onChange={() => {
              this.setState({
                checked: !this.state.checked,
              });
            }}
          />
        </DemoBlock>
        <DemoBlock title="自定义color" className="has-padding">
          <Switch
            defaultChecked
            color="red"
            onChange={() => {}}
          />
        </DemoBlock>
        <DemoBlock title="禁用状态" className="has-padding">
          <Switch checked disabled />
        </DemoBlock>
        <DemoBlock title="主题二" className="has-padding">
          <Switch
            platform="android"
          />
        </DemoBlock>
        <DemoBlock title="loading状态" className="has-padding">
          <Switch
            loading
          />
        </DemoBlock>
        <DemoBlock title="配合cell">
          <Cell
            title="单元格"
            onClick={() => { this.setState({ cellChecked: !this.state.cellChecked }); }}
            value={<Switch checked={this.state.cellChecked} />}
          />
        </DemoBlock>
      </div>
    );
  }
}
