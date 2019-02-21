"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactTapFeedback = _interopRequireDefault(require("react-tap-feedback"));

var KeyboardItem =
/*#__PURE__*/
function (_React$PureComponent) {
  (0, _inherits2["default"])(KeyboardItem, _React$PureComponent);

  function KeyboardItem() {
    (0, _classCallCheck2["default"])(this, KeyboardItem);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(KeyboardItem).apply(this, arguments));
  }

  (0, _createClass2["default"])(KeyboardItem, [{
    key: "render",
    value: function render() {
      var _classNames;

      var _this$props = this.props,
          prefixCls = _this$props.prefixCls,
          _onClick = _this$props.onClick,
          className = _this$props.className,
          children = _this$props.children,
          type = _this$props.type,
          action = _this$props.action;
      var value = children;

      if (action) {
        value = action;
      }

      var cls = (0, _classnames["default"])("".concat(prefixCls, "-item"), (_classNames = {
        'panda-hairline': true
      }, (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-item--gray"), type === 'gray'), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-item--middle"), type === 'middle'), _classNames), className);
      return _react["default"].createElement(_reactTapFeedback["default"], {
        activeClassName: "".concat(prefixCls, "-item--active")
      }, _react["default"].createElement("span", {
        onClick: function onClick(e) {
          _onClick(value, e);
        },
        className: cls,
        role: "button",
        "aria-label": children
      }, children));
    }
  }]);
  return KeyboardItem;
}(_react["default"].PureComponent);

exports["default"] = KeyboardItem;
(0, _defineProperty2["default"])(KeyboardItem, "defaultProps", {
  onClick: function onClick() {},
  disabled: false
});