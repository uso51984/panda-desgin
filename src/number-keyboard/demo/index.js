import React from 'react';
import DemoBlock from 'docs/mobileComponents/DemoBlock';
import Button from '../../button';
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
