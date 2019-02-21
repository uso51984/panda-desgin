"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _classnames3 = _interopRequireDefault(require("classnames"));

var Badge =
/*#__PURE__*/
function (_React$PureComponent) {
  (0, _inherits2["default"])(Badge, _React$PureComponent);

  function Badge() {
    (0, _classCallCheck2["default"])(this, Badge);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Badge).apply(this, arguments));
  }

  (0, _createClass2["default"])(Badge, [{
    key: "render",
    value: function render() {
      var _classnames, _classnames2;

      var _this$props = this.props,
          className = _this$props.className,
          prefixCls = _this$props.prefixCls,
          children = _this$props.children,
          size = _this$props.size,
          overflowCount = _this$props.overflowCount,
          dot = _this$props.dot,
          corner = _this$props.corner,
          hot = _this$props.hot,
          restProps = (0, _objectWithoutProperties2["default"])(_this$props, ["className", "prefixCls", "children", "size", "overflowCount", "dot", "corner", "hot"]);
      var text = this.props.text;
      text = typeof text === 'number' && text > overflowCount ? "".concat(overflowCount, "+") : text;

      if (dot) {
        text = '';
      }

      var scrollNumberCls = (0, _classnames3["default"])((_classnames = {}, (0, _defineProperty2["default"])(_classnames, "".concat(prefixCls, "-dot"), dot), (0, _defineProperty2["default"])(_classnames, "".concat(prefixCls, "-dot-large"), dot && size === 'large'), (0, _defineProperty2["default"])(_classnames, "".concat(prefixCls, "-text"), !dot && !corner), (0, _defineProperty2["default"])(_classnames, "".concat(prefixCls, "-corner"), corner), (0, _defineProperty2["default"])(_classnames, "".concat(prefixCls, "-corner-large"), corner && size === 'large'), _classnames));
      var badgeCls = (0, _classnames3["default"])(prefixCls, (_classnames2 = {}, (0, _defineProperty2["default"])(_classnames2, "".concat(prefixCls, "-not-a-wrapper"), !children), (0, _defineProperty2["default"])(_classnames2, "".concat(prefixCls, "-corner-wrapper"), corner), (0, _defineProperty2["default"])(_classnames2, "".concat(prefixCls, "-hot"), !!hot), (0, _defineProperty2["default"])(_classnames2, "".concat(prefixCls, "-corner-wrapper-large"), corner && size === 'large'), _classnames2), className);
      return _react["default"].createElement("span", {
        className: badgeCls
      }, children, (text || dot) && _react["default"].createElement("sup", (0, _extends2["default"])({
        className: scrollNumberCls
      }, restProps), text));
    }
  }]);
  return Badge;
}(_react["default"].PureComponent);

exports["default"] = Badge;
(0, _defineProperty2["default"])(Badge, "defaultProps", {
  prefixCls: 'panda-badge',
  size: 'small',
  overflowCount: 99,
  dot: false,
  corner: false
});