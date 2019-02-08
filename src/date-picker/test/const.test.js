import { DATETIME, DATE, TIME, MONTH, YEAR, ONE_DAY } from '../const';

describe('const ', () => {
  it('const should fine', () => {
    expect(DATETIME).toEqual('datetime');
    expect(DATE).toEqual('date');
    expect(TIME).toEqual('time');
    expect(MONTH).toEqual('month');
    expect(YEAR).toEqual('year');
    expect(ONE_DAY).toEqual(24 * 60 * 60 * 1000);
  });
});
