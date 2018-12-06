import React from 'react';
import Modal, { alert } from '../index';

function closest(el, selector) {
  const matchesSelector = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector;
  while (el) {
    if (matchesSelector.call(el, selector)) {
      return el;
    }
    el = el.parentElement;
  }
  return null;
}

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal1: false
    };
  }
  showModal = key => (e) => {
    e.preventDefault(); // 修复 Android 上点击穿透

    this.setState({
      [key]: true,
    });
  }
  showModal2 = () => (e) => {
    e.preventDefault(); // 修复 Android 上点击穿透
    alert('sdfsdf', '', [{ text: 'Ok', onPress: () => console.log('oksdfsdf') }], 'test-class');
  }

  onClose = key => () => {
    this.setState({
      [key]: false,
    });
  }

  onWrapTouchStart = (e) => {
    // fix touch to scroll background page on iOS
    if (!/iPhone|iPod|iPad/i.test(navigator.userAgent)) {
      return;
    }
    const pNode = closest(e.target, '.am-modal-content');
    if (!pNode) {
      e.preventDefault();
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.showModal('modal1')}>basic</button>
        <button onClick={this.showModal2()}>alert</button>
        <Modal
          visible={this.state.modal1}
          transparent
          maskClosable={false}
          onClose={this.onClose('modal1')}
          title="Title"
          footer={[{ text: 'Ok', onPress: () => { console.log('ok'); this.onClose('modal1')(); } }]}
          wrapProps={{ onTouchStart: this.onWrapTouchStart }}
        >
          <div style={{ height: 100, overflow: 'scroll' }}>
            scoll content...<br />
            scoll content...<br />
            scoll content...<br />
            scoll content...<br />
            scoll content...<br />
            scoll content...<br />
          </div>
        </Modal>
      </div>
    );
  }
}

