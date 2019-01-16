import React from 'react';
import classNames from 'classnames';
import TouchFeedback from 'react-tap-feedback';

export default class KeyboardItem extends React.PureComponent {
  static defaultProps = {
    onClick: () => {},
    disabled: false,
  };

  render() {
    const { prefixCls, onClick, className, children,
      type, action } = this.props;

    let value = children;
    if (action) {
      value = action;
    }
    const cls = classNames(`${prefixCls}-item`, {
      'panda-hairline': true,
      [`${prefixCls}-item--gray`]: type === 'gray',
      [`${prefixCls}-item--middle`]: type === 'middle',
    }, className);

    return (
      <TouchFeedback activeClassName={`${prefixCls}-item--active`}>
        <span
          onClick={(e) => { onClick(value, e); }}
          className={cls}
          role="button"
          aria-label={children}
        >
          {children}
        </span>
      </TouchFeedback>
    );
  }
}
