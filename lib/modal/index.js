"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "alert", {
  enumerable: true,
  get: function get() {
    return _alert["default"];
  }
});
exports["default"] = void 0;

var _Modal = _interopRequireDefault(require("./Modal"));

var _alert = _interopRequireDefault(require("./alert"));

var _default = _Modal["default"];
exports["default"] = _default;