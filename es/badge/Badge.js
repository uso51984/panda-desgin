import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import React from 'react';
import classnames from 'classnames';

var Badge =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(Badge, _React$PureComponent);

  function Badge() {
    _classCallCheck(this, Badge);

    return _possibleConstructorReturn(this, _getPrototypeOf(Badge).apply(this, arguments));
  }

  _createClass(Badge, [{
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
          restProps = _objectWithoutProperties(_this$props, ["className", "prefixCls", "children", "size", "overflowCount", "dot", "corner", "hot"]);

      var text = this.props.text;
      text = typeof text === 'number' && text > overflowCount ? "".concat(overflowCount, "+") : text;

      if (dot) {
        text = '';
      }

      var scrollNumberCls = classnames((_classnames = {}, _defineProperty(_classnames, "".concat(prefixCls, "-dot"), dot), _defineProperty(_classnames, "".concat(prefixCls, "-dot-large"), dot && size === 'large'), _defineProperty(_classnames, "".concat(prefixCls, "-text"), !dot && !corner), _defineProperty(_classnames, "".concat(prefixCls, "-corner"), corner), _defineProperty(_classnames, "".concat(prefixCls, "-corner-large"), corner && size === 'large'), _classnames));
      var badgeCls = classnames(prefixCls, (_classnames2 = {}, _defineProperty(_classnames2, "".concat(prefixCls, "-not-a-wrapper"), !children), _defineProperty(_classnames2, "".concat(prefixCls, "-corner-wrapper"), corner), _defineProperty(_classnames2, "".concat(prefixCls, "-hot"), !!hot), _defineProperty(_classnames2, "".concat(prefixCls, "-corner-wrapper-large"), corner && size === 'large'), _classnames2), className);
      return React.createElement("span", {
        className: badgeCls
      }, children, (text || dot) && React.createElement("sup", _extends({
        className: scrollNumberCls
      }, restProps), text));
    }
  }]);

  return Badge;
}(React.PureComponent);

_defineProperty(Badge, "defaultProps", {
  prefixCls: 'panda-badge',
  size: 'small',
  overflowCount: 99,
  dot: false,
  corner: false
});

export { Badge as default };