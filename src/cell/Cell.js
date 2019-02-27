import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import TapFeedback from 'react-tap-feedback';
import Icon from '../icon';

const propTypes = {
  border: PropTypes.bool,
  prefixCls: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
  title: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.element,
  ]),
  desc: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.element,
  ]),
  icon: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.element,
  ]),
  arrow: PropTypes.string,
  size: PropTypes.string,
  activeClass: PropTypes.string,
  required: PropTypes.bool,
};

export default class Cell extends React.PureComponent {
  static propTypes = propTypes

  static defaultProps = {
    prefixCls: 'panda-cell',
    border: true,
    onClick() {},
  }

  handleClick = () => {
    this.props.onClick();
  }

  render() {
    const { prefixCls, title, onClick, value, desc, icon, arrow, size, activeClass,
      border, required, className } = this.props;
    const cls = classNames({
      [prefixCls]: true,
      [`${prefixCls}--${size}`]: size,
      [`${prefixCls}--borderless`]: !border,
      [`${prefixCls}--required`]: required,
    }, className);
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
          (icon || title) && (
          <div className={`${prefixCls}__title`}>
            {icon && icon}
            <span>{title}</span>
            <div className={`${prefixCls}__label`}>{desc}</div>
          </div>
          )}
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
