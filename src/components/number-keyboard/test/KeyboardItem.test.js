import React from 'react';
import { render, mount } from 'enzyme';
import KeyboardItem from '../KeyboardItem';

describe('KeyboardItem and CellGroup', () => {
  it('KeyboardItem renders correctly', () => {
    const wrapper = render(<KeyboardItem prefixCls="test" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('KeyboardItem click event should renders correctly', () => {
    const onClick = jest.fn();
    const wrapper = mount(<KeyboardItem prefixCls="test" onClick={onClick} />);

    wrapper.find('.test-item').simulate('click');
    expect(onClick).toBeCalled();
  });
});
