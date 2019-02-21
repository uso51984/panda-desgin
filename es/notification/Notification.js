import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _extends from "@babel/runtime/helpers/extends";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import React, { Component } from 'react';
import classNames from 'classnames';
import ReactDOM from 'react-dom';
import Animate from '../AnimationGroup';
import Notice from './Notice';
var seed = 0;
var now = Date.now();

function createChainedFunction() {
  for (var _len = arguments.length, reset = new Array(_len), _key = 0; _key < _len; _key++) {
    reset[_key] = arguments[_key];
  }

  var args = [].slice.call(reset, 0);

  if (args.length === 1) {
    return args[0];
  }

  return function chainedFunction() {
    for (var i = 0; i < args.length; i++) {
      if (args[i] && args[i].apply) {
        args[i].apply(this, reset);
      }
    }
  };
}

function getUuid() {
  return "pandaNotification_".concat(now, "_").concat(seed++);
}

var Notification =
/*#__PURE__*/
function (_Component) {
  _inherits(Notification, _Component);

  function Notification() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Notification);

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Notification)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      notices: []
    });

    _defineProperty(_assertThisInitialized(_this), "add", function (notice) {
      notice.key = notice.key || getUuid();

      _this.setState(function (previousState) {
        var notices = previousState.notices;

        if (!notices.filter(function (v) {
          return v.key === notice.key;
        }).length) {
          return {
            notices: notices.concat(notice)
          };
        }
      });
    });

    _defineProperty(_assertThisInitialized(_this), "remove", function (key) {
      _this.setState(function (previousState) {
        return {
          notices: previousState.notices.filter(function (notice) {
            return notice.key !== key;
          })
        };
      });
    });

    return _this;
  }

  _createClass(Notification, [{
    key: "getTransitionName",
    value: function getTransitionName() {
      var props = this.props;
      var transitionName = props.transitionName;

      if (!transitionName && props.animation) {
        transitionName = "".concat(props.prefixCls, "-").concat(props.animation);
      }

      return transitionName;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this,
          _className;

      var props = this.props;
      var noticeNodes = this.state.notices.map(function (notice) {
        var onClose = createChainedFunction(_this2.remove.bind(_this2, notice.key), notice.onClose);
        return React.createElement(Notice, _extends({
          prefixCls: props.prefixCls
        }, notice, {
          onClose: onClose
        }), notice.content);
      });
      var className = (_className = {}, _defineProperty(_className, props.prefixCls, 1), _defineProperty(_className, props.className, !!props.className), _className);
      return React.createElement("div", {
        className: classNames(className),
        style: props.style
      }, React.createElement(Animate, {
        transitionName: this.getTransitionName()
      }, noticeNodes));
    }
  }]);

  return Notification;
}(Component);

_defineProperty(Notification, "defaultProps", {
  prefixCls: 'panda-notification',
  animation: 'fade',
  style: {
    top: 65,
    left: '50%'
  }
});

Notification.newInstance = function newNotificationInstance(properties, callback) {
  var _ref = properties || {},
      getContainer = _ref.getContainer,
      props = _objectWithoutProperties(_ref, ["getContainer"]);

  var div;

  if (getContainer) {
    div = getContainer();
  } else {
    div = document.createElement('div');
    document.body.appendChild(div);
  }

  var called = false;

  function ref(notification) {
    if (called) {
      return;
    }

    called = true;
    callback({
      notice: function notice(noticeProps) {
        notification.add(noticeProps);
      },
      removeNotice: function removeNotice(key) {
        notification.remove(key);
      },
      component: notification,
      destroy: function destroy() {
        ReactDOM.unmountComponentAtNode(div);

        if (!getContainer) {
          document.body.removeChild(div);
        }
      }
    });
  }

  ReactDOM.render(React.createElement(Notification, _extends({}, props, {
    ref: ref
  })), div);
};

export default Notification;