import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import classnames from 'classnames';
import React from 'react';
import TapFeedback from 'react-tap-feedback';
import Icon from '../Icon';

var Button =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(Button, _React$PureComponent);

  function Button() {
    _classCallCheck(this, Button);

    return _possibleConstructorReturn(this, _getPrototypeOf(Button).apply(this, arguments));
  }

  _createClass(Button, [{
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
          restProps = _objectWithoutProperties(_this$props, ["children", "className", "prefixCls", "type", "size", "inline", "disabled", "icon", "loading", "activeStyle", "activeClassName", "onClick"]);

      var iconType = loading ? 'loading' : icon;
      var wrapCls = classnames(prefixCls, className, (_classnames = {}, _defineProperty(_classnames, "".concat(prefixCls, "--primary"), type === 'primary'), _defineProperty(_classnames, "".concat(prefixCls, "--ghost"), type === 'ghost'), _defineProperty(_classnames, "".concat(prefixCls, "--warning"), type === 'warning'), _defineProperty(_classnames, "".concat(prefixCls, "--small"), size === 'small'), _defineProperty(_classnames, "".concat(prefixCls, "--inline"), inline), _defineProperty(_classnames, "".concat(prefixCls, "--disabled"), disabled), _defineProperty(_classnames, "".concat(prefixCls, "--loading"), loading), _defineProperty(_classnames, "".concat(prefixCls, "--icon"), !!iconType), _classnames));
      var iconEl;

      if (typeof iconType === 'string') {
        iconEl = React.createElement(Icon, {
          "aria-hidden": "true",
          type: iconType,
          size: size === 'small' ? 'xxs' : 'md',
          className: "".concat(prefixCls, "-icon")
        });
      } else if (iconType) {
        var rawCls = iconType.props && iconType.props.className;
        var cls = classnames('panda-icon', "".concat(prefixCls, "-icon"), size === 'small' ? 'panda-icon-xxs' : 'panda-icon-md');
        iconEl = React.cloneElement(iconType, {
          className: rawCls ? "".concat(cls, " ").concat(rawCls) : cls
        });
      }

      return React.createElement(TapFeedback, {
        activeClassName: activeClassName || "".concat(prefixCls, "--active"),
        disabled: disabled,
        activeStyle: activeStyle
      }, React.createElement("a", _extends({
        className: wrapCls
      }, restProps, {
        onClick: disabled ? undefined : onClick,
        "aria-disabled": disabled
      }), iconEl, children));
    }
  }]);

  return Button;
}(React.PureComponent);

_defineProperty(Button, "defaultProps", {
  prefixCls: 'panda-button',
  size: 'large',
  inline: false,
  disabled: false,
  loading: false
});

export default Button;