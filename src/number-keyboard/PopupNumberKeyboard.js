import React from 'react';
import PropTypes from 'prop-types';
import Modal from '../modal';
import NumberKeyboard from './NumberKeyboard';

const propTypes = {
  visible: PropTypes.bool,
  onClose: PropTypes.func,
};

class PopupKeyboard extends React.PureComponent {
  static propTypes = propTypes

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
