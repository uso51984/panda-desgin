import * as React from 'react';
import Notification from './Notification';
import Icon from '../icon';

const notificationInstance = {};
let defaultDuration = 4.5;
let defaultTop = 24;
let defaultBottom = 24;
let defaultPlacement = 'topRight';
let defaultGetContainer;


function setNotificationConfig(options) {
  const { duration, placement, bottom, top, getContainer } = options;
  if (duration !== undefined) {
    defaultDuration = duration;
  }
  if (placement !== undefined) {
    defaultPlacement = placement;
  }
  if (bottom !== undefined) {
    defaultBottom = bottom;
  }
  if (top !== undefined) {
    defaultTop = top;
  }
  if (getContainer !== undefined) {
    defaultGetContainer = getContainer;
  }
}

function getPlacementStyle(
  placement,
  top = defaultTop,
  bottom = defaultBottom,
) {
  let style;
  switch (placement) {
    case 'topLeft':
      style = {
        left: 0,
        top,
        bottom: 'auto',
      };
      break;
    case 'topRight':
      style = {
        right: 0,
        top,
        bottom: 'auto',
      };
      break;
    case 'bottomLeft':
      style = {
        left: 0,
        top: 'auto',
        bottom,
      };
      break;
    default:
      style = {
        right: 0,
        top: 'auto',
        bottom,
      };
      break;
  }
  return style;
}

function getNotificationInstance(
  {
    prefixCls,
    placement = defaultPlacement,
    getContainer = defaultGetContainer,
    top,
    bottom,
  },
  callback,
) {
  const cacheKey = `${prefixCls}-${placement}`;
  if (notificationInstance[cacheKey]) {
    callback(notificationInstance[cacheKey]);
    return;
  }
  Notification.newInstance(
    {
      prefixCls,
      className: `${prefixCls}-${placement}`,
      style: getPlacementStyle(placement, top, bottom),
      getContainer,
      closeIcon: <Icon className={`${prefixCls}-close-icon`} type="close" />,
    },
    (notification) => {
      notificationInstance[cacheKey] = notification;
      callback(notification);
    },
  );
}

const typeToIcon = {
  success: 'check-circle-o',
  info: 'info-circle-o',
  error: 'close-circle-o',
  warning: 'exclamation-circle-o',
};

function notice(args) {
  const outerPrefixCls = args.prefixCls || 'an-notification';
  const prefixCls = `${outerPrefixCls}-notice`;
  const duration = args.duration === undefined ? defaultDuration : args.duration;

  let iconNode = null;
  if (args.icon) {
    iconNode = <span className={`${prefixCls}-icon`}>{args.icon}</span>;
  } else if (args.type) {
    const iconType = typeToIcon[args.type];
    iconNode = (
      <Icon className={`${prefixCls}-icon ${prefixCls}-icon-${args.type}`} type={iconType} />
    );
  }

  const autoMarginTag =
    !args.description && iconNode ? (
      <span className={`${prefixCls}-message-single-line-auto-margin`} />
    ) : null;

  const { placement, top, bottom, getContainer } = args;

  getNotificationInstance(
    {
      prefixCls: outerPrefixCls,
      placement,
      top,
      bottom,
      getContainer,
    },
    (notification) => {
      notification.notice({
        content: (
          <div className={iconNode ? `${prefixCls}-with-icon` : ''}>
            {iconNode}
            <div className={`${prefixCls}-message`}>
              {autoMarginTag}
              {args.message}
            </div>
            <div className={`${prefixCls}-description`}>{args.description}</div>
            {args.btn ? <span className={`${prefixCls}-btn`}>{args.btn}</span> : null}
          </div>
        ),
        duration: null,
        closable: true,
        onClose: args.onClose,
        onClick: args.onClick,
        key: args.key,
        style: args.style || {},
        className: args.className,
      });
    },
  );
}

const api = {
  open: notice,
  close(key) {
    Object.keys(notificationInstance).forEach(cacheKey =>
      notificationInstance[cacheKey].removeNotice(key));
  },
  config: setNotificationConfig,
  destroy() {
    Object.keys(notificationInstance).forEach((cacheKey) => {
      notificationInstance[cacheKey].destroy();
      delete notificationInstance[cacheKey];
    });
  },
};

['success', 'info', 'warning', 'error'].forEach((type) => {
  api[type] = args =>
    api.open({
      ...args,
      type,
    });
});

api.warn = api.warning;

export default api;

export class NotificationContainer extends React.Component {
  componentDidUpdate() {
  }

  componentWillUnmount() {
    api.destroy();
  }

  render() {
    return null;
  }
}
