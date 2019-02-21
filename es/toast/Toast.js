import _defineProperty from "@babel/runtime/helpers/defineProperty";
import React from 'react';
import classNames from 'classnames';
import Notification from '../notification';
import Icon from '../icon';
var messageInstance;
var prefixCls = 'panda-toast';

function getMessageInstance(mask, callback) {
  var _classNames;

  if (messageInstance) {
    messageInstance.destroy();
    messageInstance = null;
  }

  Notification.newInstance({
    prefixCls: prefixCls,
    style: {},
    transitionName: 'am-fade',
    className: classNames((_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-mask"), mask), _defineProperty(_classNames, "".concat(prefixCls, "-nomask"), !mask), _classNames))
  }, function (notification) {
    return callback && callback(notification);
  });
}

function notice(content, type) {
  var duration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 3;

  var _onClose = arguments.length > 3 ? arguments[3] : undefined;

  var mask = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;
  var iconTypes = {
    info: '',
    success: 'success',
    fail: 'fail',
    offline: 'dislike',
    loading: 'loading'
  };
  var iconType = iconTypes[type];
  getMessageInstance(mask, function (notification) {
    messageInstance = notification;
    notification.notice({
      duration: duration,
      style: {},
      content: iconType ? React.createElement("div", {
        className: "".concat(prefixCls, "-text ").concat(prefixCls, "-text-icon"),
        role: "alert",
        "aria-live": "assertive"
      }, React.createElement(Icon, {
        type: iconType,
        size: "lg"
      }), React.createElement("div", {
        className: "".concat(prefixCls, "-text-info")
      }, content)) : React.createElement("div", {
        className: "".concat(prefixCls, "-text"),
        role: "alert",
        "aria-live": "assertive"
      }, React.createElement("div", null, content)),
      closable: true,
      onClose: function onClose() {
        /* istanbul ignore else */
        if (_onClose) {
          _onClose();
        }

        notification.destroy();
        notification = null;
        messageInstance = null;
      }
    });
  });
}

export default {
  SHORT: 3,
  LONG: 8,
  show: function show(content, duration, mask) {
    return notice(content, 'info', duration, function () {}, mask);
  },
  info: function info(content, duration, onClose, mask) {
    return notice(content, 'info', duration, onClose, mask);
  },
  success: function success(content, duration, onClose, mask) {
    return notice(content, 'success', duration, onClose, mask);
  },
  fail: function fail(content, duration, onClose, mask) {
    return notice(content, 'fail', duration, onClose, mask);
  },
  offline: function offline(content, duration, onClose, mask) {
    return notice(content, 'offline', duration, onClose, mask);
  },
  loading: function loading(content, duration, onClose, mask) {
    return notice(content, 'loading', duration, onClose, mask);
  },
  hide: function hide() {
    /* istanbul ignore else */
    if (messageInstance) {
      messageInstance.destroy();
      messageInstance = null;
    }
  }
};