import React from 'react';
import { mount } from 'enzyme';
import Input from '../Input';

describe('Input', () => {
  it('Input renders correctly', () => {
    const props = {
      onBlur: jest.fn(),
      onFocus: jest.fn(),
    };
    const wrapper = mount(<Input {...props} />);
    const instance = wrapper.instance();

    wrapper.find('input').simulate('blur');
    expect(props.onBlur).toHaveBeenCalled();

    wrapper.find('input').simulate('focus');
    expect(props.onFocus).toHaveBeenCalled();

    instance.focus();
  });
});
