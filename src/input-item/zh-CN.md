## InputItem 文本输入
用于接受单行文本。

### 代码演示

#### 基本用法
```jsx
<InputItem placeholder="请输入姓名" />
<InputItem label="年龄" placeholder="请输入年龄" />
```

#### show clear
```jsx
<InputItem label="标题" clear />
```
#### 自定义 suffix
```jsx
<InputItem
  label="标题"
  placeholder="auto focus"
  suffix={<Icon type="check" />}
/>
```

#### 受控组件
```jsx
<InputItem
  label="地址"
  value={this.state.value}
  onChange={value => this.setState({ value })}
  placeholder="请输入地址"
/>
```

#### 格式化
```jsx
<InputItem
  label="银行卡"
  defaultValue="9999 9999 9999 9999"
  onChange={value => console.log(value)}
  type="bankCard"
  placeholder="请输入银行卡"
/>
<InputItem
  label="电话"
  defaultValue="1588 235 7025"
  onChange={value => console.log(value)}
  type="phone"
  placeholder="请输入电话"
/>
<InputItem
  label="密码"
  type="password"
  placeholder="****"
/>
<InputItem
  label="数字"
  type="number"
  placeholder="输入数字"
/>
```
#### 错误提示
```jsx
<InputItem
  label="邮箱"
  error
  onErrorClick={() => console.log('click error')}
  defaultValue="gith@"
/>
```


## API

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| type    | 可以是银行卡`bankCard`; 手机号`phone`(此时最大长度固定为11,`maxLength`设置无效); 密码`password`; 数字`number`(为了尽量唤起`带小数点`的数字键盘，此类型并不是原生 number，而是`<input type="text" pattern="[0-9]*" />`); | String |  `text`  |
| value    | value 值(受控与否参考https://facebook.github.io/react/docs/forms.html)  | String |  无  |
| defaultValue    | 设置初始默认值        | String |  -  |
| placeholder      | placeholder        | String | ''  |
| readOnly    | 是否可编辑        | bool |  true  |
| disabled    | 是否禁用        | bool |  false  |
| clear      |  是否带清除功能(仅`readOnly`为`false`,`disabled`为`false`才生效) | bool | false  |
| maxLength      |  最大长度      | number |  无  |
| onChange    | change 事件触发的回调函数 | (val: string): void |  -  |
| onBlur     | blur 事件触发的回调函数 | (val: string): void |   -  |
| onFocus    | focus 事件触发的回调函数 | (val: string): void |  -  |
| error       | 报错样式        | bool |  false  |
| onErrorClick       | 点击报错 icon 触发的回调函数  | (e: Object): void |  无  |
| suffix       | 右边注释   | string or node |  ''  |
| name    | input 的 name        | String |  无  |

> 注意: `InputItem` 当 `type=number` 时不支持输入负号, 你可以利用 `type=text` 来自己实现。