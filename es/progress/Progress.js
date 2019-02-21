import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import React from 'react';
import classNames from 'classnames';
import CircleProgress from './CircleProgress';

var Progress =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(Progress, _React$PureComponent);

  function Progress() {
    _classCallCheck(this, Progress);

    return _possibleConstructorReturn(this, _getPrototypeOf(Progress).apply(this, arguments));
  }

  _createClass(Progress, [{
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

      return React.createElement("span", {
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

      return React.createElement("div", null, React.createElement("div", {
        className: "".concat(prefixCls, "-outer")
      }, React.createElement("div", {
        className: "".concat(prefixCls, "-inner")
      }, React.createElement("div", {
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
      return React.createElement("div", {
        className: "".concat(prefixCls, "-inner"),
        style: circleStyle
      }, React.createElement(CircleProgress, {
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
      var classString = classNames(prefixCls, (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-").concat(type === 'dashboard' && 'circle' || type), true), _defineProperty(_classNames, "".concat(prefixCls, "-show-info"), showInfo), _classNames), className);
      return React.createElement("div", {
        className: classString
      }, type === 'line' ? this.getLineNode() : this.getCircleNode());
    }
  }]);

  return Progress;
}(React.PureComponent);

_defineProperty(Progress, "defaultProps", {
  prefixCls: 'panda-progress',
  type: 'line',
  percent: 0,
  gapDegree: 0,
  showInfo: true,
  trailColor: '#f3f3f3',
  showPercentStatus: false
});

export { Progress as default };