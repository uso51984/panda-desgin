"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _getPopupModal = _interopRequireDefault(require("./getPopupModal"));

var Picker =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2["default"])(Picker, _React$Component);

  function Picker(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, Picker);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Picker).call(this, props));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onPickerChange", function (pickerValue) {
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
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "saveRef", function (picker) {
      _this.picker = picker;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onTriggerClick", function (e) {
      var child = _this.props.children;
      var childProps = child.props || {};

      if (childProps[_this.props.triggerType]) {
        childProps[_this.props.triggerType](e);
      }

      _this.fireVisibleChange(!_this.state.visible);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onOk", function () {
      _this.props.onOk(_this.picker && _this.picker.getValue());

      _this.fireVisibleChange(false);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "getContent", function () {
      if (_this.props.picker) {
        var pickerValue = _this.state.pickerValue;

        if (pickerValue === null) {
          pickerValue = _this.props.value;
        }

        return _react["default"].cloneElement(_this.props.picker, {
          selectedValue: pickerValue,
          onValueChange: _this.onPickerChange,
          ref: _this.saveRef
        });
      }

      return _this.props.content;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onDismiss", function () {
      _this.props.onDismiss();

      _this.fireVisibleChange(false);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "hide", function () {
      _this.fireVisibleChange(false);
    });
    _this.state = {
      pickerValue: 'value' in _this.props ? _this.props.value : null,
      visible: _this.props.visible || false
    };
    return _this;
  }

  (0, _createClass2["default"])(Picker, [{
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
        return (0, _getPopupModal["default"])(props, this.state.visible, {
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

      return _react["default"].createElement(WrapComponent, {
        style: props.wrapStyle
      }, _react["default"].cloneElement(child, newChildProps), (0, _getPopupModal["default"])(props, this.state.visible, {
        getContent: this.getContent,
        onOk: this.onOk,
        hide: this.hide,
        onDismiss: this.onDismiss
      }));
    }
  }]);
  return Picker;
}(_react["default"].Component);

exports["default"] = Picker;
(0, _defineProperty2["default"])(Picker, "defaultProps", {
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