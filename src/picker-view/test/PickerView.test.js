import React from 'react';
import { render, mount } from 'enzyme';
import { triggerDrag } from 'test/utils';
import PickerView from '../index';
import { Picker } from '../PickerView';

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
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

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

  it('PickerView update selectedValue should work fine', () => {
    const props = {
      selectedValue: '99',
      defaultSelectedValue: '23',
      onValueChange: jest.fn(),
      onScrollChange: jest.fn(),
      select: jest.fn(),
    };
    const wrapper = mount(<Picker {...props} >{getItems()}</Picker>);
    const instance = wrapper.instance();
    wrapper.setProps({ selectedValue: '88', noAnimate: () => { } });
    wrapper.setProps({ selectedValue: '88' });
    expect(instance.state.selectedValue).toEqual('88');
  });

  it('PickerView if init props selectedValue is null update selectedValue should work fine', () => {
    const props = {
      defaultSelectedValue: '23',
      onValueChange: jest.fn(),
      onScrollChange: jest.fn(),
      select: jest.fn(),
    };
    const wrapper = mount(<Picker {...props} >{getItems()}</Picker>);
    const instance = wrapper.instance();
    wrapper.setProps({ a: '88' });
    wrapper.setProps({ selectedValue: '188' });
    expect(instance.state.selectedValue).toEqual('188');
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
    jest.runAllTimers(300);
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

  it('PickerView setDisabled function should work fine', () => {
    const props = {
      selectedValue: '9',
      onValueChange: jest.fn(),
      onScrollChange: jest.fn(),
      select: jest.fn(),
    };
    const wrapper = mount(<Picker {...props} >{getItems()}</Picker>);
    const instance = wrapper.instance();
    instance.setDisabled(true);
    expect(instance.scrollDisabled).toEqual(true);
    expect(instance.onStart()).toEqual(undefined);
    expect(instance.onMove()).toEqual(undefined);
  });

  it('PickerView scrollingComplete function should work fine', () => {
    const props = {
      doScrollingComplete: jest.fn(),
      select: jest.fn(),
    };
    const wrapper = mount(<Picker {...props} >{getItems()}</Picker>);
    const instance = wrapper.instance();
    instance.scrollY = 5;
    instance.scrollingComplete();
    expect(props.doScrollingComplete).toHaveBeenCalled();
  });

  it('PickerView onScrollChange function should work fine', () => {
    const props = {
      doScrollingComplete: jest.fn(),
      select: jest.fn(),
      computeChildIndex: jest.fn(),
      onScrollChange: jest.fn(),
      noAnimate: jest.fn(),
    };
    const wrapper = mount(<Picker {...props} >{getItems()}</Picker>);
    const instance = wrapper.instance();
    instance.scrollY = 5;
    instance.scrollValue = 1;
    instance.onScrollChange();
    instance.scrollTo(0, 5);
    instance.scrollToWithoutAnimation(0, 5, 0);
  });

  it('PickerView fireValueChange function should work fine', () => {
    const props = {
      select: jest.fn(),
      onValueChange: jest.fn(),
    };
    const wrapper = mount(<Picker {...props} >{getItems()}</Picker>);
    const instance = wrapper.instance();
    instance.fireValueChange('32');
    expect(instance.state.selectedValue).toBe('32');
    expect(props.onValueChange).toHaveBeenCalled();
    instance.fireValueChange('32');
  });

  it('PickerView scrollHanders function should work fine', () => {
    const props = {
      select: jest.fn(),
      onValueChange: jest.fn(),
    };
    const wrapper = mount(<Picker {...props} >{getItems()}</Picker>);
    const instance = wrapper.instance();
    instance.scrollHanders().mousedown({ screenY: 2 });
    instance.scrollHanders().mousemove({ screenY: 2, preventDefault: () => { } });
    instance.scrollHanders().touchcancel({ screenY: 2 });
    instance.scrollHanders().mouseup({ screenY: 2 });
  });
});
