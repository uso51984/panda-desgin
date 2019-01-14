import React from 'react';
import { render, mount } from 'enzyme';
import { Cell, CellGroup } from '../index';

describe('Cell and CellGroup', () => {
  it('renders correctly', () => {
    const wrapper = render(<Cell title="单元格" value="内容" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('icon props should be renders correctly', () => {
    const wrapper = render(<Cell title="单元格" arrow="down" value="内容" icon="test icon" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('onClick should be renders correctly', () => {
    const propcClick = jest.fn();
    const wrapper = mount(<Cell title="单元格"required onClick={propcClick} value="内容" />);
    wrapper.find('.panda-cell').simulate('click');
    expect(propcClick).toBeCalled();
  });

  it('CellGroup should be renders correctly', () => {
    const wrapper = mount(<CellGroup border />);
    expect(wrapper.find('.panda-hairline--top-bottom')).toHaveLength(1);
  });
});
