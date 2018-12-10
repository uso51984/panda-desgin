import React, { Component } from 'react';
import classNames from 'classnames';
import ReactDOM from 'react-dom';
import Animate from '../AnimationGroup';
import Notice from './Notice';

let seed = 0;
const now = Date.now();

function createChainedFunction(...reset) {
  const args = [].slice.call(reset, 0);

  if (args.length === 1) {
    return args[0];
  }

  return function chainedFunction() {
    for (let i = 0; i < args.length; i++) {
      if (args[i] && args[i].apply) {
        args[i].apply(this, reset);
      }
    }
  };
}

function getUuid() {
  return `rcNotification_${now}_${seed++}`;
}

class Notification extends Component {
  static defaultProps = {
    prefixCls: 'rmc-notification',
    animation: 'fade',
    style: {
      top: 65,
      left: '50%',
    },
  };

  state = {
    notices: [],
  };

  getTransitionName() {
    const props = this.props;
    let transitionName = props.transitionName;
    if (!transitionName && props.animation) {
      transitionName = `${props.prefixCls}-${props.animation}`;
    }
    return transitionName;
  }

  add = (notice) => {
    notice.key = notice.key || getUuid();
    this.setState((previousState) => {
      const notices = previousState.notices;
      if (!notices.filter(v => v.key === notice.key).length) {
        return {
          notices: notices.concat(notice),
        };
      }
    });
  }

  remove = (key) => {
    this.setState(previousState => ({
      notices: previousState.notices.filter(notice => notice.key !== key),
    }));
  }

  render() {
    const props = this.props;
    const noticeNodes = this.state.notices.map((notice) => {
      const onClose = createChainedFunction(this.remove.bind(this, notice.key), notice.onClose);
      return (
        <Notice
          prefixCls={props.prefixCls}
          {...notice}
          onClose={onClose}
        >
          {notice.content}
        </Notice>
      );
    });
    const className = {
      [props.prefixCls]: 1,
      [props.className]: !!props.className,
    };

    return (
      <div className={classNames(className)} style={props.style}>
        <Animate
          transitionName={this.getTransitionName()}
        >
          {noticeNodes}
        </Animate>
      </div>
    );
  }
}

Notification.newInstance = function newNotificationInstance(properties, callback) {
  const { getContainer, ...props } = properties || {};
  let div;
  if (getContainer) {
    div = getContainer();
  } else {
    div = document.createElement('div');
    document.body.appendChild(div);
  }
  let called = false;
  function ref(notification) {
    if (called) {
      return;
    }
    called = true;
    callback({
      notice(noticeProps) {
        notification.add(noticeProps);
      },
      removeNotice(key) {
        notification.remove(key);
      },
      component: notification,
      destroy() {
        ReactDOM.unmountComponentAtNode(div);
        if (!getContainer) {
          document.body.removeChild(div);
        }
      },
    });
  }
  ReactDOM.render(<Notification {...props} ref={ref} />, div);
};

export default Notification;
