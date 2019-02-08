import React from 'react';
import { render, mount } from 'enzyme';
import Progress from '../index';

describe('Progress', () => {
  it('Progress is line renders correctly', () => {
    const wrapper = render(<Progress percent={12} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('Progress is line and showInfo is false renders correctly', () => {
    const wrapper = render(<Progress color="red" showInfo={false} percent={12} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('Progress is circle renders correctly', () => {
    const wrapper = render(<Progress type="circle" percent={12} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('Progress is dashboard renders correctly', () => {
    const wrapper = render(<Progress type="dashboard" percent={12} />);
    expect(wrapper).toMatchSnapshot();
  });
});
