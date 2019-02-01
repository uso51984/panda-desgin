import React from 'react';
import { render, mount } from 'enzyme';
import MultiPickerMixin from '../MultiPickerMixin';

const MockPickerView = () => null;

const WrapComponent = MultiPickerMixin(MockPickerView);
const { Item } = WrapComponent;
describe('MultiPickerMixin', () => {
  it('MultiPickerMixin render correctly', () => {
    const wrapper = render(<WrapComponent />);
    expect(wrapper).toMatchSnapshot();
  });

  it('MultiPickerMixin getValue function should worik fine', () => {
    const wrapper = mount(<WrapComponent>
      <Item>
        <Item value="1">2</Item>
      </Item>
      </WrapComponent>);
    const instance = wrapper.instance();
    expect(instance.getValue()).toEqual(['1']);
  });

  it('MultiPickerMixin onChange function should worik fine', () => {
    const props = {
      onScrollChange: jest.fn(),
      onValueChange: jest.fn(),
    };

    const wrapper = mount(<WrapComponent {...props} />);
    const instance = wrapper.instance();
    instance.onChange(1, 2, () => { });
    instance.onChange(1, 2);
    instance.onValueChange(1, 2);
    expect(props.onValueChange).toHaveBeenCalled();
    instance.onScrollChange(1, 2);
    expect(props.onScrollChange).toHaveBeenCalled();
  });

  it('MultiPickerMixin contarl component getValue function should worik fine', () => {
    const props = {
      onScrollChange: jest.fn(),
      onValueChange: jest.fn(),
      selectedValue: [1, 2, 3],
    };

    const wrapper = mount(<WrapComponent {...props} />);
    const instance = wrapper.instance();
    expect(instance.getValue()).toEqual([1, 2, 3]);
  });
});
