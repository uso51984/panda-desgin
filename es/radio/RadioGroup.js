import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import React from 'react';
import classNames from 'classnames';
import Radio from './Radio';

var RadioGroup =
/*#__PURE__*/
function (_React$Component) {
  _inherits(RadioGroup, _React$Component);

  function RadioGroup(props) {
    var _this;

    _classCallCheck(this, RadioGroup);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(RadioGroup).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "onRadioChange", function (ev) {
      var lastValue = _this.state.value;
      var value = ev.target.value;

      if (!('value' in _this.props)) {
        _this.setState({
          value: value
        });
      }

      if (value !== lastValue) {
        _this.props.onChange(ev);
      }
    });

    var _value;

    if ('value' in props) {
      _value = props.value;
    } else if ('defaultValue' in props) {
      _value = props.defaultValue;
    }

    _this.state = {
      value: _value
    };
    return _this;
  }

  _createClass(RadioGroup, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if ('value' in nextProps) {
        this.setState({
          value: nextProps.value
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          prefixCls = _this$props.prefixCls,
          className = _this$props.className,
          options = _this$props.options,
          style = _this$props.style,
          disabled = _this$props.disabled,
          name = _this$props.name;
      var classString = classNames(prefixCls, className);
      var children = this.props.children;

      if (options && options.length > 0) {
        children = options.map(function (option, index) {
          return React.createElement(Radio, {
            key: index,
            disabled: option.disabled || disabled,
            value: option.value,
            onChange: _this2.onRadioChange,
            checked: _this2.state.value === option.value,
            name: name
          }, option.label);
        });
      }

      return React.createElement("div", {
        className: classString,
        style: style
      }, children);
    }
  }]);

  return RadioGroup;
}(React.Component);

_defineProperty(RadioGroup, "defaultProps", {
  disabled: false,
  prefixCls: 'panda-radio-group',
  className: '',
  onChange: function onChange() {}
});

export { RadioGroup as default };