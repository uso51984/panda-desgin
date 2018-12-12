import React from 'react';
import classNames from 'classnames';
import TapFeedback from 'react-tap-feedback';
import Icon from '../Icon';

export default class Cell extends React.PureComponent {
  static defaultProps = {
    prefixCls: 'panda-cell',
    border: true,
  }

  handleClick = () => {
    const { onClick } = this.props;
    if (onClick) {
      onClick();
    }
  }

  render() {
    const { prefixCls, title, onClick, value, desc, icon, arrow, size, activeClass,
      border, required } = this.props;
    const cls = classNames({
      [prefixCls]: true,
      [`${prefixCls}--${size}`]: size,
      [`${prefixCls}--borderless`]: !border,
      [`${prefixCls}--required`]: required,
    });
    return (
      <TapFeedback
        disabled={!onClick}
        activeClassName={classNames({
          [`${prefixCls}--active`]: !activeClass,
          [activeClass]: activeClass,
        })}
      >
        <div className={cls} onClick={this.handleClick}>
          {
          (icon || title) &&
          <div className={`${prefixCls}__title`}>
            {icon && icon}
            <span>{title}</span>
            <div className={`${prefixCls}__label`}>{desc}</div>
          </div>
        }
          <div
            className={classNames(`${prefixCls}__value`, {
            [`${prefixCls}__value--alone`]: !icon && !title,
          })}
          >
            <span>{value}</span>
            {arrow && <Icon type={arrow} className={`${prefixCls}__right-icon`} />}
          </div>
        </div>
      </TapFeedback>

    );
  }
}
