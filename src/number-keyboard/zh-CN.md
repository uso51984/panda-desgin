## NumberKeyboard 数字键盘

### 代码演示
组件显示与否为受控与`visible`的值

```jsx
import React from 'react';
import DemoBlock from 'docs/mobileComponents/DemoBlock';
import Button from '../../Button';
import PopupNumberKeyboard from '../PopupNumberKeyboard';
import Toast from '../../toast';

export default class Demo extends React.PureComponent {
  state = {
    showKeyboard: false,
  }

  onKeyboardClick = (value) => {
    Toast.info(value, 1, null, false);
    if (value === 'confirm') {
      this.setState({ showKeyboard: false });
    }
  }

  render() {
    return (
      <div>
        <DemoBlock title="主题1" className="has-padding">
          <Button
            size="small"
            inline
            onClick={() =>
              this.setState({
                showKeyboard: !this.state.showKeyboard,
                showKeyboardTwo: false,
              })}
          >
            弹出键盘
          </Button>
          <PopupNumberKeyboard
            visible={this.state.showKeyboard}
            onKeyboardClick={this.onKeyboardClick}
          />

        </DemoBlock>
        <DemoBlock title="主题2" className="has-padding">
          <Button
            size="small"
            inline
            onClick={() =>
              this.setState({
                showKeyboardTwo: !this.state.showKeyboardTwo,
                showKeyboard: false,
              })}
          >
            弹出键盘
          </Button>
          <PopupNumberKeyboard
            visible={this.state.showKeyboardTwo}
            onKeyboardClick={this.onKeyboardClick}
            theme="custom"
          />
        </DemoBlock>
      </div>
    );
  }
}

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

