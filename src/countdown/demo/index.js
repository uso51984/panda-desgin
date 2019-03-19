import React from 'react';
import DemoBlock from 'docs/mobileComponents/DemoBlock';
import Countdown from '../index';
import Button from 'src/button';

export default class Demo extends React.PureComponent {
  state = {
    paused: false,
  }

  render() {
    return (
      <div>
        <DemoBlock title="基础用法">
          <Countdown endTime={1559334689373} />
        </DemoBlock>
        <DemoBlock title="基础用法">
          <Countdown endTime={1559334689373} showPlainText paused={this.state.paused} />
          <Button onClick={() => this.setState({ paused: !this.state.paused })}>暂停</Button>
        </DemoBlock>
      </div>
    );
  }
}
