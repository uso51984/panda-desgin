import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { isNumber } from '../utils/checkType';

const propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.element,
  ]),
  prefixCls: PropTypes.string,
  size: PropTypes.string,
  className: PropTypes.string,
  overflowCount: PropTypes.number,
  corner: PropTypes.bool,
  dot: PropTypes.bool,
  text: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
};

export default class Badge extends React.PureComponent {
  static propTypes = propTypes

  static defaultProps = {
    prefixCls: 'panda-badge',
    size: 'small',
    overflowCount: 99,
    dot: false,
    corner: false,
  };

  render() {
    const { className, prefixCls, children, size, overflowCount, dot,
      corner, hot, ...restProps } = this.props;

    let { text } = this.props;

    text = (isNumber(text) && text > overflowCount) ? `${overflowCount}+` : text;

    if (dot) {
      text = '';
    }

    const scrollNumberCls = classnames({
      [`${prefixCls}-dot`]: dot,
      [`${prefixCls}-dot-large`]: dot && size === 'large',
      [`${prefixCls}-text`]: !dot && !corner,
      [`${prefixCls}-corner`]: corner,
      [`${prefixCls}-corner-large`]: corner && size === 'large',
    });

    const badgeCls = classnames(prefixCls, {
      [`${prefixCls}-not-a-wrapper`]: !children,
      [`${prefixCls}-corner-wrapper`]: corner,
      [`${prefixCls}-hot`]: hot,
      [`${prefixCls}-corner-wrapper-large`]: corner && size === 'large',
    }, className);

    return (
      <span className={badgeCls}>
        {children}
        {(text || dot) && (
          <sup className={scrollNumberCls} {...restProps}>
            {text}
          </sup>
        )}
      </span>
    );
  }
}
