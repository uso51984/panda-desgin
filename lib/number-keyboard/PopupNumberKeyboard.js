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

var _modal = _interopRequireDefault(require("../modal"));

var _NumberKeyboard = _interopRequireDefault(require("./NumberKeyboard"));

var PopupKeyboard =
/*#__PURE__*/
function (_React$PureComponent) {
  (0, _inherits2["default"])(PopupKeyboard, _React$PureComponent);

  function PopupKeyboard() {
    (0, _classCallCheck2["default"])(this, PopupKeyboard);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(PopupKeyboard).apply(this, arguments));
  }

  (0, _createClass2["default"])(PopupKeyboard, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          visible = _this$props.visible,
          onClose = _this$props.onClose,
          restProps = (0, _objectWithoutProperties2["default"])(_this$props, ["visible", "onClose"]);
      return _react["default"].createElement(_modal["default"], {
        wrapClassName: "pup-keyboard-wrapper",
        onClose: onClose,
        mask: false,
        popup: true,
        visible: visible,
        animationType: "slide-up"
      }, _react["default"].createElement(_NumberKeyboard["default"], restProps));
    }
  }]);
  return PopupKeyboard;
}(_react["default"].PureComponent);

var _default = PopupKeyboard;
exports["default"] = _default;