import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const propTypes = {
  prefixCls: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.element,
  ]),
  onChange: PropTypes.func,
  type: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  readOnly: PropTypes.bool,
  defaultChecked: PropTypes.bool,
  tabIndex: PropTypes.number,
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
};

export default class Checkbox extends React.PureComponent {
  static propTypes = propTypes

  static defaultProps = {
    prefixCls: 'panda-checkbox',
    className: '',
    style: {},
    type: 'checkbox',
    defaultChecked: false,
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

  handleChange = (e) => {
    const { onChange, disabled } = this.props;
    if (disabled) {
      return;
    }
    if (!('checked' in this.props)) {
      this.setState({
        checked: e.target.checked,
      });
    }
    onChange(e);
  };

  saveInput = (node) => {
    this.input = node;
  }

  render() {
    const { prefixCls, className, style, name, id, type, disabled, readOnly,
      tabIndex, value, children } = this.props;

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
      <label className={wrapperCls} style={style} htmlFor="checkbox">
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
            onChange={this.handleChange}
            ref={this.saveInput}
            value={value}
          />
          <span className={`${prefixCls}-inner`} />
        </span>
        {children && <span className="label-text">{children}</span>}
      </label>
    );
  }
}
