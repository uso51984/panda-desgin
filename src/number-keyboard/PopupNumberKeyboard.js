import React from 'react';
import Modal from '../modal';
import NumberKeyboard from './NumberKeyboard';

class PopupKeyboard extends React.PureComponent {
  render() {
    const { visible, onClose, ...restProps } = this.props;
    return (
      <Modal
        wrapClassName="pup-keyboard-wrapper"
        onClose={onClose}
        mask={false}
        popup
        visible={visible}
        animationType="slide-up"
      >
        <NumberKeyboard
          {...restProps}
        />
      </Modal>
    );
  }
}

export default PopupKeyboard;
