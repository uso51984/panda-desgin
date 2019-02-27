import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import TouchFeedback from 'react-tap-feedback';

const propTypes = {
  prefixCls: PropTypes.string,
  className: PropTypes.string,
  action: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
};

export default class KeyboardItem extends React.PureComponent {
  static propTypes = propTypes

  static defaultProps = {
    onClick: () => {},
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
