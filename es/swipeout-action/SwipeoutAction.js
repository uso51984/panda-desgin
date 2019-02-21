import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import React from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';
import Gesture from '../touchGesture';
import closest from '../utils/closest';

var Swipeout =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Swipeout, _React$Component);

  function Swipeout(props) {
    var _this;

    _classCallCheck(this, Swipeout);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Swipeout).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "onCloseSwipe", function (ev) {
      if (!(_this.openedLeft || _this.openedRight)) {
        return;
      }

      var pNode = closest(ev.target, ".".concat(_this.props.prefixCls, "-actions"));

      if (!pNode) {
        // ev.preventDefault();
        _this.close();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onPanStart", function (e) {
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

        _this._setStyle(deltaX);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onPanMove", function (e) {
      var moveStatus = e.moveStatus,
          srcEvent = e.srcEvent;
      var deltaX = moveStatus.x;

      if (!_this.swiping) {
        return;
      } // fixed scroll when it's pan and moving.


      if (srcEvent && srcEvent.preventDefault) {
        srcEvent.preventDefault();
      }

      _this._setStyle(deltaX);
    });

    _defineProperty(_assertThisInitialized(_this), "onPanEnd", function (e) {
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

    _defineProperty(_assertThisInitialized(_this), "doOpenLeft", function () {
      _this.open(_this.btnsLeftWidth, true, false);
    });

    _defineProperty(_assertThisInitialized(_this), "doOpenRight", function () {
      _this.open(-_this.btnsRightWidth, true, false);
    });

    _defineProperty(_assertThisInitialized(_this), "_setStyle", function (value) {
      var limit = value > 0 ? _this.btnsLeftWidth : -_this.btnsRightWidth;

      var contentLeft = _this._getContentEasing(value, limit);

      _this.content.style.left = "".concat(contentLeft, "px");

      if (_this.cover) {
        _this.cover.style.display = Math.abs(value) > 0 ? 'block' : 'none';
        _this.cover.style.left = "".concat(contentLeft, "px");
      }
    });

    _defineProperty(_assertThisInitialized(_this), "open", function (value, openedLeft, openedRight) {
      if (!_this.openedLeft && !_this.openedRight && _this.props.onOpen) {
        _this.props.onOpen();
      }

      _this.openedLeft = openedLeft;
      _this.openedRight = openedRight;

      _this._setStyle(value);
    });

    _defineProperty(_assertThisInitialized(_this), "close", function () {
      if ((_this.openedLeft || _this.openedRight) && _this.props.onClose) {
        _this.props.onClose();
      }

      _this._setStyle(0);

      _this.openedLeft = false;
      _this.openedRight = false;
    });

    _defineProperty(_assertThisInitialized(_this), "onTouchMove", function (e) {
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

  _createClass(Swipeout, [{
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
    key: "_getContentEasing",
    value: function _getContentEasing(value, limit) {
      // limit content style left when value > actions width
      var delta = Math.abs(value) - Math.abs(limit);
      var isOverflow = delta > 0;
      var factor = limit > 0 ? 1 : -1;

      if (isOverflow) {
        value = limit + Math.pow(delta, 0.85) * factor;
        return Math.abs(value) > Math.abs(limit) ? limit : value;
      }

      return value;
    } // set content & actions style

  }, {
    key: "renderButtons",
    value: function renderButtons(buttons, _ref) {
      var _this2 = this;

      var prefixCls = this.props.prefixCls;
      return buttons && buttons.length ? React.createElement("div", {
        className: "".concat(prefixCls, "-actions ").concat(prefixCls, "-actions-").concat(_ref),
        ref: function ref(el) {
          return _this2[_ref] = el;
        }
      }, buttons.map(function (btn, i) {
        return React.createElement("div", {
          key: i,
          className: "".concat(prefixCls, "-btn ").concat(btn.hasOwnProperty('className') ? btn.className : ''),
          style: btn.style,
          role: "button",
          onClick: function onClick(e) {
            return _this2.onBtnClick(e, btn);
          }
        }, React.createElement("div", {
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
          restProps = _objectWithoutProperties(_this$props2, ["prefixCls", "left", "right", "disabled", "children"]);

      var autoClose = restProps.autoClose,
          onOpen = restProps.onOpen,
          onClose = restProps.onClose,
          divProps = _objectWithoutProperties(restProps, ["autoClose", "onOpen", "onClose"]);

      var cls = classnames(prefixCls, _defineProperty({}, "".concat(prefixCls, "-swiping"), this.state.swiping));
      var refProps = {
        ref: function ref(el) {
          return _this3.content = ReactDOM.findDOMNode(el);
        }
      };
      return (left.length || right.length) && !disabled ? React.createElement("div", _extends({
        className: cls
      }, divProps), React.createElement("div", {
        className: "".concat(prefixCls, "-cover"),
        ref: function ref(el) {
          return _this3.cover = el;
        }
      }), this.renderButtons(left, 'left'), this.renderButtons(right, 'right'), React.createElement(Gesture, _extends({
        onTouchMove: this.onTouchMove,
        onPanStart: this.onPanStart,
        onPanMove: this.onPanMove,
        onPanEnd: this.onPanEnd,
        onPanCancel: this.onPanEnd,
        onSwipeLeft: this.doOpenRight,
        onSwipeRight: this.doOpenLeft,
        direction: "horizontal"
      }, refProps), React.createElement("div", {
        className: "".concat(prefixCls, "-content")
      }, children))) : React.createElement("div", _extends({}, refProps, divProps), children);
    }
  }]);

  return Swipeout;
}(React.Component);

_defineProperty(Swipeout, "defaultProps", {
  prefixCls: 'rc-swipeout',
  autoClose: false,
  disabled: false,
  left: [],
  right: [],
  onOpen: function onOpen() {},
  onClose: function onClose() {}
});

export { Swipeout as default };