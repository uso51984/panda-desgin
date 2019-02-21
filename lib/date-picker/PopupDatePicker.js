"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _PopupPickerWrap = _interopRequireDefault(require("../picker/PopupPickerWrap"));

var _DatePicker = _interopRequireDefault(require("./DatePicker"));

var _utils = _interopRequireDefault(require("./utils"));

var PopupDatePicker =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2["default"])(PopupDatePicker, _React$Component);

  function PopupDatePicker() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2["default"])(this, PopupDatePicker);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf2 = (0, _getPrototypeOf3["default"])(PopupDatePicker)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "setScrollValue", function (v) {
      _this.scrollValue = v;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onOk", function (v) {
      if (_this.scrollValue !== undefined) {
        v = _this.scrollValue;
      }

      _this.props.onChange(v);

      _this.props.onOk(v);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onVisibleChange", function (visible) {
      _this.scrollValue = undefined;

      _this.props.onVisibleChange(visible);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "fixOnOk", function (picker) {
      if (picker) {
        picker.onOk = _this.onOk;
      }
    });
    return _this;
  }

  (0, _createClass2["default"])(PopupDatePicker, [{
    key: "render",
    value: function render() {
      var props = this.props;
      var children = props.children,
          value = props.value,
          popupPrefixCls = props.popupPrefixCls;

      var dataPicker = _react["default"].createElement(_DatePicker["default"], {
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

      return _react["default"].createElement(_PopupPickerWrap["default"], (0, _extends2["default"])({
        picker: dataPicker
      }, props, {
        prefixCls: popupPrefixCls,
        value: value || new Date(),
        dismissText: this.props.dismissText,
        okText: this.props.okText,
        onOk: this.onOk,
        onVisibleChange: this.onVisibleChange
      }), children && _react["default"].isValidElement(children) && _react["default"].cloneElement(children, {
        value: value ? (0, _utils["default"])(this, value) : this.props.value
      }));
    }
  }]);
  return PopupDatePicker;
}(_react["default"].Component);

(0, _defineProperty2["default"])(PopupDatePicker, "defaultProps", {
  mode: 'datetime',
  minuteStep: 1,
  use12Hours: false,
  onChange: function onChange() {},
  onOk: function onOk() {},
  onVisibleChange: function onVisibleChange() {}
});
var _default = PopupDatePicker;
exports["default"] = _default;