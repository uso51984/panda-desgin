import React from 'react';
import { render } from 'enzyme';
import LazyRenderBox from '../LazyRenderBox';

describe('Badge', () => {
  it('Badge renders correctly', () => {
    const wrapper = render(<LazyRenderBox hiddenClassName="test" visible={false} />);
    expect(wrapper).toMatchSnapshot();
  });
});
