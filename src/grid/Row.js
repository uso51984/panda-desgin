import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const propTypes = {
  prefixCls: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node,
  Tag: PropTypes.string,
  justify: PropTypes.string,
  gutter: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
};

export default class Row extends React.PureComponent {
  static propTypes = propTypes

  static defaultProps = {
    Tag: 'div',
    gutter: 0,
    prefixCls: 'panda-row',
  }

  getStyle() {
    const { gutter, style } = this.props;
    if (!gutter) {
      return {};
    }
    const margin = `${Number(gutter) / -2}px`;
    return {
      ...style,
      marginLeft: margin,
      marginRight: margin,
    };
  }

  getCols() {
    const { gutter, children } = this.props;
    const padding = `${Number(gutter) / 2}px`;
    const cols = React.Children.map(children, (col) => {
      if (col.props && (gutter) > 0) {
        return React.cloneElement(col, {
          style: {
            paddingLeft: padding,
            paddingRight: padding,
            ...col.props.style,
          },
        });
      }
      return col;
    });
    return cols;
  }

  render() {
    const { Tag, type, align, justify, prefixCls } = this.props;
    const isFlex = type === 'flex';
    const cls = classNames({
      [prefixCls]: true,
      [`${prefixCls}--flex`]: isFlex,
      [`${prefixCls}--align-${align}`]: isFlex && align,
      [`${prefixCls}--justify-${justify}`]: isFlex && justify,
    });
    return (
      <Tag style={this.getStyle()} className={cls}>
        {this.getCols()}
      </Tag>
    );
  }
}
