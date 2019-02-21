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

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _classnames = _interopRequireDefault(require("classnames"));

var _util = _interopRequireDefault(require("./util"));

var _Star = _interopRequireDefault(require("./Star"));

var Rate =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2["default"])(Rate, _React$Component);

  function Rate(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, Rate);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Rate).call(this, props));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onClick", function (event, index) {
      var value = _this.getStarValue(index, event.pageX);

      var isReset = false;

      if (_this.props.allowClear) {
        isReset = value === _this.state.value;
      }

      _this.changeValue(isReset ? 0 : value);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "saveRef", function (index) {
      return function (node) {
        _this.stars[index] = node;
      };
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "saveRate", function (node) {
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

  (0, _createClass2["default"])(Rate, [{
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
      return _reactDom["default"].findDOMNode(this.stars[index]);
    }
  }, {
    key: "getStarValue",
    value: function getStarValue(index, x) {
      var value = index + 1;
      /* istanbul ignore if */

      if (this.props.allowHalf) {
        var starEle = this.getStarDOM(index);
        var leftDis = (0, _util["default"])(starEle);
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
        stars.push(_react["default"].createElement(_Star["default"], {
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

      return _react["default"].createElement("ul", {
        className: (0, _classnames["default"])(prefixCls, disabledClass, className),
        style: style,
        ref: this.saveRate
      }, stars);
    }
  }]);
  return Rate;
}(_react["default"].Component);

exports["default"] = Rate;
(0, _defineProperty2["default"])(Rate, "defaultProps", {
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