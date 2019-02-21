import React from 'react';
import classNames from 'classnames';

export default class CellGroup extends React.PureComponent {
  static defaultProps = {
    prefixCls: 'panda-cell',
    border: false,
  }

  render() {
    const { children, prefixCls, border } = this.props;
    const cls = classNames({
      [`${prefixCls}-group`]: true,
      'panda-hairline--top-bottom': border,
    });
    return (
      <div className={cls}>
        {children}
      </div>
    );
  }
}
