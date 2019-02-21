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

var NavBar =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(NavBar, _React$PureComponent);

  function NavBar() {
    _classCallCheck(this, NavBar);

    return _possibleConstructorReturn(this, _getPrototypeOf(NavBar).apply(this, arguments));
  }

  _createClass(NavBar, [{
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
          restProps = _objectWithoutProperties(_this$props, ["prefixCls", "className", "children", "icon", "onLeftClick", "leftContent", "rightContent"]);

      return React.createElement("div", _extends({}, restProps, {
        className: classnames(prefixCls, className)
      }), React.createElement("div", {
        className: "".concat(prefixCls, "__left"),
        role: "button",
        onClick: onLeftClick
      }, icon ? React.createElement("span", {
        className: "".concat(prefixCls, "__left-icon")
      }, icon) : null, leftContent), React.createElement("div", {
        className: "".concat(prefixCls, "__title")
      }, children), React.createElement("div", {
        className: "".concat(prefixCls, "__right")
      }, rightContent));
    }
  }]);

  return NavBar;
}(React.PureComponent);

_defineProperty(NavBar, "defaultProps", {
  prefixCls: 'panda-navbar',
  onLeftClick: function onLeftClick() {}
});

export { NavBar as default };