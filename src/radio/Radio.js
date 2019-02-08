import React from 'react';
import Checkbox from '../checkbox';

class Radio extends React.PureComponent {
  static defaultProps = {
    prefixCls: 'panda-radio',
    type: 'radio',
  }

  render() {
    return (<Checkbox {...this.props} />);
  }
}

export default Radio;
