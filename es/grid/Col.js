import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import React from 'react';
import classNames from 'classnames';

var Col =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(Col, _React$PureComponent);

  function Col() {
    _classCallCheck(this, Col);

    return _possibleConstructorReturn(this, _getPrototypeOf(Col).apply(this, arguments));
  }

  _createClass(Col, [{
    key: "render",
    value: function render() {
      var _classNames;

      var _this$props = this.props,
          Tag = _this$props.Tag,
          children = _this$props.children,
          prefixCls = _this$props.prefixCls,
          span = _this$props.span,
          offset = _this$props.offset,
          style = _this$props.style;
      var cls = classNames((_classNames = {}, _defineProperty(_classNames, prefixCls, true), _defineProperty(_classNames, "".concat(prefixCls, "--").concat(span), span), _defineProperty(_classNames, "".concat(prefixCls, "--offset-").concat(offset), offset), _classNames));
      return React.createElement(Tag, {
        className: cls,
        style: style
      }, children);
    }
  }]);

  return Col;
}(React.PureComponent);

_defineProperty(Col, "defaultProps", {
  Tag: 'div',
  prefixCls: 'panda-col'
});

export { Col as default };