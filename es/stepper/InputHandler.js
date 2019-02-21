import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
import React from 'react';
import TapFeedback from 'react-tap-feedback';

var InputHandler =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(InputHandler, _React$PureComponent);

  function InputHandler() {
    _classCallCheck(this, InputHandler);

    return _possibleConstructorReturn(this, _getPrototypeOf(InputHandler).apply(this, arguments));
  }

  _createClass(InputHandler, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          prefixCls = _this$props.prefixCls,
          disabled = _this$props.disabled,
          otherProps = _objectWithoutProperties(_this$props, ["prefixCls", "disabled"]);

      return React.createElement(TapFeedback, {
        disabled: disabled,
        activeClassName: "".concat(prefixCls, "-handler-active")
      }, React.createElement("span", otherProps));
    }
  }]);

  return InputHandler;
}(React.PureComponent);

export { InputHandler as default };