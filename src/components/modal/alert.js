import React from 'react';
import ReactDOM from 'react-dom';
import closest from 'src/components/utils/closest';
import Modal from './Modal';

const IS_REACT_16 = !!ReactDOM.createPortal;
const ConfirmDialog = (props) => {
  const { close, options, actions, visible, afterClose } = props;
  const { title, message, className, closable, wrapClassName, maskClosable } = options;

  const footer = actions.map((button) => {
    const orginPress = button.onPress || function () {};
    button.onPress = () => {
      const res = orginPress();
      if (res && res.then) {
        res
          .then(() => {
            close();
          })
          .catch(() => {});
      } else {
        close();
      }
    };
    return button;
  });

  const prefixCls = 'am-modal';

  function onWrapTouchStart(e) {
    if (!/iPhone|iPod|iPad/i.test(navigator.userAgent)) {
      return;
    }
    const pNode = closest(e.target, `.${prefixCls}-footer`);
    if (!pNode) {
      e.preventDefault();
    }
  }

  return (
    <Modal
      visible={visible}
      className={className}
      maskClosable={maskClosable}
      wrapClassName={wrapClassName}
      transparent
      title={title}
      afterClose={afterClose}
      transitionName="am-zoom"
      closable={closable}
      onClose={close}
      footer={footer}
      maskTransitionName="am-fade"
      wrapProps={{ onTouchStart: onWrapTouchStart }}
    >
      <div className={`${prefixCls}-alert-content`}>{message}</div>
    </Modal>
  );
};

export default function alert(options, actions = [{ text: '确定' }]) {
  const { title, message } = options;

  if (!title && !message) {
    return {
      close: () => {},
    };
  }

  const div = document.createElement('div');
  document.body.appendChild(div);

  function destroy() {
    ReactDOM.unmountComponentAtNode(div);
    if (div && div.parentNode) {
      div.parentNode.removeChild(div);
    }
  }

  function render(props) {
    ReactDOM.render(<ConfirmDialog {...props} />, div);
  }

  function close() {
    if (IS_REACT_16) {
      render({ close, visible: false, options, actions, afterClose: destroy.bind(this) });
    } else {
      destroy();
    }
  }

  render({ close, visible: true, options, actions, afterClose: destroy.bind(this) });

  return {
    close,
  };
}
