"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var Circle =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2["default"])(Circle, _React$Component);

  function Circle() {
    (0, _classCallCheck2["default"])(this, Circle);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Circle).apply(this, arguments));
  }

  (0, _createClass2["default"])(Circle, [{
    key: "getPathStyles",
    value: function getPathStyles() {
      var _this$props = this.props,
          percent = _this$props.percent,
          strokeWidth = _this$props.strokeWidth,
          gapDegree = _this$props.gapDegree,
          gapPosition = _this$props.gapPosition;
      var radius = 50 - strokeWidth / 2;
      var beginPositionX = 0;
      var beginPositionY = -radius;
      var endPositionX = 0;
      var endPositionY = -2 * radius;

      switch (gapPosition) {
        case 'left':
          beginPositionX = -radius;
          beginPositionY = 0;
          endPositionX = 2 * radius;
          endPositionY = 0;
          break;

        case 'right':
          beginPositionX = radius;
          beginPositionY = 0;
          endPositionX = -2 * radius;
          endPositionY = 0;
          break;

        case 'bottom':
          beginPositionY = radius;
          endPositionY = 2 * radius;
          break;

        default:
      }

      var pathString = "M 50,50 m ".concat(beginPositionX, ",").concat(beginPositionY, "\n     a ").concat(radius, ",").concat(radius, " 0 1 1 ").concat(endPositionX, ",").concat(-endPositionY, "\n     a ").concat(radius, ",").concat(radius, " 0 1 1 ").concat(-endPositionX, ",").concat(endPositionY);
      var len = Math.PI * 2 * radius;
      var trailPathStyle = {
        strokeDasharray: "".concat(len - gapDegree, "px ").concat(len, "px"),
        strokeDashoffset: "-".concat(gapDegree / 2, "px"),
        transition: 'stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s'
      };
      var strokePathStyle = {
        strokeDasharray: "".concat(percent / 100 * (len - gapDegree), "px ").concat(len, "px"),
        strokeDashoffset: "-".concat(gapDegree / 2, "px"),
        transition: 'stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s, stroke-width .06s ease .3s' // eslint-disable-line

      };
      return {
        pathString: pathString,
        trailPathStyle: trailPathStyle,
        strokePathStyle: strokePathStyle
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          prefixCls = _this$props2.prefixCls,
          strokeWidth = _this$props2.strokeWidth,
          trailWidth = _this$props2.trailWidth,
          strokeColor = _this$props2.strokeColor,
          percent = _this$props2.percent,
          trailColor = _this$props2.trailColor,
          strokeLinecap = _this$props2.strokeLinecap,
          style = _this$props2.style,
          className = _this$props2.className,
          restProps = (0, _objectWithoutProperties2["default"])(_this$props2, ["prefixCls", "strokeWidth", "trailWidth", "strokeColor", "percent", "trailColor", "strokeLinecap", "style", "className"]);

      var _this$getPathStyles = this.getPathStyles(),
          pathString = _this$getPathStyles.pathString,
          trailPathStyle = _this$getPathStyles.trailPathStyle,
          strokePathStyle = _this$getPathStyles.strokePathStyle;

      delete restProps.percent;
      delete restProps.gapDegree;
      delete restProps.gapPosition;
      return _react["default"].createElement("svg", {
        className: "".concat(prefixCls, "-circle ").concat(className),
        viewBox: "0 0 100 100",
        style: style
      }, _react["default"].createElement("path", {
        className: "".concat(prefixCls, "-circle-trail"),
        d: pathString,
        stroke: trailColor,
        strokeWidth: trailWidth || strokeWidth,
        fillOpacity: "0",
        style: trailPathStyle
      }), _react["default"].createElement("path", {
        className: "".concat(prefixCls, "-circle-path"),
        d: pathString,
        strokeLinecap: strokeLinecap,
        stroke: strokeColor,
        strokeWidth: this.props.percent === 0 ? 0 : strokeWidth,
        fillOpacity: "0",
        style: strokePathStyle
      }));
    }
  }]);
  return Circle;
}(_react["default"].Component);

(0, _defineProperty2["default"])(Circle, "defaultProps", {
  className: '',
  percent: 0,
  gapDegree: 0,
  gapPosition: 'top',
  prefixCls: 'panda-progress',
  strokeColor: '#2db7f5',
  strokeLinecap: 'round',
  strokeWidth: 1,
  style: {},
  trailColor: '#D9D9D9',
  trailWidth: 1
});
var _default = Circle;
exports["default"] = _default;