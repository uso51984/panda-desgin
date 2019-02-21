"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _notification = _interopRequireDefault(require("../notification"));

var _Icon = _interopRequireDefault(require("../Icon"));

var messageInstance;
var prefixCls = 'panda-toast';

function getMessageInstance(mask, callback) {
  var _classNames;

  if (messageInstance) {
    messageInstance.destroy();
    messageInstance = null;
  }

  _notification["default"].newInstance({
    prefixCls: prefixCls,
    style: {},
    transitionName: 'am-fade',
    className: (0, _classnames["default"])((_classNames = {}, (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-mask"), mask), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-nomask"), !mask), _classNames))
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
      content: iconType ? _react["default"].createElement("div", {
        className: "".concat(prefixCls, "-text ").concat(prefixCls, "-text-icon"),
        role: "alert",
        "aria-live": "assertive"
      }, _react["default"].createElement(_Icon["default"], {
        type: iconType,
        size: "lg"
      }), _react["default"].createElement("div", {
        className: "".concat(prefixCls, "-text-info")
      }, content)) : _react["default"].createElement("div", {
        className: "".concat(prefixCls, "-text"),
        role: "alert",
        "aria-live": "assertive"
      }, _react["default"].createElement("div", null, content)),
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

var _default = {
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
exports["default"] = _default;