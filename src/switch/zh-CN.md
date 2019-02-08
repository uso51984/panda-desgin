## Switch 滑动开关

### 代码演示
#### 基础用法
```jsx
<Switch
  defaultChecked
  checked={this.state.checked}
  onChange={() => {
    this.setState({
      checked: !this.state.checked,
    });
  }}
/>
```

#### 自定义color
```jsx
<Switch
  defaultChecked
  color="red"
  onChange={() => {}}
/>
```

#### 禁用状态
```jsx
<Switch defaultChecked disabled />
```

#### 主题二
```jsx
<Switch defaultChecked disabled />
```


#### loading状态
```jsx
<Switch loading />
```

#### 配合cell
```jsx
<Cell title="单元格" value={<Switch onChange={value => console.log(value)} />} />
```

### API

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| defaultChecked  | 是否默认选中    | Boolean       |   false  |
| checked    | 是否选中(如果传该值，则为受控组件)    | Boolean       |   false  |
| disabled   | 是否不可修改    | Boolean       |   false  |
| onChange   | change 事件触发的回调函数 | (checked: bool): void |  无  |
| color | 开关打开后的颜色 | String | #4dd865 |
| name | switch 的 name    | String   |      |
| platform |  设定组件的平台特有样式, 可选值为 `android`, `ios`， 默认为 `ios`  | String | `'ios'`|
| onClick   | click事件触发的回调函数，当switch为disabled时，入参的值始终是默认传入的checked值。 | (checked: bool): void |  无  |
