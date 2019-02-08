import React from 'react';
import { render, mount } from 'enzyme';
import TextareaItem from '../index';

describe('TextAreaItem', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('TextAreaItem renders correctly', () => {
    const props = {
      clear: true,
      defaultValue: 'value',
      count: 19,
      rows: 3,
      error: true,
      placeholder: '请输入描述',
      label: 'text area',
    };
    const wrapper = render(<TextareaItem {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('tesxare change event should work fine', () => {
    const onChange = jest.fn();
    const wrapper = mount(<TextareaItem onChange={onChange} />);
    const instance = wrapper.instance();
    wrapper.find('textarea').simulate('change', { target: { value: '2323' } });
    expect(instance.state.value).toEqual('2323');
    expect(onChange).toBeCalled();

    wrapper.setProps({ a: 'test' });
    wrapper.setProps({ value: null });
    expect(instance.state.value).toEqual('');
    wrapper.setProps({ value: undefined });
    expect(instance.state.value).toEqual('');

    wrapper.setProps({ value: 'cortol value' });
    wrapper.find('textarea').simulate('change', { target: { value: 'test' } });
    expect(instance.state.value).toEqual('cortol value');

    wrapper.find('textarea').simulate('blur');
    instance.focus();
    jest.runAllTimers();
    wrapper.unmount();
  });

  it('tesxare onFocus event should work fine', () => {
    const onFocus = jest.fn();
    const wrapper = mount(<TextareaItem autoHeight onFocus={onFocus} />);
    const instance = wrapper.instance();
    wrapper.find('textarea').simulate('focus');

    expect(instance.state.value).toEqual('');
    expect(onFocus).toBeCalled();

    wrapper.find('textarea').simulate('blur');
    jest.runAllTimers();
    wrapper.find('textarea').simulate('focus');
  });

  it('tesxare onErrorClick event should work fine', () => {
    const onErrorClick = jest.fn();
    const wrapper = mount(<TextareaItem count={2} rows={3} error onErrorClick={onErrorClick} />);
    wrapper.find('.panda-textarea-error-extra').simulate('click');

    expect(onErrorClick).toBeCalled();
    wrapper.unmount();
  });

  it('tesxare clearInput event should work fine', () => {
    const onChange = jest.fn();
    const wrapper = mount(<TextareaItem clear defaultValue="has name" onChange={onChange} />);
    const instance = wrapper.instance();
    wrapper.find('.panda-textarea-clear').simulate('click');
    expect(instance.state.value).toEqual('');
    expect(onChange).toBeCalled();
  });
});
