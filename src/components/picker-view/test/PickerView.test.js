import React from 'react';
import { render, mount } from 'enzyme';
import { triggerDrag } from 'test/utils';
import PickerView, { Picker } from '../PickerView';

const getItems = () => {
  const items = [];
  for (let i = 0; i < 3; i++) {
    items.push((
      <PickerView.Item value={`${i}`} key={i}>
        count {i}
      </PickerView.Item>
    ));
  }
  return items;
};

describe('Pickerview', () => {
  it('PickerView render correctly', () => {
    const props = {
      onValueChange: jest.fn(),
      onScrollChange: jest.fn(),
    };
    const wrapper = render(<PickerView {...props}>{getItems()}</PickerView>);
    expect(wrapper).toMatchSnapshot();
  });

  it('PickerView set defaultSelectedValue should work fine', () => {
    const props = {
      defaultSelectedValue: '34',
      onValueChange: jest.fn(),
      onScrollChange: jest.fn(),
      select: jest.fn(),
    };
    const wrapper = mount(<Picker {...props} >{getItems()}</Picker>);
    const instance = wrapper.instance();
    expect(instance.state.selectedValue).toEqual('34');
  });

  it('PickerView set selectedValue should work fine', () => {
    const props = {
      selectedValue: '99',
      defaultSelectedValue: '23',
      onValueChange: jest.fn(),
      onScrollChange: jest.fn(),
      select: jest.fn(),
    };
    const wrapper = mount(<Picker {...props} >{getItems()}</Picker>);
    const instance = wrapper.instance();
    expect(instance.state.selectedValue).toEqual('99');
  });

  it('PickerView default value should work fine', () => {
    const props = {
      onValueChange: jest.fn(),
      onScrollChange: jest.fn(),
      select: jest.fn(),
    };
    const wrapper = mount(<Picker {...props} >{getItems()}</Picker>);
    const instance = wrapper.instance();
    expect(instance.state.selectedValue).toEqual('0');

    wrapper.unmount();
  });

  it('PickerView getValue function should work fine', () => {
    const props = {
      onValueChange: jest.fn(),
      onScrollChange: jest.fn(),
      select: jest.fn(),
    };
    const wrapper = mount(<Picker {...props} >{getItems()}</Picker>);
    const instance = wrapper.instance();
    triggerDrag(instance.rootRef, 20, 0);

    expect(instance.getValue()).toEqual('0');
  });

  it('PickerView contral component getValue function should work fine', () => {
    const props = {
      selectedValue: '9',
      onValueChange: jest.fn(),
      onScrollChange: jest.fn(),
      select: jest.fn(),
    };
    const wrapper = mount(<Picker {...props} >{getItems()}</Picker>);
    const instance = wrapper.instance();
    expect(instance.getValue()).toEqual('9');
  });
});

