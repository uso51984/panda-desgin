import React from 'react';
import { render, mount } from 'enzyme';
import { Row, Col } from '../index';

describe('Row and CellGroup', () => {
  it('Row renders correctly', () => {
    const wrapper = render(
      <Row>
        <Col span="6">span: 8</Col>
      </Row>);
    expect(wrapper).toMatchSnapshot();
  });

  it('Row has gutter should renders correctly', () => {
    const wrapper = render(
      <Row gutter="15">
        <Col span="6">span: 8</Col>
      </Row>);
    expect(wrapper).toMatchSnapshot();
  });


  it('Row type is flex gutter should renders correctly', () => {
    const wrapper = mount(
      <Row type="flex" align="center" justify="end">
        <Col span="6">span: 8</Col>
      </Row>);
    expect(wrapper.find('.panda-row--flex')).toHaveLength(1);
    expect(wrapper.find('.panda-row--align-center')).toHaveLength(1);
    expect(wrapper.find('.panda-row--justify-end')).toHaveLength(1);
  });
});
