export const isObject = value => Object.prototype.toString.call(value) === '[object Object]';
export const isString = value => Object.prototype.toString.call(value) === '[object String]';
export const isNull = value => Object.prototype.toString.call(value) === '[object Null]';
export const isFunction = value => Object.prototype.toString.call(value) === '[object Function]';
export const isArray = value => Object.prototype.toString.call(value) === '[object Array]';
