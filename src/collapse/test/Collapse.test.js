import React from 'react';
import { render, mount } from 'enzyme';
import Collapse, { Panel } from '../index';

describe('Collapse', () => {
  it('Collapse renders correctly', () => {
    const wrapper = render(<Collapse defaultActiveKey="0" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('Collapse has activekey renders correctly', () => {
    const onChange = jest.fn();
    const wrapper = mount(
      <Collapse activeKey={['0']} onChange={onChange} openAnimation={() => { }}>
        <Panel header="微商城"> 提供多样店铺模板，快速搭建网上商城</Panel>
        <Panel header="零售" disabled>网店吸粉获客、会</Panel>
      </Collapse>);
    const instance = wrapper.instance();

    expect(instance.state.activeKey).toEqual(['0']);
    expect(wrapper.find('.panda-collapse')).toHaveLength(1);
    const collapseHeader = wrapper.find('.panda-collapse__item-header');
    expect(collapseHeader).toHaveLength(2);
    collapseHeader.at(0).simulate('click');
    expect(instance.state.activeKey).toEqual(['0']);
    collapseHeader.at(1).simulate('click');
    expect(instance.state.activeKey).toEqual(['0']);
    instance.onClickItem('-2');

    expect(onChange).toBeCalled();

    wrapper.setProps({ activeKey: '3', accordion: true });
    expect(instance.state.activeKey).toEqual(['3']);
  });

  it('Collapse accordion is true renders correctly', () => {
    const wrapper = mount(<Collapse accordion >
      <Panel header="微商城"> 提供多样店铺模板，快速搭建网上商城</Panel>
    </Collapse>);
    const instance = wrapper.instance();

    wrapper.setProps({ a: '3' });
    expect(instance.state.activeKey).toEqual([undefined]);
    instance.onClickItem('0');
    expect(instance.state.activeKey).toEqual(['0']);
    instance.onClickItem('0');
    expect(instance.state.activeKey).toEqual([]);
  });
});
