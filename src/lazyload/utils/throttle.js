/*eslint-disable */
export default function throttle(fn, threshhold = 250, scope) {
  let last;
  let deferTimer;

  return function () {
    let context = scope || this;

    let now = +new Date;
    let args = arguments;
    if (last && now < last + threshhold) {
      clearTimeout(deferTimer);
      deferTimer = setTimeout(function () {
        last = now;
        fn.apply(context, args);
      }, threshhold);
    } else {
      last = now;
      fn.apply(context, args);
    }
  };
}
