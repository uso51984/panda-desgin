"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getOffsetLeft;

function getClientPosition(elem) {
  var x;
  var y;
  var doc = elem.ownerDocument;
  var body = doc.body;
  var docElem = doc && doc.documentElement;
  var box = elem.getBoundingClientRect();
  x = box.left;
  y = box.top;
  x -= docElem.clientLeft || body.clientLeft || 0;
  y -= docElem.clientTop || body.clientTop || 0;
  return {
    left: x,
    top: y
  };
}

function getOffsetLeft(el) {
  var pos = getClientPosition(el);
  var doc = el.ownerDocument;
  /* istanbul ignore next */

  var w = doc.defaultView || doc.parentWindow;
  pos.left += w.pageXOffset;
  return pos.left;
}