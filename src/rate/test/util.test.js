import getOffsetLeft from '../util';

describe('getOffsetLeft', () => {
  it('getOffsetLeft should work fine', () => {
    expect(getOffsetLeft(document.createElement('div'))).toEqual(0);
  });
});
