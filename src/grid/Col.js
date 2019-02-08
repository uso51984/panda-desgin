import React from 'react';
import classNames from 'classnames';

export default class Col extends React.PureComponent {
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
