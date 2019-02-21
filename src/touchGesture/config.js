/* tslint:disable:no-bitwise */

// http://hammerjs.github.io/api/#directions
export const DIRECTION_NONE = 1; // 00001
export const DIRECTION_LEFT = 2; // 00010
export const DIRECTION_RIGHT = 4; // 00100
export const DIRECTION_UP = 8; // 01000
export const DIRECTION_DOWN = 16; // 10000

export const DIRECTION_HORIZONTAL = 6; // 00110 6
export const DIRECTION_VERTICAL = 24; // 11000 24
export const DIRECTION_ALL = 30; // 11110  30

// http://hammerjs.github.io/recognizer-press/
export const PRESS = {
  time: 251, // Minimal press time in ms.
};

// http://hammerjs.github.io/recognizer-swipe/
export const SWIPE = {
  threshold: 10,
  velocity: 0.3,
};
