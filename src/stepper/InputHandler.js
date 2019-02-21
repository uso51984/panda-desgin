import React from 'react';
import TapFeedback from 'react-tap-feedback';

export default class InputHandler extends React.PureComponent {
  render() {
    const { prefixCls, disabled, ...otherProps } = this.props;
    return (
      <TapFeedback
        disabled={disabled}
        activeClassName={`${prefixCls}-handler-active`}
      >
        <span {...otherProps} />
      </TapFeedback>
    );
  }
}
