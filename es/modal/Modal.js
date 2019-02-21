import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import React from 'react';
import TouchFeedback from 'react-tap-feedback';
import classnames from 'classnames';
import Dialog from '../dialog';

var Modal =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Modal, _React$Component);

  function Modal() {
    _classCallCheck(this, Modal);

    return _possibleConstructorReturn(this, _getPrototypeOf(Modal).apply(this, arguments));
  }

  _createClass(Modal, [{
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

      return React.createElement(TouchFeedback, {
        activeClassName: "".concat(prefixCls, "-button-active"),
        key: i
      }, React.createElement("a", {
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
          restProps = _objectWithoutProperties(_this$props, ["prefixCls", "className", "wrapClassName", "transitionName", "maskTransitionName", "style", "footer", "animated", "transparent", "popup", "animationType"]);

      var btnGroupClass = classnames("".concat(prefixCls, "-button-group-").concat(footer.length === 2 ? 'h' : 'v'));
      var footerDom = footer.length ? React.createElement("div", {
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

      var wrapCls = classnames(wrapClassName, _defineProperty({}, "".concat(prefixCls, "-wrap-popup"), popup));
      var cls = classnames(className, (_classnames2 = {}, _defineProperty(_classnames2, "".concat(prefixCls, "-transparent"), transparent), _defineProperty(_classnames2, "".concat(prefixCls, "-popup"), popup), _defineProperty(_classnames2, "".concat(prefixCls, "-popup-").concat(animationType), popup && animationType), _classnames2));
      return React.createElement(Dialog, _extends({}, restProps, {
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
}(React.Component);

_defineProperty(Modal, "defaultProps", {
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

export { Modal as default };