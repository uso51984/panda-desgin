## NavBar 导航栏
位于 app 内容区的上方，系统状态栏的下方，并且提供在一系列页面中的导航能力。

### 代码演示1
```jsx
import React from 'react';
import DemoBlock from 'docs/mobileComponents/DemoBlock';
import Icon from '../../icon';
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
```

### API

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| icon   | 出现在最左边的图标占位符  | ReactNode |  - |
| leftContent   | 导航左边内容      | any |    无  |
| rightContent   | 导航右边内容      | any |    无  |
| onLeftClick   | 导航左边点击回调      | (e: Object): void |    无  |
