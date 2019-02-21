"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var MIN_DISTANCE = 10;

function getDirection(x, y) {
  if (x > y && x > MIN_DISTANCE) {
    return 'horizontal';
  }
  /* istanbul ignore else */


  if (y > x && y > MIN_DISTANCE) {
    return 'vertical';
  }
  /* istanbul ignore next */


  return '';
}

var Carousel =
/*#__PURE__*/
function (_React$PureComponent) {
  (0, _inherits2["default"])(Carousel, _React$PureComponent);

  function Carousel(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, Carousel);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Carousel).call(this, props));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "getTrackStyle", function () {
      var _ref;

      var _this$props = _this.props,
          vertical = _this$props.vertical,
          duration = _this$props.duration;
      var mainAxis = vertical ? 'height' : 'width';
      var crossAxis = vertical ? 'width' : 'height';
      /* istanbul ignore next */

      return _ref = {}, (0, _defineProperty2["default"])(_ref, mainAxis, "".concat(_this.trackSize, "px")), (0, _defineProperty2["default"])(_ref, crossAxis, _this[crossAxis] ? "".concat(_this[crossAxis], "px") : ''), (0, _defineProperty2["default"])(_ref, "transitionDuration", "".concat(_this.swiping ? 0 : duration, "ms")), (0, _defineProperty2["default"])(_ref, "transform", "translate".concat(vertical ? 'Y' : 'X', "(").concat(_this.offset, "px)")), _ref;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onTouchStart", function (event) {
      if (!_this.props.touchable) return;
      _this.el.style.transitionDuration = '0ms';

      _this.clear();

      _this.swiping = true;

      _this.touchStart(event);

      _this.correctPosition();
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onTouchMove", function (event) {
      if (!_this.props.touchable || !_this.swiping) return;

      _this.touchMove(event);

      _this.delta = _this.props.vertical ? _this.deltaY : _this.deltaX;
      /* istanbul ignore else */

      if (_this.isCorrectDirection) {
        event.preventDefault();
        event.stopPropagation();

        _this.move(0, Math.min(Math.max(_this.delta, -_this.size), _this.size));
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "resetTouchStatus", function () {
      _this.direction = '';
      _this.deltaX = 0;
      _this.deltaY = 0;
      _this.offsetX = 0;
      _this.offsetY = 0;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onTouchEnd", function () {
      if (!_this.props.touchable || !_this.swiping) return;
      /* istanbul ignore next */

      if (_this.delta && _this.isCorrectDirection) {
        var offset = _this.props.vertical ? _this.offsetY : _this.offsetX;
        var direction = _this.delta > 0 ? -1 : 1;

        _this.move(offset > 0 ? direction : 0, 0, true);
      }

      var duration = _this.props.duration;
      _this.el.style.transitionDuration = "".concat(duration, "ms");

      _this.setState({
        active: _this.active
      });

      _this.swiping = false;

      _this.autoPlay();
    });
    var children = _this.props.children;
    _this.count = _react["default"].Children.count(children);
    _this.swipes = [];

    _react["default"].Children.forEach(children, function () {
      _this.swipes.push({
        offset: 0
      });
    });

    _this.state = {
      active: props.initialSwipe
    };
    return _this;
  }

  (0, _createClass2["default"])(Carousel, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.initialize();
      var styleObj = this.getTrackStyle();

      for (var key in styleObj) {
        this.el.style[key] = styleObj[key];
      }

      this.el.addEventListener('touchstart', this.onTouchStart);
      this.el.addEventListener('touchmove', this.onTouchMove);
      this.el.addEventListener('touchend', this.onTouchEnd);
      this.el.addEventListener('touchcancel', this.onTouchEnd);
    }
  }, {
    key: "initialize",
    value: function initialize() {
      var active = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props.initialSwipe;
      var vertical = this.props.vertical;
      var rect = this.carouselEl.getBoundingClientRect();
      this.computedWidth = this.props.width || rect.width;
      this.computedHeight = this.props.height || rect.height;
      this.size = this[vertical ? 'computedHeight' : 'computedWidth'];
      this.trackSize = this.count * this.size;
      this.swiping = true;
      this.active = active;
      this.setState({
        active: active
      });
      /* istanbul ignore next */

      this.offset = this.count > 1 ? -this.size * active : 0;
      this.autoPlay();
    }
  }, {
    key: "getSwipeItem",
    value: function getSwipeItem() {
      var _this2 = this;

      var _this$props2 = this.props,
          children = _this$props2.children,
          prefixCls = _this$props2.prefixCls,
          vertical = _this$props2.vertical;
      this.swipeItemEl = [];
      var mainAxis = vertical ? 'height' : 'width';

      var mapFunc = function mapFunc(child, index) {
        return _react["default"].createElement("div", {
          style: (0, _defineProperty2["default"])({}, mainAxis, _this2.size),
          key: index,
          className: "".concat(prefixCls, "-item"),
          ref: function ref(el) {
            return _this2.swipeItemEl[index] = el;
          }
        }, child);
      };

      return _react["default"].Children.map(children, mapFunc);
    }
  }, {
    key: "touchStart",
    value: function touchStart(event) {
      this.resetTouchStatus();
      this.startX = event.touches[0].clientX;
      this.startY = event.touches[0].clientY;
    }
  }, {
    key: "touchMove",
    value: function touchMove(event) {
      var touch = event.touches[0];
      this.deltaX = touch.clientX - this.startX;
      this.deltaY = touch.clientY - this.startY;
      this.offsetX = Math.abs(this.deltaX);
      this.offsetY = Math.abs(this.deltaY);
      this.direction = this.direction || getDirection(this.offsetX, this.offsetY);
      var expect = this.props.vertical ? 'vertical' : 'horizontal';
      this.isCorrectDirection = this.direction === expect;
    }
  }, {
    key: "move",
    value: function move(_move) {
      var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var active = this.active;
      var delta = this.delta,
          count = this.count,
          swipes = this.swipes,
          trackSize = this.trackSize;
      var atFirst = active === 0;
      var atLast = active === count - 1;
      /* istanbul ignore next */

      var outOfBounds = !this.props.loop && (atFirst && (offset > 0 || _move < 0) || atLast && (offset < 0 || _move > 0));
      /* istanbul ignore if */

      if (outOfBounds || count <= 1) {
        return;
      }
      /* istanbul ignore next */


      swipes[0].offset = atLast && (delta < 0 || _move > 0) ? trackSize : 0;
      /* istanbul ignore next */

      swipes[count - 1].offset = atFirst && (delta > 0 || _move < 0) ? -trackSize : 0;

      if (_move && active + _move >= -1 && active + _move <= count) {
        active += _move;
      }

      this.active = active;
      this.offset = offset - active * this.size;
      var vertical = this.props.vertical;
      this.swipeItemEl[0].style.transform = "translate".concat(vertical ? 'Y' : 'X', "(").concat(swipes[0].offset, "px)");
      this.swipeItemEl[count - 1].style.transform = "translate".concat(vertical ? 'Y' : 'X', "(").concat(swipes[count - 1].offset, "px)");
      this.el.style.transform = "translate".concat(vertical ? 'Y' : 'X', "(").concat(this.offset, "px)");
    }
  }, {
    key: "correctPosition",
    value: function correctPosition() {
      var active = this.active;

      if (active <= -1) {
        this.move(this.count);
      }
      /* istanbul ignore if */


      if (active >= this.count) {
        this.move(-this.count);
      }
    }
  }, {
    key: "clear",
    value: function clear() {
      clearTimeout(this.timer);
    }
  }, {
    key: "autoPlay",
    value: function autoPlay() {
      var _this3 = this;

      var _this$props3 = this.props,
          autoplay = _this$props3.autoplay,
          duration = _this$props3.duration;

      if (autoplay && this.count > 1) {
        this.clear();
        this.timer = setTimeout(function () {
          _this3.swiping = true;

          _this3.resetTouchStatus();

          _this3.correctPosition();

          _this3.el.style.transitionDuration = "".concat(0, "ms");
          setTimeout(function () {
            _this3.swiping = false;
            _this3.el.style.transitionDuration = "".concat(duration, "ms");

            _this3.move(1, 0, true);

            _this3.setState({
              active: _this3.active
            });

            _this3.autoPlay();
          }, 30);
        }, autoplay);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _classNames2,
          _this4 = this;

      var _this$props4 = this.props,
          prefixCls = _this$props4.prefixCls,
          className = _this$props4.className,
          vertical = _this$props4.vertical,
          showIndicators = _this$props4.showIndicators,
          style = _this$props4.style;
      var active = this.state.active;
      var carouselCls = (0, _classnames["default"])(prefixCls, (0, _defineProperty2["default"])({}, "".concat(prefixCls, "--vertical"), vertical), className);
      var indicatorsCls = (0, _classnames["default"])((_classNames2 = {}, (0, _defineProperty2["default"])(_classNames2, "".concat(prefixCls, "__indicators"), true), (0, _defineProperty2["default"])(_classNames2, "".concat(prefixCls, "__indicators--vertical"), vertical), _classNames2));

      var getIndicatorCls = function getIndicatorCls(index) {
        var _classNames3;

        return (0, _classnames["default"])((_classNames3 = {}, (0, _defineProperty2["default"])(_classNames3, "".concat(prefixCls, "__indicator"), true), (0, _defineProperty2["default"])(_classNames3, "".concat(prefixCls, "__indicator--active"), (active + _this4.count) % _this4.count === index), _classNames3));
      };

      return _react["default"].createElement("div", {
        className: carouselCls,
        ref: function ref(el) {
          return _this4.carouselEl = el;
        },
        style: style
      }, _react["default"].createElement("div", {
        ref: function ref(el) {
          return _this4.el = el;
        },
        className: "".concat(prefixCls, "__track")
      }, this.getSwipeItem()), showIndicators && _react["default"].createElement("div", {
        className: indicatorsCls
      }, this.swipes.map(function (_, index) {
        return _react["default"].createElement("i", {
          key: index,
          className: getIndicatorCls(index)
        });
      })));
    }
  }]);
  return Carousel;
}(_react["default"].PureComponent);

(0, _defineProperty2["default"])(Carousel, "defaultProps", {
  prefixCls: 'panda-swipe',
  vertical: false,
  autoplay: 0,
  duration: 500,
  showIndicators: true,
  initialSwipe: 0,
  loop: true,
  touchable: true,
  style: {}
});
var _default = Carousel;
exports["default"] = _default;