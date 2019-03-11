import React from 'react';
import PropTypes from 'prop-types';
import getPopupModal from './getPopupModal';

const propTypes = {
  prefixCls: PropTypes.string,
  dismissText: PropTypes.string,
  okText: PropTypes.string,
  WrapComponent: PropTypes.string,
  triggerType: PropTypes.string,
  onVisibleChange: PropTypes.func,
  onOk: PropTypes.func,
  onDismiss: PropTypes.func,
};

export default class Picker extends React.Component {
  static propTypes = propTypes

  static defaultProps = {
    onVisibleChange() { },
    onOk() { },
    onDismiss() { },
    prefixCls: 'panda-picker-popup',
    dismissText: '取消',
    okText: '确认',
    WrapComponent: 'span',
    triggerType: 'onClick',
  };

  constructor(props) {
    super(props);

    this.state = {
      pickerValue: 'value' in this.props ? this.props.value : null,
      visible: this.props.visible || false,
    };
  }

  componentWillReceiveProps(nextProps) {
    if ('value' in nextProps) {
      this.setState({
        pickerValue: nextProps.value,
      });
    }
    if ('visible' in nextProps) {
      this.setVisibleState(nextProps.visible);
    }
  }

  onPickerChange = (pickerValue) => {
    if (this.state.pickerValue !== pickerValue) {
      this.setState({
        pickerValue,
      });
      const { picker } = this.props;
      if (picker && picker.props.onValueChange) {
        picker.props.onValueChange(pickerValue);
      }
    }
  }

  saveRef = (picker) => {
    this.picker = picker;
  }

  setVisibleState(visible) {
    this.setState({
      visible,
    });
    if (!visible) {
      this.setState({
        pickerValue: null,
      });
    }
  }

  fireVisibleChange(visible) {
    if (this.state.visible !== visible) {
      if (!('visible' in this.props)) {
        this.setVisibleState(visible);
      }
      this.props.onVisibleChange(visible);
    }
  }

  onTriggerClick = (e) => {
    const child = this.props.children;
    const childProps = child.props || {};
    if (childProps[this.props.triggerType]) {
      childProps[this.props.triggerType](e);
    }
    this.fireVisibleChange(!this.state.visible);
  }

  onOk = () => {
    this.props.onOk(this.picker && this.picker.getValue());
    this.fireVisibleChange(false);
  }

  getContent = () => {
    if (this.props.picker) {
      let { pickerValue } = this.state;
      if (pickerValue === null) {
        pickerValue = this.props.value;
      }
      return React.cloneElement(this.props.picker, ({
        selectedValue: pickerValue,
        onValueChange: this.onPickerChange,
        ref: this.saveRef,
      }));
    }
    return this.props.content;
  }

  onDismiss = () => {
    this.props.onDismiss();
    this.fireVisibleChange(false);
  }

  hide = () => {
    this.fireVisibleChange(false);
  }

  render() {
    const children = this.props.children;
    if (!children) {
      return getPopupModal(this.props, this.state.visible, {
        getContent: this.getContent,
        onOk: this.onOk,
        hide: this.hide,
        onDismiss: this.onDismiss,
      });
    }
    const { WrapComponent, disabled } = this.props;
    const child = children;
    const newChildProps = {};
    if (!disabled) {
      newChildProps[this.props.triggerType] = this.onTriggerClick;
    }
    return (
      <WrapComponent style={this.props.wrapStyle}>
        {React.cloneElement(child, newChildProps)}
        {
        getPopupModal(this.props, this.state.visible, {
          getContent: this.getContent,
          onOk: this.onOk,
          hide: this.hide,
          onDismiss: this.onDismiss,
        })
      }
      </WrapComponent>
    );
  }
}
