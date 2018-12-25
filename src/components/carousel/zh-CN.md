## Button 按钮

### 代码演示

#### 默认
```jsx
<Button>default</Button>
<Button disabled>default disabled</Button>

<Button type="primary">primary</Button>
<Button type="primary" disabled>primary disabled</Button>

<Button type="warning" >warning</Button>
<Button type="warning" disabled >warning disabled</Button>

<Button icon="check-circle-o">with icon</Button>
```

#### small and line
```jsx
<Button loading inline size="small">loading button</Button>
<Button icon="check-circle-o" inline size="small" >with icon and inline</Button>

<Button type="ghost" inline size="small">inline ghost</Button>
<Button type="primary" inline size="small" disabled>primary  disabled</Button>
```

## API

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| type    | 按钮类型，可选值为`primary`/`ghost`/`warning`或者不设  |   string   |   -  |
| size    | 按钮大小，可选值为`large`、`small` | string | `large`|
| activeStyle  | 点击反馈的自定义样式 (设为 false 时表示禁止点击反馈) | {}/false | {} |
| activeClassName  | 点击反馈的自定义类名 | string |  |
| disabled   | 设置禁用  | boolean |    false  |
| onClick    | 点击按钮的点击回调函数 | (e: Object): void |   无  |
| style    | 自定义样式 |   Object  | 无 |
| inline     | 是否设置为行内按钮  | boolean |   false  |
| loading	   | 设置按钮载入状态	  | boolean	 | false |
| icon  | 可以是组件里内置的某个 icon 的 type 值，也可以是任意合法的 ReactElement (注意: `loading`设置后此项设置失效) | `string`, `React.Element` | -  |
| prefixCls |  class前缀 | string | `panda-button` |
| className |  样式类名 | string | 无 |
