import closest from '../closest';

describe('closest', () => {
  it('closest basic use', () => {
    const mockDom = {
      msMatchesSelector: () => { },
    };
    expect(closest(mockDom, '.test')).toEqual(null);

    const mockDom1 = {
      className: 'test',
      msMatchesSelector: (p, className) => p.className === className,
    };
    expect(closest(mockDom1, '.test')).toEqual(mockDom1);
  });
});
