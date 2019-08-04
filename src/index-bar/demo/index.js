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
            <Countdown endTime={3559334689373} />
          </div>
        </DemoBlock>


      </div>
    );
  }
}
