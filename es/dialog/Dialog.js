import _extends from "@babel/runtime/helpers/extends";
import _objectSpread from "@babel/runtime/helpers/objectSpread";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import React from 'react';
import Animate from '../AnimationGroup';
import LazyRenderBox from './LazyRenderBox';

var Dialog =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Dialog, _React$Component);

  function Dialog() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Dialog);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Dialog)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "getDialogElement", function () {
      var props = _this.props;
      var closable = props.closable;
      var prefixCls = props.prefixCls;
      var footer;

      if (props.footer) {
        footer = React.createElement("div", {
          className: "".concat(prefixCls, "-footer"),
          ref: function ref(el) {
            return _this.footerRef = el;
          }
        }, props.footer);
      }

      var header;

      if (props.title) {
        header = React.createElement("div", {
          className: "".concat(prefixCls, "-header")
        }, React.createElement("div", {
          className: "".concat(prefixCls, "-title")
        }, props.title));
      }

      var closer;

      if (closable) {
        closer = React.createElement("button", {
          onClick: _this.close,
          "aria-label": "Close",
          className: "".concat(prefixCls, "-close")
        }, React.createElement("span", {
          className: "".concat(prefixCls, "-close-x")
        }));
      }

      var transitionName = _this.getTransitionName();

      var dialogElement = React.createElement(LazyRenderBox, {
        key: "dialog-element",
        role: "document",
        ref: function ref(el) {
          return _this.dialogRef = el;
        },
        style: props.style || {},
        className: "".concat(prefixCls, " ").concat(props.className || ''),
        visible: props.visible
      }, React.createElement("div", {
        className: "".concat(prefixCls, "-content")
      }, closer, header, React.createElement("div", {
        className: "".concat(prefixCls, "-body"),
        style: props.bodyStyle,
        ref: function ref(el) {
          return _this.bodyRef = el;
        }
      }, props.children), footer));
      return React.createElement(Animate, {
        key: "dialog",
        showProp: "visible",
        onAppear: _this.onAnimateAppear,
        onLeave: _this.onAnimateLeave,
        transitionName: transitionName,
        component: "",
        transitionAppear: true
      }, dialogElement);
    });

    _defineProperty(_assertThisInitialized(_this), "onAnimateAppear", function () {
      document.body.style.overflow = 'hidden';
    });

    _defineProperty(_assertThisInitialized(_this), "onAnimateLeave", function () {
      document.body.style.overflow = '';
      /* istanbul ignore else */

      if (_this.wrapRef) {
        _this.wrapRef.style.display = 'none';
      }

      _this.props.onAnimateLeave();

      _this.props.afterClose();
    });

    _defineProperty(_assertThisInitialized(_this), "close", function (e) {
      _this.props.onClose(e);
    });

    _defineProperty(_assertThisInitialized(_this), "onMaskClick", function (e) {
      if (e.target === e.currentTarget) {
        _this.close(e);
      }
    });

    return _this;
  }

  _createClass(Dialog, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      // fix: react@16 no dismissing animation
      document.body.style.overflow = '';
      /* istanbul ignore else */

      if (this.wrapRef) {
        this.wrapRef.style.display = 'none';
      }
    }
  }, {
    key: "getZIndexStyle",
    value: function getZIndexStyle() {
      var style = {};
      var props = this.props;

      if (props.zIndex !== undefined) {
        style.zIndex = props.zIndex;
      }

      return style;
    }
  }, {
    key: "getWrapStyle",
    value: function getWrapStyle() {
      var wrapStyle = this.props.wrapStyle || {};
      return _objectSpread({}, this.getZIndexStyle(), wrapStyle);
    }
  }, {
    key: "getMaskStyle",
    value: function getMaskStyle() {
      var maskStyle = this.props.maskStyle || {};
      return _objectSpread({}, this.getZIndexStyle(), maskStyle);
    }
  }, {
    key: "getMaskTransitionName",
    value: function getMaskTransitionName() {
      var props = this.props;
      var transitionName = props.maskTransitionName;
      var animation = props.maskAnimation;

      if (!transitionName && animation) {
        transitionName = "".concat(props.prefixCls, "-").concat(animation);
      }

      return transitionName;
    }
  }, {
    key: "getTransitionName",
    value: function getTransitionName() {
      var props = this.props;
      var transitionName = props.transitionName;
      var animation = props.animation;

      if (!transitionName && animation) {
        transitionName = "".concat(props.prefixCls, "-").concat(animation);
      }

      return transitionName;
    }
  }, {
    key: "getMaskElement",
    value: function getMaskElement() {
      var props = this.props;
      var maskElement;

      if (props.mask) {
        var maskTransition = this.getMaskTransitionName();
        maskElement = React.createElement(LazyRenderBox, _extends({
          style: this.getMaskStyle(),
          key: "mask-element",
          className: "".concat(props.prefixCls, "-mask"),
          hiddenClassName: "".concat(props.prefixCls, "-mask-hidden"),
          visible: props.visible
        }, props.maskProps));

        if (maskTransition) {
          maskElement = React.createElement(Animate, {
            key: "mask",
            showProp: "visible",
            transitionAppear: true,
            component: "",
            transitionName: maskTransition
          }, maskElement);
        }
      }

      return maskElement;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var props = this.props;
      var prefixCls = props.prefixCls,
          maskClosable = props.maskClosable;
      var style = this.getWrapStyle();

      if (props.visible) {
        style.display = null;
      }

      return React.createElement("div", null, this.getMaskElement(), React.createElement("div", _extends({
        className: "".concat(prefixCls, "-wrap ").concat(props.wrapClassName || ''),
        ref: function ref(el) {
          return _this2.wrapRef = el;
        },
        onClick: maskClosable ? this.onMaskClick : undefined,
        role: "dialog",
        "aria-labelledby": props.title,
        style: style
      }, props.wrapProps), this.getDialogElement()));
    }
  }]);

  return Dialog;
}(React.Component);

_defineProperty(Dialog, "defaultProps", {
  className: '',
  mask: true,
  visible: false,
  closable: true,
  maskClosable: true,
  prefixCls: 'panda-dialog',
  onClose: function onClose() {},
  onAnimateLeave: function onAnimateLeave() {},
  afterClose: function afterClose() {}
});

export { Dialog as default };