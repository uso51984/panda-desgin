import React from 'react';
import { render, mount } from 'enzyme';
import KeyboardItem from '../KeyboardItem';

describe('NumberKeyboard and CellGroup', () => {
  it('NumberKeyboard renders correctly', () => {
    const wrapper = render(<KeyboardItem />);
    expect(wrapper).toMatchSnapshot();
  });

  it('NumberKeyboard click event should renders correctly', () => {
    const onClick = jest.fn();
    const wrapper = mount(<KeyboardItem onClick={onClick} />);

    wrapper.find('.panda-number-keyboard-item').simulate('click');
    expect(onClick).toBeCalled();
  });
});
