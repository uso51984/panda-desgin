import React from 'react';
import DemoBlock from 'docs/mobileComponents/DemoBlock';
import Icon from '../index';
import { Col } from '../../grid';
import './index.less';

const list = [
  'check-circle', 'check', 'check-circle-o',
  'cross-circle', 'cross', 'cross-circle-o',
  'up', 'down', 'left', 'right', 'search',
  'right', 'ellipsis',
  'loading', 'plus',
  'minus',
];

export default () => (
  <DemoBlock title="图标列表" className="demo-icon">
    {
      list.map(item => (
        <Col span={8} key={item}>
          <Icon type={item} />
          <div>{ item }</div>
        </Col>
      ))
    }

  </DemoBlock>
);
