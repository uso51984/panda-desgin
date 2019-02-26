import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const propTypes = {
  prefixCls: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.node,
  ]),
  Tag: PropTypes.string,
  offset: PropTypes.string,
  span: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
};

export default class Col extends React.PureComponent {
  static propTypes = propTypes

  static defaultProps = {
    Tag: 'div',
    prefixCls: 'panda-col',
  }

  render() {
    const { Tag, children, prefixCls, span, offset, style } = this.props;
    const cls = classNames({
      [prefixCls]: true,
      [`${prefixCls}--${span}`]: span,
      [`${prefixCls}--offset-${offset}`]: offset,
    });
    return (
      <Tag className={cls} style={style}>
        {children}
      </Tag>
    );
  }
}
