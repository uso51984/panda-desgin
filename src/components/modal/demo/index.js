import React from 'react';
import DemoBlock from 'docs/mobileComponents/DemoBlock';
import closest from 'src/components/utils/closest';
import Button from 'src/components/Button';
import Modal, { alert } from '../index';
import './index.less';

export default class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal1: false,
      animationType: 'slide-up',
    };
  }
  showModal = (key, value) => (e) => {
    e.preventDefault(); // 修复 Android 上点击穿透

    this.setState({
      [key]: true,
      animationType: value,
    });
  }
  showModal2 = () => (e) => {
    e.preventDefault(); // 修复 Android 上点击穿透
    alert(
      { title: 'sdfsdf' },
      [
        { text: 'Ok', onPress: () => console.log('oksdfsdf') },
        { text: 'Cancel', onPress: () => console.log('oksdfsdf') },
      ],
    );
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
        <DemoBlock title="基本用法" className="modal-demo">
          <Button inline size="small" onClick={this.showModal('modal1')}>基本</Button>
          <Modal
            visible={this.state.modal1}
            maskClosable={false}
            onClose={this.onClose('modal1')}
            title="Title"
            footer={[{ text: '确定', onPress: () => { console.log('ok'); this.onClose('modal1')(); } }]}
            wrapProps={{ onTouchStart: this.onWrapTouchStart }}
          >
            <div>
              <p>内容</p>
              <p>内容</p>
              <p>内容</p>
              <p>内容</p>
            </div>
          </Modal>
        </DemoBlock>
        <DemoBlock title="popup" className="modal-demo">
          <Button inline size="small" onClick={this.showModal('modal2', 'slide-up')}>底部弹出</Button>
          <Button inline size="small" onClick={this.showModal('modal2', 'slide-down')}>顶部弹出</Button>
          <Modal
            popup
            animationType={this.state.animationType}
            visible={this.state.modal2}
            transparent
            maskClosable={false}
            onClose={this.onClose('modal2')}
            title="Title"
            footer={[{ text: '确定', onPress: () => { console.log('ok'); this.onClose('modal2')(); } }]}
            wrapProps={{ onTouchStart: this.onWrapTouchStart }}
          >
            <div>
              <p>内容</p>
              <p>内容</p>
              <p>内容</p>
              <p>内容</p>
            </div>
          </Modal>
        </DemoBlock>
        <DemoBlock title="alert" className="modal-demo">
          <Button
            inline
            size="small"
            onClick={() => alert(
              { title: '购物车加入成功' },
              [
                { text: '取消', onPress: () => console.log('oksdfsdf') },
                { text: '确定', onPress: () => console.log('oksdfsdf') },
              ],
            )}
          >
            函数调用(alert)
          </Button>
        </DemoBlock>
      </div>
    );
  }
}

