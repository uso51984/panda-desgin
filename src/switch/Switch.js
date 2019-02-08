import classnames from 'classnames';
import React from 'react';
import Icon from '../Icon';

export default class Switch extends React.PureComponent {
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
      prefixCls, name, disabled, className, platform, color, loading, ...restProps
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
      <label className={wrapCls}>
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
