import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from '../checkbox';

const propTypes = {
  prefixCls: PropTypes.string,
  type: PropTypes.string,
};

class Radio extends React.PureComponent {
  static propTypes = propTypes

  static defaultProps = {
    prefixCls: 'panda-radio',
    type: 'radio',
  }

  render() {
    return (<Checkbox {...this.props} />);
  }
}

export default Radio;
