import React from 'react';
import arrayTreeFilter from '../utils/arrayTreeFilter';
import MultiPicker from '../picker-view/MultiPicker';
import PickerView from '../picker-view/PickerView';

class Cascader extends React.Component {
  static defaultProps = {
    cols: 3,
    data: [],
    disabled: false,
  };

  state = {
    value: this.getValue(this.props.data, this.props.defaultValue || this.props.value),
  };

  componentWillReceiveProps(nextProps) {
    console.log('this.getValue(nextProps.data, nextProps.value)', this.getValue(nextProps.data, nextProps.value))
    if ('value' in nextProps) {
      this.setState({
        value: this.getValue(nextProps.data, nextProps.value),
      });
    }
  }

  onValueChange = (value, index) => {
    const children = arrayTreeFilter(this.props.data, (c, level) => level <= index && c.value === value[level]);
    let data = children[index];
    let i;
    for (i = index + 1; data && data.children && data.children.length && i < this.props.cols; i++) {
      data = data.children[0];
      value[i] = data.value;
    }
    value.length = i;
    console.log('value2323', value)
    if (!('value' in this.props)) {
      this.setState({
        value,
      });
    }
    if (this.props.onChange) {
      this.props.onChange(value);
    }
  }

  getValue(d, val) {
    let data = d || this.props.data;
    let value = val || this.props.value || this.props.defaultValue;
    if (!value || !value.length || value.indexOf(undefined) > -1) {
      value = [];
      for (let i = 0; i < this.props.cols; i++) {
        if (data && data.length) {
          value[i] = data[0].value;
          data = data[0].children;
        }
      }
    }
    return value;
  }

  getCols() {
    const { data, cols, pickerPrefixCls, disabled, pickerItemStyle, indicatorStyle } = this.props;
    const value = this.state.value;
    const childrenTree = arrayTreeFilter(data, (c, level) => c.value === value[level]).map(c => c.children);

    const needPad = cols - childrenTree.length;
    if (needPad > 0) {
      for (let i = 0; i < needPad; i++) {
        childrenTree.push([]);
      }
    }
    childrenTree.length = cols - 1;
    childrenTree.unshift(data);
    return childrenTree.map((children = [], level) => (
      <PickerView
        key={level}
        prefixCls={pickerPrefixCls}
        style={{ flex: 1 }}
        disabled={disabled}
        itemStyle={pickerItemStyle}
        indicatorStyle={indicatorStyle}
      >
        {children.map(item =>
          <PickerView.Item value={item.value} key={item.value}>{item.label}</PickerView.Item>)
        }
      </PickerView>
    ));
  }

  render() {
    const props = this.props;
    const { prefixCls, className, rootNativeProps, style } = props;
    const cols = this.getCols();
    const multiStyle = {
      flexDirection: 'row',
      alignItems: 'center',
      ...style,
    };
    return (
      <MultiPicker
        style={multiStyle}
        prefixCls={prefixCls}
        className={className}
        selectedValue={this.state.value}
        rootNativeProps={rootNativeProps}
        onValueChange={this.onValueChange}
        onScrollChange={props.onScrollChange}
      >
        {cols}
      </MultiPicker>
    );
  }
}

export default Cascader;
