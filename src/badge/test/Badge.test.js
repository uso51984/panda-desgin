import React from 'react';
import { render, mount } from 'enzyme';
import Badge from '../index';

describe('Badge', () => {
  it('Badge renders correctly', () => {
    const wrapper = render(<Badge text={66} overflowCount={33} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('dot is true should renders correctly', () => {
    const wrapper = mount(<Badge text="好" dot corner size="large" />);

    expect(wrapper.find('.panda-badge-corner-wrapper-large')).toHaveLength(1);
  });
});
