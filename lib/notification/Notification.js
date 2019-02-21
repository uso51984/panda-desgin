"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _AnimationGroup = _interopRequireDefault(require("../AnimationGroup"));

var _Notice = _interopRequireDefault(require("./Notice"));

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
  (0, _inherits2["default"])(Notification, _Component);

  function Notification() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2["default"])(this, Notification);

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    _this = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf2 = (0, _getPrototypeOf3["default"])(Notification)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      notices: []
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "add", function (notice) {
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
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "remove", function (key) {
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

  (0, _createClass2["default"])(Notification, [{
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
        return _react["default"].createElement(_Notice["default"], (0, _extends2["default"])({
          prefixCls: props.prefixCls
        }, notice, {
          onClose: onClose
        }), notice.content);
      });
      var className = (_className = {}, (0, _defineProperty2["default"])(_className, props.prefixCls, 1), (0, _defineProperty2["default"])(_className, props.className, !!props.className), _className);
      return _react["default"].createElement("div", {
        className: (0, _classnames["default"])(className),
        style: props.style
      }, _react["default"].createElement(_AnimationGroup["default"], {
        transitionName: this.getTransitionName()
      }, noticeNodes));
    }
  }]);
  return Notification;
}(_react.Component);

(0, _defineProperty2["default"])(Notification, "defaultProps", {
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
      props = (0, _objectWithoutProperties2["default"])(_ref, ["getContainer"]);

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
        _reactDom["default"].unmountComponentAtNode(div);

        if (!getContainer) {
          document.body.removeChild(div);
        }
      }
    });
  }

  _reactDom["default"].render(_react["default"].createElement(Notification, (0, _extends2["default"])({}, props, {
    ref: ref
  })), div);
};

var _default = Notification;
exports["default"] = _default;