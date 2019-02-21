import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import getOffsetLeft from './util';
import Star from './Star';

var Rate =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Rate, _React$Component);

  function Rate(props) {
    var _this;

    _classCallCheck(this, Rate);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Rate).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "onClick", function (event, index) {
      var value = _this.getStarValue(index, event.pageX);

      var isReset = false;

      if (_this.props.allowClear) {
        isReset = value === _this.state.value;
      }

      _this.changeValue(isReset ? 0 : value);
    });

    _defineProperty(_assertThisInitialized(_this), "saveRef", function (index) {
      return function (node) {
        _this.stars[index] = node;
      };
    });

    _defineProperty(_assertThisInitialized(_this), "saveRate", function (node) {
      _this.rate = node;
    });

    var _value = props.value;

    if (_value === undefined) {
      _value = props.defaultValue;
    }

    _this.stars = {};
    _this.state = {
      value: _value
    };
    return _this;
  }

  _createClass(Rate, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if ('value' in nextProps) {
        this.setState({
          value: nextProps.value
        });
      }
    }
  }, {
    key: "getStarDOM",
    value: function getStarDOM(index) {
      /* istanbul ignore next */
      return ReactDOM.findDOMNode(this.stars[index]);
    }
  }, {
    key: "getStarValue",
    value: function getStarValue(index, x) {
      var value = index + 1;
      /* istanbul ignore if */

      if (this.props.allowHalf) {
        var starEle = this.getStarDOM(index);
        var leftDis = getOffsetLeft(starEle);
        var width = starEle.clientWidth;

        if (x - leftDis < width / 2) {
          value -= 0.5;
        }
      }

      return value;
    }
  }, {
    key: "changeValue",
    value: function changeValue(value) {
      if (!('value' in this.props)) {
        this.setState({
          value: value
        });
      }

      this.props.onChange(value);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          count = _this$props.count,
          allowHalf = _this$props.allowHalf,
          style = _this$props.style,
          prefixCls = _this$props.prefixCls,
          disabled = _this$props.disabled,
          className = _this$props.className,
          character = _this$props.character,
          color = _this$props.color;
      var value = this.state.value;
      var stars = [];
      var disabledClass = disabled ? "".concat(prefixCls, "--disabled") : '';

      for (var index = 0; index < count; index++) {
        stars.push(React.createElement(Star, {
          ref: this.saveRef(index),
          index: index,
          count: count,
          disabled: disabled,
          prefixCls: "".concat(prefixCls, "__star"),
          allowHalf: allowHalf,
          color: color,
          value: value,
          onClick: this.onClick,
          key: index,
          character: character
        }));
      }

      return React.createElement("ul", {
        className: classNames(prefixCls, disabledClass, className),
        style: style,
        ref: this.saveRate
      }, stars);
    }
  }]);

  return Rate;
}(React.Component);

_defineProperty(Rate, "defaultProps", {
  defaultValue: 0,
  count: 5,
  allowHalf: false,
  allowClear: true,
  style: {},
  prefixCls: 'panda-rate',
  onChange: function onChange() {},
  character: '★',
  tabIndex: 0
});

export { Rate as default };