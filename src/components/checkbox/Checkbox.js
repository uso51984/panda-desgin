import React from 'react';
// import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class Checkbox extends React.PureComponent {
  static defaultProps = {
    prefixCls: 'panda-checkbox',
    className: '',
    style: {},
    type: 'checkbox',
    defaultChecked: false,
    onFocus() {},
    onBlur() {},
    onChange() {},
  };
  constructor(props) {
    super(props);

    const checked = 'checked' in props ? props.checked : props.defaultChecked;

    this.state = {
      checked,
    };
  }

  componentWillReceiveProps(nextProps) {
    if ('checked' in nextProps) {
      this.setState({
        checked: nextProps.checked,
      });
    }
  }
  focus() {
    this.input.focus();
  }

  blur() {
    this.input.blur();
  }

  handleChange = (e) => {
    const { props } = this;
    if (props.disabled) {
      return;
    }
    if (!('checked' in props)) {
      this.setState({
        checked: e.target.checked,
      });
    }
    props.onChange({
      target: {
        ...props,
        checked: e.target.checked,
      },
      stopPropagation() {
        e.stopPropagation();
      },
      preventDefault() {
        e.preventDefault();
      },
      nativeEvent: e.nativeEvent,
    });
  };

  saveInput = (node) => {
    this.input = node;
  }

  render() {
    const { prefixCls, className, style, name, id, type, disabled, readOnly, tabIndex, onClick,
      onFocus, onBlur, autoFocus, value, children, ...others } = this.props;

    const globalProps = Object.keys(others).reduce((prev, key) => {
      if (key.substr(0, 5) === 'aria-' || key.substr(0, 5) === 'data-' || key === 'role') {
        prev[key] = others[key];
      }
      return prev;
    }, {});

    const { checked } = this.state;

    const wrapperCls = classNames({
      [`${prefixCls}-wrapper`]: true,
      [`${prefixCls}-wrapper--disabled`]: disabled,
    });

    const classString = classNames(prefixCls, className, {
      [`${prefixCls}--checked`]: checked,
      [`${prefixCls}--disabled`]: disabled,
    });

    return (
      <label className={wrapperCls} style={style}>
        <span className={classString}>
          <input
            name={name}
            id={id}
            type={type}
            readOnly={readOnly}
            disabled={disabled}
            tabIndex={tabIndex}
            className={`${prefixCls}-input`}
            checked={!!checked}
            onClick={onClick}
            onFocus={onFocus}
            onBlur={onBlur}
            onChange={this.handleChange}
            autoFocus={autoFocus}
            ref={this.saveInput}
            value={value}
            {...globalProps}
          />
          <span className={`${prefixCls}-inner`} />
        </span>
        {children && <span className="label-text">{children}</span>}
      </label>
    );
  }
}
