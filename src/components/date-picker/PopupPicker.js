import React from 'react';
import PopupPicker from '../picker/PopupPickerWrap';
import DatePicker from './DatePicker';

class PopupDatePicker extends React.Component {
  static defaultProps = {
    mode: 'datetime',
    minuteStep: 1,
    use12Hours: false,
  };

  setScrollValue = (v) => {
    this.scrollValue = v;
  }

  onOk = (v) => {
    if (this.scrollValue !== undefined) {
      v = this.scrollValue;
    }
    if (this.props.onChange) {
      this.props.onChange(v);
    }
    if (this.props.onOk) {
      this.props.onOk(v);
    }
  }

  onVisibleChange = (visible) => {
    this.scrollValue = undefined;
    if (this.props.onVisibleChange) {
      this.props.onVisibleChange(visible);
    }
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
        {children}
      </PopupPicker>
    );
  }
}

export default PopupDatePicker;
