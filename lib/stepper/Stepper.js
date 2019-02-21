"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _icon = _interopRequireDefault(require("../icon"));

var _InputHandler = _interopRequireDefault(require("./InputHandler"));

function noop() {}

function defaultParser(input) {
  return input.replace(/[^\w\.-]+/g, '');
}
/**
 * When click and hold on a button - the speed of auto changin the value.
 */


var SPEED = 200;
/**
 * When click and hold on a button - the delay before auto changin the value.
 */

var DELAY = 600;
/* istanbul ignore next */

var MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER || Math.pow(2, 53) - 1;

var InputNumber =
/*#__PURE__*/
function (_React$PureComponent) {
  (0, _inherits2["default"])(InputNumber, _React$PureComponent);

  function InputNumber(_props) {
    var _this;

    (0, _classCallCheck2["default"])(this, InputNumber);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(InputNumber).call(this, _props));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onChange", function (e) {
      var _this$props = _this.props,
          parser = _this$props.parser,
          onChange = _this$props.onChange;
      var inputValue = parser && parser(e.target.value.trim());

      _this.setState({
        inputValue: inputValue
      });

      onChange(_this.toNumberWhenUserInput(inputValue));
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onFocus", function (e) {
      _this.setState({
        focused: true
      });

      _this.props.onFocus(e);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onBlur", function (e) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      _this.setState({
        focused: false
      });

      var value = _this.getCurrentValidValue(_this.state.inputValue);

      e.persist(); // fix https://github.com/react-component/input-number/issues/51

      _this.setValue(value, function () {
        var _this$props2;

        (_this$props2 = _this.props).onBlur.apply(_this$props2, [e].concat(args));
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "getCurrentValidValue", function (value) {
      var val = value;

      if (!_this.isNotCompleteNumber(val)) {
        val = _this.getValidValue(val);
      } else {
        val = _this.state.value;
      }

      return _this.toNumber(val);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "getValidValue", function (value) {
      var val = parseFloat(value); // https://github.com/ant-design/ant-design/issues/7358

      if (isNaN(val)) {
        return value;
      }

      if (val < _this.props.min) {
        val = _this.props.min;
      }

      if (val > _this.props.max) {
        val = _this.props.max;
      }

      return val;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "setValue", function (v) {
      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop;
      // trigger onChange
      var newValue = _this.isNotCompleteNumber(parseFloat(v)) ? undefined : parseFloat(v);
      var changed = newValue !== _this.state.value || "".concat(newValue) !== "".concat(_this.state.inputValue); // https://github.com/ant-design/ant-design/issues/7363

      if (!('value' in _this.props)) {
        _this.setState({
          value: newValue,
          inputValue: _this.toPrecisionAsStep(v)
        }, callback);
      } else {
        // always set input value same as value
        _this.setState({
          inputValue: _this.toPrecisionAsStep(_this.state.value)
        }, callback);
      }

      if (changed) {
        var onChange = _this.props.onChange;
        onChange(newValue);
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "getPrecision", function (value) {
      if ('precision' in _this.props) {
        return _this.props.precision;
      }

      var valueString = value.toString();

      if (valueString.indexOf('e-') >= 0) {
        return parseInt(valueString.slice(valueString.indexOf('e-') + 2), 10);
      }

      var precision = 0;

      if (valueString.indexOf('.') >= 0) {
        precision = valueString.length - valueString.indexOf('.') - 1;
      }

      return precision;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "getMaxPrecision", function (currentValue) {
      var ratio = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

      if ('precision' in _this.props) {
        return _this.props.precision;
      }

      var step = _this.props.step;

      var ratioPrecision = _this.getPrecision(ratio);

      var stepPrecision = _this.getPrecision(step);

      var currentValuePrecision = _this.getPrecision(currentValue);

      if (!currentValue) {
        return ratioPrecision + stepPrecision;
      }

      return Math.max(currentValuePrecision, ratioPrecision + stepPrecision);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "getPrecisionFactor", function (currentValue, ratio) {
      var precision = _this.getMaxPrecision(currentValue, ratio);

      return Math.pow(10, precision);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "toPrecisionAsStep", function (num) {
      if (_this.isNotCompleteNumber(num) || num === '') {
        return num;
      }

      var precision = Math.abs(_this.getMaxPrecision(num));

      if (!isNaN(precision)) {
        return Number(num).toFixed(precision);
      }

      return num.toString();
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "isNotCompleteNumber", function (num) {
      return isNaN(num) || num === '' || num === null || num && num.toString().indexOf('.') === num.toString().length - 1;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "toNumber", function (num) {
      if (_this.isNotCompleteNumber(num)) {
        return num;
      }

      if ('precision' in _this.props) {
        return Number(Number(num).toFixed(_this.props.precision));
      }

      return Number(num);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "toNumberWhenUserInput", function (num) {
      // num.length > 16 => prevent input large number will became Infinity
      console.log('---', num.lengt);

      if ((/\.\d*0$/.test(num) || num.length > 16) && _this.state.focused) {
        return num;
      }

      return _this.toNumber(num);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "stepCompute", function (type, val, rat) {
      var _this$props3 = _this.props,
          step = _this$props3.step,
          min = _this$props3.min;

      var precisionFactor = _this.getPrecisionFactor(val, rat);

      var precision = Math.abs(_this.getMaxPrecision(val, rat));
      var result;
      var direct = type === 'up' ? 1 : -1;
      /* istanbul ignore else */

      if (typeof val === 'number') {
        result = ((precisionFactor * val + direct * precisionFactor * +step * rat) / precisionFactor).toFixed(precision);
      } else {
        result = min === -Infinity ? direct * +step : min;
      }

      return _this.toNumber(result);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "step", function (type, e) {
      var ratio = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
      e.preventDefault();
      var props = _this.props;
      var value = _this.getCurrentValidValue(_this.state.inputValue) || 0;
      /* istanbul ignore if */

      if (_this.isNotCompleteNumber(value)) {
        return false;
      }

      var val = _this.stepCompute(type, value, ratio);

      var outOfRange = val > props.max || val < props.min;

      if (val > props.max) {
        val = props.max;
      } else if (val < props.min) {
        val = props.min;
      }

      _this.setValue(val);

      _this.setState({
        focused: true
      });

      return !outOfRange;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "stop", function () {
      if (_this.autoStepTimer) {
        clearTimeout(_this.autoStepTimer);
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "action", function (type, e, ratio, recursive) {
      if (e.persist) {
        e.persist();
      }

      _this.stop();

      if (_this.step(type, e, ratio)) {
        _this.autoStepTimer = setTimeout(function () {
          _this.action(type, e, ratio, true);
        }, recursive ? SPEED : DELAY);
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "down", function (e, ratio, recursive) {
      _this.action('down', e, ratio, recursive);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "up", function (e, ratio, recursive) {
      _this.action('up', e, ratio, recursive);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "setInput", function (input) {
      _this.input = input;
    });

    var _value;

    if ('value' in _props) {
      _value = _props.value;
    } else {
      _value = _props.defaultValue;
    }

    _value = _this.toNumber(_value);
    _this.state = {
      inputValue: _this.toPrecisionAsStep(_value),
      value: _value
    };
    return _this;
  }

  (0, _createClass2["default"])(InputNumber, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if ('value' in nextProps) {
        var value = this.state.focused ? nextProps.value : this.getValidValue(nextProps.value);
        this.setState({
          value: value,
          inputValue: value
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.stop();
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.componentDidUpdate();
    }
  }, {
    key: "componentWillUpdate",
    value: function componentWillUpdate() {
      try {
        this.start = this.input.selectionStart;
        this.end = this.input.selectionEnd;
      } catch (e) {// Fix error in Chrome:
        // Failed to read the 'selectionStart' property from 'HTMLInputElement'
        // http://stackoverflow.com/q/21177489/3040605
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      /* istanbul ignore if */
      if (this.props.focusOnUpDown && this.state.focused) {
        var selectionRange = this.input.setSelectionRange;

        if (selectionRange && typeof selectionRange === 'function' && this.start !== undefined && this.end !== undefined && this.start !== this.end) {
          this.input.setSelectionRange(this.start, this.end);
        } else {
          this.focus();
        }
      }
    }
  }, {
    key: "focus",
    value: function focus() {
      this.input.focus();
    }
  }, {
    key: "formatWrapper",
    value: function formatWrapper(num) {
      if (this.props.formatter) {
        return this.props.formatter(num);
      }

      return num;
    }
  }, {
    key: "render",
    value: function render() {
      var _classNames;

      var props = (0, _objectSpread2["default"])({}, this.props);
      var prefixCls = props.prefixCls,
          disabled = props.disabled,
          readOnly = props.readOnly,
          max = props.max,
          min = props.min,
          useTouch = props.useTouch;
      var classes = (0, _classnames["default"])((_classNames = {}, (0, _defineProperty2["default"])(_classNames, prefixCls, true), (0, _defineProperty2["default"])(_classNames, props.className, !!props.className), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-disabled"), disabled), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-focused"), this.state.focused), _classNames));
      var upDisabledClass = '';
      var downDisabledClass = '';
      var value = this.state.value;

      if (value || value === 0) {
        if (!isNaN(value)) {
          var val = Number(value);

          if (val >= max) {
            upDisabledClass = "".concat(prefixCls, "-handler-up-disabled");
          }

          if (val <= min) {
            downDisabledClass = "".concat(prefixCls, "-handler-down-disabled");
          }
        } else {
          upDisabledClass = "".concat(prefixCls, "-handler-up-disabled");
          downDisabledClass = "".concat(prefixCls, "-handler-down-disabled");
        }
      }

      var editable = !props.readOnly && !props.disabled;
      var inputDisplayValue;

      if (this.state.focused) {
        inputDisplayValue = this.state.inputValue;
      } else {
        inputDisplayValue = this.toPrecisionAsStep(this.state.value);
      }

      if (inputDisplayValue === undefined || inputDisplayValue === null) {
        inputDisplayValue = '';
      }

      var upEvents;
      var downEvents;

      if (useTouch) {
        upEvents = {
          onTouchStart: editable && !upDisabledClass ? this.up : noop,
          onTouchEnd: this.stop
        };
        downEvents = {
          onTouchStart: editable && !downDisabledClass ? this.down : noop,
          onTouchEnd: this.stop
        };
      } else {
        upEvents = {
          onMouseDown: editable && !upDisabledClass ? this.up : noop,
          onMouseUp: this.stop,
          onMouseLeave: this.stop
        };
        downEvents = {
          onMouseDown: editable && !downDisabledClass ? this.down : noop,
          onMouseUp: this.stop,
          onMouseLeave: this.stop
        };
      }

      var inputDisplayValueFormat = this.formatWrapper(inputDisplayValue);
      var isUpDisabled = !!upDisabledClass || disabled || readOnly;
      var isDownDisabled = !!downDisabledClass || disabled || readOnly;
      return _react["default"].createElement("div", {
        className: classes,
        style: props.style
      }, _react["default"].createElement("div", {
        className: "".concat(prefixCls, "-handler-wrap")
      }, _react["default"].createElement(_InputHandler["default"], (0, _extends2["default"])({
        disabled: isUpDisabled,
        prefixCls: prefixCls,
        unselectable: "unselectable"
      }, upEvents, {
        role: "button",
        "aria-label": "Increase Value",
        "aria-disabled": !!isUpDisabled,
        className: "".concat(prefixCls, "-handler ").concat(prefixCls, "-handler-up ").concat(upDisabledClass)
      }), this.props.upHandler || _react["default"].createElement(_icon["default"], {
        type: "plus",
        size: "xxs"
      })), _react["default"].createElement(_InputHandler["default"], (0, _extends2["default"])({
        disabled: isDownDisabled,
        prefixCls: prefixCls,
        unselectable: "unselectable"
      }, downEvents, {
        role: "button",
        "aria-label": "Decrease Value",
        "aria-disabled": !!isDownDisabled,
        className: "".concat(prefixCls, "-handler ").concat(prefixCls, "-handler-down ").concat(downDisabledClass)
      }), this.props.downHandler || _react["default"].createElement(_icon["default"], {
        type: "minus",
        size: "xxs"
      }))), _react["default"].createElement("div", {
        className: "".concat(prefixCls, "-input-wrap"),
        role: "spinbutton",
        "aria-valuemin": props.min,
        "aria-valuemax": props.max,
        "aria-valuenow": value
      }, _react["default"].createElement("input", {
        className: "".concat(prefixCls, "-input"),
        tabIndex: props.tabIndex,
        autoComplete: "off",
        onFocus: this.onFocus,
        onBlur: this.onBlur,
        readOnly: props.readOnly,
        disabled: props.disabled,
        max: props.max,
        min: props.min,
        step: props.step,
        onChange: this.onChange,
        ref: this.setInput,
        value: inputDisplayValueFormat
      })));
    }
  }]);
  return InputNumber;
}(_react["default"].PureComponent);

exports["default"] = InputNumber;
(0, _defineProperty2["default"])(InputNumber, "defaultProps", {
  focusOnUpDown: false,
  useTouch: false,
  prefixCls: 'panda-stepper',
  max: MAX_SAFE_INTEGER,
  min: -MAX_SAFE_INTEGER,
  step: 1,
  style: {},
  onChange: noop,
  onFocus: noop,
  onBlur: noop,
  parser: defaultParser
});