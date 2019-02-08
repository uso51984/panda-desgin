import React from 'react';
import { render, mount } from 'enzyme';
import FabButton from '../index';

describe('FabButton', () => {
  it('FabButton renders correctly', () => {
    const wrapper = render(<FabButton
      position="top-left"
      type="vertical"
    >
      <span>checkout</span>
      {console.log('--')}
      <span>face</span>
      <span>mail</span>
    </FabButton>);
    expect(wrapper).toMatchSnapshot();
  });

  it('FabButton position is vertical click event should renders correctly', () => {
    const wrapper = mount(<FabButton
      position="bottom-left"
      type="vertical"
    >
      <span>checkout</span>
      <span>face</span>
      <span>mail</span>
    </FabButton>);

    const instance = wrapper.instance();
    wrapper.find('button').simulate('click');
    expect(instance.itemsStyle).toEqual([{ opacity: 1, top: '20px' }, { opacity: 1, top: '40px' }, { opacity: 1, top: '60px' }]);
    wrapper.find('button').simulate('click');
    expect(instance.itemsStyle).toEqual([{ left: '0px', opacity: 0, top: '0px', transform: 'translate(0,0)' }, { left: '0px', opacity: 0, top: '0px', transform: 'translate(0,0)' }, { left: '0px', opacity: 0, top: '0px', transform: 'translate(0,0)' }]);
  });

  it('FabButton position is horizontal click event should renders correctly', () => {
    const wrapper = mount(<FabButton
      position="bottom-left"
      type="horizontal"
      reverse
    >
      <span>checkout</span>
      <span>face</span>
      <span>mail</span>
    </FabButton>);

    const instance = wrapper.instance();
    wrapper.find('button').simulate('click');
    expect(instance.itemsStyle).toEqual([{ left: '-20px', opacity: 1 }, { left: '-40px', opacity: 1 }, { left: '-60px', opacity: 1 }]);
    wrapper.find('button').simulate('click');
    expect(instance.itemsStyle).toEqual([{ left: '0px', opacity: 0, top: '0px', transform: 'translate(0,0)' }, { left: '0px', opacity: 0, top: '0px', transform: 'translate(0,0)' }, { left: '0px', opacity: 0, top: '0px', transform: 'translate(0,0)' }]);
  });

  it('FabButton position is circle click event should renders correctly', () => {
    const wrapper = mount(<FabButton
      position="bottom-left"
      type="circle"
      delay
      reverse
    >
      <span>checkout</span>
      <span>face</span>
      <span>mail</span>
    </FabButton>);

    const instance = wrapper.instance();
    wrapper.find('button').simulate('click');
    expect(instance.itemsStyle).toEqual([{ opacity: 1, top: 0, transform: 'scale(.9) translate(-20px,0px)' }, { opacity: 1, top: 0, transform: 'scale(.9) translate(0px,20px)' }, { opacity: 1, top: 0, transform: 'scale(.9) translate(20px,0px)' }]);
    wrapper.find('button').simulate('click');
    expect(instance.itemsStyle).toEqual([{ left: '0px', opacity: 0, top: '0px', transform: 'translate(0,0)' }, { left: '0px', opacity: 0, top: '0px', transform: 'translate(0,0)' }, { left: '0px', opacity: 0, top: '0px', transform: 'translate(0,0)' }]);
  });

  it('FabButton type is other should renders correctly', () => {
    const wrapper = mount(<FabButton
      position="bottom-left"
      type=""
      delay
      reverse
    >
      <span>checkout</span>
      <span>face</span>
      <span>mail</span>
    </FabButton>);

    const instance = wrapper.instance();
    wrapper.find('button').simulate('click');
    expect(instance.itemsStyle).toEqual([]);
    wrapper.find('button').simulate('click');
    expect(instance.itemsStyle).toEqual([{ left: '0px', opacity: 0, top: '0px', transform: 'translate(0,0)' }, { left: '0px', opacity: 0, top: '0px', transform: 'translate(0,0)' }, { left: '0px', opacity: 0, top: '0px', transform: 'translate(0,0)' }]);
  });
});
