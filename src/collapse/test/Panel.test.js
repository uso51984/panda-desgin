import React from 'react';
import { render, mount } from 'enzyme';
import { Panel } from '../index';

describe('Panel', () => {
  it('Panel renders correctly', () => {
    const wrapper = render(<Panel prefixCls="test" isActive showArrow header="test" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('Panel accordion click event should work fine', () => {
    const onItemClick = jest.fn();
    const wrapper = mount(<Panel prefixCls="test" onItemClick={onItemClick} >test</Panel>);
    expect(wrapper.find('.test__item-header')).toHaveLength(1);
    wrapper.find('.test__item-header').simulate('click');
    expect(onItemClick).toBeCalled();
  });
});
