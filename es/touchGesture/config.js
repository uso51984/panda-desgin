/* tslint:disable:no-bitwise */
// http://hammerjs.github.io/api/#directions
export var DIRECTION_NONE = 1; // 00001

export var DIRECTION_LEFT = 2; // 00010

export var DIRECTION_RIGHT = 4; // 00100

export var DIRECTION_UP = 8; // 01000

export var DIRECTION_DOWN = 16; // 10000

export var DIRECTION_HORIZONTAL = 6; // 00110 6

export var DIRECTION_VERTICAL = 24; // 11000 24

export var DIRECTION_ALL = 30; // 11110  30
// http://hammerjs.github.io/recognizer-press/

export var PRESS = {
  time: 251 // Minimal press time in ms.

}; // http://hammerjs.github.io/recognizer-swipe/

export var SWIPE = {
  threshold: 10,
  velocity: 0.3
};