import React from 'react';
import classNames from 'classnames';
import Icon from '../Icon';
import InputHandler from './InputHandler';

function noop() {
}

function defaultParser(input) {
  return input.replace(/[^\w\.-]+/g, '');
}

/**
 * When click and hold on a button - the speed of auto changin the value.
 */
const SPEED = 200;
/**
 * When click and hold on a button - the delay before auto changin the value.
 */
const DELAY = 600;

const MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER || Math.pow(2, 53) - 1;

export default class InputNumber extends React.PureComponent {
  static defaultProps = {
    focusOnUpDown: false,
    useTouch: false,
    prefixCls: 'am-stepper',
    max: MAX_SAFE_INTEGER,
    min: -MAX_SAFE_INTEGER,
    step: 1,
    style: {},
    onChange: noop,
    onFocus: noop,
    onBlur: noop,
    parser: defaultParser,
  };

  constructor(props) {
    super(props);

    let value;
    if ('value' in props) {
      value = props.value;
    } else {
      value = props.defaultValue;
    }
    value = this.toNumber(value);
    this.state = {
      inputValue: this.toPrecisionAsStep(value),
      value,
      focused: props.autoFocus,
    };
  }

  componentWillReceiveProps(nextProps) {
    if ('value' in nextProps) {
      const value = this.state.focused
        ? nextProps.value : this.getValidValue(nextProps.value);
      this.setState({
        value,
        inputValue: value,
      });
    }
  }

  componentWillUnmount() {
    this.stop();
  }

  componentDidMount() {
    this.componentDidUpdate();
  }

  componentWillUpdate() {
    try {
      this.start = this.input.selectionStart;
      this.end = this.input.selectionEnd;
    } catch (e) {
      // Fix error in Chrome:
      // Failed to read the 'selectionStart' property from 'HTMLInputElement'
      // http://stackoverflow.com/q/21177489/3040605
    }
  }

  componentDidUpdate() {
    if (this.props.focusOnUpDown && this.state.focused) {
      const selectionRange = this.input.setSelectionRange;
      if (selectionRange &&
        typeof selectionRange === 'function' &&
        this.start !== undefined &&
        this.end !== undefined &&
        this.start !== this.end) {
        this.input.setSelectionRange(this.start, this.end);
      } else {
        this.focus();
      }
    }
  }

  onChange = (e) => {
    const { parser, onChange } = this.props;
    const input = parser && parser(this.getValueFromEvent(e).trim());
    this.setState({ inputValue: input });
    onChange(this.toNumberWhenUserInput(input));
  }

  onFocus = (...args) => {
    this.setState({
      focused: true,
    });
    const { onFocus } = this.props;
    onFocus(...args);
  }

  onBlur = (e, ...args) => {
    this.setState({
      focused: false,
    });
    const value = this.getCurrentValidValue(this.state.inputValue);
    e.persist(); // fix https://github.com/react-component/input-number/issues/51
    this.setValue(value, () => {
      const { onBlur } = this.props;
      onBlur(e, ...args);
    });
  }

  getCurrentValidValue = (value) => {
    let val = value;
    if (val === '') {
      val = '';
    } else if (!this.isNotCompleteNumber(val)) {
      val = this.getValidValue(val);
    } else {
      val = this.state.value;
    }
    return this.toNumber(val);
  }

  getValidValue = (value) => {
    let val = parseFloat(value);
    // https://github.com/ant-design/ant-design/issues/7358
    if (isNaN(val)) {
      return value;
    }
    if (val < this.props.min) {
      val = this.props.min;
    }
    if (val > this.props.max) {
      val = this.props.max;
    }
    return val;
  }

  setValue = (v, callback) => {
    // trigger onChange
    const newValue = this.isNotCompleteNumber(parseFloat(v)) ? undefined : parseFloat(v);
    const changed = newValue !== this.state.value ||
      `${newValue}` !== `${this.state.inputValue}`; // https://github.com/ant-design/ant-design/issues/7363
    if (!('value' in this.props)) {
      this.setState({
        value: newValue,
        inputValue: this.toPrecisionAsStep(v),
      }, callback);
    } else {
      // always set input value same as value
      this.setState({
        inputValue: this.toPrecisionAsStep(this.state.value),
      }, callback);
    }
    if (changed) {
      const { onChange } = this.props;
      onChange(newValue);
    }
  }

  getPrecision = (value) => {
    if ('precision' in this.props) {
      return this.props.precision;
    }
    const valueString = value.toString();
    if (valueString.indexOf('e-') >= 0) {
      return parseInt(valueString.slice(valueString.indexOf('e-') + 2), 10);
    }
    let precision = 0;
    if (valueString.indexOf('.') >= 0) {
      precision = valueString.length - valueString.indexOf('.') - 1;
    }
    return precision;
  }

  // step={1.0} value={1.51}
  // press +
  // then value should be 2.51, rather than 2.5
  // if this.props.precision is undefined
  // https://github.com/react-component/input-number/issues/39
  getMaxPrecision = (currentValue, ratio = 1) => {
    if ('precision' in this.props) {
      return this.props.precision;
    }
    const { step } = this.props;
    const ratioPrecision = this.getPrecision(ratio);
    const stepPrecision = this.getPrecision(step);
    const currentValuePrecision = this.getPrecision(currentValue);
    if (!currentValue) {
      return ratioPrecision + stepPrecision;
    }
    return Math.max(currentValuePrecision, ratioPrecision + stepPrecision);
  }

  getPrecisionFactor = (currentValue, ratio = 1) => {
    const precision = this.getMaxPrecision(currentValue, ratio);
    return Math.pow(10, precision);
  }

  toPrecisionAsStep = (num) => {
    if (this.isNotCompleteNumber(num) || num === '') {
      return num;
    }
    const precision = Math.abs(this.getMaxPrecision(num));
    if (!isNaN(precision)) {
      return Number(num).toFixed(precision);
    }
    return num.toString();
  }

  // '1.' '1x' 'xx' '' => are not complete numbers
  isNotCompleteNumber = num => (
    isNaN(num) ||
      num === '' ||
      num === null ||
      (num && num.toString().indexOf('.') === num.toString().length - 1)
  )

  toNumber = (num) => {
    if (this.isNotCompleteNumber(num)) {
      return num;
    }
    if ('precision' in this.props) {
      return Number(Number(num).toFixed(this.props.precision));
    }
    return Number(num);
  }

  // '1.0' '1.00'  => may be a inputing number
  toNumberWhenUserInput = (num) => {
    // num.length > 16 => prevent input large number will became Infinity
    if ((/\.\d*0$/.test(num) || num.length > 16) && this.state.focused) {
      return num;
    }
    return this.toNumber(num);
  }

  stepCompute = (type, val, rat) => {
    const { step, min } = this.props;
    const precisionFactor = this.getPrecisionFactor(val, rat);
    const precision = Math.abs(this.getMaxPrecision(val, rat));
    let result;
    const direct = type === 'up' ? 1 : -1;
    if (typeof val === 'number') {
      result =
        ((precisionFactor * val + direct * precisionFactor * +step * rat) /
          precisionFactor).toFixed(precision);
    } else {
      result = min === -Infinity ? direct * +step : min;
    }
    return this.toNumber(result);
  }

  step = (type, e, ratio = 1) => {
    if (e) {
      e.preventDefault();
    }
    const props = this.props;
    if (props.disabled) {
      return false;
    }
    const value = this.getCurrentValidValue(this.state.inputValue) || 0;
    if (this.isNotCompleteNumber(value)) {
      return false;
    }
    let val = this.stepCompute(type, value, ratio);
    const outOfRange = val > props.max || val < props.min;
    if (val > props.max) {
      val = props.max;
    } else if (val < props.min) {
      val = props.min;
    }
    this.setValue(val);
    this.setState({
      focused: true,
    });
    return !outOfRange;
  }

  stop = () => {
    if (this.autoStepTimer) {
      clearTimeout(this.autoStepTimer);
    }
  }

  action = (type, e, ratio, recursive) => {
    if (e.persist) {
      e.persist();
    }
    this.stop();
    if (this.step(type, e, ratio)) {
      this.autoStepTimer = setTimeout(() => {
        this.action(type, e, ratio, true);
      }, recursive ? SPEED : DELAY);
    }
  }

  down = (e, ratio, recursive) => {
    this.action('down', e, ratio, recursive);
  }

  up = (e, ratio, recursive) => {
    this.action('up', e, ratio, recursive);
  }

  setInput = (input) => {
    this.input = input;
  }

  getRatio(e) {
    let ratio = 1;
    if (e.metaKey || e.ctrlKey) {
      ratio = 0.1;
    } else if (e.shiftKey) {
      ratio = 10;
    }
    return ratio;
  }

  getValueFromEvent(e) {
    return e.target.value;
  }

  focus() {
    this.input.focus();
  }

  formatWrapper(num) {
    if (this.props.formatter) {
      return this.props.formatter(num);
    }
    return num;
  }

  render() {
    const props = { ...this.props };
    const { prefixCls = '', disabled, readOnly, max, min } = props;
    const classes = classNames({
      [prefixCls]: true,
      [props.className]: !!props.className,
      [`${prefixCls}-disabled`]: disabled,
      [`${prefixCls}-focused`]: this.state.focused,
    });
    let upDisabledClass = '';
    let downDisabledClass = '';
    const { value } = this.state;
    if (value || value === 0) {
      if (!isNaN(value)) {
        const val = Number(value);
        if (val >= (max)) {
          upDisabledClass = `${prefixCls}-handler-up-disabled`;
        }
        if (val <= (min)) {
          downDisabledClass = `${prefixCls}-handler-down-disabled`;
        }
      } else {
        upDisabledClass = `${prefixCls}-handler-up-disabled`;
        downDisabledClass = `${prefixCls}-handler-down-disabled`;
      }
    }

    const editable = !props.readOnly && !props.disabled;

    // focus state, show input value
    // unfocus state, show valid value
    let inputDisplayValue;
    if (this.state.focused) {
      inputDisplayValue = this.state.inputValue;
    } else {
      inputDisplayValue = this.toPrecisionAsStep(this.state.value);
    }

    if (inputDisplayValue === undefined || inputDisplayValue === null) {
      inputDisplayValue = '';
    }

    let upEvents;
    let downEvents;
    const useTouch = false;
    if (useTouch) {
      upEvents = {
        onTouchStart: (editable && !upDisabledClass) ? this.up : noop,
        onTouchEnd: this.stop,
      };
      downEvents = {
        onTouchStart: (editable && !downDisabledClass) ? this.down : noop,
        onTouchEnd: this.stop,
      };
    } else {
      upEvents = {
        onMouseDown: (editable && !upDisabledClass) ? this.up : noop,
        onMouseUp: this.stop,
        onMouseLeave: this.stop,
      };
      downEvents = {
        onMouseDown: (editable && !downDisabledClass) ? this.down : noop,
        onMouseUp: this.stop,
        onMouseLeave: this.stop,
      };
    }
    const inputDisplayValueFormat = this.formatWrapper(inputDisplayValue);
    const isUpDisabled = !!upDisabledClass || disabled || readOnly;
    const isDownDisabled = !!downDisabledClass || disabled || readOnly;

    return (
      <div
        className={classes}
        style={props.style}
      >
        <div className={`${prefixCls}-handler-wrap`}>
          <InputHandler
            disabled={isUpDisabled}
            prefixCls={prefixCls}
            unselectable="unselectable"
            {...upEvents}
            role="button"
            aria-label="Increase Value"
            aria-disabled={!!isUpDisabled}
            className={`${prefixCls}-handler ${prefixCls}-handler-up ${upDisabledClass}`}
          >
            {this.props.upHandler || <Icon type="plus" size="xxs" />}
          </InputHandler>
          <InputHandler
            disabled={isDownDisabled}
            prefixCls={prefixCls}
            unselectable="unselectable"
            {...downEvents}
            role="button"
            aria-label="Decrease Value"
            aria-disabled={!!isDownDisabled}
            className={`${prefixCls}-handler ${prefixCls}-handler-down ${downDisabledClass}`}
          >
            {this.props.downHandler || <Icon type="minus" size="xxs" />}
          </InputHandler>
        </div>
        <div
          className={`${prefixCls}-input-wrap`}
          role="spinbutton"
          aria-valuemin={props.min}
          aria-valuemax={props.max}
          aria-valuenow={value}
        >
          <input
            className={`${prefixCls}-input`}
            tabIndex={props.tabIndex}
            autoComplete="off"
            onFocus={this.onFocus}
            onBlur={this.onBlur}
            autoFocus={props.autoFocus}
            readOnly={props.readOnly}
            disabled={props.disabled}
            max={props.max}
            min={props.min}
            step={props.step}
            onChange={this.onChange}
            ref={this.setInput}
            value={inputDisplayValueFormat}
          />
        </div>
      </div>
    );
  }
}
