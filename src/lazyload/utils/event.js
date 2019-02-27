export function on(el, eventName, callback, opts = false) {
  el.addEventListener(eventName, callback, opts);
}

export function off(el, eventName, callback, opts = false) {
  opts = opts || false;
  el.removeEventListener(eventName, callback, opts);
}
