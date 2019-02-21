"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactTapFeedback = _interopRequireDefault(require("react-tap-feedback"));

var _modal = _interopRequireDefault(require("../modal"));

var _default = function _default(props, visible, _ref) {
  var getContent = _ref.getContent,
      hide = _ref.hide,
      onDismiss = _ref.onDismiss,
      onOk = _ref.onOk;
  var prefixCls = props.prefixCls;
  return _react["default"].createElement(_modal["default"], {
    className: props.className,
    visible: visible,
    closable: false,
    animationType: "slide-up",
    popup: true,
    onClose: hide,
    style: props.style
  }, _react["default"].createElement("div", null, _react["default"].createElement("div", {
    className: "".concat(prefixCls, "-header")
  }, _react["default"].createElement(_reactTapFeedback["default"], {
    activeClassName: "".concat(prefixCls, "-item-active")
  }, _react["default"].createElement("div", {
    className: "".concat(prefixCls, "-item ").concat(prefixCls, "-header-left"),
    onClick: onDismiss
  }, props.dismissText)), _react["default"].createElement("div", {
    className: "".concat(prefixCls, "-item ").concat(prefixCls, "-title")
  }, props.title), _react["default"].createElement(_reactTapFeedback["default"], {
    activeClassName: "".concat(prefixCls, "-item-active")
  }, _react["default"].createElement("div", {
    className: "".concat(prefixCls, "-item ").concat(prefixCls, "-header-right"),
    onClick: onOk
  }, props.okText))), getContent()));
};

exports["default"] = _default;