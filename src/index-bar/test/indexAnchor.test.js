import React from 'react';
import { mount } from 'enzyme';
import IndexAnchor from '../indexAnchor';

describe('IndexAnchor', () => {
  it('IndexAnchor renders correctly', () => {
    const props = {
      getIndexAnchorEl: jest.fn(),
      text: 'test index anchor',
      active: true
    }
    const component = mount(<IndexAnchor {...props} >test children</IndexAnchor>);
    expect(props.getIndexAnchorEl).toBeCalled();
    expect(component.find('.panda-index-bar-anchor')).toHaveLength(1);
    expect(component.find('.panda-hairline--bottom')).toHaveLength(1);
  });
});
