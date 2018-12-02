import React from 'react';
import DemoBlock from 'docs/mobileComponents/DemoBlock';
import Icon from '../../Icon';
import { Cell, CellGroup } from '../index';

import './index.less';

export default () => (
  <div>
    <DemoBlock title="基础用法">
      <CellGroup>
        <Cell title="单元格" value="内容" />
        <Cell title="单元格" value="内容" desc="描述信息" />
      </CellGroup>
    </DemoBlock>
    <DemoBlock title="单元格大小">
      <Cell title="单元格" value="内容" size="large" />
      <Cell title="单元格" value="内容" size="large" label="描述信息" />
    </DemoBlock>

    <DemoBlock title="只设置 value">
      <Cell value="内容" />
    </DemoBlock>

    <DemoBlock title="展示图标">
      <CellGroup>
        <Cell title="单元格" value="内容" icon={<Icon type="check" className="van-cell__left-icon" />} />
      </CellGroup>
    </DemoBlock>

    <DemoBlock title="展示箭头及点击反馈">
      <Cell title="单元格" required onClick={() => {}} arrow="right" />
      <Cell title="单元格" onClick={() => { }} arrow="right" value="内容" />
      <Cell title="单元格" onClick={() => { }} arrow="down" value="内容" />
    </DemoBlock>
  </div>
);
