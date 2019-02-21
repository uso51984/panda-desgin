"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _AnimationGroup = _interopRequireDefault(require("../AnimationGroup"));

var _LazyRenderBox = _interopRequireDefault(require("./LazyRenderBox"));

var Dialog =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2["default"])(Dialog, _React$Component);

  function Dialog() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2["default"])(this, Dialog);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf2 = (0, _getPrototypeOf3["default"])(Dialog)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "getDialogElement", function () {
      var props = _this.props;
      var closable = props.closable;
      var prefixCls = props.prefixCls;
      var footer;

      if (props.footer) {
        footer = _react["default"].createElement("div", {
          className: "".concat(prefixCls, "-footer"),
          ref: function ref(el) {
            return _this.footerRef = el;
          }
        }, props.footer);
      }

      var header;

      if (props.title) {
        header = _react["default"].createElement("div", {
          className: "".concat(prefixCls, "-header")
        }, _react["default"].createElement("div", {
          className: "".concat(prefixCls, "-title")
        }, props.title));
      }

      var closer;

      if (closable) {
        closer = _react["default"].createElement("button", {
          onClick: _this.close,
          "aria-label": "Close",
          className: "".concat(prefixCls, "-close")
        }, _react["default"].createElement("span", {
          className: "".concat(prefixCls, "-close-x")
        }));
      }

      var transitionName = _this.getTransitionName();

      var dialogElement = _react["default"].createElement(_LazyRenderBox["default"], {
        key: "dialog-element",
        role: "document",
        ref: function ref(el) {
          return _this.dialogRef = el;
        },
        style: props.style || {},
        className: "".concat(prefixCls, " ").concat(props.className || ''),
        visible: props.visible
      }, _react["default"].createElement("div", {
        className: "".concat(prefixCls, "-content")
      }, closer, header, _react["default"].createElement("div", {
        className: "".concat(prefixCls, "-body"),
        style: props.bodyStyle,
        ref: function ref(el) {
          return _this.bodyRef = el;
        }
      }, props.children), footer));

      return _react["default"].createElement(_AnimationGroup["default"], {
        key: "dialog",
        showProp: "visible",
        onAppear: _this.onAnimateAppear,
        onLeave: _this.onAnimateLeave,
        transitionName: transitionName,
        component: "",
        transitionAppear: true
      }, dialogElement);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onAnimateAppear", function () {
      document.body.style.overflow = 'hidden';
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onAnimateLeave", function () {
      document.body.style.overflow = '';
      /* istanbul ignore else */

      if (_this.wrapRef) {
        _this.wrapRef.style.display = 'none';
      }

      _this.props.onAnimateLeave();

      _this.props.afterClose();
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "close", function (e) {
      _this.props.onClose(e);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onMaskClick", function (e) {
      if (e.target === e.currentTarget) {
        _this.close(e);
      }
    });
    return _this;
  }

  (0, _createClass2["default"])(Dialog, [{
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
      return (0, _objectSpread2["default"])({}, this.getZIndexStyle(), wrapStyle);
    }
  }, {
    key: "getMaskStyle",
    value: function getMaskStyle() {
      var maskStyle = this.props.maskStyle || {};
      return (0, _objectSpread2["default"])({}, this.getZIndexStyle(), maskStyle);
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
        maskElement = _react["default"].createElement(_LazyRenderBox["default"], (0, _extends2["default"])({
          style: this.getMaskStyle(),
          key: "mask-element",
          className: "".concat(props.prefixCls, "-mask"),
          hiddenClassName: "".concat(props.prefixCls, "-mask-hidden"),
          visible: props.visible
        }, props.maskProps));

        if (maskTransition) {
          maskElement = _react["default"].createElement(_AnimationGroup["default"], {
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

      return _react["default"].createElement("div", null, this.getMaskElement(), _react["default"].createElement("div", (0, _extends2["default"])({
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
}(_react["default"].Component);

exports["default"] = Dialog;
(0, _defineProperty2["default"])(Dialog, "defaultProps", {
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