import React from 'react';
import { render } from 'enzyme';
import Star from '../index';

describe('Star', () => {
  it('Star should renders correctly', () => {
    const wrapper = render(<Star allowHalf index={0} value={0.5} />);
    expect(wrapper).toMatchSnapshot();
  });
});
