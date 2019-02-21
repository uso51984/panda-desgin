import React from 'react';
import DemoBlock from 'docs/mobileComponents/DemoBlock';
import Collapse, { Panel } from '../index';
import Icon from '../../icon';
import './index.less';

export default () => (
  <div>
    <DemoBlock title="基础用法">
      <Collapse defaultActiveKey="0">
        <Panel header="一致性 Consistency">
          与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；
        </Panel>
        <Panel header="反馈 Feedback">
          控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；
          页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。
        </Panel>
        <Panel header="效率 Efficiency" disabled>
          简化流程：设计简洁直观的操作流程；
          清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；
          帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。
        </Panel>
      </Collapse>
    </DemoBlock>

    <DemoBlock title="手风琴">
      <Collapse
        accordion
        className="demo-collapse"
      >
        <Panel
          header={(
            <span className="demo-collapse-header">
              单一数据源
              <Icon type="check-circle-o" />
            </span>
          )}
          key="1"
        >
          整个应用的 state 被储存在一棵 object tree 中，并且这个 object tree 只存在于唯一一个 store 中。
        </Panel>
        <Panel header="State 是只读的" key="2">
          唯一改变 state 的方法就是触发 action，action 是一个用于描述已发生事件的普通对象。失
        </Panel>
        <Panel header="纯函数来执行修改" key="3" disabled>
          为了描述 action 如何改变 state tree ，你需要编写 reducers。
        </Panel>
      </Collapse>
    </DemoBlock>

    <DemoBlock title="受控组件">
      <Collapse activeKey="1">
        <Panel header="声明式">
          以声明式编写UI，可以让你的代码更加可靠，且方便调试。
        </Panel>
        <Panel header="组件化">
          无需再用模版代码，通过使用JavaScript编写的组件你可以更好地传递数据，将应用状态和DOM拆分开来。
        </Panel>
        <Panel header="一次学习，随处编写" disabled>
          React 也可以用作开发原生应用的框架 React Native.
        </Panel>
      </Collapse>
    </DemoBlock>
  </div>
);
