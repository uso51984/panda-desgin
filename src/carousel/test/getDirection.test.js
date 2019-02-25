import getDirection from '../getDirection';

describe('getDirection', () => {
  it('getDirection should correctly', () => {
    expect(getDirection(1, 2)).toEqual('');
    expect(getDirection(11, 10)).toEqual('horizontal');
    expect(getDirection(10, 11)).toEqual('vertical');
  })
})