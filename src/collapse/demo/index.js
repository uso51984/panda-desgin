import React from 'react';
import DemoBlock from 'docs/mobileComponents/DemoBlock';
import Collapse, { Panel } from '../index';
import Icon from '../../Icon';
import './index.less';

export default class Test extends React.Component {
  render() {
    return (
      <div>
        <DemoBlock title="基础用法">
          <Collapse defaultActiveKey="0">
            <Panel header="微商城" >
              提供多样店铺模板，快速搭建网上商城
            </Panel>
            <Panel header="零售">
              网店吸粉获客、会员分层营销、一机多种收款，告别经营低效和客户流失
            </Panel>
            <Panel header="美业" disabled>
              线上拓客，随时预约，贴心顺手的开单收银
            </Panel>
          </Collapse>
        </DemoBlock>

        <DemoBlock title="手风琴">
          <Collapse
            accordion
            className="demo-collapse"
          >
            <Panel
              header={<span className="demo-collapse-header">微商城 <Icon type="check-circle-o" /></span>}
              key="1"
            >
              提供多样店铺模板，快速搭建网上商城
            </Panel>
            <Panel header="零售" key="2">
              网店吸粉获客、会员分层营销、一机多种收款，告别经营低效和客户流失
            </Panel>
            <Panel header="美业" key="3" disabled>
              线上拓客，随时预约，贴心顺手的开单收银
            </Panel>
          </Collapse>
        </DemoBlock>

        <DemoBlock title="受控组件">
          <Collapse activeKey="1">
            <Panel header="微商城" >
              提供多样店铺模板，快速搭建网上商城
            </Panel>
            <Panel header="零售">
              网店吸粉获客、会员分层营销、一机多种收款，告别经营低效和客户流失
            </Panel>
            <Panel header="美业" disabled>
              线上拓客，随时预约，贴心顺手的开单收银
            </Panel>
          </Collapse>
        </DemoBlock>
      </div>);
  }
}
