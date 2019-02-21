import React from 'react';
import { render, mount } from 'enzyme';
import { triggerDrag } from 'test/utils';
import Carousel from '../index';

describe('Carousel', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('Carousel renders correctly', () => {
    const wrapper = render(
      <Carousel autoplay>
        <div key="1" style={{ width: 100, height: 200 }}>1</div>
        <div key="2" style={{ width: 100, height: 200 }}>2</div>
      </Carousel>);
    expect(wrapper).toMatchSnapshot();
  });

  it('Carousel renders correctly', () => {
    const wrapper = mount(
      <Carousel autoplay={100}>
        <div key="1" style={{ width: 100, height: 200 }}>1</div>
        <div key="2" style={{ width: 100, height: 200 }}>2</div>
      </Carousel>);

    const instance = wrapper.instance();
    expect(instance.state.active).toEqual(0);
    jest.runOnlyPendingTimers();
    jest.runOnlyPendingTimers();
    expect(instance.state.active).toEqual(1);
  });

  it('Carousel renders correctly', () => {
    const wrapper = mount(
      <Carousel >
        <div key="1" style={{ width: 100, height: 200 }}>1</div>
        <div key="2" style={{ width: 100, height: 200 }}>2</div>
        <div key="3" style={{ width: 100, height: 200 }}>2</div>
      </Carousel>);

    const instance = wrapper.instance();
    expect(instance.state.active).toEqual(0);
    triggerDrag(instance.el, -100, 0);
    expect(instance.state.active).toEqual(1);
    triggerDrag(instance.el, -100, 0);
  });

  it('Carousel renders correctly', () => {
    const wrapper = mount(
      <Carousel vertical loop={false}>
        <div key="1" style={{ width: 100, height: 200 }}>1</div>
        <div key="2" style={{ width: 100, height: 200 }}>2</div>
      </Carousel>);

    const instance = wrapper.instance();
    instance.resetTouchStatus();

    expect(instance.state.active).toEqual(0);
    triggerDrag(instance.el, 0, -100);
    expect(instance.state.active).toEqual(1);
  });

  it('Carousel renders correctly', () => {
    const wrapper = mount(
      <Carousel touchable={false} initialSwipe={3}>
        <div key="1" style={{ width: 100, height: 200 }}>1</div>
        <div key="2" style={{ width: 100, height: 200 }}>2</div>
        <div key="2" style={{ width: 100, height: 200 }}>2</div>
        <div key="2" style={{ width: 100, height: 200 }}>2</div>
      </Carousel>);

    const instance = wrapper.instance();
    triggerDrag(instance.el, 0, -100);
    expect(instance.state.active).toEqual(3);
    triggerDrag(instance.el, 0, -100);
    expect(instance.state.active).toEqual(3);

    instance.active = -1;
    instance.correctPosition();
    expect(instance.state.active).toEqual(3);
  });
});
