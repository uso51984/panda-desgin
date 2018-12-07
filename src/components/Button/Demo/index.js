import React from 'react';
import DemoBlock from 'docs/mobileComponents/DemoBlock';
import Button from '../index';
import './index.less';

export default () => (
  <div className="button-demo">
    <DemoBlock title="默认">
      <div className="button-demo">
        <Button>default</Button>
        <Button disabled>default disabled</Button>
        <Button type="primary">primary</Button>
        <Button type="primary" disabled>primary disabled</Button>
        <Button type="warning" >warning</Button>
        <Button type="warning" disabled >warning disabled</Button>
        <Button icon="check-circle-o">with icon</Button>
      </div>
    </DemoBlock>
    <DemoBlock title="inline and small">
      <div className="button-demo">
        <Button loading inline size="small">loading button</Button>
        <br />
        <Button icon="check-circle-o" inline size="small" >with icon and inline</Button>
        <br />
        <Button type="ghost" inline size="small">inline ghost</Button>
        <br />
        <Button type="primary" inline size="small" disabled>primary disabled</Button>
      </div>
    </DemoBlock>
  </div>
);
