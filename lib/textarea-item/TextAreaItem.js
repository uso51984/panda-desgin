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

var _classnames2 = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _reactTapFeedback = _interopRequireDefault(require("react-tap-feedback"));

function noop() {}

function fixControlledValue(value) {
  if (typeof value === 'undefined' || value === null) {
    return '';
  }

  return value;
}

var regexAstralSymbols = /[\uD800-\uDBFF][\uDC00-\uDFFF]|\n/g;

function countSymbols(text) {
  return text.replace(regexAstralSymbols, '_').length;
}

var TextareaItem =
/*#__PURE__*/
function (_React$PureComponent) {
  (0, _inherits2["default"])(TextareaItem, _React$PureComponent);

  function TextareaItem(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, TextareaItem);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(TextareaItem).call(this, props));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "focus", function () {
      _this.textareaRef.focus();
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "reAlignHeight", function () {
      var textareaDom = _this.textareaRef;
      textareaDom.style.height = '';
      textareaDom.style.height = "".concat(textareaDom.scrollHeight, "px");
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onChange", function (e) {
      var value = e.target.value;

      if ('value' in _this.props) {
        _this.setState({
          value: _this.props.value
        });
      } else {
        _this.setState({
          value: value
        });
      }

      _this.props.onChange(value); // 设置 defaultValue 时，用户输入不会触发 componentDidUpdate ，此处手工调用


      _this.componentDidUpdate();
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onBlur", function (e) {
      _this.debounceTimeout = setTimeout(function () {
        if (document.activeElement !== _this.textareaRef) {
          _this.setState({
            focus: false
          });
        }
      }, 100);
      var value = e.currentTarget.value;

      _this.props.onBlur(value);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onFocus", function (e) {
      if (_this.debounceTimeout) {
        clearTimeout(_this.debounceTimeout);
        _this.debounceTimeout = null;
      }

      _this.setState({
        focus: true
      });

      var value = e.currentTarget.value;

      _this.props.onFocus(value);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onErrorClick", function () {
      _this.props.onErrorClick();
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "clearInput", function () {
      _this.setState({
        value: ''
      });

      _this.props.onChange('');
    });
    _this.state = {
      focus: false,
      value: props.value || props.defaultValue || ''
    };
    return _this;
  }

  (0, _createClass2["default"])(TextareaItem, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if ('value' in nextProps) {
        this.setState({
          value: fixControlledValue(nextProps.value)
        });
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.autoHeight) {
        this.reAlignHeight();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (this.props.autoHeight && this.state.focus) {
        this.reAlignHeight();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.debounceTimeout) {
        clearTimeout(this.debounceTimeout);
        this.debounceTimeout = null;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _classnames,
          _this2 = this;

      var _this$props = this.props,
          prefixCls = _this$props.prefixCls,
          readOnly = _this$props.readOnly,
          style = _this$props.style,
          clear = _this$props.clear,
          children = _this$props.children,
          error = _this$props.error,
          className = _this$props.className,
          count = _this$props.count,
          labelNumber = _this$props.labelNumber,
          label = _this$props.label,
          autoHeight = _this$props.autoHeight,
          defaultValue = _this$props.defaultValue,
          otherProps = (0, _objectWithoutProperties2["default"])(_this$props, ["prefixCls", "readOnly", "style", "clear", "children", "error", "className", "count", "labelNumber", "label", "autoHeight", "defaultValue"]);
      var disabled = otherProps.disabled;
      var _this$state = this.state,
          value = _this$state.value,
          focus = _this$state.focus;
      var hasCount = count > 0 && this.props.rows > 1;
      var wrapCls = (0, _classnames2["default"])("".concat(prefixCls, "-wrapper"), (_classnames = {}, (0, _defineProperty2["default"])(_classnames, "".concat(prefixCls, "--disabled"), disabled), (0, _defineProperty2["default"])(_classnames, "".concat(prefixCls, "-wrapper-single-line"), this.props.rows === 1 && !autoHeight), (0, _defineProperty2["default"])(_classnames, "".concat(prefixCls, "--error"), error), (0, _defineProperty2["default"])(_classnames, "".concat(prefixCls, "--focus"), focus), (0, _defineProperty2["default"])(_classnames, "".concat(prefixCls, "-has-count"), hasCount), _classnames), className);
      var labelCls = (0, _classnames2["default"])("".concat(prefixCls, "-label"));
      var characterLength = countSymbols(value);
      delete otherProps.onErrorClick;
      return _react["default"].createElement("div", {
        className: wrapCls
      }, label && _react["default"].createElement("div", {
        className: labelCls
      }, label), _react["default"].createElement("div", {
        className: "".concat(prefixCls, "-control")
      }, _react["default"].createElement("textarea", (0, _extends2["default"])({
        ref: function ref(el) {
          return _this2.textareaRef = el;
        }
      }, otherProps, {
        value: value,
        onChange: this.onChange,
        onBlur: this.onBlur,
        onFocus: this.onFocus,
        readOnly: readOnly,
        style: style
      }))), clear && !readOnly && value && characterLength > 0 && _react["default"].createElement(_reactTapFeedback["default"], {
        activeClassName: "".concat(prefixCls, "-clear-active")
      }, _react["default"].createElement("div", {
        className: "".concat(prefixCls, "-clear"),
        onClick: this.clearInput
      })), error && _react["default"].createElement("div", {
        className: "".concat(prefixCls, "-error-extra"),
        onClick: this.onErrorClick
      }), hasCount && _react["default"].createElement("span", {
        className: "".concat(prefixCls, "-count")
      }, _react["default"].createElement("span", null, value ? characterLength : 0), "/", count));
    }
  }]);
  return TextareaItem;
}(_react["default"].PureComponent);

exports["default"] = TextareaItem;
(0, _defineProperty2["default"])(TextareaItem, "defaultProps", {
  prefixCls: 'panda-textarea',
  autoHeight: false,
  readOnly: false,
  disabled: false,
  placeholder: '',
  clear: false,
  rows: 1,
  onChange: noop,
  onBlur: noop,
  onFocus: noop,
  onErrorClick: noop,
  error: false,
  labelNumber: 5
});