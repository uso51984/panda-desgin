/* tslint:disable:jsx-no-multiline-js */
import React from 'react';
import PopupPickerWrap from './PopupPickerWrap';
import MultiPicker from '../picker-view/MultiPicker';
import PickerView from '../picker-view/PickerView';

export function getDefaultProps() {
  const defaultFormat = (values) => {
    if (values.length > 0 && typeof values[0] !== 'string') {
      return values;
    }
    return values.join(',');
  };
  return {
    triggerType: 'onClick',
    prefixCls: 'am-picker',
    pickerPrefixCls: 'am-picker-col',
    popupPrefixCls: 'am-picker-popup',
    format: defaultFormat,
    cols: 3,
    cascade: true,
    title: '',
  };
}

export default class Picker extends React.Component {
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
    console.log('v', v);

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
    const { children, value = [], popupPrefixCls, itemStyle, indicatorStyle, okText, dismissText,
      extra, cascade, prefixCls, pickerPrefixCls, data, cols, onOk, ...restProps
    } = this.props;

    console.log('this.getPickerCol()', this.getPickerCol());
    const cascader = (
      <MultiPicker
        style={{ flexDirection: 'row', alignItems: 'center' }}
        prefixCls={prefixCls}
        onScrollChange={this.setScrollValue}
      >
        {this.getPickerCol()}
      </MultiPicker>
    );
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
