

export function on(target, event, handler) {
  target.addEventListener(
    event,
    handler,
  );
}

export function off(target, event, handler) {
  target.removeEventListener(event, handler);
}
