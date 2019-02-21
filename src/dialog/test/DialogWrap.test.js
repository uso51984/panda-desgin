import React from 'react';
import { mount } from 'enzyme';
import DialogWrap from '../index';
import Dialog from '../Dialog';

describe('DialogWrap', () => {
  it('DialogWrap renders correctly', () => {
    const wrapper = mount(<DialogWrap visible />);
    const instance = wrapper.instance();
    expect(wrapper.find(Dialog)).toHaveLength(1);
    expect(instance.container).toBeTruthy();
    wrapper.unmount();
  });

  it('DialogWrap visible is false renders correctly', () => {
    const wrapper = mount(<DialogWrap visible={false} />);
    const instance = wrapper.instance();
    expect(wrapper.find(Dialog)).toHaveLength(0);
    expect(instance.container).toBeFalsy();
    wrapper.unmount();
  });

  it('DialogWrap if container not null getContainer function should work fine', () => {
    const wrapper = mount(<DialogWrap visible={false} />);
    const instance = wrapper.instance();
    instance.container = document.createElement('div');
    expect(instance.getContainer()).toEqual(instance.container);
  });
});
