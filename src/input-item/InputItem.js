import React from 'react';
import classNames from 'classnames';
import TouchFeedback from 'react-tap-feedback';
import Input from './Input';

function normalizeValue(value) {
  if (typeof value === 'undefined' || value === null) {
    return '';
  }
  return `${value}`;
}

const noop = () => {};

class InputItem extends React.Component {
  static defaultProps = {
    prefixCls: 'panda-input',
    type: 'text',
    disabled: false,
    placeholder: '',
    error: false,
    onChange: noop,
    onBlur: noop,
    onFocus: noop,
    clear: false,
  }

  constructor(props) {
    super(props);

    this.state = {
      value: normalizeValue(props.value || props.defaultValue),
    };
  }

  componentWillReceiveProps(nextProps) {
    if ('value' in nextProps) {
      this.setState({
        value: nextProps.value,
      });
    }
  }

  onInputChange = (e) => {
    const { value } = e.target;
    const { type } = this.props;
    let newValue = value;
    switch (type) {
      case 'bankCard':
        newValue = value.replace(/\D/g, '').replace(/(....)(?=.)/g, '$1 ');
        break;
      case 'phone':
        newValue = value.replace(/\D/g, '').substring(0, 11);
        const valueLen = newValue.length;
        if (valueLen > 3 && valueLen < 8) {
          newValue = `${newValue.substr(0, 3)} ${newValue.substr(3)}`;
        } else if (valueLen >= 8) {
          newValue = `${newValue.substr(0, 3)} ${newValue.substr(3, 4)} ${newValue.substr(7)}`;
        }
        break;
      case 'number':
        newValue = value.replace(/\D/g, '');
        break;
      case 'text':
      case 'password':
      default:
        break;
    }

    this.handleOnChange(newValue, e);
  }

  handleOnChange = (value, e) => {
    const { onChange } = this.props;

    if (!('value' in this.props)) {
      this.setState({ value });
    } else {
      this.setState({ value: this.props.value });
    }
    onChange(value, e);
  }

  onInputFocus = (value) => {
    if (this.debounceTimeout) {
      clearTimeout(this.debounceTimeout);
      this.debounceTimeout = null;
    }
    this.setState({ focus: true });

    this.props.onFocus(value);
  }

  onInputBlur = (value) => {
    this.debounceTimeout = setTimeout(() => {
      /* istanbul ignore next */
      if (document.activeElement !== (this.inputRef && this.inputRef.inputRef)) {
        this.setState({ focus: false });
      }
    }, 200);
    this.props.onBlur(value);
  }

  clearInput = () => {
    this.setState({
      value: '',
    });

    this.props.onChange('');
    this.focus();
  }

  focus = () => {
    this.inputRef.focus();
  }

  getClearNode() {
    const { clear, readOnly, disabled, prefixCls } = this.props;
    const { value } = this.state;
    return (clear && !readOnly && !disabled && value && (
      <TouchFeedback activeClassName={`${prefixCls}-clear-active`}>
        <div className={`${prefixCls}-clear`} onClick={this.clearInput} />
      </TouchFeedback>
    ));
  }

  getErrorNode() {
    const { prefixCls, error } = this.props;
    return (error && (<div className={`${prefixCls}-error-extra`} />));
  }

  render() {
    const { prefixCls, className, label, suffix, type,
      readOnly, disabled, error, maxLength, ...restProps } = this.props;
    delete restProps.defaultValue;
    delete restProps.clear;

    const { value, focus } = this.state;
    const wrapCls = classNames(
      `${prefixCls}-wrapper`,
      className,
      {
        [`${prefixCls}-disabled`]: disabled,
        [`${prefixCls}-error`]: error,
        [`${prefixCls}-focus`]: focus,
      },
    );

    const suffixNode = suffix ? (
      <span className={`${prefixCls}-suffix`}>
        {suffix}
      </span>
    ) : null;

    const labelNode = label ? (
      <div className={`${prefixCls}-label`}>
        <span>{label}</span>
      </div>
    ) : null;


    let inputType = 'text';
    if (type === 'bankCard' || type === 'phone') {
      inputType = 'tel';
    } else if (type === 'password') {
      inputType = 'password';
    } else if (type === 'digit') {
      inputType = 'number';
    } else if (type !== 'text' && type !== 'number') {
      inputType = type;
    }

    return (
      <div className={wrapCls}>
        {labelNode}
        <div className={`${prefixCls}-control`}>
          <Input
            {...restProps}
            value={normalizeValue(value)}
            ref={el => (this.inputRef = el)}
            type={inputType}
            onChange={this.onInputChange}
            onFocus={this.onInputFocus}
            onBlur={this.onInputBlur}
            readOnly={readOnly}
            disabled={disabled}
          />
          {suffixNode}
          {this.getClearNode()}
          {this.getErrorNode()}
        </div>
      </div>
    );
  }
}

export default InputItem;
