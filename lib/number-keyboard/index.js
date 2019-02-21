"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "NumberKeyboard", {
  enumerable: true,
  get: function get() {
    return _NumberKeyboard["default"];
  }
});
exports["default"] = void 0;

var _NumberKeyboard = _interopRequireDefault(require("./NumberKeyboard"));

var _PopupNumberKeyboard = _interopRequireDefault(require("./PopupNumberKeyboard"));

var _default = _PopupNumberKeyboard["default"];
exports["default"] = _default;