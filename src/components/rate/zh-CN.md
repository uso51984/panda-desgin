## Rate 评分

### 代码演示

#### 基础用法
```jsx
/* eslint no-console: 0 */
import React from 'react';
import Rate from '../index';


function onChange(v) {
  console.log('selected star', v);
}

export default () => (
  <div>
    <Rate
      defaultValue={2.5}
      onChange={onChange}
      style={{ fontSize: 40 }}
      allowHalf
      allowClear={false}
    />
    <br />
    <Rate
      defaultValue={2.5}
      onChange={onChange}
      style={{ fontSize: 22, marginTop: 24 }}
      allowHalf
      character="$"
    />
    <br />
    <Rate
      defaultValue={2.5}
      onChange={onChange}
      style={{ fontSize: 22, marginTop: 24 }}
      allowHalf
      character="好"
    />
    <br />
    <Rate
      defaultValue={2}
      onChange={onChange}
      style={{ fontSize: 22, marginTop: 24 }}
      character="美"
    />
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
