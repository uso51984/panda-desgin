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

var _classnames2 = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _reactTapFeedback = _interopRequireDefault(require("react-tap-feedback"));

var _Icon = _interopRequireDefault(require("../Icon"));

var Button =
/*#__PURE__*/
function (_React$PureComponent) {
  (0, _inherits2["default"])(Button, _React$PureComponent);

  function Button() {
    (0, _classCallCheck2["default"])(this, Button);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Button).apply(this, arguments));
  }

  (0, _createClass2["default"])(Button, [{
    key: "render",
    value: function render() {
      var _classnames;

      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          prefixCls = _this$props.prefixCls,
          type = _this$props.type,
          size = _this$props.size,
          inline = _this$props.inline,
          disabled = _this$props.disabled,
          icon = _this$props.icon,
          loading = _this$props.loading,
          activeStyle = _this$props.activeStyle,
          activeClassName = _this$props.activeClassName,
          onClick = _this$props.onClick,
          restProps = (0, _objectWithoutProperties2["default"])(_this$props, ["children", "className", "prefixCls", "type", "size", "inline", "disabled", "icon", "loading", "activeStyle", "activeClassName", "onClick"]);
      var iconType = loading ? 'loading' : icon;
      var wrapCls = (0, _classnames2["default"])(prefixCls, className, (_classnames = {}, (0, _defineProperty2["default"])(_classnames, "".concat(prefixCls, "--primary"), type === 'primary'), (0, _defineProperty2["default"])(_classnames, "".concat(prefixCls, "--ghost"), type === 'ghost'), (0, _defineProperty2["default"])(_classnames, "".concat(prefixCls, "--warning"), type === 'warning'), (0, _defineProperty2["default"])(_classnames, "".concat(prefixCls, "--small"), size === 'small'), (0, _defineProperty2["default"])(_classnames, "".concat(prefixCls, "--inline"), inline), (0, _defineProperty2["default"])(_classnames, "".concat(prefixCls, "--disabled"), disabled), (0, _defineProperty2["default"])(_classnames, "".concat(prefixCls, "--loading"), loading), (0, _defineProperty2["default"])(_classnames, "".concat(prefixCls, "--icon"), !!iconType), _classnames));
      var iconEl;

      if (typeof iconType === 'string') {
        iconEl = _react["default"].createElement(_Icon["default"], {
          "aria-hidden": "true",
          type: iconType,
          size: size === 'small' ? 'xxs' : 'md',
          className: "".concat(prefixCls, "-icon")
        });
      } else if (iconType) {
        var rawCls = iconType.props && iconType.props.className;
        var cls = (0, _classnames2["default"])('panda-icon', "".concat(prefixCls, "-icon"), size === 'small' ? 'panda-icon-xxs' : 'panda-icon-md');
        iconEl = _react["default"].cloneElement(iconType, {
          className: rawCls ? "".concat(cls, " ").concat(rawCls) : cls
        });
      }

      return _react["default"].createElement(_reactTapFeedback["default"], {
        activeClassName: activeClassName || "".concat(prefixCls, "--active"),
        disabled: disabled,
        activeStyle: activeStyle
      }, _react["default"].createElement("a", (0, _extends2["default"])({
        className: wrapCls
      }, restProps, {
        onClick: disabled ? undefined : onClick,
        "aria-disabled": disabled
      }), iconEl, children));
    }
  }]);
  return Button;
}(_react["default"].PureComponent);

(0, _defineProperty2["default"])(Button, "defaultProps", {
  prefixCls: 'panda-button',
  size: 'large',
  inline: false,
  disabled: false,
  loading: false
});
var _default = Button;
exports["default"] = _default;