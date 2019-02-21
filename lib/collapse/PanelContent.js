"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireDefault(require("react"));

var _classnames2 = _interopRequireDefault(require("classnames"));

// import PropTypes from 'prop-types';
var PanelContent =
/*#__PURE__*/
function (_React$PureComponent) {
  (0, _inherits2["default"])(PanelContent, _React$PureComponent);

  function PanelContent() {
    (0, _classCallCheck2["default"])(this, PanelContent);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(PanelContent).apply(this, arguments));
  }

  (0, _createClass2["default"])(PanelContent, [{
    key: "render",
    value: function render() {
      var _classnames;

      var _this$props = this.props,
          prefixCls = _this$props.prefixCls,
          isActive = _this$props.isActive,
          children = _this$props.children,
          destroyInactivePanel = _this$props.destroyInactivePanel;
      var contentCls = (0, _classnames2["default"])((_classnames = {}, (0, _defineProperty2["default"])(_classnames, "".concat(prefixCls, "__item-content"), true), (0, _defineProperty2["default"])(_classnames, "".concat(prefixCls, "__item-content--active"), isActive), (0, _defineProperty2["default"])(_classnames, "".concat(prefixCls, "__item-content--inactive"), !isActive), _classnames));
      return _react["default"].createElement("div", {
        className: contentCls
      }, !isActive && destroyInactivePanel ? null : _react["default"].createElement("div", {
        className: "".concat(prefixCls, "__item-content-box")
      }, children));
    }
  }]);
  return PanelContent;
}(_react["default"].PureComponent); // PanelContent.propTypes = {
//   prefixCls: PropTypes.string,
//   isActive: PropTypes.bool,
//   children: PropTypes.any,
//   destroyInactivePanel: PropTypes.bool,
// };


var _default = PanelContent;
exports["default"] = _default;