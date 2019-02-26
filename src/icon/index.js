import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import loadSprite from './loadSprite';

const propTypes = {
  size: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string,
};

export default class Icon extends React.Component {
  static propTypes = propTypes

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
