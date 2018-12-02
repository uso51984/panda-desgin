import React from 'react';
import classNames from 'classnames';

export default class CellGroup extends React.PureComponent {
  static defaultProps = {
    prefixCls: 'vant-cell',
    border: false,
  }
  render() {
    const { children, prefixCls, border } = this.props;
    const cls = classNames({
      [`${prefixCls}-group`]: true,
      'van-hairline--top-bottom': border,
    });
    return (
      <div className={cls}>
        {children}
      </div>
    );
  }
}
