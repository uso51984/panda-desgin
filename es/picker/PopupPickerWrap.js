import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import React from 'react';
import getPopupModal from './getPopupModal';

var Picker =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Picker, _React$Component);

  function Picker(props) {
    var _this;

    _classCallCheck(this, Picker);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Picker).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "onPickerChange", function (pickerValue) {
      if (_this.state.pickerValue !== pickerValue) {
        _this.setState({
          pickerValue: pickerValue
        });

        var picker = _this.props.picker;

        if (picker && picker.props.onValueChange) {
          picker.props.onValueChange(pickerValue);
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "saveRef", function (picker) {
      _this.picker = picker;
    });

    _defineProperty(_assertThisInitialized(_this), "onTriggerClick", function (e) {
      var child = _this.props.children;
      var childProps = child.props || {};

      if (childProps[_this.props.triggerType]) {
        childProps[_this.props.triggerType](e);
      }

      _this.fireVisibleChange(!_this.state.visible);
    });

    _defineProperty(_assertThisInitialized(_this), "onOk", function () {
      _this.props.onOk(_this.picker && _this.picker.getValue());

      _this.fireVisibleChange(false);
    });

    _defineProperty(_assertThisInitialized(_this), "getContent", function () {
      if (_this.props.picker) {
        var pickerValue = _this.state.pickerValue;

        if (pickerValue === null) {
          pickerValue = _this.props.value;
        }

        return React.cloneElement(_this.props.picker, {
          selectedValue: pickerValue,
          onValueChange: _this.onPickerChange,
          ref: _this.saveRef
        });
      }

      return _this.props.content;
    });

    _defineProperty(_assertThisInitialized(_this), "onDismiss", function () {
      _this.props.onDismiss();

      _this.fireVisibleChange(false);
    });

    _defineProperty(_assertThisInitialized(_this), "hide", function () {
      _this.fireVisibleChange(false);
    });

    _this.state = {
      pickerValue: 'value' in _this.props ? _this.props.value : null,
      visible: _this.props.visible || false
    };
    return _this;
  }

  _createClass(Picker, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if ('value' in nextProps) {
        this.setState({
          pickerValue: nextProps.value
        });
      }

      if ('visible' in nextProps) {
        this.setVisibleState(nextProps.visible);
      }
    }
  }, {
    key: "setVisibleState",
    value: function setVisibleState(visible) {
      this.setState({
        visible: visible
      });

      if (!visible) {
        this.setState({
          pickerValue: null
        });
      }
    }
  }, {
    key: "fireVisibleChange",
    value: function fireVisibleChange(visible) {
      if (this.state.visible !== visible) {
        if (!('visible' in this.props)) {
          this.setVisibleState(visible);
        }

        this.props.onVisibleChange(visible);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var props = this.props;
      var children = props.children;

      if (!children) {
        return getPopupModal(props, this.state.visible, {
          getContent: this.getContent,
          onOk: this.onOk,
          hide: this.hide,
          onDismiss: this.onDismiss
        });
      }

      var _this$props = this.props,
          WrapComponent = _this$props.WrapComponent,
          disabled = _this$props.disabled;
      var child = children;
      var newChildProps = {};

      if (!disabled) {
        newChildProps[props.triggerType] = this.onTriggerClick;
      }

      return React.createElement(WrapComponent, {
        style: props.wrapStyle
      }, React.cloneElement(child, newChildProps), getPopupModal(props, this.state.visible, {
        getContent: this.getContent,
        onOk: this.onOk,
        hide: this.hide,
        onDismiss: this.onDismiss
      }));
    }
  }]);

  return Picker;
}(React.Component);

_defineProperty(Picker, "defaultProps", {
  onVisibleChange: function onVisibleChange() {},
  okText: '确定',
  dismissText: '取消',
  title: '',
  onOk: function onOk() {},
  onDismiss: function onDismiss() {},
  prefixCls: 'panda-picker-popup',
  WrapComponent: 'span',
  triggerType: 'onClick'
});

export { Picker as default };