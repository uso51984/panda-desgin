import React from 'react';
import classnames from 'classnames';
import MultiPickerMixin from './MultiPickerMixin';

const MultiPicker = (props) => {
  const {
    prefixCls,
    className,
    rootNativeProps,
    children,
    style,
  } = props;
  const selectedValue = props.getValue();

  const colElements = React.Children.map(children, (col, i) => {
    return React.cloneElement(col, {
      selectedValue: selectedValue[i],
      onValueChange: (...args) => props.onValueChange(i, ...args),
      onScrollChange: props.onScrollChange && ((...args) => props.onScrollChange(i, ...args)),
    });
  });
  return (
    <div
      {...rootNativeProps}
      style={style}
      className={classnames(prefixCls, className)}
    >
      {colElements}
    </div>
  );
};

export default MultiPickerMixin(MultiPicker);
