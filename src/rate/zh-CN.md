## Rate 评分

### 代码演示

#### 基础用法
```jsx
import React from 'react';
import DemoBlock from 'docs/mobileComponents/DemoBlock';
import Rate from '../index';
import './index.less';

function onChange(v) {
  console.log('selected star', v);
}

export default () => (
  <div>
    <DemoBlock title="基本用法" className="has-padding">
      <Rate
        defaultValue={2.5}
        onChange={onChange}
        style={{ fontSize: 30 }}
        allowClear={false}
      />
    </DemoBlock>
    <DemoBlock title="自定义character" className="has-padding">
      <Rate
        defaultValue={2.5}
        onChange={onChange}
        style={{ fontSize: 22 }}
        allowHalf
        character="$"
      />
    </DemoBlock>
    <DemoBlock title="支持半颗星" className="has-padding">
      <Rate
        defaultValue={2.5}
        onChange={onChange}
        style={{ fontSize: 22 }}
        allowHalf
        className="self-rate-color"
        character="好"
      />
    </DemoBlock>
    <DemoBlock title="自定义填充演示" className="has-padding">
      <Rate
        className="self-rate-color"
        defaultValue={2}
        onChange={onChange}
        style={{ fontSize: 22 }}
        character="美"
      />
    </DemoBlock>
  </div>
);

```

### API

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| allowClear | 是否允许再次点击后清除 | boolean | true |
| allowHalf | 是否允许半选 | boolean | false |
| character | 自定义字符 | ReactNode | * |
| className | 自定义样式类名 | string | - |
| count | star 总数 | number | 5 |
| defaultValue | 默认值 | number | 0 |
| disabled | 只读，无法进行交互 | boolean | false |
| style | 自定义样式对象 | object | - |
| value | 当前数，受控值 | number | - |
