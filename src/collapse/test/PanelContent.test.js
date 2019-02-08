import React from 'react';
import { render } from 'enzyme';
import PanelContent from '../PanelContent';

describe('PanelContent', () => {
  it('PanelContent renders correctly', () => {
    const wrapper = render(<PanelContent destroyInactivePanel />);
    expect(wrapper).toMatchSnapshot();
  });
});
