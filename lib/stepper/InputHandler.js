"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireDefault(require("react"));

var _reactTapFeedback = _interopRequireDefault(require("react-tap-feedback"));

var InputHandler =
/*#__PURE__*/
function (_React$PureComponent) {
  (0, _inherits2["default"])(InputHandler, _React$PureComponent);

  function InputHandler() {
    (0, _classCallCheck2["default"])(this, InputHandler);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(InputHandler).apply(this, arguments));
  }

  (0, _createClass2["default"])(InputHandler, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          prefixCls = _this$props.prefixCls,
          disabled = _this$props.disabled,
          otherProps = (0, _objectWithoutProperties2["default"])(_this$props, ["prefixCls", "disabled"]);
      return _react["default"].createElement(_reactTapFeedback["default"], {
        disabled: disabled,
        activeClassName: "".concat(prefixCls, "-handler-active")
      }, _react["default"].createElement("span", otherProps));
    }
  }]);
  return InputHandler;
}(_react["default"].PureComponent);

exports["default"] = InputHandler;