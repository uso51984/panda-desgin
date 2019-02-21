import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import React from 'react';

var Circle =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Circle, _React$Component);

  function Circle() {
    _classCallCheck(this, Circle);

    return _possibleConstructorReturn(this, _getPrototypeOf(Circle).apply(this, arguments));
  }

  _createClass(Circle, [{
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
          restProps = _objectWithoutProperties(_this$props2, ["prefixCls", "strokeWidth", "trailWidth", "strokeColor", "percent", "trailColor", "strokeLinecap", "style", "className"]);

      var _this$getPathStyles = this.getPathStyles(),
          pathString = _this$getPathStyles.pathString,
          trailPathStyle = _this$getPathStyles.trailPathStyle,
          strokePathStyle = _this$getPathStyles.strokePathStyle;

      delete restProps.percent;
      delete restProps.gapDegree;
      delete restProps.gapPosition;
      return React.createElement("svg", {
        className: "".concat(prefixCls, "-circle ").concat(className),
        viewBox: "0 0 100 100",
        style: style
      }, React.createElement("path", {
        className: "".concat(prefixCls, "-circle-trail"),
        d: pathString,
        stroke: trailColor,
        strokeWidth: trailWidth || strokeWidth,
        fillOpacity: "0",
        style: trailPathStyle
      }), React.createElement("path", {
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
}(React.Component);

_defineProperty(Circle, "defaultProps", {
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

export default Circle;