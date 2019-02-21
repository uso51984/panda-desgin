"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var Col =
/*#__PURE__*/
function (_React$PureComponent) {
  (0, _inherits2["default"])(Col, _React$PureComponent);

  function Col() {
    (0, _classCallCheck2["default"])(this, Col);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Col).apply(this, arguments));
  }

  (0, _createClass2["default"])(Col, [{
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
      var cls = (0, _classnames["default"])((_classNames = {}, (0, _defineProperty2["default"])(_classNames, prefixCls, true), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "--").concat(span), span), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "--offset-").concat(offset), offset), _classNames));
      return _react["default"].createElement(Tag, {
        className: cls,
        style: style
      }, children);
    }
  }]);
  return Col;
}(_react["default"].PureComponent);

exports["default"] = Col;
(0, _defineProperty2["default"])(Col, "defaultProps", {
  Tag: 'div',
  prefixCls: 'panda-col'
});