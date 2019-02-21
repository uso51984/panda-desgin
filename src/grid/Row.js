import React from 'react';
import classNames from 'classnames';

export default class Row extends React.PureComponent {
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
