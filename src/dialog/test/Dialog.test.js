import React from 'react';
import { render, mount } from 'enzyme';
import Dialog from '../Dialog';
import { wrap } from 'module';

describe('Dialog', () => {
  it('Dialog renders correctly', () => {
    const props = {
      visible: false,
      maskAnimation: 'test-maskAnimation',
      title: 'title',
      zIndex: 10,
      animation: 'test-animation',
      closable: false,
    };

    const wrapper = render(<Dialog {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('Dialog mask is false renders correctly', () => {
    const props = {
      mask: false,
    };

    const wrapper = render(<Dialog {...props} />);
    expect(wrapper.find('.panda-dialog-mask')).toHaveLength(0);
  });

  it('Dialog maskClosable is true renders correctly', () => {
    const onClose = jest.fn();
    const wrapper = mount(<Dialog onClose={onClose} visible maskClosable />);

    wrapper.find('.panda-dialog-wrap').simulate('click');
    expect(onClose).toHaveBeenCalled();
  });

  it('Dialog onMaskClick should work fine', () => {
    const onClose = jest.fn();
    const wrapper = mount(<Dialog onClose={onClose} visible maskClosable footer="footer" />);

    wrapper.find('.panda-dialog-footer').simulate('click');
    expect(onClose).not.toHaveBeenCalled();
  });

  it('Dialog maskClosable is false renders correctly', () => {
    const onClose = jest.fn();
    const wrapper = mount(<Dialog onClose={onClose} visible maskClosable={false} />);

    wrapper.find('.panda-dialog-wrap').simulate('click');
    expect(onClose).not.toHaveBeenCalled();
  });

  it('Dialog onAnimateLeave function should work fine', () => {
    const onAnimateLeave = jest.fn();
    const afterClose = jest.fn();
    const wrapper = mount(<Dialog onAnimateLeave={onAnimateLeave} afterClose={afterClose} visible />);
    const instance = wrapper.instance();

    instance.onAnimateLeave();
    expect(onAnimateLeave).toHaveBeenCalled();
    expect(afterClose).toHaveBeenCalled();
  });
});
