import React from 'react';
import PopupPickerWrap from './PopupPickerWrap';
import MultiPicker from '../picker-view/MultiPicker';
import PickerView from '../picker-view/PickerView';
import Cascader from './Cascader';

export function getDefaultProps() {
  const defaultFormat = (values) => {
    if (values.length > 0 && typeof values[0] !== 'string') {
      return values;
    }
    return values.join(',');
  };
  return {
    triggerType: 'onClick',
    format: defaultFormat,
    cols: 3,
    cascade: true,
    title: '',
  };
}

export default class Picker extends React.Component {
  static defaultProps = {
    value: [],
  }

  getPickerCol = () => {
    const { data, pickerPrefixCls, itemStyle, indicatorStyle } = this.props;
    return data.map((col, index) => (
      <PickerView
        key={index}
        prefixCls={pickerPrefixCls}
        style={{ flex: 1 }}
        itemStyle={itemStyle}
        indicatorStyle={indicatorStyle}
      >
        {col.map(item => (
          <PickerView.Item key={item.value} value={item.value}>
            {item.label}
          </PickerView.Item>
        ))}
      </PickerView>
    ));
  }

  onOk = (v) => {
    // if (this.scrollValue !== undefined) {
    //   v = this.scrollValue;
    // }
    if (this.props.onChange) {
      this.props.onChange(v);
    }
    if (this.props.onOk) {
      this.props.onOk(v);
    }
  }

  setScrollValue = (v) => {
    this.scrollValue = v;
  }

  setCasecadeScrollValue = (v) => {
    // 级联情况下保证数据正确性，滚动过程中只有当最后一级变化时才变更数据
    if (v && this.scrollValue) {
      const length = this.scrollValue.length;
      if (
        length === v.length &&
        this.scrollValue[length - 1] === v[length - 1]
      ) {
        return;
      }
    }
    this.setScrollValue(v);
  }

  onPickerChange = (v) => {
    this.setScrollValue(v);
    if (this.props.onPickerChange) {
      this.props.onPickerChange(v);
    }
  }

  onVisibleChange = (visible) => {
    this.setScrollValue(undefined);
    if (this.props.onVisibleChange) {
      this.props.onVisibleChange(visible);
    }
  }

  render() {
    const { children, value, popupPrefixCls, itemStyle, indicatorStyle, okText, dismissText,
      extra, cascade, prefixCls, pickerPrefixCls, data, cols, onOk, ...restProps
    } = this.props;

    let cascader;

    if (cascade) {
      cascader = (
        <Cascader
          prefixCls={prefixCls}
          pickerPrefixCls={pickerPrefixCls}
          data={data}
          cols={cols}
          onChange={this.onPickerChange}
          onScrollChange={this.setCasecadeScrollValue}
          pickerItemStyle={itemStyle}
          indicatorStyle={indicatorStyle}
        />
      );
    } else {
      cascader = (
        <MultiPicker
          style={{ flexDirection: 'row', alignItems: 'center' }}
          prefixCls={prefixCls}
          onScrollChange={this.setScrollValue}
        >
          {this.getPickerCol()}
        </MultiPicker>
      );
    }

    return (
      <PopupPickerWrap
        picker={cascader}
        {...restProps}
        prefixCls={popupPrefixCls}
        value={value}
        dismissText={dismissText}
        okText={okText}
        onOk={this.onOk}
        onVisibleChange={this.onVisibleChange}
      >
        {children}
      </PopupPickerWrap>
    );
  }
}
