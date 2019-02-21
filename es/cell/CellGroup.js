import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import React from 'react';
import classNames from 'classnames';

var CellGroup =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(CellGroup, _React$PureComponent);

  function CellGroup() {
    _classCallCheck(this, CellGroup);

    return _possibleConstructorReturn(this, _getPrototypeOf(CellGroup).apply(this, arguments));
  }

  _createClass(CellGroup, [{
    key: "render",
    value: function render() {
      var _classNames;

      var _this$props = this.props,
          children = _this$props.children,
          prefixCls = _this$props.prefixCls,
          border = _this$props.border;
      var cls = classNames((_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-group"), true), _defineProperty(_classNames, 'panda-hairline--top-bottom', border), _classNames));
      return React.createElement("div", {
        className: cls
      }, children);
    }
  }]);

  return CellGroup;
}(React.PureComponent);

_defineProperty(CellGroup, "defaultProps", {
  prefixCls: 'panda-cell',
  border: false
});

export { CellGroup as default };