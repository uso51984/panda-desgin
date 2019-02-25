import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const propTypes = {
  border: PropTypes.bool,
  prefixCls: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
};

export default class CellGroup extends React.PureComponent {
  static propTypes = propTypes

  static defaultProps = {
    prefixCls: 'panda-cell',
    border: false,
  }

  render() {
    const { children, prefixCls, border, className } = this.props;
    const cls = classNames({
      [`${prefixCls}-group`]: true,
      'panda-hairline--top-bottom': border,
    }, className);
    return (
      <div className={cls}>
        {children}
      </div>
    );
  }
}
