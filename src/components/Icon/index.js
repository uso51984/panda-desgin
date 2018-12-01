import classnames from 'classnames';
import React from 'react';
import loadSprite from './loadSprite';

export default class Icon extends React.Component {
  static defaultProps = {
    size: 'md',
  };
  componentDidMount() {
    loadSprite();
  }
  render() {
    const { type, className, size, ...restProps } = this.props;
    const cls = classnames(
      className,
      'pan-icon',
      `pan-icon-${type}`,
      `pan-icon-${size}`,
    );
    return (
      <svg className={cls} {...restProps}>
        <use xlinkHref={`#${type}`} />
      </svg>
    );
  }
}
