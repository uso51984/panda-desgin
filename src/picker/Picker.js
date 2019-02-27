import React from 'react';
import PropTypes from 'prop-types';
import PopupPickerWrap from './PopupPickerWrap';
import MultiPicker from '../picker-view/MultiPicker';
import PickerView from '../picker-view/PickerView';
import Cascader from './Cascader';
import arrayTreeFilter from '../utils/arrayTreeFilter';

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

const propTypes = {
  triggerType: PropTypes.string,
  format: PropTypes.func,
  cols: PropTypes.number,
  cascade: PropTypes.bool,
  title: PropTypes.string,
  dismissText: PropTypes.string,
  okText: PropTypes.string,
  onOk: PropTypes.func,
  onChange: PropTypes.func,
  onPickerChange: PropTypes.func,
  onVisibleChange: PropTypes.func,
};

export default class Picker extends React.Component {
  static propTypes = propTypes

  static defaultProps = {
    ...getDefaultProps(),
  }

  constructor(props) {
    super(props);

    let value = [];
    if ('value' in props) {
      value = props.value;
    }

    this.state = {
      value,
    };
  }

  componentWillReceiveProps(nextprops) {
    if ('value' in nextprops) {
      this.setState({ value: nextprops.value });
    }
  }

  getSel = (value) => {
    let treeChildren;
    const { data, cascade, format } = this.props;
    if (cascade) {
      treeChildren = arrayTreeFilter(data, (c, level) => c.value === value[level]);
    } else {
      treeChildren = value.map((v, i) => data[i].filter(d => d.value === v)[0]);
    }
    return (
      format && format(treeChildren.map(v => v.label))
    );
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

  onOk = (value) => {
    if (this.scrollValue !== undefined) {
      value = this.scrollValue;
    }
    const valueLabel = this.getSel(value);
    if (this.props.onChange) {
      this.props.onChange(value, valueLabel);
    }
    if (this.props.onOk) {
      this.props.onOk(value, valueLabel);
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
    const { onPickerChange } = this.props;
    this.setScrollValue(v);
    this.setState({ value: v });

    if (onPickerChange) {
      onPickerChange(v);
    }
  }

  onVisibleChange = (visible) => {
    const { onVisibleChange } = this.props;
    this.setScrollValue(undefined);
    if (onVisibleChange) {
      onVisibleChange(visible);
    }
  }

  render() {
    const { children, popupPrefixCls, itemStyle, indicatorStyle, okText, dismissText,
      cascade, prefixCls, pickerPrefixCls, data, cols, onOk, ...restProps
    } = this.props;

    const { value } = this.state;

    let cascader;

    if (cascade) {
      cascader = (
        <Cascader
          prefixCls={prefixCls}
          pickerPrefixCls={pickerPrefixCls}
          data={data}
          cols={cols}
          value={value}
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
