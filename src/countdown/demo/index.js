import React from 'react';
import DemoBlock from 'docs/mobileComponents/DemoBlock';
import Countdown from '../index';
import Button from 'src/button';

export default class Demo extends React.PureComponent {
  state = {
    paused: false,
    showDays: true,
  }

  render() {
    const { paused, showDays } = this.state;
    return (
      <div>
        <DemoBlock title="基础用法">
          <Countdown endTime={1559334689373} showDays={showDays} />
        </DemoBlock>
        <Button onClick={() => this.setState({ showDays: !showDays })}>{`${showDays ? 'hide day' : 'show day'}`}</Button>
        <DemoBlock title="基础用法">
          <Countdown endTime={1559334689373} showPlainText paused={paused} />
          <Button onClick={() => this.setState({ paused: !paused })}>暂停</Button>
        </DemoBlock>
      </div>
    );
  }
}
