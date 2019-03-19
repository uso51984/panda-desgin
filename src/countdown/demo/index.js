import React from 'react';
import DemoBlock from 'docs/mobileComponents/DemoBlock';
import Countdown from '../index';

export default () => (
  <div>
    <DemoBlock title="基础用法">
      <Countdown endTime={1559334689373} onChange={(timeObj) => {
        console.log('timeObj', timeObj);
      }} />
    </DemoBlock>
  </div>
);
