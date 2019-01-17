import React from 'react';
import { mount, render } from 'enzyme';
import { CheckboxGroup } from '../index';

describe('CheckboxGroup', () => {
  it('change and options i should work basically', () => {
    const props = {
      options: ['Apple', 'Pear', 'Orange'],
      onChange: jest.fn(),
    };
    const wrapper = mount(<CheckboxGroup {...props} />);
    const instance = wrapper.instance();
    const checkboxInputList = wrapper.find('.panda-checkbox-input');
    checkboxInputList.at(0).simulate('change');
    expect(props.onChange).toBeCalledWith(['Apple']);
    checkboxInputList.at(1).simulate('change');
    expect(props.onChange).toBeCalledWith(['Apple', 'Pear']);
    checkboxInputList.at(2).simulate('change');
    expect(props.onChange).toBeCalledWith(['Apple', 'Pear', 'Orange']);
    checkboxInputList.at(1).simulate('change');
    expect(props.onChange).toBeCalledWith(['Apple', 'Orange']);
    wrapper.setProps({ test: '' });
    wrapper.setProps({ value: '' });
    expect(instance.state.value).toEqual([]);
    wrapper.setProps({ value: ['Apple'] });
    expect(instance.state.value).toEqual(['Apple']);
  });
});
