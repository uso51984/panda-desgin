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

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var NavBar =
/*#__PURE__*/
function (_React$PureComponent) {
  (0, _inherits2["default"])(NavBar, _React$PureComponent);

  function NavBar() {
    (0, _classCallCheck2["default"])(this, NavBar);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(NavBar).apply(this, arguments));
  }

  (0, _createClass2["default"])(NavBar, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          prefixCls = _this$props.prefixCls,
          className = _this$props.className,
          children = _this$props.children,
          icon = _this$props.icon,
          onLeftClick = _this$props.onLeftClick,
          leftContent = _this$props.leftContent,
          rightContent = _this$props.rightContent,
          restProps = (0, _objectWithoutProperties2["default"])(_this$props, ["prefixCls", "className", "children", "icon", "onLeftClick", "leftContent", "rightContent"]);
      return _react["default"].createElement("div", (0, _extends2["default"])({}, restProps, {
        className: (0, _classnames["default"])(prefixCls, className)
      }), _react["default"].createElement("div", {
        className: "".concat(prefixCls, "__left"),
        role: "button",
        onClick: onLeftClick
      }, icon ? _react["default"].createElement("span", {
        className: "".concat(prefixCls, "__left-icon")
      }, icon) : null, leftContent), _react["default"].createElement("div", {
        className: "".concat(prefixCls, "__title")
      }, children), _react["default"].createElement("div", {
        className: "".concat(prefixCls, "__right")
      }, rightContent));
    }
  }]);
  return NavBar;
}(_react["default"].PureComponent);

exports["default"] = NavBar;
(0, _defineProperty2["default"])(NavBar, "defaultProps", {
  prefixCls: 'panda-navbar',
  onLeftClick: function onLeftClick() {}
});