"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Picker = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _PickerMixin = _interopRequireDefault(require("./PickerMixin"));

var _utils = require("./utils");

var Picker =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2["default"])(Picker, _React$Component);

  function Picker(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, Picker);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Picker).call(this, props));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "scrollToFunc", function (x, y) {
      var time = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0.3;

      if (_this.scrollY !== y) {
        _this.scrollY = y;

        if (time && !_this.props.noAnimate) {
          (0, _utils.setTransition)(_this.contentRef.style, "cubic-bezier(0,0,0.2,1.15) ".concat(time, "s"));
        }

        (0, _utils.setTransform)(_this.contentRef.style, "translate3d(0,".concat(-y, "px,0)"));
        setTimeout(function () {
          _this.scrollingComplete();

          (0, _utils.setTransition)(_this.contentRef.style, '');
        }, +time * 1000);
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "scrollTo", function (top) {
      _this.scrollToFunc(0, top);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "scrollToWithoutAnimation", function (top) {
      _this.scrollToFunc(0, top, 0);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onStart", function (y) {
      if (_this.scrollDisabled) {
        return;
      }

      _this.isMoving = true;
      _this.startY = y;
      _this.lastY = _this.scrollY;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onMove", function (y) {
      if (_this.scrollDisabled || !_this.isMoving) {
        return;
      }

      _this.scrollY = _this.lastY - y + _this.startY;

      _utils.Velocity.record(_this.scrollY);

      _this.onScrollChange();

      (0, _utils.setTransform)(_this.contentRef.style, "translate3d(0,".concat(-_this.scrollY, "px,0)"));
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onFinish", function () {
      _this.isMoving = false;
      var targetY = _this.scrollY;
      var height = (_this.props.children.length - 1) * _this.itemHeight;
      var time = 0.3;
      var velocity = _utils.Velocity.getVelocity(targetY) * 4;
      /* istanbul ignore if */

      if (velocity) {
        targetY = velocity * 40 + targetY;
        time = Math.abs(velocity) * 0.1;
      }
      /* istanbul ignore next */


      if (targetY % _this.itemHeight !== 0) {
        targetY = Math.round(targetY / _this.itemHeight) * _this.itemHeight;
      }
      /* istanbul ignore next */


      if (targetY < 0) {
        targetY = 0;
      } else if (targetY > height) {
        targetY = height;
      }
      /* istanbul ignore next */


      var scrolltoTiem = time < 0.3 ? 0.3 : time;

      _this.scrollToFunc(0, targetY, scrolltoTiem);

      _this.onScrollChange();
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "fireValueChange", function (selectedValue) {
      if (selectedValue !== _this.state.selectedValue) {
        /* istanbul ignore else */
        if (!('selectedValue' in _this.props)) {
          _this.setState({
            selectedValue: selectedValue
          });
        }

        _this.props.onValueChange(selectedValue);
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onScrollChange", function () {
      var top = _this.getScrollY();

      if (top >= 0) {
        var children = _react["default"].Children.toArray(_this.props.children);

        var index = _this.props.computeChildIndex(top, _this.itemHeight, children.length);
        /* istanbul ignore else */


        if (_this.scrollValue !== index) {
          _this.scrollValue = index;
          var child = children[index];
          /* istanbul ignore if */

          if (child) {
            _this.props.onScrollChange(child.props.value);
          }
        }
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "scrollingComplete", function () {
      var top = _this.getScrollY();

      if (top >= 0) {
        _this.props.doScrollingComplete(top, _this.itemHeight, _this.fireValueChange);
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "scrollHanders", function () {
      return {
        mousedown: function mousedown(e) {
          return _this.onStart(e.screenY);
        },
        touchstart: function touchstart(e) {
          return _this.onStart(e.touches[0].screenY);
        },
        touchmove: function touchmove(e) {
          e.preventDefault();

          _this.onMove(e.touches[0].screenY);
        },
        mousemove: function mousemove(e) {
          e.preventDefault();

          _this.onMove(e.screenY);
        },
        touchend: function touchend() {
          return _this.onFinish();
        },
        touchcancel: function touchcancel() {
          return _this.onFinish();
        },
        mouseup: function mouseup() {
          return _this.onFinish();
        }
      };
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "setDisabled", function (disabled) {
      _this.scrollDisabled = disabled;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "getScrollY", function () {
      return _this.scrollY;
    });
    var _this$props = _this.props,
        _selectedValue = _this$props.selectedValue,
        defaultSelectedValue = _this$props.defaultSelectedValue,
        _children = _this$props.children;
    var selectedValueState = _selectedValue || defaultSelectedValue;

    if (!selectedValueState) {
      var childrenList = _react["default"].Children.toArray(_this.props.children);

      selectedValueState = childrenList && _children[0] && _children[0].props.value;
    }

    _this.state = {
      selectedValue: selectedValueState
    };
    _this.scrollY = -1;
    _this.lastY = 0;
    _this.startY = 0;
    _this.scrollDisabled = false;
    _this.isMoving = false;
    return _this;
  }

  (0, _createClass2["default"])(Picker, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var contentRef = this.contentRef,
          indicatorRef = this.indicatorRef,
          maskRef = this.maskRef,
          rootRef = this.rootRef;
      var rootHeight = rootRef.getBoundingClientRect().height;
      var itemHeight = indicatorRef.getBoundingClientRect().height;
      this.itemHeight = itemHeight;
      var num = Math.floor(rootHeight / itemHeight);
      /* istanbul ignore if */

      if (num % 2 === 0) {
        num--;
      }

      num--;
      num /= 2;
      contentRef.style.padding = "".concat(itemHeight * num, "px 0");
      indicatorRef.style.top = "".concat(itemHeight * num, "px");
      maskRef.style.backgroundSize = "100% ".concat(itemHeight * num, "px");
      this.props.select(this.state.selectedValue, this.itemHeight, this.scrollTo);
      Object.keys(this.scrollHanders()).forEach(function (key) {
        rootRef.addEventListener(key, _this2.scrollHanders()[key], false);
      });
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var _this3 = this;

      if ('selectedValue' in nextProps) {
        if (this.state.selectedValue !== nextProps.selectedValue) {
          this.setState({
            selectedValue: nextProps.selectedValue
          }, function () {
            _this3.props.select(nextProps.selectedValue, _this3.itemHeight, nextProps.noAnimate ? _this3.scrollToWithoutAnimation : _this3.scrollTo);
          });
        }
      }

      this.setDisabled(nextProps.disabled);
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      return this.state.selectedValue !== nextState.selectedValue || this.props.children !== nextProps.children;
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.props.select(this.state.selectedValue, this.itemHeight, this.scrollToWithoutAnimation);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var _this4 = this;

      Object.keys(this.scrollHanders()).forEach(function (key) {
        _this4.rootRef.removeEventListener(key, _this4.scrollHanders()[key]);
      });
    }
  }, {
    key: "getValue",
    value: function getValue() {
      if ('selectedValue' in this.props) {
        return this.props.selectedValue;
      }

      var children = _react["default"].Children.toArray(this.props.children);

      return children && children[0] && children[0].props.value;
    }
  }, {
    key: "getItems",
    value: function getItems() {
      var _this$props2 = this.props,
          children = _this$props2.children,
          prefixCls = _this$props2.prefixCls,
          itemStyle = _this$props2.itemStyle;
      var selectedValue = this.state.selectedValue;
      var itemClassName = "".concat(prefixCls, "-item");
      var selectedItemClassName = "".concat(itemClassName, " ").concat(prefixCls, "-item-selected");

      var mapFunc = function mapFunc(item) {
        var _classNames;

        var _item$props = item.props,
            value = _item$props.value,
            className = _item$props.className,
            style = _item$props.style;
        var isSelectedValue = selectedValue === value;
        var itemcls = (0, _classnames["default"])((_classNames = {}, (0, _defineProperty2["default"])(_classNames, selectedItemClassName, isSelectedValue), (0, _defineProperty2["default"])(_classNames, itemClassName, !isSelectedValue), _classNames), className);
        return _react["default"].createElement("div", {
          style: (0, _objectSpread2["default"])({}, itemStyle, style),
          className: itemcls,
          key: value
        }, item.children || item.props.children);
      };

      return _react["default"].Children.map(children, mapFunc);
    }
  }, {
    key: "render",
    value: function render() {
      var _classNames2,
          _this5 = this;

      var _this$props3 = this.props,
          prefixCls = _this$props3.prefixCls,
          className = _this$props3.className,
          indicatorClassName = _this$props3.indicatorClassName,
          disabled = _this$props3.disabled,
          style = _this$props3.style,
          indicatorStyle = _this$props3.indicatorStyle;
      var pickerCls = (0, _classnames["default"])(prefixCls, (_classNames2 = {}, (0, _defineProperty2["default"])(_classNames2, "".concat(prefixCls, "--disabled"), disabled), (0, _defineProperty2["default"])(_classNames2, "className", className), _classNames2));
      var indicatorCls = (0, _classnames["default"])("".concat(prefixCls, "__indicator"), indicatorClassName);
      return _react["default"].createElement("div", {
        className: pickerCls,
        ref: function ref(el) {
          return _this5.rootRef = el;
        },
        style: style
      }, _react["default"].createElement("div", {
        className: "".concat(prefixCls, "__mask"),
        ref: function ref(el) {
          return _this5.maskRef = el;
        }
      }), _react["default"].createElement("div", {
        className: indicatorCls,
        ref: function ref(el) {
          return _this5.indicatorRef = el;
        },
        style: indicatorStyle
      }), _react["default"].createElement("div", {
        className: "".concat(prefixCls, "__content"),
        ref: function ref(el) {
          return _this5.contentRef = el;
        }
      }, this.getItems()));
    }
  }]);
  return Picker;
}(_react["default"].Component);

exports.Picker = Picker;
(0, _defineProperty2["default"])(Picker, "defaultProps", {
  prefixCls: 'panda-picker-col',
  onScrollChange: function onScrollChange() {},
  onValueChange: function onValueChange() {}
});

var _default = (0, _PickerMixin["default"])(Picker);

exports["default"] = _default;