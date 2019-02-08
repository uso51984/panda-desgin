import React from 'react';
import { render, mount } from 'enzyme';
import Rate from '../index';

describe('Rate', () => {
  it('Rate should renders correctly', () => {
    const props = {
      defaultValue: 2.5,
      onChange: jest.fn(),
      style: { fontSize: 30 },
      allowClear: false,
    };

    const wrapper = render(<Rate {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('Rate if disabled is true should renders correctly', () => {
    const props = {
      defaultValue: 2.5,
      onChange: jest.fn(),
      disabled: true,
      style: { fontSize: 30 },
      allowClear: false,
    };

    const wrapper = mount(<Rate value={1} {...props} />);
    const instance = wrapper.instance();
    expect(wrapper.find('.panda-rate--disabled')).toHaveLength(1);
    expect(instance.state.value).toEqual(1);
    wrapper.setProps({ value: 2 });
    expect(instance.state.value).toEqual(2);
  });

  it('Rate if disabled is false renders correctly', () => {
    const props = {
      defaultValue: 2.5,
      onChange: jest.fn(),
      style: { fontSize: 30 },
      allowClear: false,
    };

    const wrapper = mount(<Rate {...props} />);
    const instance = wrapper.instance();
    wrapper.setProps({ test: 2 });
    expect(instance.state.value).toEqual(2.5);
    wrapper.find('.panda-rate__star').at(1).simulate('click');
    expect(instance.state.value).toEqual(2);
  });

  it('Rate control compoent should renders correctly', () => {
    const props = {
      value: 2,
      onChange: jest.fn(),
      style: { fontSize: 30 },
      allowClear: true,
    };

    const wrapper = mount(<Rate {...props} />);
    const instance = wrapper.instance();
    wrapper.setProps({ test: 2 });
    expect(instance.state.value).toEqual(2);
    wrapper.find('.panda-rate__star').at(1).simulate('click');
    expect(instance.state.value).toEqual(2);
    wrapper.find('.panda-rate__star').at(2).simulate('click');
  });
});
