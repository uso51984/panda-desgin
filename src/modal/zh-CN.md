## Modal 对话框

### 代码演示
#### 基本用法
```jsx
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal1: false,
    };
  }
  showModal = key => (e) => {
    e.preventDefault();

    this.setState({
      [key]: true,
    });
  }

  onClose = key => () => {
    this.setState({
      [key]: false,
    });
  }
  render() {
    return (
      <button onClick={this.showModal('modal1')}>basic</button>
      <Modal
        visible={this.state.modal1}
        maskClosable={false}
        onClose={this.onClose('modal1')}
        title="基本用法"
        footer={[{ text: 'Ok', onPress: () => { console.log('ok'); this.onClose('modal1')(); } }]}
      >
        <div>
          <p>内容</p>
          <p>内容</p>
          <p>内容</p>
          <p>内容</p>
        </div>
      </Modal>
    )
  }
}
```

#### popup
```jsx
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal1: false,
    };
  }
  showModal = key => (e) => {
    e.preventDefault();

    this.setState({
      [key]: true,
    });
  }

  onClose = key => () => {
    this.setState({
      [key]: false,
    });
  }
  render() {
    return (
      <button onClick={this.showModal('modal1')}>basic</button>
      <Modal
        title="popup"
        popup
        visible={this.state.modal1}
        animationType="slide-up"
        onClose={this.onClose('modal1')}
        footer={[{ text: 'Ok', onPress: () => { console.log('ok'); this.onClose('modal1')(); } }]}
      >
        <div>
          <p>内容</p>
          <p>内容</p>
          <p>内容</p>
          <p>内容</p>
        </div>
      </Modal>
    )
  }
}
```

#### alert
> alert可以在任何地方，当函数直接调用

```jsx
<button
  onClick={() => alert(
    { title: 'alert 标题' },
    [
      { text: 'Ok', onPress: () => console.log('oksdfsdf') },
      { text: 'Cancel', onPress: () => console.log('oksdfsdf') },
    ],
  )}
>
  alert
</button>
```

#### API

##### Modal

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| visible | 对话框是否可见 | Boolean | false |
| closable | 是否显示关闭按钮 | Boolean | false |
| maskClosable | 点击蒙层是否允许关闭 | Boolean | true |
| onClose | 点击 x 或 mask 回调 | (): void | 无 |
| transparent | 是否背景透明 | Boolean | false |
| popup | 是否弹窗模式 | Boolean | false |
| animationType | 可选: `slide-down` `up` `fade` `slide` | String | fade |
| title | 标题 | String、React.Element | 无 |
| footer | 底部内容 | Array `[{text, onPress}]` | [] |
| transitionName  | Modal 主内容动画 className | String | |
| maskTransitionName  | mask 动画 className | String | |
| className  | 手动设置 Modal 的 className | String | |
| wrapClassName  | 手动设置 Modal wrap 的 className | String | |

##### Modal.alert(options, actions?)
> actions 选填

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| options | alert配置  | Object | 无  |
| actions | 按钮组, `[{text, onPress, style}]` | Array | 无  |

###### options 说明
属性 | 说明 | 类型 | 默认值
----|-----|------|------
| className  | 手动设置 alert 的 className | String | |
| wrapClassName  | 手动设置 alert wrap 的 className | String | |
| closable | 是否显示关闭按钮 | Boolean | false |
| maskClosable | 点击蒙层是否允许关闭 | Boolean | true |
| title | 标题 | String、React.Element | 无 |
| message | 标题 | String、React.Element | 无 |

`Modal.alert(options, actions?).close()` 可以在外部关闭 Alert
