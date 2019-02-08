## Stepper 步进器

用作增加或者减少当前数值。

### 代码演示
```jsx
import React from 'react';
import DemoBlock from 'docs/mobileComponents/DemoBlock';
import Stepper from '../index';

export default class Demo extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      val: 3,
    };
  }
  onChange = (val) => {
    console.log(val);
    this.setState({ val });
  }
  render() {
    return (
      <div className="demo-radio">
        <DemoBlock title="基础用法" className="has-padding">
          <Stepper
            style={{ width: '100%', minWidth: '100px' }}
            max={10}
            min={1}
            value={this.state.val}
            onChange={this.onChange}
          />
        </DemoBlock>
        <DemoBlock title="disabled" className="has-padding">
          <Stepper
            style={{ width: '100%', minWidth: '100px' }}
            max={10}
            min={1}
            defaultValue={3}
            disabled
          />
        </DemoBlock>
        <DemoBlock title="设置step" className="has-padding">
          <Stepper
            style={{ width: '100%', minWidth: '100px' }}
            max={10}
            min={1}
            step={0.4}
            value={this.state.val}
            onChange={this.onChange}
          />
        </DemoBlock>
        <DemoBlock title="readOnly" className="has-padding">
          <Stepper
            style={{ width: '100%', minWidth: '100px' }}
            max={10}
            min={1}
            readOnly
            defaultValue={3}
          />
        </DemoBlock>
      </div>
    );
  }
}

```

### API

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| min     | 最小值   | Number | -Infinity        |
| max     | 最大值       | Number      | Infinity           |
| value     | 当前值       | Number      |            |
| step     | 每次改变步数，可以为小数  | Number or String      |  1      |
| defaultValue     | 初始值       | Number      |            |
| onChange     | 变化时回调函数      | (): void      |            |
| disabled     | 禁用       | Boolean      |      false      |
| readOnly     | input 只读       | Boolean      |      false      |
