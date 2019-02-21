"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _util = require("./util");

var _config = require("./config");

var directionMap = {
  all: _config.DIRECTION_ALL,
  vertical: _config.DIRECTION_VERTICAL,
  horizontal: _config.DIRECTION_HORIZONTAL
};

var Gesture =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2["default"])(Gesture, _React$Component);

  function Gesture(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, Gesture);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Gesture).call(this, props));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "triggerEvent", function (name) {
      var cb = _this.props[name];

      if (typeof cb === 'function') {
        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        cb.apply(void 0, [_this.getGestureState()].concat(args));
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "triggerCombineEvent", function (mainEventName, eventStatus) {
      var _this2, _this3;

      for (var _len2 = arguments.length, args = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      (_this2 = _this).triggerEvent.apply(_this2, [mainEventName].concat(args));

      (_this3 = _this).triggerSubEvent.apply(_this3, [mainEventName, eventStatus].concat(args));
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "triggerSubEvent", function (mainEventName, eventStatus) {
      if (eventStatus) {
        var _this4;

        var subEventName = (0, _util.getEventName)(mainEventName, eventStatus);

        for (var _len3 = arguments.length, args = new Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
          args[_key3 - 2] = arguments[_key3];
        }

        (_this4 = _this).triggerEvent.apply(_this4, [subEventName].concat(args));
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "triggerPinchEvent", function (mainEventName, eventStatus) {
      var _this5;

      var scale = _this.gesture.scale;

      if (eventStatus === 'move' && typeof scale === 'number') {
        if (scale > 1) {
          _this.triggerEvent('onPinchOut');
        }

        if (scale < 1) {
          _this.triggerEvent('onPinchIn');
        }
      }

      for (var _len4 = arguments.length, args = new Array(_len4 > 2 ? _len4 - 2 : 0), _key4 = 2; _key4 < _len4; _key4++) {
        args[_key4 - 2] = arguments[_key4];
      }

      (_this5 = _this).triggerCombineEvent.apply(_this5, [mainEventName, eventStatus].concat(args));
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "initPressTimer", function () {
      _this.cleanPressTimer();

      _this.pressTimer = setTimeout(function () {
        _this.setGestureState({
          press: true
        });

        _this.triggerEvent('onPress');
      }, _config.PRESS.time);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "cleanPressTimer", function () {
      _this.pressTimer && clearTimeout(_this.pressTimer);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "setGestureState", function (params) {
      if (!_this.gesture) {
        _this.gesture = {};
      } // cache the previous touches


      if (_this.gesture.touches) {
        _this.gesture.preTouches = _this.gesture.touches;
      }

      _this.gesture = (0, _objectSpread2["default"])({}, _this.gesture, params);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "getGestureState", function () {
      if (!_this.gesture) {
        return _this.gesture;
      } else {
        // shallow copy
        return (0, _objectSpread2["default"])({}, _this.gesture);
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "cleanGestureState", function () {
      delete _this.gesture;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "getTouches", function (e) {
      return Array.prototype.slice.call(e.touches).map(function (item) {
        return {
          x: item.screenX,
          y: item.screenY
        };
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "triggerUserCb", function (status, e) {
      var cbName = (0, _util.getEventName)('onTouch', status);

      if (cbName in _this.props) {
        _this.props[cbName](e);
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_handleTouchStart", function (e) {
      _this.triggerUserCb('start', e);

      _this.event = e;

      if (e.touches.length > 1) {
        e.preventDefault();
      }

      _this.initGestureStatus(e);

      _this.initPressTimer();

      _this.checkIfMultiTouchStart();
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "initGestureStatus", function (e) {
      _this.cleanGestureState(); // store the gesture start state


      var startTouches = _this.getTouches(e);

      var startTime = (0, _util.now)();
      var startMutliFingerStatus = (0, _util.calcMutliFingerStatus)(startTouches);

      _this.setGestureState({
        startTime: startTime,
        startTouches: startTouches,
        startMutliFingerStatus: startMutliFingerStatus,

        /* copy for next time touch move cala convenient*/
        time: startTime,
        touches: startTouches,
        mutliFingerStatus: startMutliFingerStatus,
        srcEvent: _this.event
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "checkIfMultiTouchStart", function () {
      var _this$props = _this.props,
          enablePinch = _this$props.enablePinch,
          enableRotate = _this$props.enableRotate;
      var touches = _this.gesture.touches;

      if (touches.length > 1 && (enablePinch || enableRotate)) {
        if (enablePinch) {
          var startMutliFingerStatus = (0, _util.calcMutliFingerStatus)(touches);

          _this.setGestureState({
            startMutliFingerStatus: startMutliFingerStatus,

            /* init pinch status */
            pinch: true,
            scale: 1
          });

          _this.triggerCombineEvent('onPinch', 'start');
        }

        if (enableRotate) {
          _this.setGestureState({
            /* init rotate status */
            rotate: true,
            rotation: 0
          });

          _this.triggerCombineEvent('onRotate', 'start');
        }
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_handleTouchMove", function (e) {
      _this.triggerUserCb('move', e);

      _this.event = e;

      if (!_this.gesture) {
        // sometimes weird happen: touchstart -> touchmove..touchmove.. --> touchend --> touchmove --> touchend
        // so we need to skip the unnormal event cycle after touchend
        return;
      } // not a long press


      _this.cleanPressTimer();

      _this.updateGestureStatus(e);

      _this.checkIfSingleTouchMove();

      _this.checkIfMultiTouchMove();
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "checkIfMultiTouchMove", function () {
      var _this$gesture = _this.gesture,
          pinch = _this$gesture.pinch,
          rotate = _this$gesture.rotate,
          touches = _this$gesture.touches,
          startMutliFingerStatus = _this$gesture.startMutliFingerStatus,
          mutliFingerStatus = _this$gesture.mutliFingerStatus;

      if (!pinch && !rotate) {
        return;
      }

      if (touches.length < 2) {
        _this.setGestureState({
          pinch: false,
          rotate: false
        }); // Todo: 2 finger -> 1 finger, wait to test this situation


        pinch && _this.triggerCombineEvent('onPinch', 'cancel');
        rotate && _this.triggerCombineEvent('onRotate', 'cancel');
        return;
      }

      if (pinch) {
        var scale = mutliFingerStatus.z / startMutliFingerStatus.z;

        _this.setGestureState({
          scale: scale
        });

        _this.triggerPinchEvent('onPinch', 'move');
      }

      if (rotate) {
        var rotation = (0, _util.calcRotation)(startMutliFingerStatus, mutliFingerStatus);

        _this.setGestureState({
          rotation: rotation
        });

        _this.triggerCombineEvent('onRotate', 'move');
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "allowGesture", function () {
      return (0, _util.shouldTriggerDirection)(_this.gesture.direction, _this.directionSetting);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "checkIfSingleTouchMove", function () {
      var _this$gesture2 = _this.gesture,
          pan = _this$gesture2.pan,
          touches = _this$gesture2.touches,
          moveStatus = _this$gesture2.moveStatus,
          preTouches = _this$gesture2.preTouches,
          _this$gesture2$availa = _this$gesture2.availablePan,
          availablePan = _this$gesture2$availa === void 0 ? true : _this$gesture2$availa;

      if (touches.length > 1) {
        _this.setGestureState({
          pan: false
        }); // Todo: 1 finger -> 2 finger, wait to test this situation


        pan && _this.triggerCombineEvent('onPan', 'cancel');
        return;
      } // add avilablePan condition to fix the case in scrolling, which will cause unavailable pan move.


      if (moveStatus && availablePan) {
        var direction = (0, _util.getMovingDirection)(preTouches[0], touches[0]);

        _this.setGestureState({
          direction: direction
        });

        var eventName = (0, _util.getDirectionEventName)(direction);

        if (!_this.allowGesture()) {
          // if the first move is unavailable, then judge all of remaining touch movings are also invalid.
          if (!pan) {
            _this.setGestureState({
              availablePan: false
            });
          }

          return;
        }

        if (!pan) {
          _this.triggerCombineEvent('onPan', 'start');

          _this.setGestureState({
            pan: true,
            availablePan: true
          });
        } else {
          _this.triggerCombineEvent('onPan', eventName);

          _this.triggerSubEvent('onPan', 'move');
        }
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "checkIfMultiTouchEnd", function (status) {
      var _this$gesture3 = _this.gesture,
          pinch = _this$gesture3.pinch,
          rotate = _this$gesture3.rotate;

      if (pinch) {
        _this.triggerCombineEvent('onPinch', status);
      }

      if (rotate) {
        _this.triggerCombineEvent('onRotate', status);
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "updateGestureStatus", function (e) {
      var time = (0, _util.now)();

      _this.setGestureState({
        time: time
      });

      if (!e.touches || !e.touches.length) {
        return;
      }

      var _this$gesture4 = _this.gesture,
          startTime = _this$gesture4.startTime,
          startTouches = _this$gesture4.startTouches,
          pinch = _this$gesture4.pinch,
          rotate = _this$gesture4.rotate;

      var touches = _this.getTouches(e);

      var moveStatus = (0, _util.calcMoveStatus)(startTouches, touches, time - startTime);
      var mutliFingerStatus;

      if (pinch || rotate) {
        mutliFingerStatus = (0, _util.calcMutliFingerStatus)(touches);
      }

      _this.setGestureState({
        /* update status snapshot */
        touches: touches,
        mutliFingerStatus: mutliFingerStatus,

        /* update duration status */
        moveStatus: moveStatus
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_handleTouchEnd", function (e) {
      _this.triggerUserCb('end', e);

      _this.event = e;

      if (!_this.gesture) {
        return;
      }

      _this.cleanPressTimer();

      _this.updateGestureStatus(e);

      _this.doSingleTouchEnd('end');

      _this.checkIfMultiTouchEnd('end');
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_handleTouchCancel", function (e) {
      _this.triggerUserCb('cancel', e);

      _this.event = e; // Todo: wait to test cancel case

      if (!_this.gesture) {
        return;
      }

      _this.cleanPressTimer();

      _this.updateGestureStatus(e);

      _this.doSingleTouchEnd('cancel');

      _this.checkIfMultiTouchEnd('cancel');
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "triggerAllowEvent", function (type, status) {
      if (_this.allowGesture()) {
        _this.triggerCombineEvent(type, status);
      } else {
        _this.triggerSubEvent(type, status);
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "doSingleTouchEnd", function (status) {
      var _this$gesture5 = _this.gesture,
          moveStatus = _this$gesture5.moveStatus,
          pinch = _this$gesture5.pinch,
          rotate = _this$gesture5.rotate,
          press = _this$gesture5.press,
          pan = _this$gesture5.pan,
          direction = _this$gesture5.direction;

      if (pinch || rotate) {
        return;
      }

      if (moveStatus) {
        var z = moveStatus.z,
            velocity = moveStatus.velocity;
        var swipe = (0, _util.shouldTriggerSwipe)(z, velocity);

        _this.setGestureState({
          swipe: swipe
        });

        if (pan) {
          // pan need end, it's a process
          // sometimes, start with pan left, but end with pan right....
          _this.triggerAllowEvent('onPan', status);
        }

        if (swipe) {
          var directionEvName = (0, _util.getDirectionEventName)(direction); // swipe just need a direction, it's a endpoint

          _this.triggerAllowEvent('onSwipe', directionEvName);

          return;
        }
      }

      if (press) {
        _this.triggerEvent('onPressUp');

        return;
      }

      _this.triggerEvent('onTap');
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "getTouchAction", function () {
      var _this$props2 = _this.props,
          enablePinch = _this$props2.enablePinch,
          enableRotate = _this$props2.enableRotate;

      var _assertThisInitialize = (0, _assertThisInitialized2["default"])(_this),
          directionSetting = _assertThisInitialize.directionSetting;

      if (enablePinch || enableRotate || directionSetting === _config.DIRECTION_ALL) {
        return 'pan-x pan-y';
      }

      if (directionSetting === _config.DIRECTION_VERTICAL) {
        return 'pan-x';
      }

      if (directionSetting === _config.DIRECTION_HORIZONTAL) {
        return 'pan-y';
      }

      return 'auto';
    });
    _this.directionSetting = directionMap[props.direction];
    _this.state = {};
    return _this;
  }

  (0, _createClass2["default"])(Gesture, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.cleanPressTimer();
    }
  }, {
    key: "render",
    value: function render() {
      var children = this.props.children;

      var child = _react["default"].Children.only(children);

      var touchAction = this.getTouchAction();
      var events = {
        onTouchStart: this._handleTouchStart,
        onTouchMove: this._handleTouchMove,
        onTouchCancel: this._handleTouchCancel,
        onTouchEnd: this._handleTouchEnd
      };
      return _react["default"].cloneElement(child, (0, _objectSpread2["default"])({}, events, {
        style: (0, _objectSpread2["default"])({
          touchAction: touchAction
        }, child.props.style || {})
      }));
    }
  }]);
  return Gesture;
}(_react["default"].Component);

exports["default"] = Gesture;
(0, _defineProperty2["default"])(Gesture, "defaultProps", {
  enableRotate: false,
  enablePinch: false,
  direction: 'all'
});