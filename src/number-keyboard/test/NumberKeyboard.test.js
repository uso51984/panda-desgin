import React from 'react';
import { render, mount } from 'enzyme';
import Modal from '../../modal';
import PopupNumberKeyboard, { NumberKeyboard } from '../index';

describe('NumberKeyboard', () => {
  it('PopupNumberKeyboard renders correctly', () => {
    const wrapper = mount(<PopupNumberKeyboard visible />);
    expect(wrapper.find(Modal)).toHaveLength(1);
  });

  it('theme is custom NumberKeyboard renders correctly', () => {
    const wrapper = render(<NumberKeyboard theme="custom" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('theme is default NumberKeyboard renders correctly', () => {
    const onKeyboardClick = jest.fn();
    const wrapper = mount(<NumberKeyboard onKeyboardClick={onKeyboardClick} />);

    wrapper.find('.panda-number-keyboard__close').simulate('click');
    expect(onKeyboardClick).toBeCalled();
  });
});
