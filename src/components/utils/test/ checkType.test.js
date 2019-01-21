import { isObject, isString, isNull, isFunction, isArray } from '../checkType';

describe('checkType', () => {
  it('checkType basic use', () => {
    expect(isObject({})).toEqual(true);
    expect(isObject([])).toEqual(false);
    expect(isString('23')).toEqual(true);
    expect(isString(23)).toEqual(false);
    expect(isNull(null)).toEqual(true);
    expect(isNull(undefined)).toEqual(false);
    expect(isFunction(() => { })).toEqual(true);
    expect(isFunction({})).toEqual(false);
    expect(isArray({})).toEqual(false);
    expect(isArray([])).toEqual(true);
  });
});
