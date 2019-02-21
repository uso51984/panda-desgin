import _objectSpread from "@babel/runtime/helpers/objectSpread";
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
import PopupPickerWrap from './PopupPickerWrap';
import MultiPicker from '../picker-view/MultiPicker';
import PickerView from '../picker-view/PickerView';
import Cascader from './Cascader';
import arrayTreeFilter from '../utils/arrayTreeFilter';
export function getDefaultProps() {
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
  _inherits(Picker, _React$Component);

  function Picker(props) {
    var _this;

    _classCallCheck(this, Picker);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Picker).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "getSel", function (value) {
      var treeChildren;
      var data = _this.props.data;

      if (_this.props.cascade) {
        treeChildren = arrayTreeFilter(data, function (c, level) {
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

    _defineProperty(_assertThisInitialized(_this), "getPickerCol", function () {
      var _this$props = _this.props,
          data = _this$props.data,
          pickerPrefixCls = _this$props.pickerPrefixCls,
          itemStyle = _this$props.itemStyle,
          indicatorStyle = _this$props.indicatorStyle;
      return data.map(function (col, index) {
        return React.createElement(PickerView, {
          key: index,
          prefixCls: pickerPrefixCls,
          style: {
            flex: 1
          },
          itemStyle: itemStyle,
          indicatorStyle: indicatorStyle
        }, col.map(function (item) {
          return React.createElement(PickerView.Item, {
            key: item.value,
            value: item.value
          }, item.label);
        }));
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onOk", function (value) {
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

    _defineProperty(_assertThisInitialized(_this), "setScrollValue", function (v) {
      _this.scrollValue = v;
    });

    _defineProperty(_assertThisInitialized(_this), "setCasecadeScrollValue", function (v) {
      // 级联情况下保证数据正确性，滚动过程中只有当最后一级变化时才变更数据
      if (v && _this.scrollValue) {
        var length = _this.scrollValue.length;

        if (length === v.length && _this.scrollValue[length - 1] === v[length - 1]) {
          return;
        }
      }

      _this.setScrollValue(v);
    });

    _defineProperty(_assertThisInitialized(_this), "onPickerChange", function (v) {
      _this.setScrollValue(v);

      _this.setState({
        value: v
      });

      if (_this.props.onPickerChange) {
        _this.props.onPickerChange(v);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onVisibleChange", function (visible) {
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

  _createClass(Picker, [{
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
          restProps = _objectWithoutProperties(_this$props2, ["children", "popupPrefixCls", "itemStyle", "indicatorStyle", "okText", "dismissText", "extra", "cascade", "prefixCls", "pickerPrefixCls", "data", "cols", "onOk"]);

      var value = this.state.value;
      var cascader;

      if (cascade) {
        cascader = React.createElement(Cascader, {
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
        cascader = React.createElement(MultiPicker, {
          style: {
            flexDirection: 'row',
            alignItems: 'center'
          },
          prefixCls: prefixCls,
          onScrollChange: this.setScrollValue
        }, this.getPickerCol());
      }

      return React.createElement(PopupPickerWrap, _extends({
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
}(React.Component);

_defineProperty(Picker, "defaultProps", _objectSpread({}, getDefaultProps()));

export { Picker as default };