import React from 'react';
import { render, mount } from 'enzyme';
import PickerMixin from '../PickerMixin';

const MockPickerView = () => null;

const WrapComponent = PickerMixin(MockPickerView);
const { Item } = WrapComponent;
describe('PickerMixin', () => {
  it('PickerMixin render correctly', () => {
    const wrapper = render(<WrapComponent />);
    expect(wrapper).toMatchSnapshot();
  });

  it('PickerMixin select function should worik fine', () => {
    const wrapper = mount(<WrapComponent>
      <Item value="1">1</Item>
      <Item>2</Item>
    </WrapComponent>);
    expect(Item()).toEqual(null);
    const instance = wrapper.instance();
    instance.select('1', 20, () => {});
  });

  it('PickerMixin not children select function should worik fine', () => {
    const wrapper = mount(<WrapComponent />);
    const instance = wrapper.instance();
    instance.select('1', 20, () => {});
  });

  it('computeChildIndex select function should worik fine', () => {
    const wrapper = mount(<WrapComponent />);
    const instance = wrapper.instance();
    expect(instance.computeChildIndex(21, 20, 2)).toEqual(1);
  });

  it('doScrollingComplete function should worik fine', () => {
    const wrapper = mount(<WrapComponent />);
    const instance = wrapper.instance();
    instance.doScrollingComplete(21, 20, () => { });
  });

  it('doScrollingComplete function has children should worik fine', () => {
    const wrapper = mount(<WrapComponent>
      <Item value="1">1</Item>
      <Item>2</Item>
    </WrapComponent>);
    const instance = wrapper.instance();
    instance.doScrollingComplete(21, 20, () => { });
  });
});
