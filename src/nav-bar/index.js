import classnames from 'classnames';
import React from 'react';

export default class NavBar extends React.PureComponent {
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
