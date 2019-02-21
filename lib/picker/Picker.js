"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDefaultProps = getDefaultProps;
exports["default"] = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

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

var _PopupPickerWrap = _interopRequireDefault(require("./PopupPickerWrap"));

var _MultiPicker = _interopRequireDefault(require("../picker-view/MultiPicker"));

var _PickerView = _interopRequireDefault(require("../picker-view/PickerView"));

var _Cascader = _interopRequireDefault(require("./Cascader"));

var _arrayTreeFilter = _interopRequireDefault(require("../utils/arrayTreeFilter"));

function getDefaultProps() {
  var defaultFormat = function defaultFormat(values) {
    if (values.length > 0 && typeof values[0] !== 'string') {
      return values;
    }

    return values.join(',');
  };

  return {
    triggerType: 'onClick',
    format: defaultFormat,
    cols: 3,
    cascade: true,
    title: ''
  };
}

var Picker =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2["default"])(Picker, _React$Component);

  function Picker(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, Picker);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Picker).call(this, props));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "getSel", function (value) {
      var treeChildren;
      var data = _this.props.data;

      if (_this.props.cascade) {
        treeChildren = (0, _arrayTreeFilter["default"])(data, function (c, level) {
          return c.value === value[level];
        });
      } else {
        treeChildren = value.map(function (v, i) {
          return data[i].filter(function (d) {
            return d.value === v;
          })[0];
        });
      }

      return _this.props.format && _this.props.format(treeChildren.map(function (v) {
        return v.label;
      }));
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "getPickerCol", function () {
      var _this$props = _this.props,
          data = _this$props.data,
          pickerPrefixCls = _this$props.pickerPrefixCls,
          itemStyle = _this$props.itemStyle,
          indicatorStyle = _this$props.indicatorStyle;
      return data.map(function (col, index) {
        return _react["default"].createElement(_PickerView["default"], {
          key: index,
          prefixCls: pickerPrefixCls,
          style: {
            flex: 1
          },
          itemStyle: itemStyle,
          indicatorStyle: indicatorStyle
        }, col.map(function (item) {
          return _react["default"].createElement(_PickerView["default"].Item, {
            key: item.value,
            value: item.value
          }, item.label);
        }));
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onOk", function (value) {
      if (_this.scrollValue !== undefined) {
        value = _this.scrollValue;
      }

      var valueLabel = _this.getSel(value);

      if (_this.props.onChange) {
        _this.props.onChange(value, valueLabel);
      }

      if (_this.props.onOk) {
        _this.props.onOk(value, valueLabel);
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "setScrollValue", function (v) {
      _this.scrollValue = v;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "setCasecadeScrollValue", function (v) {
      // 级联情况下保证数据正确性，滚动过程中只有当最后一级变化时才变更数据
      if (v && _this.scrollValue) {
        var length = _this.scrollValue.length;

        if (length === v.length && _this.scrollValue[length - 1] === v[length - 1]) {
          return;
        }
      }

      _this.setScrollValue(v);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onPickerChange", function (v) {
      _this.setScrollValue(v);

      _this.setState({
        value: v
      });

      if (_this.props.onPickerChange) {
        _this.props.onPickerChange(v);
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onVisibleChange", function (visible) {
      _this.setScrollValue(undefined);

      if (_this.props.onVisibleChange) {
        _this.props.onVisibleChange(visible);
      }
    });
    var _value = [];

    if ('value' in props) {
      _value = props.value;
    }

    _this.state = {
      value: _value
    };
    return _this;
  }

  (0, _createClass2["default"])(Picker, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextprops) {
      if ('value' in nextprops) {
        this.setState({
          value: nextprops.value
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          children = _this$props2.children,
          popupPrefixCls = _this$props2.popupPrefixCls,
          itemStyle = _this$props2.itemStyle,
          indicatorStyle = _this$props2.indicatorStyle,
          okText = _this$props2.okText,
          dismissText = _this$props2.dismissText,
          extra = _this$props2.extra,
          cascade = _this$props2.cascade,
          prefixCls = _this$props2.prefixCls,
          pickerPrefixCls = _this$props2.pickerPrefixCls,
          data = _this$props2.data,
          cols = _this$props2.cols,
          onOk = _this$props2.onOk,
          restProps = (0, _objectWithoutProperties2["default"])(_this$props2, ["children", "popupPrefixCls", "itemStyle", "indicatorStyle", "okText", "dismissText", "extra", "cascade", "prefixCls", "pickerPrefixCls", "data", "cols", "onOk"]);
      var value = this.state.value;
      var cascader;

      if (cascade) {
        cascader = _react["default"].createElement(_Cascader["default"], {
          prefixCls: prefixCls,
          pickerPrefixCls: pickerPrefixCls,
          data: data,
          cols: cols,
          value: value,
          onChange: this.onPickerChange,
          onScrollChange: this.setCasecadeScrollValue,
          pickerItemStyle: itemStyle,
          indicatorStyle: indicatorStyle
        });
      } else {
        cascader = _react["default"].createElement(_MultiPicker["default"], {
          style: {
            flexDirection: 'row',
            alignItems: 'center'
          },
          prefixCls: prefixCls,
          onScrollChange: this.setScrollValue
        }, this.getPickerCol());
      }

      return _react["default"].createElement(_PopupPickerWrap["default"], (0, _extends2["default"])({
        picker: cascader
      }, restProps, {
        prefixCls: popupPrefixCls,
        value: value,
        dismissText: dismissText,
        okText: okText,
        onOk: this.onOk,
        onVisibleChange: this.onVisibleChange
      }), children);
    }
  }]);
  return Picker;
}(_react["default"].Component);

exports["default"] = Picker;
(0, _defineProperty2["default"])(Picker, "defaultProps", (0, _objectSpread2["default"])({}, getDefaultProps()));