import React from 'react';
import PropTypes from 'prop-types';
import TapFeedback from 'react-tap-feedback';
import classnames from 'classnames';
import { isString } from '../utils/checkType';
import Icon from '../icon';

const propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.element,
  ]).isRequired,
  prefixCls: PropTypes.string,
  className: PropTypes.string,
  activeClassName: PropTypes.string,
  type: PropTypes.string,
  size: PropTypes.string,
  inline: PropTypes.bool,
  loading: PropTypes.bool,
  style: PropTypes.objectOf(PropTypes.string),
  activeStyle: PropTypes.objectOf(PropTypes.string),
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  iconType: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
};

class Button extends React.PureComponent {
  static propTypes = propTypes

  static defaultProps = {
    prefixCls: 'panda-button',
    size: 'large',
    inline: false,
    disabled: false,
    loading: false,
  };

  getIconEl(iconType) {
    if (!iconType) {
      return null;
    }

    const { prefixCls, size } = this.props;
    if (isString(iconType)) {
      return (
        <Icon
          type={iconType}
          size={size === 'small' ? 'xxs' : 'md'}
          className={`${prefixCls}-icon`}
        />
      );
    }

    const rawCls = iconType.props && iconType.props.className;
    const isSmall = size === 'small';
    const cls = classnames({
      'panda-icon': true,
      [`${prefixCls}-icon`]: true,
      'panda-icon-xxs': isSmall,
      'panda-icon-md': !isSmall,
      [rawCls]: rawCls,
    });

    return React.cloneElement(iconType, {
      className: cls,
    });
  }

  render() {
    const { children, className, prefixCls, type, size, inline, disabled,
      icon, loading, activeStyle, activeClassName, onClick, ...restProps
    } = this.props;

    const iconType = loading ? 'loading' : icon;
    const wrapCls = classnames(prefixCls, className, {
      [`${prefixCls}--primary`]: type === 'primary',
      [`${prefixCls}--ghost`]: type === 'ghost',
      [`${prefixCls}--warning`]: type === 'warning',
      [`${prefixCls}--small`]: size === 'small',
      [`${prefixCls}--inline`]: inline,
      [`${prefixCls}--disabled`]: disabled,
      [`${prefixCls}--loading`]: loading,
      [`${prefixCls}--icon`]: iconType,
    });

    return (
      <TapFeedback
        activeClassName={activeClassName || `${prefixCls}--active`}
        disabled={disabled}
        activeStyle={activeStyle}
      >
        <a
          {...restProps}
          className={wrapCls}
          onClick={disabled ? undefined : onClick}
          aria-disabled={disabled}
        >
          {this.getIconEl(iconType)}
          {children}
        </a>
      </TapFeedback>
    );
  }
}

export default Button;
