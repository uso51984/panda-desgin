import React from 'react';
import Touchable from 'react-tap-feedback';
import Modal from '../modal';
export default (function (props, visible, _ref) {
  var getContent = _ref.getContent,
      hide = _ref.hide,
      onDismiss = _ref.onDismiss,
      onOk = _ref.onOk;
  var prefixCls = props.prefixCls;
  return React.createElement(Modal, {
    className: props.className,
    visible: visible,
    closable: false,
    animationType: "slide-up",
    popup: true,
    onClose: hide,
    style: props.style
  }, React.createElement("div", null, React.createElement("div", {
    className: "".concat(prefixCls, "-header")
  }, React.createElement(Touchable, {
    activeClassName: "".concat(prefixCls, "-item-active")
  }, React.createElement("div", {
    className: "".concat(prefixCls, "-item ").concat(prefixCls, "-header-left"),
    onClick: onDismiss
  }, props.dismissText)), React.createElement("div", {
    className: "".concat(prefixCls, "-item ").concat(prefixCls, "-title")
  }, props.title), React.createElement(Touchable, {
    activeClassName: "".concat(prefixCls, "-item-active")
  }, React.createElement("div", {
    className: "".concat(prefixCls, "-item ").concat(prefixCls, "-header-right"),
    onClick: onOk
  }, props.okText))), getContent()));
});