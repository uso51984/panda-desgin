import React from 'react';
import { render } from 'enzyme';
import Icon from '../index';

window.document = null;

describe('Icon', () => {
  it('Icon should renders correctly', () => {
    const wrapper = render(<Icon type="check-circle" />);
    expect(wrapper).toMatchSnapshot();
  });
});
