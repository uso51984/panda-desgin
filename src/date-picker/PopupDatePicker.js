import React from 'react';
import PopupPicker from '../picker/PopupPickerWrap';
import DatePicker from './DatePicker';
import formatFn from './utils';

class PopupDatePicker extends React.Component {
  static defaultProps = {
    mode: 'datetime',
    minuteStep: 1,
    use12Hours: false,
    onChange() { },
    onOk() { },
    onVisibleChange() { },
  };

  setScrollValue = (v) => {
    this.scrollValue = v;
  }

  onOk = (v) => {
    if (this.scrollValue !== undefined) {
      v = this.scrollValue;
    }
    this.props.onChange(v);
    this.props.onOk(v);
  }

  onVisibleChange = (visible) => {
    this.scrollValue = undefined;
    this.props.onVisibleChange(visible);
  }


  fixOnOk = (picker) => {
    if (picker) {
      picker.onOk = this.onOk;
    }
  }

  render() {
    const { props } = this;
    const { children, value, popupPrefixCls } = props;

    const dataPicker = (
      <DatePicker
        minuteStep={props.minuteStep}
        minDate={props.minDate}
        maxDate={props.maxDate}
        mode={props.mode}
        pickerPrefixCls={props.pickerPrefixCls}
        prefixCls={props.prefixCls}
        defaultDate={value || new Date()}
        use12Hours={props.use12Hours}
        onValueChange={props.onValueChange}
        onScrollChange={this.setScrollValue}
      />
    );

    return (
      <PopupPicker
        picker={dataPicker}
        {...props}
        prefixCls={popupPrefixCls}
        value={value || new Date()}
        dismissText={this.props.dismissText}
        okText={this.props.okText}
        onOk={this.onOk}
        onVisibleChange={this.onVisibleChange}
      >
        {
          children &&
          React.isValidElement(children) &&
          React.cloneElement(children, {
            value: value ? formatFn(this, value) : this.props.value,
          })}
      </PopupPicker>
    );
  }
}

export default PopupDatePicker;
