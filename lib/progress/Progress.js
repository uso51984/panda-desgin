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

var _CircleProgress = _interopRequireDefault(require("./CircleProgress"));

var Progress =
/*#__PURE__*/
function (_React$PureComponent) {
  (0, _inherits2["default"])(Progress, _React$PureComponent);

  function Progress() {
    (0, _classCallCheck2["default"])(this, Progress);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Progress).apply(this, arguments));
  }

  (0, _createClass2["default"])(Progress, [{
    key: "getProgressInfoNode",
    value: function getProgressInfoNode() {
      var _this$props = this.props,
          prefixCls = _this$props.prefixCls,
          percent = _this$props.percent,
          format = _this$props.format,
          showInfo = _this$props.showInfo;

      if (!showInfo) {
        return null;
      }

      var textFormatter = format || function (percentNumber) {
        return "".concat(percentNumber, "%");
      };

      return _react["default"].createElement("span", {
        className: "".concat(prefixCls, "-text")
      }, textFormatter(percent));
    }
  }, {
    key: "getLineNode",
    value: function getLineNode() {
      var _this$props2 = this.props,
          percent = _this$props2.percent,
          strokeWidth = _this$props2.strokeWidth,
          prefixCls = _this$props2.prefixCls,
          color = _this$props2.color;
      var percentStyle = {
        width: "".concat(percent, "%"),
        height: strokeWidth || 8
      };

      if (color) {
        percentStyle.backgroundColor = color;
      }

      return _react["default"].createElement("div", null, _react["default"].createElement("div", {
        className: "".concat(prefixCls, "-outer")
      }, _react["default"].createElement("div", {
        className: "".concat(prefixCls, "-inner")
      }, _react["default"].createElement("div", {
        className: "".concat(prefixCls, "-bg"),
        style: percentStyle
      }))), this.getProgressInfoNode());
    }
  }, {
    key: "getCircleNode",
    value: function getCircleNode() {
      var _this$props3 = this.props,
          prefixCls = _this$props3.prefixCls,
          percent = _this$props3.percent,
          width = _this$props3.width,
          strokeWidth = _this$props3.strokeWidth,
          gapPosition = _this$props3.gapPosition,
          trailColor = _this$props3.trailColor,
          gapDegree = _this$props3.gapDegree,
          type = _this$props3.type,
          color = _this$props3.color;
      var circleSize = width || 120;
      var circleStyle = {
        width: circleSize,
        height: circleSize,
        fontSize: circleSize * 0.15 + 6
      };
      var circleWidth = strokeWidth || 6;
      var gapPos = gapPosition || type === 'dashboard' && 'bottom' || 'top';
      var gapDeg = gapDegree || type === 'dashboard' && 75;
      return _react["default"].createElement("div", {
        className: "".concat(prefixCls, "-inner"),
        style: circleStyle
      }, _react["default"].createElement(_CircleProgress["default"], {
        percent: percent,
        strokeWidth: circleWidth,
        trailWidth: circleWidth,
        strokeColor: color,
        trailColor: trailColor,
        prefixCls: prefixCls,
        gapDegree: gapDeg,
        gapPosition: gapPos
      }), this.getProgressInfoNode());
    }
  }, {
    key: "render",
    value: function render() {
      var _classNames;

      var props = this.props;
      var prefixCls = props.prefixCls,
          className = props.className,
          type = props.type,
          showInfo = props.showInfo;
      var classString = (0, _classnames["default"])(prefixCls, (_classNames = {}, (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-").concat(type === 'dashboard' && 'circle' || type), true), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-show-info"), showInfo), _classNames), className);
      return _react["default"].createElement("div", {
        className: classString
      }, type === 'line' ? this.getLineNode() : this.getCircleNode());
    }
  }]);
  return Progress;
}(_react["default"].PureComponent);

exports["default"] = Progress;
(0, _defineProperty2["default"])(Progress, "defaultProps", {
  prefixCls: 'panda-progress',
  type: 'line',
  percent: 0,
  gapDegree: 0,
  showInfo: true,
  trailColor: '#f3f3f3',
  showPercentStatus: false
});