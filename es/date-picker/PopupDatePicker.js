import _extends from "@babel/runtime/helpers/extends";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import React from 'react';
import PopupPicker from '../picker/PopupPickerWrap';
import DatePicker from './DatePicker';
import formatFn from './utils';

var PopupDatePicker =
/*#__PURE__*/
function (_React$Component) {
  _inherits(PopupDatePicker, _React$Component);

  function PopupDatePicker() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, PopupDatePicker);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(PopupDatePicker)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "setScrollValue", function (v) {
      _this.scrollValue = v;
    });

    _defineProperty(_assertThisInitialized(_this), "onOk", function (v) {
      if (_this.scrollValue !== undefined) {
        v = _this.scrollValue;
      }

      _this.props.onChange(v);

      _this.props.onOk(v);
    });

    _defineProperty(_assertThisInitialized(_this), "onVisibleChange", function (visible) {
      _this.scrollValue = undefined;

      _this.props.onVisibleChange(visible);
    });

    _defineProperty(_assertThisInitialized(_this), "fixOnOk", function (picker) {
      if (picker) {
        picker.onOk = _this.onOk;
      }
    });

    return _this;
  }

  _createClass(PopupDatePicker, [{
    key: "render",
    value: function render() {
      var props = this.props;
      var children = props.children,
          value = props.value,
          popupPrefixCls = props.popupPrefixCls;
      var dataPicker = React.createElement(DatePicker, {
        minuteStep: props.minuteStep,
        minDate: props.minDate,
        maxDate: props.maxDate,
        mode: props.mode,
        pickerPrefixCls: props.pickerPrefixCls,
        prefixCls: props.prefixCls,
        defaultDate: value || new Date(),
        use12Hours: props.use12Hours,
        onValueChange: props.onValueChange,
        onScrollChange: this.setScrollValue
      });
      return React.createElement(PopupPicker, _extends({
        picker: dataPicker
      }, props, {
        prefixCls: popupPrefixCls,
        value: value || new Date(),
        dismissText: this.props.dismissText,
        okText: this.props.okText,
        onOk: this.onOk,
        onVisibleChange: this.onVisibleChange
      }), children && React.isValidElement(children) && React.cloneElement(children, {
        value: value ? formatFn(this, value) : this.props.value
      }));
    }
  }]);

  return PopupDatePicker;
}(React.Component);

_defineProperty(PopupDatePicker, "defaultProps", {
  mode: 'datetime',
  minuteStep: 1,
  use12Hours: false,
  onChange: function onChange() {},
  onOk: function onOk() {},
  onVisibleChange: function onVisibleChange() {}
});

export default PopupDatePicker;