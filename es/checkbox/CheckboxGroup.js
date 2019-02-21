import _toConsumableArray from "@babel/runtime/helpers/toConsumableArray";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Checkbox from './Checkbox';

var CheckboxGroup =
/*#__PURE__*/
function (_React$Component) {
  _inherits(CheckboxGroup, _React$Component);

  function CheckboxGroup(props) {
    var _this;

    _classCallCheck(this, CheckboxGroup);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CheckboxGroup).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "toggleOption", function (option) {
      var optionIndex = _this.state.value.indexOf(option.value);

      var value = _toConsumableArray(_this.state.value);

      if (optionIndex === -1) {
        value.push(option.value);
      } else {
        value.splice(optionIndex, 1);
      }

      if (!('value' in _this.props)) {
        _this.setState({
          value: value
        });
      }

      _this.props.onChange(value);
    });

    _this.state = {
      value: props.value || props.defaultValue
    };
    return _this;
  }

  _createClass(CheckboxGroup, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if ('value' in nextProps) {
        this.setState({
          value: nextProps.value || []
        });
      }
    }
  }, {
    key: "getOptions",
    value: function getOptions() {
      var options = this.props.options;
      return options.map(function (option) {
        if (typeof option === 'string') {
          return {
            label: option,
            value: option
          };
        }

        return option;
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var props = this.props,
          state = this.state;
      var prefixCls = props.prefixCls,
          className = props.className,
          style = props.style,
          options = props.options;
      var children = props.children;

      if (options && options.length > 0) {
        children = this.getOptions().map(function (option) {
          return React.createElement(Checkbox, {
            key: option.value,
            disabled: 'disabled' in option ? option.disabled : props.disabled,
            value: option.value,
            checked: state.value.indexOf(option.value) !== -1,
            onChange: function onChange() {
              return _this2.toggleOption(option);
            },
            className: "".concat(prefixCls, "-item")
          }, option.label);
        });
      }

      var classString = classNames(prefixCls, className);
      return React.createElement("div", {
        className: classString,
        style: style
      }, children);
    }
  }]);

  return CheckboxGroup;
}(React.Component);

_defineProperty(CheckboxGroup, "propTypes", {
  defaultValue: PropTypes.array,
  value: PropTypes.array,
  options: PropTypes.array,
  onChange: PropTypes.func
});

_defineProperty(CheckboxGroup, "defaultProps", {
  options: [],
  defaultValue: [],
  prefixCls: 'panda-checkbox-group',
  onChange: function onChange() {}
});

export { CheckboxGroup as default };