import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Radio from './Radio';

const propTypes = {
  prefixCls: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
  ]),
  defaultValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
  ]),
};

export default class RadioGroup extends React.Component {
  static propTypes = propTypes

  static defaultProps = {
    disabled: false,
    prefixCls: 'panda-radio-group',
    className: '',
    onChange() {},
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

    if (value !== lastValue) {
      this.props.onChange(ev);
    }
  }

  render() {
    const { prefixCls, className, options, style, disabled,
      name } = this.props;
    const classString = classNames(prefixCls, className);

    let { children } = this.props;

    if (options && options.length > 0) {
      children = options.map((option, index) => (
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
      ));
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
