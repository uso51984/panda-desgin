"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _reactTapFeedback = _interopRequireDefault(require("react-tap-feedback"));

var _classnames3 = _interopRequireDefault(require("classnames"));

var _dialog = _interopRequireDefault(require("../dialog"));

var Modal =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2["default"])(Modal, _React$Component);

  function Modal() {
    (0, _classCallCheck2["default"])(this, Modal);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Modal).apply(this, arguments));
  }

  (0, _createClass2["default"])(Modal, [{
    key: "renderFooterButton",
    value: function renderFooterButton(button, prefixCls, i) {
      var buttonStyle = {};

      if (button.style) {
        buttonStyle = button.style;
      }

      var onClickFn = function onClickFn(e) {
        e.preventDefault();

        if (button.onPress) {
          button.onPress();
        }
      };

      return _react["default"].createElement(_reactTapFeedback["default"], {
        activeClassName: "".concat(prefixCls, "-button-active"),
        key: i
      }, _react["default"].createElement("a", {
        className: "".concat(prefixCls, "-button"),
        role: "button",
        style: buttonStyle,
        onClick: onClickFn
      }, button.text || 'Button'));
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this,
          _classnames2;

      var _this$props = this.props,
          prefixCls = _this$props.prefixCls,
          className = _this$props.className,
          wrapClassName = _this$props.wrapClassName,
          transitionName = _this$props.transitionName,
          maskTransitionName = _this$props.maskTransitionName,
          style = _this$props.style,
          footer = _this$props.footer,
          animated = _this$props.animated,
          transparent = _this$props.transparent,
          popup = _this$props.popup,
          animationType = _this$props.animationType,
          restProps = (0, _objectWithoutProperties2["default"])(_this$props, ["prefixCls", "className", "wrapClassName", "transitionName", "maskTransitionName", "style", "footer", "animated", "transparent", "popup", "animationType"]);
      var btnGroupClass = (0, _classnames3["default"])("".concat(prefixCls, "-button-group-").concat(footer.length === 2 ? 'h' : 'v'));
      var footerDom = footer.length ? _react["default"].createElement("div", {
        className: btnGroupClass,
        role: "group"
      }, footer.map(function (button, i) {
        return _this.renderFooterButton(button, prefixCls, i);
      })) : null;
      var transName;
      var maskTransName;

      if (animated) {
        if (transparent) {
          transName = 'am-fade';
          maskTransName = 'am-fade';
        } else {
          transName = 'am-slide-up';
          maskTransName = 'am-slide-up';
        }

        if (popup) {
          transName = animationType === 'slide-up' ? 'am-slide-up' : 'am-slide-down';
          maskTransName = 'am-fade';
        }
      }

      var wrapCls = (0, _classnames3["default"])(wrapClassName, (0, _defineProperty2["default"])({}, "".concat(prefixCls, "-wrap-popup"), popup));
      var cls = (0, _classnames3["default"])(className, (_classnames2 = {}, (0, _defineProperty2["default"])(_classnames2, "".concat(prefixCls, "-transparent"), transparent), (0, _defineProperty2["default"])(_classnames2, "".concat(prefixCls, "-popup"), popup), (0, _defineProperty2["default"])(_classnames2, "".concat(prefixCls, "-popup-").concat(animationType), popup && animationType), _classnames2));
      return _react["default"].createElement(_dialog["default"], (0, _extends2["default"])({}, restProps, {
        prefixCls: prefixCls,
        className: cls,
        wrapClassName: wrapCls,
        transitionName: transitionName || transName,
        maskTransitionName: maskTransitionName || maskTransName,
        style: style,
        footer: footerDom
      }));
    }
  }]);
  return Modal;
}(_react["default"].Component);

exports["default"] = Modal;
(0, _defineProperty2["default"])(Modal, "defaultProps", {
  prefixCls: 'panda-modal',
  transparent: true,
  popup: false,
  animationType: 'slide-down',
  animated: true,
  style: {},
  onShow: function onShow() {},
  footer: [],
  closable: false
});