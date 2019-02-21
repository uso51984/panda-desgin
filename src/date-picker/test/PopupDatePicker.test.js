import React from 'react';
import { render, mount } from 'enzyme';
import PopupDatePicker from '../PopupDatePicker';

const Cell = ({ vaue }) => <span>{vaue}</span>;

describe('Popup', () => {
  it('PopupDatePicker renders correctly', () => {
    const onChange = jest.fn();
    const wrapper = render(<PopupDatePicker
      onChange={onChange}
      mode="datetime"
    >
      <Cell />
    </PopupDatePicker>);
    expect(wrapper).toMatchSnapshot();
  });

  it('PopupDatePicker setScrollValue function should work fine', () => {
    const onChange = jest.fn();
    const wrapper = mount(<PopupDatePicker
      onChange={onChange}
      mode="datetime"
    >
      <Cell />
    </PopupDatePicker>);

    const instance = wrapper.instance();
    instance.setScrollValue(4);
    expect(instance.scrollValue).toEqual(4);
  });

  it('PopupDatePicker onOk function should work fine', () => {
    const onChange = jest.fn();
    const onOk = jest.fn();
    const wrapper = mount(<PopupDatePicker
      onChange={onChange}
      onOk={onOk}
      mode="datetime"
    >
      <Cell />
    </PopupDatePicker>);

    const instance = wrapper.instance();
    instance.setScrollValue(4);
    instance.onOk(5);
    expect(onChange).toHaveBeenCalled();
    expect(onOk).toHaveBeenCalled();
    instance.setScrollValue(undefined);
    instance.onOk(4);
  });

  it('PopupDatePicker onVisibleChange function should work fine', () => {
    const onVisibleChange = jest.fn();
    const wrapper = mount(<PopupDatePicker
      onVisibleChange={onVisibleChange}
      mode="datetime"
    >
      <Cell />
    </PopupDatePicker>);

    const instance = wrapper.instance();
    instance.setScrollValue(4);
    instance.onVisibleChange(true);
    expect(instance.scrollValue).toEqual(undefined);
    expect(onVisibleChange).toHaveBeenCalled();
  });


  it('PopupDatePicker fixOnOk function should work fine', () => {
    const wrapper = mount(<PopupDatePicker
      mode="datetime"
      value={new Date(2017, 2, 31, 15, 1, 1)}
    >
      <Cell />
    </PopupDatePicker>);

    const instance = wrapper.instance();
    instance.onOk = 'ok';
    instance.fixOnOk();
    const pickerObj = {};
    instance.fixOnOk(pickerObj);
    expect(pickerObj).toEqual({ onOk: 'ok' });
  });
});
