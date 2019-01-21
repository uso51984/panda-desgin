import arrayTreeFilter from '../arrayTreeFilter';

const data = [{
  value: 'a',
  children: [{
    value: 'b',
    children: [{
      value: 'c',
    }, {
      value: 'd',
    }],
  }],
}];

const values = ['a', 'b', 'c'];

describe('arrayTreeFilter', () => {
  it('arrayTreeFilter basic use', () => {
    const result = arrayTreeFilter(data, (item, level) => item.value === values[level]);
    expect(result.length).toEqual(3);
    expect(result[0].value).toEqual('a');
    expect(result[1].value).toEqual('b');
    expect(result[2].value).toEqual('c');
  });

  it('childrenKeyName basic use', () => {
    const data2 = [{
      value: 'a',
      childNodes: [{
        value: 'b',
        childNodes: [{
          value: 'c',
        }, {
          value: 'd',
        }],
      }],
    }];

    const result = arrayTreeFilter(data2, (item, level) => item.value === values[level], {
      childrenKeyName: 'childNodes',
    });

    expect(result.length).toEqual(3);
    expect(result[0].value).toEqual('a');
    expect(result[1].value).toEqual('b');
    expect(result[2].value).toEqual('c');
  });


  it('data equal null basic use', () => {
    const result = arrayTreeFilter(null, (item, level) => item.value === values[level]);
    expect(result.length).toEqual(0);
  });
});
