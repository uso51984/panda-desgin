import React from 'react';
import classNames from 'classnames';
import Radio from './Radio';

export default class RadioGroup extends React.Component {
  static defaultProps = {
    disabled: false,
    prefixCls: 'panda-radio-group',
    className: '',
  }

  constructor(props) {
    super(props);
    let value;

    if ('value' in props) {
      value = props.value;
    } else if ('defaultValue' in props) {
      value = props.defaultValue;
    }

    this.state = { value };
  }

  componentWillReceiveProps(nextProps) {
    if ('value' in nextProps) {
      this.setState({
        value: nextProps.value,
      });
    }
  }

  onRadioChange = (ev) => {
    const lastValue = this.state.value;
    const { value } = ev.target;

    if (!('value' in this.props)) {
      this.setState({ value });
    }

    const { onChange } = this.props;

    if (onChange && value !== lastValue) {
      onChange(ev);
    }
  }

  render() {
    const { prefixCls, className, options, style, disabled,
      name } = this.props;
    const classString = classNames(prefixCls, className);

    let { children } = this.props;

    if (options && options.length > 0) {
      children = options.map((option, index) => {
        return (
          <Radio
            key={index}
            disabled={option.disabled || disabled}
            value={option.value}
            onChange={this.onRadioChange}
            checked={this.state.value === option.value}
            name={name}
          >
            {option.label}
          </Radio>
        );
      });
    }

    return (
      <div
        className={classString}
        style={style}
      >
        {children}
      </div>
    );
  }
}
