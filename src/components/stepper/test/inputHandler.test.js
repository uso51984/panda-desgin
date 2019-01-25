import React from 'react';
import { render } from 'enzyme';
import InputHandler from '../InputHandler';

describe('InputHandler', () => {
  it('InputHandler renders correctly', () => {
    const wrapper = render(<InputHandler prefixCls="test" disabled />);
    expect(wrapper).toMatchSnapshot();
  });
});
