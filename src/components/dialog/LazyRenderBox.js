import React from 'react';

export default class LazyRenderBox extends React.PureComponent {
  render() {
    let className = this.props.className;
    if (!!this.props.hiddenClassName && !this.props.visible) {
      className += ` ${this.props.hiddenClassName}`;
    }
    const props = { ...this.props };
    delete props.hiddenClassName;
    delete props.visible;
    props.className = className;

    return <div {...props} />;
  }
}
