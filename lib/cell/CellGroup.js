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

var CellGroup =
/*#__PURE__*/
function (_React$PureComponent) {
  (0, _inherits2["default"])(CellGroup, _React$PureComponent);

  function CellGroup() {
    (0, _classCallCheck2["default"])(this, CellGroup);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(CellGroup).apply(this, arguments));
  }

  (0, _createClass2["default"])(CellGroup, [{
    key: "render",
    value: function render() {
      var _classNames;

      var _this$props = this.props,
          children = _this$props.children,
          prefixCls = _this$props.prefixCls,
          border = _this$props.border;
      var cls = (0, _classnames["default"])((_classNames = {}, (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-group"), true), (0, _defineProperty2["default"])(_classNames, 'panda-hairline--top-bottom', border), _classNames));
      return _react["default"].createElement("div", {
        className: cls
      }, children);
    }
  }]);
  return CellGroup;
}(_react["default"].PureComponent);

exports["default"] = CellGroup;
(0, _defineProperty2["default"])(CellGroup, "defaultProps", {
  prefixCls: 'panda-cell',
  border: false
});