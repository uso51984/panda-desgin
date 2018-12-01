import React from 'react';
import DemoBlock from 'docs/mobileComponents/DemoBlock';
import Col from '../Col';
import Row from '../Row';
import './index.less';

export default () => (
  <div>
    <DemoBlock title="基础用法" className="row-demo">
      <Row>
        <Col span="6">span: 8</Col>
        <Col span="6">span: 8</Col>
        <Col span="6">span: 8</Col>
        <Col span="6">span: 8</Col>
      </Row>
      <Row>
        <Col span="4">span: 4</Col>
        <Col span="10" offset="4">offset: 4, span: 10</Col>
      </Row>
      <Row>
        <Col offset="12" span="12">offset: 12, span: 12</Col>
      </Row>
    </DemoBlock>

    <DemoBlock title="在列元素之间增加间距" className="row-demo">
      <Row gutter="15">
        <Col span="6">span: 8</Col>
        <Col span="6">span: 8</Col>
        <Col span="6">span: 8</Col>
        <Col span="6">span: 8</Col>
      </Row>
    </DemoBlock>

    <DemoBlock title="Flex 布局" className="row-demo">
      <Row type="flex">
        <Col span="6">span: 6</Col>
        <Col span="6">span: 6</Col>
        <Col span="6">span: 6</Col>
      </Row>

      <Row type="flex" justify="center">
        <Col span="6">span: 6</Col>
        <Col span="6">span: 6</Col>
        <Col span="6">span: 6</Col>
      </Row>

      <Row type="flex" justify="end">
        <Col span="6">span: 6</Col>
        <Col span="6">span: 6</Col>
        <Col span="6">span: 6</Col>
      </Row>

      <Row type="flex" justify="space-between">
        <Col span="6">span: 6</Col>
        <Col span="6">span: 6</Col>
        <Col span="6">span: 6</Col>
      </Row>

      <Row type="flex" justify="space-around">
        <Col span="6">span: 6</Col>
        <Col span="6">span: 6</Col>
        <Col span="6">span: 6</Col>
      </Row>
    </DemoBlock>


  </div>
);
