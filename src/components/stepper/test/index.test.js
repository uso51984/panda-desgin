import React from 'react';
import { render, mount } from 'enzyme';
import Stepper from '../index';

describe('Stepper', () => {
  it('Stepper renders correctly', () => {
    const wrapper = render(<Stepper
      max={10}
      min={1}
      value={1}
      onChange={() => {}}
    />);
    expect(wrapper).toMatchSnapshot();
  });
});
