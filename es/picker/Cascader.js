import _objectSpread from "@babel/runtime/helpers/objectSpread";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import React from 'react';
import arrayTreeFilter from '../utils/arrayTreeFilter';
import MultiPicker from '../picker-view/MultiPicker';
import PickerView from '../picker-view/PickerView';

var Cascader =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Cascader, _React$Component);

  function Cascader() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Cascader);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Cascader)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      value: _this.getValue(_this.props.data, _this.props.defaultValue || _this.props.value)
    });

    _defineProperty(_assertThisInitialized(_this), "onValueChange", function (value, index) {
      var children = arrayTreeFilter(_this.props.data, function (c, level) {
        return level <= index && c.value === value[level];
      });
      var data = children[index];
      var i;

      for (i = index + 1; data && data.children && data.children.length && i < _this.props.cols; i++) {
        data = data.children[0];
        value[i] = data.value;
      }

      value.length = i;
      console.log('value2323', value);

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

  _createClass(Cascader, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      console.log('this.getValue(nextProps.data, nextProps.value)', this.getValue(nextProps.data, nextProps.value));

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
      var childrenTree = arrayTreeFilter(data, function (c, level) {
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
        return React.createElement(PickerView, {
          key: level,
          prefixCls: pickerPrefixCls,
          style: {
            flex: 1
          },
          disabled: disabled,
          itemStyle: pickerItemStyle,
          indicatorStyle: indicatorStyle
        }, children.map(function (item) {
          return React.createElement(PickerView.Item, {
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

      var multiStyle = _objectSpread({
        flexDirection: 'row',
        alignItems: 'center'
      }, style);

      return React.createElement(MultiPicker, {
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
}(React.Component);

_defineProperty(Cascader, "defaultProps", {
  cols: 3,
  data: [],
  disabled: false
});

export default Cascader;