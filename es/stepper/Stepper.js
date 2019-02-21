import _extends from "@babel/runtime/helpers/extends";
import _objectSpread from "@babel/runtime/helpers/objectSpread";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import React from 'react';
import classNames from 'classnames';
import Icon from '../Icon';
import InputHandler from './InputHandler';

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
  _inherits(InputNumber, _React$PureComponent);

  function InputNumber(_props) {
    var _this;

    _classCallCheck(this, InputNumber);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(InputNumber).call(this, _props));

    _defineProperty(_assertThisInitialized(_this), "onChange", function (e) {
      var _this$props = _this.props,
          parser = _this$props.parser,
          onChange = _this$props.onChange;
      var inputValue = parser && parser(e.target.value.trim());

      _this.setState({
        inputValue: inputValue
      });

      onChange(_this.toNumberWhenUserInput(inputValue));
    });

    _defineProperty(_assertThisInitialized(_this), "onFocus", function (e) {
      _this.setState({
        focused: true
      });

      _this.props.onFocus(e);
    });

    _defineProperty(_assertThisInitialized(_this), "onBlur", function (e) {
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

    _defineProperty(_assertThisInitialized(_this), "getCurrentValidValue", function (value) {
      var val = value;

      if (!_this.isNotCompleteNumber(val)) {
        val = _this.getValidValue(val);
      } else {
        val = _this.state.value;
      }

      return _this.toNumber(val);
    });

    _defineProperty(_assertThisInitialized(_this), "getValidValue", function (value) {
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

    _defineProperty(_assertThisInitialized(_this), "setValue", function (v) {
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

    _defineProperty(_assertThisInitialized(_this), "getPrecision", function (value) {
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

    _defineProperty(_assertThisInitialized(_this), "getMaxPrecision", function (currentValue) {
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

    _defineProperty(_assertThisInitialized(_this), "getPrecisionFactor", function (currentValue, ratio) {
      var precision = _this.getMaxPrecision(currentValue, ratio);

      return Math.pow(10, precision);
    });

    _defineProperty(_assertThisInitialized(_this), "toPrecisionAsStep", function (num) {
      if (_this.isNotCompleteNumber(num) || num === '') {
        return num;
      }

      var precision = Math.abs(_this.getMaxPrecision(num));

      if (!isNaN(precision)) {
        return Number(num).toFixed(precision);
      }

      return num.toString();
    });

    _defineProperty(_assertThisInitialized(_this), "isNotCompleteNumber", function (num) {
      return isNaN(num) || num === '' || num === null || num && num.toString().indexOf('.') === num.toString().length - 1;
    });

    _defineProperty(_assertThisInitialized(_this), "toNumber", function (num) {
      if (_this.isNotCompleteNumber(num)) {
        return num;
      }

      if ('precision' in _this.props) {
        return Number(Number(num).toFixed(_this.props.precision));
      }

      return Number(num);
    });

    _defineProperty(_assertThisInitialized(_this), "toNumberWhenUserInput", function (num) {
      // num.length > 16 => prevent input large number will became Infinity
      console.log('---', num.lengt);

      if ((/\.\d*0$/.test(num) || num.length > 16) && _this.state.focused) {
        return num;
      }

      return _this.toNumber(num);
    });

    _defineProperty(_assertThisInitialized(_this), "stepCompute", function (type, val, rat) {
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

    _defineProperty(_assertThisInitialized(_this), "step", function (type, e) {
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

    _defineProperty(_assertThisInitialized(_this), "stop", function () {
      if (_this.autoStepTimer) {
        clearTimeout(_this.autoStepTimer);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "action", function (type, e, ratio, recursive) {
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

    _defineProperty(_assertThisInitialized(_this), "down", function (e, ratio, recursive) {
      _this.action('down', e, ratio, recursive);
    });

    _defineProperty(_assertThisInitialized(_this), "up", function (e, ratio, recursive) {
      _this.action('up', e, ratio, recursive);
    });

    _defineProperty(_assertThisInitialized(_this), "setInput", function (input) {
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

  _createClass(InputNumber, [{
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

      var props = _objectSpread({}, this.props);

      var prefixCls = props.prefixCls,
          disabled = props.disabled,
          readOnly = props.readOnly,
          max = props.max,
          min = props.min,
          useTouch = props.useTouch;
      var classes = classNames((_classNames = {}, _defineProperty(_classNames, prefixCls, true), _defineProperty(_classNames, props.className, !!props.className), _defineProperty(_classNames, "".concat(prefixCls, "-disabled"), disabled), _defineProperty(_classNames, "".concat(prefixCls, "-focused"), this.state.focused), _classNames));
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
      return React.createElement("div", {
        className: classes,
        style: props.style
      }, React.createElement("div", {
        className: "".concat(prefixCls, "-handler-wrap")
      }, React.createElement(InputHandler, _extends({
        disabled: isUpDisabled,
        prefixCls: prefixCls,
        unselectable: "unselectable"
      }, upEvents, {
        role: "button",
        "aria-label": "Increase Value",
        "aria-disabled": !!isUpDisabled,
        className: "".concat(prefixCls, "-handler ").concat(prefixCls, "-handler-up ").concat(upDisabledClass)
      }), this.props.upHandler || React.createElement(Icon, {
        type: "plus",
        size: "xxs"
      })), React.createElement(InputHandler, _extends({
        disabled: isDownDisabled,
        prefixCls: prefixCls,
        unselectable: "unselectable"
      }, downEvents, {
        role: "button",
        "aria-label": "Decrease Value",
        "aria-disabled": !!isDownDisabled,
        className: "".concat(prefixCls, "-handler ").concat(prefixCls, "-handler-down ").concat(downDisabledClass)
      }), this.props.downHandler || React.createElement(Icon, {
        type: "minus",
        size: "xxs"
      }))), React.createElement("div", {
        className: "".concat(prefixCls, "-input-wrap"),
        role: "spinbutton",
        "aria-valuemin": props.min,
        "aria-valuemax": props.max,
        "aria-valuenow": value
      }, React.createElement("input", {
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
}(React.PureComponent);

_defineProperty(InputNumber, "defaultProps", {
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

export { InputNumber as default };