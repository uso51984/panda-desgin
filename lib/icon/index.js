"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _loadSprite = _interopRequireDefault(require("./loadSprite"));

var Icon =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2["default"])(Icon, _React$Component);

  function Icon() {
    (0, _classCallCheck2["default"])(this, Icon);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Icon).apply(this, arguments));
  }

  (0, _createClass2["default"])(Icon, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      (0, _loadSprite["default"])();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          type = _this$props.type,
          className = _this$props.className,
          size = _this$props.size,
          restProps = (0, _objectWithoutProperties2["default"])(_this$props, ["type", "className", "size"]);
      var cls = (0, _classnames["default"])(className, 'pan-icon', "pan-icon-".concat(type), "pan-icon-".concat(size));
      return _react["default"].createElement("svg", (0, _extends2["default"])({
        className: cls
      }, restProps), _react["default"].createElement("use", {
        xlinkHref: "#".concat(type)
      }));
    }
  }]);
  return Icon;
}(_react["default"].Component);

exports["default"] = Icon;
(0, _defineProperty2["default"])(Icon, "defaultProps", {
  size: 'md'
});