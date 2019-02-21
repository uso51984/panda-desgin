import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import React from 'react';
import classNames from 'classnames';
import TouchFeedback from 'react-tap-feedback';

var KeyboardItem =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(KeyboardItem, _React$PureComponent);

  function KeyboardItem() {
    _classCallCheck(this, KeyboardItem);

    return _possibleConstructorReturn(this, _getPrototypeOf(KeyboardItem).apply(this, arguments));
  }

  _createClass(KeyboardItem, [{
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

      var cls = classNames("".concat(prefixCls, "-item"), (_classNames = {
        'panda-hairline': true
      }, _defineProperty(_classNames, "".concat(prefixCls, "-item--gray"), type === 'gray'), _defineProperty(_classNames, "".concat(prefixCls, "-item--middle"), type === 'middle'), _classNames), className);
      return React.createElement(TouchFeedback, {
        activeClassName: "".concat(prefixCls, "-item--active")
      }, React.createElement("span", {
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
}(React.PureComponent);

_defineProperty(KeyboardItem, "defaultProps", {
  onClick: function onClick() {},
  disabled: false
});

export { KeyboardItem as default };