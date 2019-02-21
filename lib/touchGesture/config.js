"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SWIPE = exports.PRESS = exports.DIRECTION_ALL = exports.DIRECTION_VERTICAL = exports.DIRECTION_HORIZONTAL = exports.DIRECTION_DOWN = exports.DIRECTION_UP = exports.DIRECTION_RIGHT = exports.DIRECTION_LEFT = exports.DIRECTION_NONE = void 0;

/* tslint:disable:no-bitwise */
// http://hammerjs.github.io/api/#directions
var DIRECTION_NONE = 1; // 00001

exports.DIRECTION_NONE = DIRECTION_NONE;
var DIRECTION_LEFT = 2; // 00010

exports.DIRECTION_LEFT = DIRECTION_LEFT;
var DIRECTION_RIGHT = 4; // 00100

exports.DIRECTION_RIGHT = DIRECTION_RIGHT;
var DIRECTION_UP = 8; // 01000

exports.DIRECTION_UP = DIRECTION_UP;
var DIRECTION_DOWN = 16; // 10000

exports.DIRECTION_DOWN = DIRECTION_DOWN;
var DIRECTION_HORIZONTAL = 6; // 00110 6

exports.DIRECTION_HORIZONTAL = DIRECTION_HORIZONTAL;
var DIRECTION_VERTICAL = 24; // 11000 24

exports.DIRECTION_VERTICAL = DIRECTION_VERTICAL;
var DIRECTION_ALL = 30; // 11110  30
// http://hammerjs.github.io/recognizer-press/

exports.DIRECTION_ALL = DIRECTION_ALL;
var PRESS = {
  time: 251 // Minimal press time in ms.

}; // http://hammerjs.github.io/recognizer-swipe/

exports.PRESS = PRESS;
var SWIPE = {
  threshold: 10,
  velocity: 0.3
};
exports.SWIPE = SWIPE;