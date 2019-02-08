import React from 'react';
import { render, mount } from 'enzyme';
import InputItem from '../index';

describe('InputItem', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('InputItem should renders correctly', () => {
    const wrapper = render(<InputItem label="label" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('InputItem type="bankCard" should renders correctly', () => {
    const wrapper = render(<InputItem label="label" type="bankCard" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('InputItem type="phone" should renders correctly', () => {
    const wrapper = render(<InputItem label="label" type="phone" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('InputItem type="password" should renders correctly', () => {
    const wrapper = render(<InputItem label="label" type="password" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('InputItem type="password" should renders correctly', () => {
    const wrapper = render(<InputItem label="label" type="digit" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('InputItem type="number" should renders correctly', () => {
    const wrapper = render(<InputItem type="number" clear value="00" error suffix="icon" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('InputItem type="other" should renders correctly', () => {
    const wrapper = render(<InputItem label="label" type="other" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('InputItem type="bankCard" and onChange event should renders correctly', () => {
    const onChange = jest.fn();

    const wrapper = mount(<InputItem label="label" type="bankCard" onChange={onChange} />);
    const instance = wrapper.instance();
    const InputNode = wrapper.find('input');
    InputNode.simulate('change', { target: { value: 'vead2' } });
    expect(instance.state.value).toEqual('2');
    expect(onChange).toBeCalled();
  });

  it('InputItem type="phone" and onChange event should renders correctly', () => {
    const onChange = jest.fn();

    const wrapper = mount(<InputItem label="label" type="phone" onChange={onChange} />);
    const instance = wrapper.instance();
    const InputNode = wrapper.find('input');
    InputNode.simulate('change', { target: { value: 'vead3' } });
    expect(instance.state.value).toEqual('3');
    expect(onChange).toBeCalled();

    InputNode.simulate('change', { target: { value: 'vead5233' } });
    expect(instance.state.value).toEqual('523 3');

    InputNode.simulate('change', { target: { value: 'vead5233323232323' } });
    expect(instance.state.value).toEqual('523 3323 2323');
  });

  it('InputItem type="number" and onChange event should renders correctly', () => {
    const onChange = jest.fn();

    const wrapper = mount(<InputItem label="label" type="number" onChange={onChange} />);
    const instance = wrapper.instance();
    const InputNode = wrapper.find('input');
    InputNode.simulate('change', { target: { value: 'vead5233323232323' } });
    expect(instance.state.value).toEqual('5233323232323');
    expect(onChange).toBeCalled();
  });

  it('InputItem type="text" and clear event should renders correctly', () => {
    const onChange = jest.fn();

    const wrapper = mount(<InputItem label="label" type="text" clear onChange={onChange} />);
    const instance = wrapper.instance();
    const InputNode = wrapper.find('input');
    InputNode.simulate('change', { target: { value: 'vead5233323232323' } });
    expect(instance.state.value).toEqual('vead5233323232323');

    wrapper.find('.panda-input-clear').simulate('click');
    expect(instance.state.value).toEqual('');
    expect(onChange).toBeCalled();

    wrapper.setProps({ a: 'a' });
    expect(instance.state.value).toEqual('');
    wrapper.setProps({ value: 'test props value' });
    expect(instance.state.value).toEqual('test props value');
  });


  it('InputItem type="password" and onChange event should renders correctly', () => {
    const onChange = jest.fn();

    const wrapper = mount(<InputItem label="label" type="password" value="vead52" onChange={onChange} />);
    const instance = wrapper.instance();
    const InputNode = wrapper.find('input');
    InputNode.simulate('change', { target: { value: 'vead5233323232323' } });
    expect(instance.state.value).toEqual('vead52');

    InputNode.simulate('focus', { target: { value: 'vead5233323232323' } });
    InputNode.simulate('blur', { target: { value: 'vead5233323232323' } });
    InputNode.simulate('focus', { target: { value: 'vead5233323232323' } });
    jest.runAllTimers();
  });
});
