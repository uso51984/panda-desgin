import React from 'react';
import { render, mount } from 'enzyme';
import CircleProgress from '../CircleProgress';

describe('CircleProgress', () => {
  it('CircleProgress gapPosition equal to left renders correctly', () => {
    const wrapper = render(<CircleProgress trailWidth={0} gapPosition="left" percent={12} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('CircleProgress gapPosition equal to right renders correctly', () => {
    const wrapper = render(<CircleProgress trailWidth={0} gapPosition="right" percent={0} />);
    expect(wrapper).toMatchSnapshot();
  });
});
