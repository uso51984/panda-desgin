"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Checkbox = _interopRequireDefault(require("./Checkbox"));

var CheckboxGroup =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2["default"])(CheckboxGroup, _React$Component);

  function CheckboxGroup(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, CheckboxGroup);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(CheckboxGroup).call(this, props));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "toggleOption", function (option) {
      var optionIndex = _this.state.value.indexOf(option.value);

      var value = (0, _toConsumableArray2["default"])(_this.state.value);

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

  (0, _createClass2["default"])(CheckboxGroup, [{
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
          return _react["default"].createElement(_Checkbox["default"], {
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

      var classString = (0, _classnames["default"])(prefixCls, className);
      return _react["default"].createElement("div", {
        className: classString,
        style: style
      }, children);
    }
  }]);
  return CheckboxGroup;
}(_react["default"].Component);

exports["default"] = CheckboxGroup;
(0, _defineProperty2["default"])(CheckboxGroup, "propTypes", {
  defaultValue: _propTypes["default"].array,
  value: _propTypes["default"].array,
  options: _propTypes["default"].array,
  onChange: _propTypes["default"].func
});
(0, _defineProperty2["default"])(CheckboxGroup, "defaultProps", {
  options: [],
  defaultValue: [],
  prefixCls: 'panda-checkbox-group',
  onChange: function onChange() {}
});