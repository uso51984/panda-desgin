"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isArray = exports.isFunction = exports.isNull = exports.isString = exports.isObject = void 0;

var isObject = function isObject(value) {
  return Object.prototype.toString.call(value) === '[object Object]';
};

exports.isObject = isObject;

var isString = function isString(value) {
  return Object.prototype.toString.call(value) === '[object String]';
};

exports.isString = isString;

var isNull = function isNull(value) {
  return Object.prototype.toString.call(value) === '[object Null]';
};

exports.isNull = isNull;

var isFunction = function isFunction(value) {
  return Object.prototype.toString.call(value) === '[object Function]';
};

exports.isFunction = isFunction;

var isArray = function isArray(value) {
  return Object.prototype.toString.call(value) === '[object Array]';
};

exports.isArray = isArray;