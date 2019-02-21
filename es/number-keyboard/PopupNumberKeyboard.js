import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
import React from 'react';
import Modal from '../modal';
import NumberKeyboard from './NumberKeyboard';

var PopupKeyboard =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(PopupKeyboard, _React$PureComponent);

  function PopupKeyboard() {
    _classCallCheck(this, PopupKeyboard);

    return _possibleConstructorReturn(this, _getPrototypeOf(PopupKeyboard).apply(this, arguments));
  }

  _createClass(PopupKeyboard, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          visible = _this$props.visible,
          onClose = _this$props.onClose,
          restProps = _objectWithoutProperties(_this$props, ["visible", "onClose"]);

      return React.createElement(Modal, {
        wrapClassName: "pup-keyboard-wrapper",
        onClose: onClose,
        mask: false,
        popup: true,
        visible: visible,
        animationType: "slide-up"
      }, React.createElement(NumberKeyboard, restProps));
    }
  }]);

  return PopupKeyboard;
}(React.PureComponent);

export default PopupKeyboard;