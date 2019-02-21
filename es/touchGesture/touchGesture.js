import _objectSpread from "@babel/runtime/helpers/objectSpread";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import React from 'react';
import { calcRotation, getEventName, now, calcMutliFingerStatus, calcMoveStatus, shouldTriggerSwipe, shouldTriggerDirection, getMovingDirection, getDirectionEventName } from './util';
import { PRESS, DIRECTION_ALL, DIRECTION_VERTICAL, DIRECTION_HORIZONTAL } from './config';
var directionMap = {
  all: DIRECTION_ALL,
  vertical: DIRECTION_VERTICAL,
  horizontal: DIRECTION_HORIZONTAL
};

var Gesture =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Gesture, _React$Component);

  function Gesture(props) {
    var _this;

    _classCallCheck(this, Gesture);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Gesture).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "triggerEvent", function (name) {
      var cb = _this.props[name];

      if (typeof cb === 'function') {
        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        cb.apply(void 0, [_this.getGestureState()].concat(args));
      }
    });

    _defineProperty(_assertThisInitialized(_this), "triggerCombineEvent", function (mainEventName, eventStatus) {
      var _this2, _this3;

      for (var _len2 = arguments.length, args = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      (_this2 = _this).triggerEvent.apply(_this2, [mainEventName].concat(args));

      (_this3 = _this).triggerSubEvent.apply(_this3, [mainEventName, eventStatus].concat(args));
    });

    _defineProperty(_assertThisInitialized(_this), "triggerSubEvent", function (mainEventName, eventStatus) {
      if (eventStatus) {
        var _this4;

        var subEventName = getEventName(mainEventName, eventStatus);

        for (var _len3 = arguments.length, args = new Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
          args[_key3 - 2] = arguments[_key3];
        }

        (_this4 = _this).triggerEvent.apply(_this4, [subEventName].concat(args));
      }
    });

    _defineProperty(_assertThisInitialized(_this), "triggerPinchEvent", function (mainEventName, eventStatus) {
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

    _defineProperty(_assertThisInitialized(_this), "initPressTimer", function () {
      _this.cleanPressTimer();

      _this.pressTimer = setTimeout(function () {
        _this.setGestureState({
          press: true
        });

        _this.triggerEvent('onPress');
      }, PRESS.time);
    });

    _defineProperty(_assertThisInitialized(_this), "cleanPressTimer", function () {
      _this.pressTimer && clearTimeout(_this.pressTimer);
    });

    _defineProperty(_assertThisInitialized(_this), "setGestureState", function (params) {
      if (!_this.gesture) {
        _this.gesture = {};
      } // cache the previous touches


      if (_this.gesture.touches) {
        _this.gesture.preTouches = _this.gesture.touches;
      }

      _this.gesture = _objectSpread({}, _this.gesture, params);
    });

    _defineProperty(_assertThisInitialized(_this), "getGestureState", function () {
      if (!_this.gesture) {
        return _this.gesture;
      } // shallow copy


      return _objectSpread({}, _this.gesture);
    });

    _defineProperty(_assertThisInitialized(_this), "cleanGestureState", function () {
      delete _this.gesture;
    });

    _defineProperty(_assertThisInitialized(_this), "getTouches", function (e) {
      return Array.prototype.slice.call(e.touches).map(function (item) {
        return {
          x: item.screenX,
          y: item.screenY
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "triggerUserCb", function (status, e) {
      var cbName = getEventName('onTouch', status);

      if (cbName in _this.props) {
        _this.props[cbName](e);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleTouchStart", function (e) {
      _this.triggerUserCb('start', e);

      _this.event = e;

      if (e.touches.length > 1) {
        e.preventDefault();
      }

      _this.initGestureStatus(e);

      _this.initPressTimer();

      _this.checkIfMultiTouchStart();
    });

    _defineProperty(_assertThisInitialized(_this), "initGestureStatus", function (e) {
      _this.cleanGestureState(); // store the gesture start state


      var startTouches = _this.getTouches(e);

      var startTime = now();
      var startMutliFingerStatus = calcMutliFingerStatus(startTouches);

      _this.setGestureState({
        startTime: startTime,
        startTouches: startTouches,
        startMutliFingerStatus: startMutliFingerStatus,

        /* copy for next time touch move cala convenient */
        time: startTime,
        touches: startTouches,
        mutliFingerStatus: startMutliFingerStatus,
        srcEvent: _this.event
      });
    });

    _defineProperty(_assertThisInitialized(_this), "checkIfMultiTouchStart", function () {
      var _this$props = _this.props,
          enablePinch = _this$props.enablePinch,
          enableRotate = _this$props.enableRotate;
      var touches = _this.gesture.touches;

      if (touches.length > 1 && (enablePinch || enableRotate)) {
        if (enablePinch) {
          var startMutliFingerStatus = calcMutliFingerStatus(touches);

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

    _defineProperty(_assertThisInitialized(_this), "handleTouchMove", function (e) {
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

    _defineProperty(_assertThisInitialized(_this), "checkIfMultiTouchMove", function () {
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
        var rotation = calcRotation(startMutliFingerStatus, mutliFingerStatus);

        _this.setGestureState({
          rotation: rotation
        });

        _this.triggerCombineEvent('onRotate', 'move');
      }
    });

    _defineProperty(_assertThisInitialized(_this), "allowGesture", function () {
      return shouldTriggerDirection(_this.gesture.direction, _this.directionSetting);
    });

    _defineProperty(_assertThisInitialized(_this), "checkIfSingleTouchMove", function () {
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
        var direction = getMovingDirection(preTouches[0], touches[0]);

        _this.setGestureState({
          direction: direction
        });

        var eventName = getDirectionEventName(direction);

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

    _defineProperty(_assertThisInitialized(_this), "checkIfMultiTouchEnd", function (status) {
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

    _defineProperty(_assertThisInitialized(_this), "updateGestureStatus", function (e) {
      var time = now();

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

      var moveStatus = calcMoveStatus(startTouches, touches, time - startTime);
      var mutliFingerStatus;

      if (pinch || rotate) {
        mutliFingerStatus = calcMutliFingerStatus(touches);
      }

      _this.setGestureState({
        /* update status snapshot */
        touches: touches,
        mutliFingerStatus: mutliFingerStatus,

        /* update duration status */
        moveStatus: moveStatus
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleTouchEnd", function (e) {
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

    _defineProperty(_assertThisInitialized(_this), "handleTouchCancel", function (e) {
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

    _defineProperty(_assertThisInitialized(_this), "triggerAllowEvent", function (type, status) {
      if (_this.allowGesture()) {
        _this.triggerCombineEvent(type, status);
      } else {
        _this.triggerSubEvent(type, status);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "doSingleTouchEnd", function (status) {
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
        var swipe = shouldTriggerSwipe(z, velocity);

        _this.setGestureState({
          swipe: swipe
        });

        if (pan) {
          // pan need end, it's a process
          // sometimes, start with pan left, but end with pan right....
          _this.triggerAllowEvent('onPan', status);
        }

        if (swipe) {
          var directionEvName = getDirectionEventName(direction); // swipe just need a direction, it's a endpoint

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

    _defineProperty(_assertThisInitialized(_this), "getTouchAction", function () {
      var _this$props2 = _this.props,
          enablePinch = _this$props2.enablePinch,
          enableRotate = _this$props2.enableRotate;

      var _assertThisInitialize = _assertThisInitialized(_this),
          directionSetting = _assertThisInitialize.directionSetting;

      if (enablePinch || enableRotate || directionSetting === DIRECTION_ALL) {
        return 'pan-x pan-y';
      }

      if (directionSetting === DIRECTION_VERTICAL) {
        return 'pan-x';
      }

      if (directionSetting === DIRECTION_HORIZONTAL) {
        return 'pan-y';
      }

      return 'auto';
    });

    _this.directionSetting = directionMap[props.direction];
    _this.state = {};
    return _this;
  }

  _createClass(Gesture, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.cleanPressTimer();
    }
  }, {
    key: "render",
    value: function render() {
      var children = this.props.children;
      var child = React.Children.only(children);
      var touchAction = this.getTouchAction();
      var events = {
        onTouchStart: this.handleTouchStart,
        onTouchMove: this.handleTouchMove,
        onTouchCancel: this.handleTouchCancel,
        onTouchEnd: this.handleTouchEnd
      };
      return React.cloneElement(child, _objectSpread({}, events, {
        style: _objectSpread({
          touchAction: touchAction
        }, child.props.style || {})
      }));
    }
  }]);

  return Gesture;
}(React.Component);

_defineProperty(Gesture, "defaultProps", {
  enableRotate: false,
  enablePinch: false,
  direction: 'all'
});

export { Gesture as default };