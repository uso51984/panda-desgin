import React from 'react';
import { render, mount } from 'enzyme';
import Button from '../index';

describe('Button', () => {
  it('renders correctly', () => {
    const wrapper = render(<Button>Follow</Button>);
    expect(wrapper).toMatchSnapshot();
  });

  it('configre size equal to should correctly', () => {
    const wrapper = mount(<Button icon="check-circle-o" size="small">Follow</Button>);
    expect(wrapper.find('.panda-button--small')).toHaveLength(1);
  });

  it('configre icon should correctly', () => {
    const wrapper = mount(<Button icon="check-circle-o">Follow</Button>);
    expect(wrapper.find('.pan-icon-check-circle-o')).toHaveLength(1);
  });

  it('configre icon should correctly', () => {
    const wrapper = mount(<Button icon="check-circle-o">Follow</Button>);
    expect(wrapper.find('.pan-icon-check-circle-o')).toHaveLength(1);
  });

  it('icon is node should correctly', () => {
    const wrapper = mount(<Button icon={<span>!</span>}>Follow</Button>);
    expect(wrapper.find('.panda-icon')).toHaveLength(1);
    expect(wrapper.find('.panda-icon-md')).toHaveLength(1);
  });

  it('icon is node and sizw equal to small should correctly', () => {
    const wrapper = mount(<Button icon={<span className="self-icon-class">!</span>} size="small">Follow</Button>);
    expect(wrapper.find('.panda-icon')).toHaveLength(1);
    expect(wrapper.find('.panda-icon-xxs')).toHaveLength(1);
    expect(wrapper.find('.self-icon-class')).toHaveLength(1);
  });

  it('loading should correctly', () => {
    const wrapper = mount(<Button loading>Follow</Button>);
    expect(wrapper.find('.pan-icon-loading')).toHaveLength(1);
    expect(wrapper.find('.panda-button--loading')).toHaveLength(1);
  });

  const click = jest.fn();

  it('disabled should correctly', () => {
    const wrapper = mount(<Button disabled onClick={click}>Follow</Button>);
    expect(wrapper.find('.panda-button--disabled')).toHaveLength(1);
    expect(click).not.toHaveBeenCalled();
  });

  it('click event should correctly', () => {
    const wrapper = mount(<Button onClick={click}>Follow</Button>);
    wrapper.find('a').simulate('click');
    expect(click).toHaveBeenCalled();
  });
});
