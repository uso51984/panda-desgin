import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import classnames from 'classnames';
import React from 'react';
import TouchFeedback from 'react-tap-feedback';

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
  _inherits(TextareaItem, _React$PureComponent);

  function TextareaItem(props) {
    var _this;

    _classCallCheck(this, TextareaItem);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TextareaItem).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "focus", function () {
      _this.textareaRef.focus();
    });

    _defineProperty(_assertThisInitialized(_this), "reAlignHeight", function () {
      var textareaDom = _this.textareaRef;
      textareaDom.style.height = '';
      textareaDom.style.height = "".concat(textareaDom.scrollHeight, "px");
    });

    _defineProperty(_assertThisInitialized(_this), "onChange", function (e) {
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

    _defineProperty(_assertThisInitialized(_this), "onBlur", function (e) {
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

    _defineProperty(_assertThisInitialized(_this), "onFocus", function (e) {
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

    _defineProperty(_assertThisInitialized(_this), "onErrorClick", function () {
      _this.props.onErrorClick();
    });

    _defineProperty(_assertThisInitialized(_this), "clearInput", function () {
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

  _createClass(TextareaItem, [{
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
          otherProps = _objectWithoutProperties(_this$props, ["prefixCls", "readOnly", "style", "clear", "children", "error", "className", "count", "labelNumber", "label", "autoHeight", "defaultValue"]);

      var disabled = otherProps.disabled;
      var _this$state = this.state,
          value = _this$state.value,
          focus = _this$state.focus;
      var hasCount = count > 0 && this.props.rows > 1;
      var wrapCls = classnames("".concat(prefixCls, "-wrapper"), (_classnames = {}, _defineProperty(_classnames, "".concat(prefixCls, "--disabled"), disabled), _defineProperty(_classnames, "".concat(prefixCls, "-wrapper-single-line"), this.props.rows === 1 && !autoHeight), _defineProperty(_classnames, "".concat(prefixCls, "--error"), error), _defineProperty(_classnames, "".concat(prefixCls, "--focus"), focus), _defineProperty(_classnames, "".concat(prefixCls, "-has-count"), hasCount), _classnames), className);
      var labelCls = classnames("".concat(prefixCls, "-label"));
      var characterLength = countSymbols(value);
      delete otherProps.onErrorClick;
      return React.createElement("div", {
        className: wrapCls
      }, label && React.createElement("div", {
        className: labelCls
      }, label), React.createElement("div", {
        className: "".concat(prefixCls, "-control")
      }, React.createElement("textarea", _extends({
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
      }))), clear && !readOnly && value && characterLength > 0 && React.createElement(TouchFeedback, {
        activeClassName: "".concat(prefixCls, "-clear-active")
      }, React.createElement("div", {
        className: "".concat(prefixCls, "-clear"),
        onClick: this.clearInput
      })), error && React.createElement("div", {
        className: "".concat(prefixCls, "-error-extra"),
        onClick: this.onErrorClick
      }), hasCount && React.createElement("span", {
        className: "".concat(prefixCls, "-count")
      }, React.createElement("span", null, value ? characterLength : 0), "/", count));
    }
  }]);

  return TextareaItem;
}(React.PureComponent);

_defineProperty(TextareaItem, "defaultProps", {
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

export { TextareaItem as default };