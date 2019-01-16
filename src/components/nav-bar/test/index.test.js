import React from 'react';
import { render, mount } from 'enzyme';
import NavBar from '../index';

describe('NavBar and CellGroup', () => {
  const props = {
    leftContent: '返回',
    rightContent: '按钮',
  };
  it('NavBar should renders correctly', () => {
    const wrapper = render(<NavBar {...props} icon="icon">NavBar</NavBar>);
    expect(wrapper).toMatchSnapshot();
  });

  it('NavBar click event  should work fine', () => {
    const onLeftClick = jest.fn();
    const wrapper = mount(<NavBar {...props}>NavBar</NavBar>);
    wrapper.find('.panda-navbar__left').simulate('click');
    wrapper.setProps({ onLeftClick });
    wrapper.find('.panda-navbar__left').simulate('click');
    expect(onLeftClick).toBeCalled();
    expect(wrapper.find('.panda-navbar__left-icon')).toHaveLength(0);
  });
});
