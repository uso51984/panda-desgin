import classnames from 'classnames';
import React from 'react';

export default class NavBar extends React.Component {
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
          className={`${prefixCls}-left`}
          role="button"
          onClick={onLeftClick}
        >
          {icon ? (
            <span className={`${prefixCls}-left-icon`} aria-hidden="true">
              {icon}
            </span>
          ) : null}
          {leftContent}
        </div>
        <div className={`${prefixCls}-title`}>{children}</div>
        <div className={`${prefixCls}-right`}>{rightContent}</div>
      </div>
    );
  }
}
