export function fill2(v) {
  v += '';
  while (v.length < 2) {
    v = `0${v}`;
  }
  return v;
}

export function restTimeFunc(t) {
  const ts = t;
  let rest = {
    d: '-',
    h: '--',
    m: '--',
    s: '--',
  };
  if (ts === 0) {
    rest = {
      d: '0',
      h: '00',
      m: '00',
      s: '00',
    };
  }
  if (ts) {
    const ds = 24 * 60 * 60 * 1000;
    const hs = 60 * 60 * 1000;
    const ms = 60 * 1000;

    const d = ts >= ds ? parseInt(ts / ds, 10) : 0;
    const h = ts - d * ds >= hs ? parseInt((ts - d * ds) / hs, 10) : 0;
    const m = ts - d * ds - h * hs >= ms ? parseInt((ts - d * ds - h * hs) / ms, 10) : 0;
    const s = parseInt((ts - d * ds - h * hs - m * ms) / 1000, 10);

    if (d >= 0) rest.d = `${d}`;
    if (h >= 0) rest.h = fill2(h);
    if (m >= 0) rest.m = fill2(m);
    if (s >= 0) rest.s = fill2(s);
  }
  return rest;
}
