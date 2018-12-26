import React from 'react';
import DemoBlock from 'docs/mobileComponents/DemoBlock';
import Rate from '../index';
import './index.less';

function onChange(v) {
  console.log('selected star', v);
}

export default () => (
  <div>
    <DemoBlock title="基本用法" className="has-padding">
      <Rate
        defaultValue={2.5}
        onChange={onChange}
        style={{ fontSize: 30 }}
        allowClear={false}
      />
    </DemoBlock>
    <DemoBlock title="自定义character" className="has-padding">
      <Rate
        defaultValue={2.5}
        onChange={onChange}
        style={{ fontSize: 22 }}
        allowHalf
        character="$"
      />
    </DemoBlock>
    <DemoBlock title="支持半颗星" className="has-padding">
      <Rate
        defaultValue={2.5}
        onChange={onChange}
        style={{ fontSize: 22 }}
        allowHalf
        className="self-rate-color"
        character="好"
      />
    </DemoBlock>
    <DemoBlock title="自定义填充演示" className="has-padding">
      <Rate
        className="self-rate-color"
        defaultValue={2}
        onChange={onChange}
        style={{ fontSize: 22 }}
        character="美"
      />
    </DemoBlock>
  </div>
);
