import React from 'react';
import { render, mount } from 'enzyme';
import Radio, { RadioGroup } from '../';

describe('Radio', () => {
  it('Radio renders correctly', () => {
    const onChange = jest.fn();
    const wrapper = render(<Radio onChange={onChange}>Radio</Radio>);
    expect(wrapper).toMatchSnapshot();
  });

  it('change and options i should work basically', () => {
    const props = {
      options: ['Apple', 'Pear', 'Orange'],
      onChange: jest.fn(),
    };
    const wrapper = mount(<RadioGroup defaultValue="Orange" {...props} />);
    const instance = wrapper.instance();
    const checkboxInputList = wrapper.find('.panda-radio-input');
    checkboxInputList.at(0).simulate('change');
    expect(props.onChange).toHaveBeenCalled();
    checkboxInputList.at(1).simulate('change');
    expect(props.onChange).toHaveBeenCalled();
    checkboxInputList.at(2).simulate('change');
    expect(props.onChange).toHaveBeenCalled();
    checkboxInputList.at(1).simulate('change');
    expect(props.onChange).toHaveBeenCalled();
    wrapper.setProps({ test: '' });
    wrapper.setProps({ value: '' });
    expect(instance.state.value).toEqual('');
    wrapper.setProps({ value: 'Apple' });
    expect(instance.state.value).toEqual('Apple');
  });

  it('if options equal to [] should work fine', () => {
    const props = {
      options: [],
      onChange: jest.fn(),
    };
    const wrapper = mount(<RadioGroup {...props} />);
    expect(wrapper.find('input')).toHaveLength(0);
  });

  it('if option value is object should work fine', () => {
    const props = {
      options: [{ label: 'Apple', value: 'Apple' },
        { label: 'Pear', value: 'Pear' },
        { label: 'Orange', value: 'Orange', disabled: true }],
      onChange: jest.fn(),
    };
    const wrapper = mount(<RadioGroup value="Pear" {...props} />);
    expect(wrapper.find('.panda-radio--disabled')).toHaveLength(1);
    wrapper.find('input').at(0).simulate('change');
    expect(props.onChange).toHaveBeenCalled();
  });
});
