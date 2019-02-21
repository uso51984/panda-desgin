export var isObject = function isObject(value) {
  return Object.prototype.toString.call(value) === '[object Object]';
};
export var isString = function isString(value) {
  return Object.prototype.toString.call(value) === '[object String]';
};
export var isNull = function isNull(value) {
  return Object.prototype.toString.call(value) === '[object Null]';
};
export var isFunction = function isFunction(value) {
  return Object.prototype.toString.call(value) === '[object Function]';
};
export var isArray = function isArray(value) {
  return Object.prototype.toString.call(value) === '[object Array]';
};