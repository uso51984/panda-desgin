import React from 'react';
import { render } from 'enzyme';
import MultiPicker from '../MultiPicker';

const MockCol = () => null;

describe('MultiPicker', () => {
  it('MultiPicker render correctly', () => {
    const props = {
      onValueChange: jest.fn(),
      onScrollChange: jest.fn(),
    };

    const wrapper = render(<MultiPicker {...props}><MockCol /></MultiPicker>);
    expect(wrapper).toMatchSnapshot();
  });
});

