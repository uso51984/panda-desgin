import _objectSpread from "@babel/runtime/helpers/objectSpread";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import React from 'react';
import classNames from 'classnames';

var Row =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(Row, _React$PureComponent);

  function Row() {
    _classCallCheck(this, Row);

    return _possibleConstructorReturn(this, _getPrototypeOf(Row).apply(this, arguments));
  }

  _createClass(Row, [{
    key: "getStyle",
    value: function getStyle() {
      var _this$props = this.props,
          gutter = _this$props.gutter,
          style = _this$props.style;

      if (!gutter) {
        return {};
      }

      var margin = "".concat(Number(gutter) / -2, "px");
      return _objectSpread({}, style, {
        marginLeft: margin,
        marginRight: margin
      });
    }
  }, {
    key: "getCols",
    value: function getCols() {
      var _this$props2 = this.props,
          gutter = _this$props2.gutter,
          children = _this$props2.children;
      var padding = "".concat(Number(gutter) / 2, "px");
      var cols = React.Children.map(children, function (col) {
        if (col.props && gutter > 0) {
          return React.cloneElement(col, {
            style: _objectSpread({
              paddingLeft: padding,
              paddingRight: padding
            }, col.props.style)
          });
        }

        return col;
      });
      return cols;
    }
  }, {
    key: "render",
    value: function render() {
      var _classNames;

      var _this$props3 = this.props,
          Tag = _this$props3.Tag,
          type = _this$props3.type,
          align = _this$props3.align,
          justify = _this$props3.justify,
          prefixCls = _this$props3.prefixCls;
      var isFlex = type === 'flex';
      var cls = classNames((_classNames = {}, _defineProperty(_classNames, prefixCls, true), _defineProperty(_classNames, "".concat(prefixCls, "--flex"), isFlex), _defineProperty(_classNames, "".concat(prefixCls, "--align-").concat(align), isFlex && align), _defineProperty(_classNames, "".concat(prefixCls, "--justify-").concat(justify), isFlex && justify), _classNames));
      return React.createElement(Tag, {
        style: this.getStyle(),
        className: cls
      }, this.getCols());
    }
  }]);

  return Row;
}(React.PureComponent);

_defineProperty(Row, "defaultProps", {
  Tag: 'div',
  gutter: 0,
  prefixCls: 'panda-row'
});

export { Row as default };