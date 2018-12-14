import React from 'react';
import Touchable from 'react-tap-feedback';
import Modal from '../modal';

const getModal = (props, visible, { getContent, hide, onDismiss, onOk }) => {
  const { prefixCls } = props;
  return (
    <Modal
      className={props.className}
      visible={visible}
      closable={false}
      animationType="slide-up"
      popup
      onClose={hide}
      style={props.style}
    >
      <div>
        <div className={`${prefixCls}-header`}>
          <Touchable activeClassName={`${prefixCls}-item-active`}>
            <div className={`${prefixCls}-item ${prefixCls}-header-left`} onClick={onDismiss}>
              {props.dismissText}
            </div>
          </Touchable>
          <div className={`${prefixCls}-item ${prefixCls}-title`}>{props.title}</div>
          <Touchable activeClassName={`${prefixCls}-item-active`}>
            <div className={`${prefixCls}-item ${prefixCls}-header-right`} onClick={onOk}>
              {props.okText}
            </div>
          </Touchable>
        </div>
        {getContent()}
      </div>
    </Modal>
  );
};

export default class extends React.Component {
  static defaultProps = {
    onVisibleChange() { },
    okText: '确定',
    dismissText: '取消',
    title: '',
    onOk() { },
    onDismiss() { },
    prefixCls: 'panda-picker-popup',
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
    this.props.onOk(this.state.pickerValue);
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
    const props = this.props;
    const children = props.children;
    if (!children) {
      return getModal(props, this.state.visible, {
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
      newChildProps[props.triggerType] = this.onTriggerClick;
    }
    return (
      <WrapComponent style={props.wrapStyle}>
        {React.cloneElement(child, newChildProps)}
        {
        getModal(props, this.state.visible, {
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
