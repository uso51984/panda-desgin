import React from 'react';
import DemoBlock from 'docs/mobileComponents/DemoBlock';
import { Row, Col } from '../../Grid';
import Button from '../index';

import './index.less';

export default () => (
  <div className="button-demo ">
    <DemoBlock title="默认" className="has-padding">
      <Row gutter="15">
        <Col span="12"><Button>default</Button></Col>
        <Col span="12"><Button disabled>disabled</Button></Col>
      </Row>
    </DemoBlock>
    <DemoBlock title="primary" className="has-padding">
      <Row gutter="15">
        <Col span="12"><Button type="primary">primary</Button></Col>
        <Col span="12"><Button type="primary" disabled>disabled</Button></Col>
      </Row>
    </DemoBlock>
    <DemoBlock title="warning" className="has-padding">
      <Row gutter="15">
        <Col span="12"><Button type="warning">warning</Button></Col>
        <Col span="12"><Button type="warning" disabled>disabled</Button></Col>
      </Row>
    </DemoBlock>
    <DemoBlock title="with icon" className="has-padding">
      <Button icon="check-circle-o">with icon</Button>
    </DemoBlock>
    <DemoBlock title="inline and small">
      <div className="button-demo">
        <Button loading inline size="small">loading button</Button>
        <br />
        <Button icon="check-circle-o" inline size="small">with icon and inline</Button>
        <br />
        <Button type="ghost" inline size="small">inline ghost</Button>
        <br />
        <Button type="primary" inline size="small" disabled>primary disabled</Button>
      </div>
    </DemoBlock>
  </div>
);
