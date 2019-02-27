import React from 'react';
import PropTypes from 'prop-types';
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
  return `pandaNotification_${now}_${seed++}`;
}

const propTypes = {
  prefixCls: PropTypes.string,
  className: PropTypes.string,
  animation: PropTypes.string,
  transitionName: PropTypes.string,
  style: PropTypes.object,
};

class Notification extends React.Component {
  static propTypes = propTypes

  static defaultProps = {
    prefixCls: 'panda-notification',
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
    const { prefixCls, style, className } = this.props;
    const noticeNodes = this.state.notices.map((notice) => {
      const onClose = createChainedFunction(this.remove.bind(this, notice.key), notice.onClose);
      return (
        <Notice
          prefixCls={prefixCls}
          {...notice}
          onClose={onClose}
        >
          {notice.content}
        </Notice>
      );
    });
    const cls = classNames(prefixCls, className);

    return (
      <div className={cls} style={style}>
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
