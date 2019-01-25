import React from 'react';
import { render, mount } from 'enzyme';
import Stepper from '../index';
import InputHandler from '../InputHandler';

describe('Stepper', () => {
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
      useTouch
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
    // InputHandlerList.at(1).instance().props.onMouseUp();
    // expect(onchange).toBeCalled();
    expect(instance.state.value).toEqual(1);
  });
});
