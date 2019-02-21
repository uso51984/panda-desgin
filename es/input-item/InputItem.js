import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import React from 'react';
import classNames from 'classnames';
import TouchFeedback from 'react-tap-feedback';
import Input from './Input';

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
  _inherits(InputItem, _React$Component);

  function InputItem(props) {
    var _this;

    _classCallCheck(this, InputItem);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(InputItem).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "onInputChange", function (e) {
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

    _defineProperty(_assertThisInitialized(_this), "handleOnChange", function (value, e) {
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

    _defineProperty(_assertThisInitialized(_this), "onInputFocus", function (value) {
      if (_this.debounceTimeout) {
        clearTimeout(_this.debounceTimeout);
        _this.debounceTimeout = null;
      }

      _this.setState({
        focus: true
      });

      _this.props.onFocus(value);
    });

    _defineProperty(_assertThisInitialized(_this), "onInputBlur", function (value) {
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

    _defineProperty(_assertThisInitialized(_this), "clearInput", function () {
      _this.setState({
        value: ''
      });

      _this.props.onChange('');

      _this.focus();
    });

    _defineProperty(_assertThisInitialized(_this), "focus", function () {
      _this.inputRef.focus();
    });

    _this.state = {
      value: normalizeValue(props.value || props.defaultValue)
    };
    return _this;
  }

  _createClass(InputItem, [{
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
      return clear && !readOnly && !disabled && value && React.createElement(TouchFeedback, {
        activeClassName: "".concat(prefixCls, "-clear-active")
      }, React.createElement("div", {
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
      return error && React.createElement("div", {
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
          restProps = _objectWithoutProperties(_this$props3, ["prefixCls", "className", "label", "suffix", "type", "readOnly", "disabled", "error", "maxLength"]);

      delete restProps.defaultValue;
      delete restProps.clear;
      var _this$state = this.state,
          value = _this$state.value,
          focus = _this$state.focus;
      var wrapCls = classNames("".concat(prefixCls, "-wrapper"), className, (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-disabled"), disabled), _defineProperty(_classNames, "".concat(prefixCls, "-error"), error), _defineProperty(_classNames, "".concat(prefixCls, "-focus"), focus), _classNames));
      var suffixNode = suffix ? React.createElement("span", {
        className: "".concat(prefixCls, "-suffix")
      }, suffix) : null;
      var labelNode = label ? React.createElement("div", {
        className: "".concat(prefixCls, "-label")
      }, React.createElement("span", null, label)) : null;
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

      return React.createElement("div", {
        className: wrapCls
      }, labelNode, React.createElement("div", {
        className: "".concat(prefixCls, "-control")
      }, React.createElement(Input, _extends({}, restProps, {
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
}(React.Component);

_defineProperty(InputItem, "defaultProps", {
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

export default InputItem;