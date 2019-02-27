import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Icon from '../icon';

const propTypes = {
  prefixCls: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  defaultChecked: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  platform: PropTypes.string,
  onClick: PropTypes.func,
  color: PropTypes.string,
  loading: PropTypes.bool,
};

export default class Switch extends React.PureComponent {
  static propTypes = propTypes

  static defaultProps = {
    prefixCls: 'panda-switch',
    name: '',
    defaultChecked: false,
    disabled: false,
    onChange() { },
    platform: 'ios',
    onClick() { },
  };

  constructor(props) {
    super(props);

    let checked = props.defaultChecked;
    if (('checked' in props)) {
      checked = props.checked;
    }

    this.state = { checked };
  }

  componentWillReceiveProps(nextProps) {
    if (('checked' in nextProps)) {
      this.setState({ checked: nextProps.checked });
    }
  }

  onChange = (e) => {
    const { checked } = e.target;
    if (!('checked' in this.props)) {
      this.setState({ checked });
    }
    this.props.onChange(checked);
  }

  onClick = (e) => {
    let val;
    if (e && e.target && e.target.checked !== undefined) {
      val = e.target.checked;
    } else {
      val = this.props.checked;
    }
    this.props.onClick(val);
  }

  render() {
    const {
      prefixCls, name, disabled, className, platform, color, loading,
    } = this.props;
    const { checked } = this.state;

    const wrapCls = classnames(prefixCls, className, {
      [`${prefixCls}-android`]: platform === 'android',
      [`${prefixCls}-checked`]: checked,
    });

    const fackInputCls = classnames('checkbox', {
      'checkbox-disabled': disabled,
    });

    const style = this.props.style || {};
    if (color && checked) {
      style.backgroundColor = color;
    }

    return (
      <label className={wrapCls} htmlFor="checkbox">
        <input
          type="checkbox"
          name={name}
          className={`${prefixCls}-checkbox`}
          disabled={disabled}
          checked={checked}
          onChange={this.onChange}
          value={checked ? 'on' : 'off'}
          {...(!disabled ? { onClick: this.onClick } : {})}
        />
        {
          loading && <Icon type="loading" className={`${prefixCls}-loading-icon`} />
        }
        <div
          className={fackInputCls}
          style={style}
          {...(disabled ? { onClick: this.onClick } : {})}
        />
      </label>
    );
  }
}
