import React from 'react';
import { render, mount } from 'enzyme';
import Checkbox from '../';

describe('checkbox', () => {
  it('checkbox renders correctly', () => {
    const wrapper = render(<Checkbox checked>apple</Checkbox>);
    expect(wrapper).toMatchSnapshot();
  });


  it('Checkbox change event should work fine', () => {
    const changeEvent = jest.fn();
    const wrapper = mount(<Checkbox onChange={changeEvent}>apple</Checkbox>);
    expect(wrapper.state('checked')).toBe(false);
    wrapper.find('input').simulate('change', { target: { checked: true } });
    expect(changeEvent).toHaveBeenCalled();
    expect(wrapper.state('checked')).toBe(true);
    wrapper.find('input').simulate('change', { target: { checked: false } });
    wrapper.setProps({ test: false });
    expect(wrapper.state('checked')).toBe(false);
  });

  it('Controlled Components should work fine', () => {
    const wrapper = mount(<Checkbox checked>apple</Checkbox>);
    wrapper.find('input').simulate('change', { target: { checked: true } });
    expect(wrapper.state('checked')).toBe(true);
    wrapper.setProps({ checked: false, disabled: true });
    expect(wrapper.state('checked')).toBe(false);
    wrapper.find('input').simulate('change', { target: { checked: true } });
    expect(wrapper.state('checked')).toBe(false);
  });
});
