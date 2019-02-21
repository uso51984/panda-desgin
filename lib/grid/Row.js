"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var Row =
/*#__PURE__*/
function (_React$PureComponent) {
  (0, _inherits2["default"])(Row, _React$PureComponent);

  function Row() {
    (0, _classCallCheck2["default"])(this, Row);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Row).apply(this, arguments));
  }

  (0, _createClass2["default"])(Row, [{
    key: "getStyle",
    value: function getStyle() {
      var _this$props = this.props,
          gutter = _this$props.gutter,
          style = _this$props.style;

      if (!gutter) {
        return {};
      }

      var margin = "".concat(Number(gutter) / -2, "px");
      return (0, _objectSpread2["default"])({}, style, {
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

      var cols = _react["default"].Children.map(children, function (col) {
        if (col.props && gutter > 0) {
          return _react["default"].cloneElement(col, {
            style: (0, _objectSpread2["default"])({
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
      var cls = (0, _classnames["default"])((_classNames = {}, (0, _defineProperty2["default"])(_classNames, prefixCls, true), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "--flex"), isFlex), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "--align-").concat(align), isFlex && align), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "--justify-").concat(justify), isFlex && justify), _classNames));
      return _react["default"].createElement(Tag, {
        style: this.getStyle(),
        className: cls
      }, this.getCols());
    }
  }]);
  return Row;
}(_react["default"].PureComponent);

exports["default"] = Row;
(0, _defineProperty2["default"])(Row, "defaultProps", {
  Tag: 'div',
  gutter: 0,
  prefixCls: 'panda-row'
});