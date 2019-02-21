"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _arrayTreeFilter = _interopRequireDefault(require("../utils/arrayTreeFilter"));

var _MultiPicker = _interopRequireDefault(require("../picker-view/MultiPicker"));

var _PickerView = _interopRequireDefault(require("../picker-view/PickerView"));

var Cascader =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2["default"])(Cascader, _React$Component);

  function Cascader() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2["default"])(this, Cascader);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf2 = (0, _getPrototypeOf3["default"])(Cascader)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      value: _this.getValue(_this.props.data, _this.props.defaultValue || _this.props.value)
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onValueChange", function (value, index) {
      var children = (0, _arrayTreeFilter["default"])(_this.props.data, function (c, level) {
        return level <= index && c.value === value[level];
      });
      var data = children[index];
      var i;

      for (i = index + 1; data && data.children && data.children.length && i < _this.props.cols; i++) {
        data = data.children[0];
        value[i] = data.value;
      }

      value.length = i;

      if (!('value' in _this.props)) {
        _this.setState({
          value: value
        });
      }

      if (_this.props.onChange) {
        _this.props.onChange(value);
      }
    });
    return _this;
  }

  (0, _createClass2["default"])(Cascader, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if ('value' in nextProps) {
        this.setState({
          value: this.getValue(nextProps.data, nextProps.value)
        });
      }
    }
  }, {
    key: "getValue",
    value: function getValue(d, val) {
      var data = d || this.props.data;
      var value = val || this.props.value || this.props.defaultValue;

      if (!value || !value.length || value.indexOf(undefined) > -1) {
        value = [];

        for (var i = 0; i < this.props.cols; i++) {
          if (data && data.length) {
            value[i] = data[0].value;
            data = data[0].children;
          }
        }
      }

      return value;
    }
  }, {
    key: "getCols",
    value: function getCols() {
      var _this$props = this.props,
          data = _this$props.data,
          cols = _this$props.cols,
          pickerPrefixCls = _this$props.pickerPrefixCls,
          disabled = _this$props.disabled,
          pickerItemStyle = _this$props.pickerItemStyle,
          indicatorStyle = _this$props.indicatorStyle;
      var value = this.state.value;
      var childrenTree = (0, _arrayTreeFilter["default"])(data, function (c, level) {
        return c.value === value[level];
      }).map(function (c) {
        return c.children;
      });
      var needPad = cols - childrenTree.length;

      if (needPad > 0) {
        for (var i = 0; i < needPad; i++) {
          childrenTree.push([]);
        }
      }

      childrenTree.length = cols - 1;
      childrenTree.unshift(data);
      return childrenTree.map(function () {
        var children = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var level = arguments.length > 1 ? arguments[1] : undefined;
        return _react["default"].createElement(_PickerView["default"], {
          key: level,
          prefixCls: pickerPrefixCls,
          style: {
            flex: 1
          },
          disabled: disabled,
          itemStyle: pickerItemStyle,
          indicatorStyle: indicatorStyle
        }, children.map(function (item) {
          return _react["default"].createElement(_PickerView["default"].Item, {
            value: item.value,
            key: item.value
          }, item.label);
        }));
      });
    }
  }, {
    key: "render",
    value: function render() {
      var props = this.props;
      var prefixCls = props.prefixCls,
          className = props.className,
          rootNativeProps = props.rootNativeProps,
          style = props.style;
      var cols = this.getCols();
      var multiStyle = (0, _objectSpread2["default"])({
        flexDirection: 'row',
        alignItems: 'center'
      }, style);
      return _react["default"].createElement(_MultiPicker["default"], {
        style: multiStyle,
        prefixCls: prefixCls,
        className: className,
        selectedValue: this.state.value,
        rootNativeProps: rootNativeProps,
        onValueChange: this.onValueChange,
        onScrollChange: props.onScrollChange
      }, cols);
    }
  }]);
  return Cascader;
}(_react["default"].Component);

(0, _defineProperty2["default"])(Cascader, "defaultProps", {
  cols: 3,
  data: [],
  disabled: false
});
var _default = Cascader;
exports["default"] = _default;