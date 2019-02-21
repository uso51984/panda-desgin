"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactTapFeedback = _interopRequireDefault(require("react-tap-feedback"));

var _Input = _interopRequireDefault(require("./Input"));

function normalizeValue(value) {
  if (typeof value === 'undefined' || value === null) {
    return '';
  }

  return "".concat(value);
}

var noop = function noop() {};

var InputItem =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2["default"])(InputItem, _React$Component);

  function InputItem(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, InputItem);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(InputItem).call(this, props));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onInputChange", function (e) {
      var value = e.target.value;
      var type = _this.props.type;
      var newValue = value;

      switch (type) {
        case 'bankCard':
          newValue = value.replace(/\D/g, '').replace(/(....)(?=.)/g, '$1 ');
          break;

        case 'phone':
          newValue = value.replace(/\D/g, '').substring(0, 11);
          var valueLen = newValue.length;

          if (valueLen > 3 && valueLen < 8) {
            newValue = "".concat(newValue.substr(0, 3), " ").concat(newValue.substr(3));
          } else if (valueLen >= 8) {
            newValue = "".concat(newValue.substr(0, 3), " ").concat(newValue.substr(3, 4), " ").concat(newValue.substr(7));
          }

          break;

        case 'number':
          newValue = value.replace(/\D/g, '');
          break;

        case 'text':
        case 'password':
        default:
          break;
      }

      _this.handleOnChange(newValue, e);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleOnChange", function (value, e) {
      var onChange = _this.props.onChange;

      if (!('value' in _this.props)) {
        _this.setState({
          value: value
        });
      } else {
        _this.setState({
          value: _this.props.value
        });
      }

      onChange(value, e);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onInputFocus", function (value) {
      if (_this.debounceTimeout) {
        clearTimeout(_this.debounceTimeout);
        _this.debounceTimeout = null;
      }

      _this.setState({
        focus: true
      });

      _this.props.onFocus(value);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onInputBlur", function (value) {
      _this.debounceTimeout = setTimeout(function () {
        /* istanbul ignore next */
        if (document.activeElement !== (_this.inputRef && _this.inputRef.inputRef)) {
          _this.setState({
            focus: false
          });
        }
      }, 200);

      _this.props.onBlur(value);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "clearInput", function () {
      _this.setState({
        value: ''
      });

      _this.props.onChange('');

      _this.focus();
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "focus", function () {
      _this.inputRef.focus();
    });
    _this.state = {
      value: normalizeValue(props.value || props.defaultValue)
    };
    return _this;
  }

  (0, _createClass2["default"])(InputItem, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if ('value' in nextProps) {
        this.setState({
          value: nextProps.value
        });
      }
    }
  }, {
    key: "getClearNode",
    value: function getClearNode() {
      var _this$props = this.props,
          clear = _this$props.clear,
          readOnly = _this$props.readOnly,
          disabled = _this$props.disabled,
          prefixCls = _this$props.prefixCls;
      var value = this.state.value;
      return clear && !readOnly && !disabled && value && _react["default"].createElement(_reactTapFeedback["default"], {
        activeClassName: "".concat(prefixCls, "-clear-active")
      }, _react["default"].createElement("div", {
        className: "".concat(prefixCls, "-clear"),
        onClick: this.clearInput
      }));
    }
  }, {
    key: "getErrorNode",
    value: function getErrorNode() {
      var _this$props2 = this.props,
          prefixCls = _this$props2.prefixCls,
          error = _this$props2.error;
      return error && _react["default"].createElement("div", {
        className: "".concat(prefixCls, "-error-extra")
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _classNames,
          _this2 = this;

      var _this$props3 = this.props,
          prefixCls = _this$props3.prefixCls,
          className = _this$props3.className,
          label = _this$props3.label,
          suffix = _this$props3.suffix,
          type = _this$props3.type,
          readOnly = _this$props3.readOnly,
          disabled = _this$props3.disabled,
          error = _this$props3.error,
          maxLength = _this$props3.maxLength,
          restProps = (0, _objectWithoutProperties2["default"])(_this$props3, ["prefixCls", "className", "label", "suffix", "type", "readOnly", "disabled", "error", "maxLength"]);
      delete restProps.defaultValue;
      delete restProps.clear;
      var _this$state = this.state,
          value = _this$state.value,
          focus = _this$state.focus;
      var wrapCls = (0, _classnames["default"])("".concat(prefixCls, "-wrapper"), className, (_classNames = {}, (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-disabled"), disabled), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-error"), error), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-focus"), focus), _classNames));
      var suffixNode = suffix ? _react["default"].createElement("span", {
        className: "".concat(prefixCls, "-suffix")
      }, suffix) : null;
      var labelNode = label ? _react["default"].createElement("div", {
        className: "".concat(prefixCls, "-label")
      }, _react["default"].createElement("span", null, label)) : null;
      var inputType = 'text';

      if (type === 'bankCard' || type === 'phone') {
        inputType = 'tel';
      } else if (type === 'password') {
        inputType = 'password';
      } else if (type === 'digit') {
        inputType = 'number';
      } else if (type !== 'text' && type !== 'number') {
        inputType = type;
      }

      return _react["default"].createElement("div", {
        className: wrapCls
      }, labelNode, _react["default"].createElement("div", {
        className: "".concat(prefixCls, "-control")
      }, _react["default"].createElement(_Input["default"], (0, _extends2["default"])({}, restProps, {
        value: normalizeValue(value),
        ref: function ref(el) {
          return _this2.inputRef = el;
        },
        type: inputType,
        onChange: this.onInputChange,
        onFocus: this.onInputFocus,
        onBlur: this.onInputBlur,
        readOnly: readOnly,
        disabled: disabled
      })), suffixNode, this.getClearNode(), this.getErrorNode()));
    }
  }]);
  return InputItem;
}(_react["default"].Component);

(0, _defineProperty2["default"])(InputItem, "defaultProps", {
  prefixCls: 'panda-input',
  type: 'text',
  disabled: false,
  placeholder: '',
  error: false,
  onChange: noop,
  onBlur: noop,
  onFocus: noop,
  clear: false
});
var _default = InputItem;
exports["default"] = _default;