import React from 'react';
import { render, mount } from 'enzyme';
import Stepper from '../index';
import InputHandler from '../InputHandler';

describe('Stepper', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('Stepper renders correctly', () => {
    const wrapper = render(<Stepper
      max={10}
      min={1}
      value={1}
      onChange={() => {}}
    />);
    expect(wrapper).toMatchSnapshot();
  });

  it('Stepper onchange event should work fine', () => {
    const onChange = jest.fn();
    const wrapper = mount(<Stepper
      max={10}
      min={1}
      useTouch={false}
      onChange={onChange}
    />);

    const instance = wrapper.instance();
    const InputHandlerList = wrapper.find(InputHandler);
    const event = {
      preventDefault: () => { },
      persist: () => {},
    };
    expect(instance.state.value).toEqual(undefined);
    InputHandlerList.at(1).instance().props.onMouseDown(event);
    jest.runAllTimers(200);
    expect(onChange).toHaveBeenCalled();
    expect(instance.state.value).toEqual(1);

    wrapper.unmount();
  });

  it('Stepper onChange event should work fine', () => {
    const onChange = jest.fn();
    const wrapper = mount(<Stepper
      max={10}
      min={1}
      precision={2}
      useTouch={false}
      onChange={onChange}
    />);

    const instance = wrapper.instance();
    const InputHandlerList = wrapper.find(InputHandler);
    const event = {
      preventDefault: () => { },
    };
    instance.state.value = 11;
    InputHandlerList.at(1).instance().props.onMouseDown(event);
    jest.runAllTimers(200);
    InputHandlerList.at(1).instance().props.onMouseUp(event);
    expect(instance.state.value).toEqual(1);
    expect(onChange).toHaveBeenCalled();
  });

  it('Stepper onMouseDown up should work fine', () => {
    const onChange = jest.fn();
    const wrapper = mount(<Stepper
      max={10}
      min={1}
      precision={2}
      useTouch={false}
      onChange={onChange}
    />);

    const instance = wrapper.instance();
    const InputHandlerList = wrapper.find(InputHandler);
    const event = {
      preventDefault: () => { },
    };
    instance.state.value = 3;
    InputHandlerList.at(0).instance().props.onMouseDown(event);
    jest.runAllTimers(200);
    InputHandlerList.at(1).instance().props.onMouseUp(event);
    expect(instance.state.value).toEqual(10);
    expect(onChange).toHaveBeenCalled();
  });

  it('Stepper value is not number and disabled should work fine', () => {
    const onChange = jest.fn();
    const wrapper = mount(<Stepper
      max={10}
      min={1}
      value="d"
      disabled
      precision={2}
      useTouch
      onChange={onChange}
    />);

    expect(wrapper.find('.panda-stepper-handler-up-disabled')).toHaveLength(2);
    const InputHandlerList = wrapper.find(InputHandler);
    InputHandlerList.at(0).instance().props.onTouchStart();
    expect(onChange).not.toHaveBeenCalled();
  });

  it('Stepper disabled components should work fine', () => {
    const onChange = jest.fn();
    const wrapper = mount(<Stepper
      max={10}
      min={1}
      disabled
      useTouch={false}
      onChange={onChange}
    />);

    const instance = wrapper.instance();
    const InputNode = wrapper.find('input');
    InputNode.simulate('blur', { target: { value: '2' } });
    expect(instance.state.value).toEqual(undefined);
  });

  it('Stepper contral components should work fine', () => {
    const onChange = jest.fn();
    const wrapper = mount(<Stepper
      max={10}
      min={1}
      value={4}
      disabled
      useTouch={false}
      onChange={onChange}
    />);

    const instance = wrapper.instance();
    const InputNode = wrapper.find('input');
    InputNode.simulate('blur', { target: { value: '2' } });
    expect(instance.state.value).toEqual(4);
  });

  it('Stepper disabled  should work fine', () => {
    const onChange = jest.fn();
    const wrapper = mount(<Stepper
      max={10}
      min={1}
      disabled
      useTouch={false}
      onChange={onChange}
    />);

    const instance = wrapper.instance();
    const InputHandlerList = wrapper.find(InputHandler);
    const event = {
      preventDefault: () => { },
    };
    instance.state.value = 2;
    InputHandlerList.at(1).instance().props.onMouseDown(event);
    expect(instance.state.value).toEqual(2);
    expect(onChange).not.toHaveBeenCalled();
  });

  it('input onchange event should work fine', () => {
    const onChange = jest.fn();
    const wrapper = mount(<Stepper
      max={10}
      min={1}
      useTouch={false}
      onChange={onChange}
    />);

    const instance = wrapper.instance();
    const InputNode = wrapper.find('input');

    InputNode.simulate('change', { target: { value: '2' } });

    expect(instance.state.inputValue).toEqual('2');
    expect(onChange).toHaveBeenCalled();
  });

  it('input onFocus event should work fine', () => {
    const onFocus = jest.fn();
    const wrapper = mount(<Stepper
      max={10}
      min={1}
      useTouch={false}
      onFocus={onFocus}
    />);

    const instance = wrapper.instance();
    const InputNode = wrapper.find('input');

    InputNode.simulate('focus', { target: { value: '2' } });

    expect(instance.state.focused).toEqual(true);
    expect(onFocus).toHaveBeenCalled();
  });

  it('input blur event should work fine', () => {
    const onBlur = jest.fn();
    const wrapper = mount(<Stepper
      max={10}
      min={1}
      useTouch={false}
      onBlur={onBlur}
    />);

    const instance = wrapper.instance();
    const InputNode = wrapper.find('input');
    InputNode.simulate('change', { target: { value: '2' } });
    InputNode.simulate('blur', { target: { value: '2' } });

    expect(instance.state.focused).toEqual(false);
    expect(instance.state.value).toEqual(2);
    expect(onBlur).toHaveBeenCalled();
  });

  it('formatter function should work fine', () => {
    const formatter = jest.fn();
    mount(<Stepper
      max={10}
      min={1}
      useTouch={false}
      formatter={formatter}
    />);
    expect(formatter).toHaveBeenCalled();
  });

  it('Stepper ReceiveProps should work fine', () => {
    const wrapper = mount(<Stepper
      max={10}
      min={1}
      focusOnUpDown
      useTouch={false}
    />);

    const instance = wrapper.instance();
    wrapper.setProps({ a: '1' });
    wrapper.setProps({ value: 2 });
    expect(instance.state.value).toEqual(2);
    expect(instance.state.inputValue).toEqual(2);
    instance.state.focused = true;
    wrapper.setProps({ value: '4' });
    expect(instance.state.value).toEqual('4');
  });

  it('Stepper getValidValue function should work fine', () => {
    const wrapper = mount(<Stepper
      max={10}
      min={1}
      focusOnUpDown
      useTouch={false}
    />);

    const instance = wrapper.instance();
    expect(instance.getValidValue(NaN)).toEqual(NaN);
    expect(instance.getValidValue(0)).toEqual(1);
    expect(instance.getValidValue(11)).toEqual(10);
  });

  it('Stepper if has precision getPrecision function should work fine', () => {
    const wrapper = mount(<Stepper
      max={10}
      min={1}
      precision={2}
      useTouch={false}
    />);

    const instance = wrapper.instance();
    expect(instance.getPrecision(2)).toEqual(2);
  });

  it('Stepper if has\'t precision getPrecision function should work fine', () => {
    const wrapper = mount(<Stepper
      max={10}
      min={-20}
      useTouch={false}
    />);

    const instance = wrapper.instance();
    expect(instance.getPrecision('2e-1')).toEqual(1);
    expect(instance.getPrecision('8.2')).toEqual(1);
  });

  it('Stepper toPrecisionAsStep function should work fine', () => {
    const wrapper = mount(<Stepper
      max={10}
      min={1}
      precision={NaN}
      useTouch
    />);

    const instance = wrapper.instance();
    instance.getMaxPrecision = () => NaN;
    instance.isNotCompleteNumber = () => false;
    expect(instance.toPrecisionAsStep(NaN)).toEqual('NaN');
    expect(instance.toPrecisionAsStep(0)).toEqual('0');
  });

  it('Stepper toNumberWhenUserInput function should work fine', () => {
    const wrapper = mount(<Stepper
      max={10}
      min={1}
      useTouch
    />);

    const instance = wrapper.instance();
    instance.state.focused = true;
    expect(instance.toNumberWhenUserInput('23222222222223223')).toEqual('23222222222223223');
    expect(instance.toNumberWhenUserInput('2322')).toEqual(2322);
  });


  it('Stepper step function should work fine', () => {
    const wrapper = mount(<Stepper
      max={10}
      min={1}
      useTouch
    />);

    const instance = wrapper.instance();
    expect(instance.toNumberWhenUserInput('23222222222223223')).toEqual(23222222222223224);
    expect(instance.toNumberWhenUserInput('2321')).toEqual(2321);
  });
});

