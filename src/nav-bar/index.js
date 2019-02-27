import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const propTypes = {
  prefixCls: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
  icon: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.node,
  ]),
  leftContent: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.node,
  ]),
  rightContent: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.node,
  ]),
  onLeftClick: PropTypes.func,
};

export default class NavBar extends React.PureComponent {
  static propTypes = propTypes

  static defaultProps = {
    prefixCls: 'panda-navbar',
    onLeftClick: () => {},
  };

  render() {
    const {
      prefixCls, className, children, icon, onLeftClick, leftContent,
      rightContent, ...restProps } = this.props;

    return (
      <div
        {...restProps}
        className={classnames(prefixCls, className)}
      >
        <div
          className={`${prefixCls}__left`}
          role="button"
          onClick={onLeftClick}
        >
          {icon ? (
            <span className={`${prefixCls}__left-icon`}>
              {icon}
            </span>
          ) : null}
          {leftContent}
        </div>
        <div className={`${prefixCls}__title`}>{children}</div>
        <div className={`${prefixCls}__right`}>{rightContent}</div>
      </div>
    );
  }
}
