## IndexBar 索引栏

### 代码演示

```jsx
import React from 'react';
import { Cell } from '../../cell';
import IndexAnchor from '../indexAnchor';
import IndexBar from '../index';
import './index.less';

const indexList = [];
const charCodeOfA = 'A'.charCodeAt(0);
for (let i = 0; i < 26; i++) {
  indexList.push(String.fromCharCode(charCodeOfA + i));
}

const dataTwo = [];
for (let i = 0; i < 15; i += 1) {
  dataTwo.push(i);
}

export default () => (
  <div className="index-bar-demo">
    <IndexBar indexList={indexList}>
      {
        indexList.map((text, index) => (
          <IndexAnchor text={text} key={`${text}-${index}`}>
            {dataTwo.map(() => (<Cell title="单元格" />))}
          </IndexAnchor>
        ))
      }
    </IndexBar>
  </div>
);

```

## API

### IndexBar Props

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| index-list | 索引字符列表 | `string[] | number[]` | `A-Z` | - |
| z-index | z-index 层级 | `number` | `1` | - |
| sticky | 是否开启锚点自动吸顶 | `boolean` | `true` | - |
| sticky-offset-top | 锚点自动吸顶时与顶部的距离 | `number` | `0` |  |

### IndexAnchor Props

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| index | 索引字符 | `string | number` | - | - |

### IndexBar Events

| 事件名 | 说明 | 回调参数 |
|------|------|------|
| select | 选中字符时触发 | index: 索引字符 |