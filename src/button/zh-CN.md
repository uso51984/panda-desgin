## Button 按钮

### 代码演示
```jsx
import React from 'react';
import DemoBlock from 'docs/mobileComponents/DemoBlock';
import { Row, Col } from '../../Grid';
import Button from '../index';
import './index.less';

export default () => (
  <div className="button-demo ">
    <DemoBlock title="默认" className="has-padding">
      <Row gutter="15">
        <Col span="12"><Button>default</Button></Col>
        <Col span="12"><Button disabled>disabled</Button></Col>
      </Row>
    </DemoBlock>
    <DemoBlock title="primary" className="has-padding">
      <Row gutter="15">
        <Col span="12"><Button type="primary">primary</Button></Col>
        <Col span="12"><Button type="primary" disabled>disabled</Button></Col>
      </Row>
    </DemoBlock>
    <DemoBlock title="warning" className="has-padding">
      <Row gutter="15">
        <Col span="12"><Button type="warning" >warning</Button></Col>
        <Col span="12"><Button type="warning" disabled >disabled</Button></Col>
      </Row>
      <Button icon="check-circle-o">with icon</Button>
    </DemoBlock>
    <DemoBlock title="inline and small">
      <div className="button-demo">
        <Button loading inline size="small">loading button</Button>
        <br />
        <Button icon="check-circle-o" inline size="small" >with icon and inline</Button>
        <br />
        <Button type="ghost" inline size="small">inline ghost</Button>
        <br />
        <Button type="primary" inline size="small" disabled>primary disabled</Button>
      </div>
    </DemoBlock>
  </div>
);
```

## API

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| type    | 按钮类型，可选值为`primary`、`ghost`、`warning`或者不设  |   string   |   -  |
| size    | 按钮大小，可选值为`large`、`small` | string | `large`|
| activeStyle  | 点击反馈的自定义样式 (设为 false 时表示禁止点击反馈) | {}/false | {} |
| activeClassName  | 点击反馈的自定义类名 | string |  |
| disabled   | 设置禁用  | boolean |    false  |
| onClick    | 点击按钮的点击回调函数 | (e: Object): void |   无  |
| style    | 自定义样式 |   Object  | 无 |
| inline     | 是否设置为行内按钮  | boolean |   false  |
| loading	   | 设置按钮载入状态	  | boolean	 | false |
| icon  | 可以是组件里内置的某个 icon 的 type 值，也可以是任意合法的 ReactElement (注意: `loading`设置后此项设置失效) | `string`, `React.Element` | -  |
| className |  样式类名 | string | 无 |
