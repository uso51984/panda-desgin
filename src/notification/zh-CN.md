## NumberKeyboard 数字键盘

### 代码演示
组件显示与否为受控与`visible`的值
#### 样式1
```jsx
onKeyboardClick = (value) => {
  if (value === 'confirm') {
    this.setState({ showKeyboard: false });
  }
}
<PopupNumberKeyboard
    visible={this.state.showKeyboard}
    onKeyboardClick={this.onKeyboardClick}
  />
```

#### 样式2
```jsx
onKeyboardClick = (value) => {
  if (value === 'confirm') {
    this.setState({ showKeyboard: false });
  }
}
<PopupNumberKeyboard
  visible={this.state.showKeyboardTwo}
  onKeyboardClick={this.onKeyboardClick}
  theme="custom"
/>
```

### API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| visible | 是否显示键盘 | `Boolean` | - | - |
| theme | 样式风格，可选值为 `default` `custom` | `String` | `default` | - |
| title | 键盘标题 | `String` | - | - |
| onKeyboardClick | 点击按键时回调 | `Fuction` | - |
|confirm| 确定按键文字 | `String` | 确定 | - |
|delete |删除键文字 | `String` | 删除| -|

