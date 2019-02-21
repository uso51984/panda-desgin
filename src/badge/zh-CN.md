## Badge 徽章

### 代码演示

```jsx
import React from 'react';
import DemoBlock from 'docs/mobileComponents/DemoBlock';
import Badge from '../index';

export default () => (
  <div>
    <DemoBlock title="基本" className="has-padding">
      <Badge dot>
        <span style={{ width: '26px', height: '26px', background: '#ddd', display: 'inline-block' }} />
      </Badge>
      <span style={{ marginRight: 30 }} />
      <Badge text={66} overflowCount={33} />
      <Badge text="新" style={{ marginLeft: 12 }} />
      <Badge text="好" hot style={{ marginLeft: 12 }} />
    </DemoBlock>
    <DemoBlock title="其他颜色" className="has-padding">
      <Badge text="热血" style={{ marginLeft: 12, padding: '0 3px', backgroundColor: '#f19736', borderRadius: 2 }} />
      <Badge text="玄幻" style={{ marginLeft: 12, padding: '0 3px', backgroundColor: '#21b68a', borderRadius: 2 }} />
      <Badge text="科幻"
        style={{
            marginLeft: 12,
            padding: '0 3px',
            backgroundColor: '#fff',
            borderRadius: 2,
            color: '#f19736',
            border: '1px solid #f19736',
          }}
      />
    </DemoBlock>
  </div>
）
```

### API

属性 | 说明 | 类型 | 默认值
----|-----|------|------
size | 大小，可选 `large` `small` | string | `small`
text | 展示的数字或文案，当为数字时候，大于 overflowCount <br/> 时显示为 ${overflowCount}+，为 0 时隐藏 | string\|number | -
corner | 置于角落 | boolean | `false`
dot | 不展示数字，只有一个小红点 | boolean | `false`
overflowCount | 展示封顶的数字值 | number | `99`
hot | 营销样式 | boolean | `false`
