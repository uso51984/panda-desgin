## FabButton

### 代码演示
```jsx
import React from 'react';
import FabButton from '../index';

export default () =>
  (
    <div>
      <FabButton
        position="top-left"
        type="vertical"
      >
        <span>checkout</span>
        <span>face</span>
        <span>mail</span>
      </FabButton>
      <FabButton reverse >
        <span>checkout</span>
        <span>face</span>
        <span>mail</span>
      </FabButton>

      <FabButton
        reverse
        icon="菜单"
        position="bottom-left"
        type="vertical"
      >
        <span>checkout</span>
        <span>face</span>
        <span>mail</span>
      </FabButton>

      <FabButton
        reverse={false}
        position="center"
        type="circle"
      >
        <span>checkout</span>
        <span>face</span>
        <span>mail</span>
      </FabButton>

      <FabButton
        reverse={false}
        position="top-right "
        type="vertical"
      >
        <span>checkout</span>
        <span>face</span>
        <span>mail</span>
      </FabButton>
    </div>
  );

```

### API

属性        |说明           | 类型            | 默认值       |
|------------|----------------|----------------|--------------|
angle	| 当type为"circle"时，可以设置角度 |	Number|	90|
delay	|延迟|	Number|	-|
distance|	子项之间的间距|	Number|	20|
position|	设置位置。可选值：`top-left` `bottom-left` `top-right` `bottom-right` `center`|	String	|bottom-right|
icon|	图标|	React.ReactNode	|-|
reverse|	是否反转|	Boolean|	false|
type|	设置类型。可选值：`horizontal` `vertical` `circle`|String|	horizontal|