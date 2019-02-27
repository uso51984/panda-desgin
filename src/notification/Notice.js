import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const propTypes = {
  prefixCls: PropTypes.string,
  className: PropTypes.string,
  duration: PropTypes.number,
  style: PropTypes.object,
  onClose: PropTypes.func,
  closable: PropTypes.bool,
};

export default class Notice extends Component {
  static propTypes = propTypes

  static defaultProps = {
    onClose() {},
    duration: 1.5,
    style: {
      right: '50%',
    },
  };

  componentDidMount() {
    this.startCloseTimer();
  }

  componentWillUnmount() {
    this.clearCloseTimer();
  }

  close = () => {
    this.clearCloseTimer();
    this.props.onClose();
  }

  startCloseTimer = () => {
    if (this.props.duration) {
      this.closeTimer = setTimeout(() => {
        this.close();
      }, this.props.duration * 1000);
    }
  }

  clearCloseTimer = () => {
    if (this.closeTimer) {
      clearTimeout(this.closeTimer);
      this.closeTimer = null;
    }
  }

  render() {
    const { prefixCls, closable, className, style, children } = this.props;
    const componentClass = `${prefixCls}-notice`;
    const cls = classNames(componentClass, {
      [`${componentClass}-closable`]: closable,
    }, className);

    return (
      <div className={cls} style={style}>
        <div className={`${componentClass}-content`}>{children}</div>
        {
          closable ? (
            <a onClick={this.close} className={`${componentClass}-close`}>
              <span className={`${componentClass}-close-x`} />
            </a>
          ) : null
        }
      </div>
    );
  }
}
