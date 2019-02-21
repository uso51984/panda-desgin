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

var _classnames = _interopRequireDefault(require("classnames"));

var _Radio = _interopRequireDefault(require("./Radio"));

var RadioGroup =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2["default"])(RadioGroup, _React$Component);

  function RadioGroup(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, RadioGroup);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(RadioGroup).call(this, props));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onRadioChange", function (ev) {
      var lastValue = _this.state.value;
      var value = ev.target.value;

      if (!('value' in _this.props)) {
        _this.setState({
          value: value
        });
      }

      if (value !== lastValue) {
        _this.props.onChange(ev);
      }
    });

    var _value;

    if ('value' in props) {
      _value = props.value;
    } else if ('defaultValue' in props) {
      _value = props.defaultValue;
    }

    _this.state = {
      value: _value
    };
    return _this;
  }

  (0, _createClass2["default"])(RadioGroup, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if ('value' in nextProps) {
        this.setState({
          value: nextProps.value
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          prefixCls = _this$props.prefixCls,
          className = _this$props.className,
          options = _this$props.options,
          style = _this$props.style,
          disabled = _this$props.disabled,
          name = _this$props.name;
      var classString = (0, _classnames["default"])(prefixCls, className);
      var children = this.props.children;

      if (options && options.length > 0) {
        children = options.map(function (option, index) {
          return _react["default"].createElement(_Radio["default"], {
            key: index,
            disabled: option.disabled || disabled,
            value: option.value,
            onChange: _this2.onRadioChange,
            checked: _this2.state.value === option.value,
            name: name
          }, option.label);
        });
      }

      return _react["default"].createElement("div", {
        className: classString,
        style: style
      }, children);
    }
  }]);
  return RadioGroup;
}(_react["default"].Component);

exports["default"] = RadioGroup;
(0, _defineProperty2["default"])(RadioGroup, "defaultProps", {
  disabled: false,
  prefixCls: 'panda-radio-group',
  className: '',
  onChange: function onChange() {}
});