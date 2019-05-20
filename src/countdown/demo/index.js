import React from 'react';
import DemoBlock from 'docs/mobileComponents/DemoBlock';
import Button from 'src/button';
import Countdown from '../index';
import './index.less';

export default class Demo extends React.PureComponent {
  state = {
    paused: false,
    showDays: true,
  }

  render() {
    const { paused, showDays } = this.state;
    return (
      <div className="count-down-demo">
        <DemoBlock title="基础用法">
          <div className="base-count-down">
            <Countdown endTime={1559334689373} />
          </div>
        </DemoBlock>

        <DemoBlock title="显示天">
          <div className="base-count-down">
            <Countdown endTime={1559334689373} showDays />
          </div>
        </DemoBlock>

        <DemoBlock title="显示时分秒">
          <div className="base-count-down">
            <Countdown endTime={1559334689373} showPlainText />
          </div>
        </DemoBlock>

        <DemoBlock title="可暂停">
          <div className="base-count-down">
            <Countdown endTime={1559334689373} showPlainText paused={paused} />
          </div>
          <Button onClick={() => this.setState({ paused: !paused })}>{this.state.paused ? '开始' : '暂停'}</Button>
        </DemoBlock>
      </div>
    );
  }
}
