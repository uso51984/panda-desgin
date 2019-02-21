import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import React from 'react';
import classNames from 'classnames';
import TapFeedback from 'react-tap-feedback';
import Icon from '../Icon';

var Cell =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(Cell, _React$PureComponent);

  function Cell() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Cell);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Cell)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "handleClick", function () {
      _this.props.onClick();
    });

    return _this;
  }

  _createClass(Cell, [{
    key: "render",
    value: function render() {
      var _classNames, _classNames2;

      var _this$props = this.props,
          prefixCls = _this$props.prefixCls,
          title = _this$props.title,
          onClick = _this$props.onClick,
          value = _this$props.value,
          desc = _this$props.desc,
          icon = _this$props.icon,
          arrow = _this$props.arrow,
          size = _this$props.size,
          activeClass = _this$props.activeClass,
          border = _this$props.border,
          required = _this$props.required;
      var cls = classNames((_classNames = {}, _defineProperty(_classNames, prefixCls, true), _defineProperty(_classNames, "".concat(prefixCls, "--").concat(size), size), _defineProperty(_classNames, "".concat(prefixCls, "--borderless"), !border), _defineProperty(_classNames, "".concat(prefixCls, "--required"), required), _classNames));
      return React.createElement(TapFeedback, {
        disabled: !onClick,
        activeClassName: classNames((_classNames2 = {}, _defineProperty(_classNames2, "".concat(prefixCls, "--active"), !activeClass), _defineProperty(_classNames2, activeClass, activeClass), _classNames2))
      }, React.createElement("div", {
        className: cls,
        onClick: this.handleClick
      }, (icon || title) && React.createElement("div", {
        className: "".concat(prefixCls, "__title")
      }, icon && icon, React.createElement("span", null, title), React.createElement("div", {
        className: "".concat(prefixCls, "__label")
      }, desc)), React.createElement("div", {
        className: classNames("".concat(prefixCls, "__value"), _defineProperty({}, "".concat(prefixCls, "__value--alone"), !icon && !title))
      }, React.createElement("span", null, value), arrow && React.createElement(Icon, {
        type: arrow,
        className: "".concat(prefixCls, "__right-icon")
      }))));
    }
  }]);

  return Cell;
}(React.PureComponent);

_defineProperty(Cell, "defaultProps", {
  prefixCls: 'panda-cell',
  border: true,
  onClick: function onClick() {}
});

export { Cell as default };