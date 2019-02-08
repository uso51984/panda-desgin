import React from 'react';
import Touchable from 'react-tap-feedback';
import Modal from '../modal';

export default (props, visible, { getContent, hide, onDismiss, onOk }) => {
  const { prefixCls } = props;
  return (
    <Modal
      className={props.className}
      visible={visible}
      closable={false}
      animationType="slide-up"
      popup
      onClose={hide}
      style={props.style}
    >
      <div>
        <div className={`${prefixCls}-header`}>
          <Touchable activeClassName={`${prefixCls}-item-active`}>
            <div className={`${prefixCls}-item ${prefixCls}-header-left`} onClick={onDismiss}>
              {props.dismissText}
            </div>
          </Touchable>
          <div className={`${prefixCls}-item ${prefixCls}-title`}>{props.title}</div>
          <Touchable activeClassName={`${prefixCls}-item-active`}>
            <div className={`${prefixCls}-item ${prefixCls}-header-right`} onClick={onOk}>
              {props.okText}
            </div>
          </Touchable>
        </div>
        {getContent()}
      </div>
    </Modal>
  );
};
