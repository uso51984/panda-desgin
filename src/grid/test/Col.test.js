import React from 'react';
import { mount } from 'enzyme';
import { Col } from '../index';

describe('Col and CellGroup', () => {
  it('Col should renders correctly', () => {
    const wrapper = mount(<Col span="6" offset="3">span: 8</Col>);
    expect(wrapper.find('.panda-col--6')).toHaveLength(1);
    expect(wrapper.find('.panda-col--offset-3')).toHaveLength(1);
  });
});
