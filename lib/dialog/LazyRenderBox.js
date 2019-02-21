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

var _react = _interopRequireDefault(require("react"));

var LazyRenderBox =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2["default"])(LazyRenderBox, _React$Component);

  function LazyRenderBox() {
    (0, _classCallCheck2["default"])(this, LazyRenderBox);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(LazyRenderBox).apply(this, arguments));
  }

  (0, _createClass2["default"])(LazyRenderBox, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      return !!nextProps.hiddenClassName || !!nextProps.visible;
    }
  }, {
    key: "render",
    value: function render() {
      var className = this.props.className;

      if (!!this.props.hiddenClassName && !this.props.visible) {
        className += " ".concat(this.props.hiddenClassName);
      }

      var props = (0, _objectSpread2["default"])({}, this.props);
      delete props.hiddenClassName;
      delete props.visible;
      props.className = className;
      return _react["default"].createElement("div", props);
    }
  }]);
  return LazyRenderBox;
}(_react["default"].Component);

exports["default"] = LazyRenderBox;