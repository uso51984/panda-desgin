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

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _classnames2 = _interopRequireDefault(require("classnames"));

var _touchGesture = _interopRequireDefault(require("../touchGesture"));

var _closest = _interopRequireDefault(require("../utils/closest"));

var Swipeout =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2["default"])(Swipeout, _React$Component);

  function Swipeout(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, Swipeout);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Swipeout).call(this, props));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onCloseSwipe", function (ev) {
      if (!(_this.openedLeft || _this.openedRight)) {
        return;
      }

      var pNode = (0, _closest["default"])(ev.target, ".".concat(_this.props.prefixCls, "-actions"));

      if (!pNode) {
        // ev.preventDefault();
        _this.close();
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onPanStart", function (e) {
      var direction = e.direction,
          moveStatus = e.moveStatus;
      var deltaX = moveStatus.x; // http://hammerjs.github.io/api/#directions

      var isLeft = direction === 2;
      var isRight = direction === 4;

      if (!isLeft && !isRight) {
        return;
      }

      var _this$props = _this.props,
          left = _this$props.left,
          right = _this$props.right;
      _this.needShowRight = isLeft && right.length > 0;
      _this.needShowLeft = isRight && left.length > 0;

      if (_this.left) {
        _this.left.style.visibility = _this.needShowRight ? 'hidden' : 'visible';
      }

      if (_this.right) {
        _this.right.style.visibility = _this.needShowLeft ? 'hidden' : 'visible';
      }

      if (_this.needShowLeft || _this.needShowRight) {
        _this.swiping = true;

        _this.setState({
          swiping: _this.swiping
        });

        _this.setStyle(deltaX);
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onPanMove", function (e) {
      var moveStatus = e.moveStatus,
          srcEvent = e.srcEvent;
      var deltaX = moveStatus.x;

      if (!_this.swiping) {
        return;
      } // fixed scroll when it's pan and moving.


      if (srcEvent && srcEvent.preventDefault) {
        srcEvent.preventDefault();
      }

      _this.setStyle(deltaX);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onPanEnd", function (e) {
      if (!_this.swiping) {
        return;
      }

      var moveStatus = e.moveStatus;
      var deltaX = moveStatus.x;
      var needOpenRight = _this.needShowRight && Math.abs(deltaX) > _this.btnsRightWidth / 2;
      var needOpenLeft = _this.needShowLeft && Math.abs(deltaX) > _this.btnsLeftWidth / 2;

      if (needOpenRight) {
        _this.doOpenRight();
      } else if (needOpenLeft) {
        _this.doOpenLeft();
      } else {
        _this.close();
      }

      _this.swiping = false;

      _this.setState({
        swiping: _this.swiping
      });

      _this.needShowLeft = false;
      _this.needShowRight = false;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "doOpenLeft", function () {
      _this.open(_this.btnsLeftWidth, true, false);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "doOpenRight", function () {
      _this.open(-_this.btnsRightWidth, true, false);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "setStyle", function (value) {
      var limit = value > 0 ? _this.btnsLeftWidth : -_this.btnsRightWidth;

      var contentLeft = _this.getContentEasing(value, limit);

      _this.content.style.left = "".concat(contentLeft, "px");

      if (_this.cover) {
        _this.cover.style.display = Math.abs(value) > 0 ? 'block' : 'none';
        _this.cover.style.left = "".concat(contentLeft, "px");
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "open", function (value, openedLeft, openedRight) {
      if (!_this.openedLeft && !_this.openedRight && _this.props.onOpen) {
        _this.props.onOpen();
      }

      _this.openedLeft = openedLeft;
      _this.openedRight = openedRight;

      _this.setStyle(value);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "close", function () {
      if ((_this.openedLeft || _this.openedRight) && _this.props.onClose) {
        _this.props.onClose();
      }

      _this.setStyle(0);

      _this.openedLeft = false;
      _this.openedRight = false;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onTouchMove", function (e) {
      if (_this.swiping) {
        e.preventDefault();
      }
    });
    _this.state = {
      swiping: false
    };
    _this.openedLeft = false;
    _this.openedRight = false;
    return _this;
  }

  (0, _createClass2["default"])(Swipeout, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.btnsLeftWidth = this.left ? this.left.offsetWidth : 0;
      this.btnsRightWidth = this.right ? this.right.offsetWidth : 0;
      document.body.addEventListener('touchstart', this.onCloseSwipe, true);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.body.removeEventListener('touchstart', this.onCloseSwipe, true);
    }
  }, {
    key: "onBtnClick",
    // left & right button click
    value: function onBtnClick(ev, btn) {
      var onPress = btn.onPress;

      if (onPress) {
        onPress(ev);
      }

      if (this.props.autoClose) {
        this.close();
      }
    }
  }, {
    key: "getContentEasing",
    value: function getContentEasing(value, limit) {
      // limit content style left when value > actions width
      var delta = Math.abs(value) - Math.abs(limit);
      var isOverflow = delta > 0;
      var factor = limit > 0 ? 1 : -1;

      if (isOverflow) {
        value = limit + Math.pow(delta, 0.85) * factor; // eslint-disable-line

        return Math.abs(value) > Math.abs(limit) ? limit : value;
      }

      return value;
    } // set content & actions style

  }, {
    key: "renderButtons",
    value: function renderButtons(buttons, _ref) {
      var _this2 = this;

      var prefixCls = this.props.prefixCls;
      return buttons && buttons.length ? _react["default"].createElement("div", {
        className: "".concat(prefixCls, "-actions ").concat(prefixCls, "-actions-").concat(_ref),
        ref: function ref(el) {
          return _this2[_ref] = el;
        }
      }, buttons.map(function (btn, i) {
        return _react["default"].createElement("div", {
          key: i,
          className: "".concat(prefixCls, "-btn ").concat(btn.className ? btn.className : ''),
          style: btn.style,
          role: "button",
          onClick: function onClick(e) {
            return _this2.onBtnClick(e, btn);
          }
        }, _react["default"].createElement("div", {
          className: "".concat(prefixCls, "-btn-text")
        }, btn.text || 'Click'));
      })) : null;
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props2 = this.props,
          prefixCls = _this$props2.prefixCls,
          left = _this$props2.left,
          right = _this$props2.right,
          disabled = _this$props2.disabled,
          children = _this$props2.children,
          restProps = (0, _objectWithoutProperties2["default"])(_this$props2, ["prefixCls", "left", "right", "disabled", "children"]);
      var autoClose = restProps.autoClose,
          onOpen = restProps.onOpen,
          onClose = restProps.onClose,
          divProps = (0, _objectWithoutProperties2["default"])(restProps, ["autoClose", "onOpen", "onClose"]);
      var cls = (0, _classnames2["default"])(prefixCls, (0, _defineProperty2["default"])({}, "".concat(prefixCls, "-swiping"), this.state.swiping));
      var refProps = {
        ref: function ref(el) {
          return _this3.content = _reactDom["default"].findDOMNode(el);
        }
      };
      return (left.length || right.length) && !disabled ? _react["default"].createElement("div", (0, _extends2["default"])({
        className: cls
      }, divProps), _react["default"].createElement("div", {
        className: "".concat(prefixCls, "-cover"),
        ref: function ref(el) {
          return _this3.cover = el;
        }
      }), this.renderButtons(left, 'left'), this.renderButtons(right, 'right'), _react["default"].createElement(_touchGesture["default"], (0, _extends2["default"])({
        onTouchMove: this.onTouchMove,
        onPanStart: this.onPanStart,
        onPanMove: this.onPanMove,
        onPanEnd: this.onPanEnd,
        onPanCancel: this.onPanEnd,
        onSwipeLeft: this.doOpenRight,
        onSwipeRight: this.doOpenLeft,
        direction: "horizontal"
      }, refProps), _react["default"].createElement("div", {
        className: "".concat(prefixCls, "-content")
      }, children))) : _react["default"].createElement("div", (0, _extends2["default"])({}, refProps, divProps), children);
    }
  }]);
  return Swipeout;
}(_react["default"].Component);

exports["default"] = Swipeout;
(0, _defineProperty2["default"])(Swipeout, "defaultProps", {
  prefixCls: 'rc-swipeout',
  autoClose: false,
  disabled: false,
  left: [],
  right: [],
  onOpen: function onOpen() {},
  onClose: function onClose() {}
});