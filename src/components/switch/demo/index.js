/* eslint no-console:0 */

import React from 'react';
import DemoBlock from 'docs/mobileComponents/DemoBlock';
import Switch from '../index';
import Cell from '../../Cell';
// import './index.less';

// function onChange(e) {
//   console.log('Radio checked:', (e.target.checked));
// }

// function groupChange(e) {
//   console.log('groupChange checked:', (e.target.value));
// }

export default class Demo extends React.Component {
  state = {
    checked: false,
  }
  render() {
    return (
      <div className="demo-radio">
        <DemoBlock title="基础用法" className="has-padding">
          <Switch
            checked={this.state.checked}
            onChange={() => {
              this.setState({
                checked: !this.state.checked,
              });
            }}
          />
          <Switch
            defaultChecked
            color="red"
            onChange={() => {}}
          />
          <Switch checked disabled />
          <Switch disabled />
          <Switch
            platform="android"
          />

          <Switch
            loading
            checked={this.state.checked}
            onChange={() => {
              this.setState({
                checked: !this.state.checked,
              });
            }}
          />


        </DemoBlock>
      </div>
    );
  }
}
