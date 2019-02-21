import _extends from "@babel/runtime/helpers/extends";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import React from 'react';
export default function (ComposedComponent) {
  var _class, _temp;

  return _temp = _class =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(_class, _React$Component);

    function _class() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, _class);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(_class)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _defineProperty(_assertThisInitialized(_this), "getValue", function () {
        var _this$props = _this.props,
            children = _this$props.children,
            selectedValue = _this$props.selectedValue;

        if (selectedValue && selectedValue.length) {
          return selectedValue;
        }

        if (!children) {
          return [];
        }

        return React.Children.map(children, function (c) {
          var cc = React.Children.toArray(c.children || c.props.children);
          return cc && cc[0] && cc[0].props.value;
        });
      });

      _defineProperty(_assertThisInitialized(_this), "onChange", function (i, v, cb) {
        var value = _this.getValue().concat();

        value[i] = v;

        if (cb) {
          cb(value, i);
        }
      });

      _defineProperty(_assertThisInitialized(_this), "onValueChange", function (i, v) {
        _this.onChange(i, v, _this.props.onValueChange);
      });

      _defineProperty(_assertThisInitialized(_this), "onScrollChange", function (i, v) {
        _this.onChange(i, v, _this.props.onScrollChange);
      });

      return _this;
    }

    _createClass(_class, [{
      key: "render",
      value: function render() {
        return React.createElement(ComposedComponent, _extends({}, this.props, {
          getValue: this.getValue,
          onValueChange: this.onValueChange,
          onScrollChange: this.props.onScrollChange && this.onScrollChange
        }));
      }
    }]);

    return _class;
  }(React.Component), _defineProperty(_class, "defaultProps", {
    prefixCls: 'panda-picker',
    onValueChange: function onValueChange() {}
  }), _temp;
}