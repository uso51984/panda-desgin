import React from 'react';
import { render, mount } from 'enzyme';
import { NumberKeyboard } from '../index';

describe('NumberKeyboard', () => {
  it('theme is custom renders correctly', () => {
    const wrapper = render(<NumberKeyboard theme="custom" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('theme is default renders correctly', () => {
    const onKeyboardClick = jest.fn();
    const wrapper = mount(<NumberKeyboard onKeyboardClick={onKeyboardClick} />);

    wrapper.find('.panda-number-keyboard__close').simulate('click');
    expect(onKeyboardClick).toBeCalled();
  });
});
