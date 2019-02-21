import React from 'react';
import DemoBlock from 'docs/mobileComponents/DemoBlock';
import Icon from '../../Icon';
import NavBar from '../index';

export default () => (
  <div>
    <DemoBlock title="实例1">
      <NavBar
        icon={<Icon type="left" />}
        onLeftClick={() => console.log('onLeftClick')}
        leftContent="返回"
        rightContent="按钮"
      >
        NavBar
      </NavBar>
    </DemoBlock>
    <DemoBlock title="实例2">
      <NavBar
        icon={<Icon type="left" />}
        onLeftClick={() => console.log('onLeftClick')}
        rightContent={[
          <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
          <Icon key="1" type="ellipsis" />,
        ]}
      >
      NavBar
      </NavBar>
    </DemoBlock>
  </div>
);
