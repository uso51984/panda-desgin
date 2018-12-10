import React, { Component } from 'react';
import classNames from 'classnames';

export default class Notice extends Component {
  static defaultProps = {
    onEnd() {},
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
    const props = this.props;
    const componentClass = `${props.prefixCls}-notice`;
    const className = {
      [`${componentClass}`]: 1,
      [`${componentClass}-closable`]: props.closable,
      [props.className]: !!props.className,
    };
    return (
      <div className={classNames(className)} style={props.style}>
        <div className={`${componentClass}-content`}>{props.children}</div>
        {
          props.closable ?
            <a onClick={this.close} className={`${componentClass}-close`}>
              <span className={`${componentClass}-close-x`} />
            </a> : null
        }
      </div>
    );
  }
}
