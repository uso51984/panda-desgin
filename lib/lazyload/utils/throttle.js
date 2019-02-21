"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = throttle;

/*eslint-disable */
function throttle(fn) {
  var threshhold = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 250;
  var scope = arguments.length > 2 ? arguments[2] : undefined;
  var last;
  var deferTimer;
  return function () {
    var context = scope || this;
    var now = +new Date();
    var args = arguments;

    if (last && now < last + threshhold) {
      clearTimeout(deferTimer);
      deferTimer = setTimeout(function () {
        last = now;
        fn.apply(context, args);
      }, threshhold);
    } else {
      last = now;
      fn.apply(context, args);
    }
  };
}