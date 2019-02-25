import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Checkbox from './Checkbox';

const propTypes = {
  prefixCls: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node,
  onChange: PropTypes.func,
  options: PropTypes.array,
  disabled: PropTypes.bool,
  defaultValue: PropTypes.array,
};

export default class CheckboxGroup extends React.Component {
  static propTypes = propTypes

  static defaultProps = {
    options: [],
    defaultValue: [],
    prefixCls: 'panda-checkbox-group',
    onChange() {},
  };

  constructor(props) {
    super(props);
    this.state = {
      value: props.value || props.defaultValue,
    };
  }

  componentWillReceiveProps(nextProps) {
    if ('value' in nextProps) {
      this.setState({
        value: nextProps.value || [],
      });
    }
  }

  getOptions() {
    const { options } = this.props;
    return options.map((option) => {
      if (typeof option === 'string') {
        return {
          label: option,
          value: option,
        };
      }
      return option;
    });
  }

  toggleOption = (option) => {
    const optionIndex = this.state.value.indexOf(option.value);
    const value = [...this.state.value];

    if (optionIndex === -1) {
      value.push(option.value);
    } else {
      value.splice(optionIndex, 1);
    }

    if (!('value' in this.props)) {
      this.setState({ value });
    }
    this.props.onChange(value);
  }

  render() {
    const { value } = this.state;
    const { prefixCls, className, style, options, disabled } = this.props;

    let children = this.props.children;
    if (options && options.length > 0) {
      children = this.getOptions().map(option => (
        <Checkbox
          key={option.value}
          disabled={'disabled' in option ? option.disabled : disabled}
          value={option.value}
          checked={value.indexOf(option.value) !== -1}
          onChange={() => this.toggleOption(option)}
          className={`${prefixCls}-item`}
        >
          {option.label}
        </Checkbox>
      ));
    }

    const classString = classNames(prefixCls, className);
    return (
      <div className={classString} style={style}>
        {children}
      </div>
    );
  }
}
