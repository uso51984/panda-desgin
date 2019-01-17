import React from 'react';
import { render, mount } from 'enzyme';
import Switch from '../';

describe('checkbox', () => {
  it('Switch renders correctly', () => {
    const props = {
      defaultChecked: true,
      checked: true,
      loading: true,
    };

    const wrapper = render(<Switch {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('Switch is disabled should work fine', () => {
    const props = {
      checked: false,
      loading: true,
      disabled: true,
      onChange: jest.fn(),
      onClick: jest.fn(),
    };

    const wrapper = mount(<Switch {...props} />);
    wrapper.find('input').simulate('click');
    expect(props.onChange).not.toHaveBeenCalled();
    wrapper.find('.checkbox-disabled').simulate('click');
    expect(props.onClick).toBeCalledWith(false);
  });

  it('Switch change and click event should work fine', () => {
    const props = {
      onChange: jest.fn(),
      onClick: jest.fn(),
    };

    const wrapper = mount(<Switch {...props} />);
    const instance = wrapper.instance();

    wrapper.find('input').simulate('click');
    expect(props.onClick).toHaveBeenCalled();
    wrapper.find('input').simulate('change');
    expect(props.onChange).toHaveBeenCalled();
    expect(instance.state.checked).toEqual(false);
    wrapper.setProps({ test: true });
    wrapper.setProps({ checked: true });
    expect(instance.state.checked).toEqual(true);
  });

  it('Switch is control component change and click event  should work fine', () => {
    const props = {
      checked: true,
      color: 'red',
      onChange: jest.fn(),
      onClick: jest.fn(),
    };

    const wrapper = mount(<Switch {...props} />);
    const instance = wrapper.instance();

    wrapper.find('input').simulate('click');
    expect(props.onClick).toHaveBeenCalled();
    wrapper.find('input').simulate('change');
    expect(props.onChange).toHaveBeenCalled();
    expect(instance.state.checked).toEqual(true);
  });
});
