"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

function _default(ComposedComponent) {
  var _class, _temp;

  return _temp = _class =
  /*#__PURE__*/
  function (_React$Component) {
    (0, _inherits2["default"])(_class, _React$Component);

    function _class() {
      var _getPrototypeOf2;

      var _this;

      (0, _classCallCheck2["default"])(this, _class);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf2 = (0, _getPrototypeOf3["default"])(_class)).call.apply(_getPrototypeOf2, [this].concat(args)));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "getValue", function () {
        var _this$props = _this.props,
            children = _this$props.children,
            selectedValue = _this$props.selectedValue;

        if (selectedValue && selectedValue.length) {
          return selectedValue;
        }

        if (!children) {
          return [];
        }

        return _react["default"].Children.map(children, function (c) {
          var cc = _react["default"].Children.toArray(c.children || c.props.children);

          return cc && cc[0] && cc[0].props.value;
        });
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onChange", function (i, v, cb) {
        var value = _this.getValue().concat();

        value[i] = v;

        if (cb) {
          cb(value, i);
        }
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onValueChange", function (i, v) {
        _this.onChange(i, v, _this.props.onValueChange);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onScrollChange", function (i, v) {
        _this.onChange(i, v, _this.props.onScrollChange);
      });
      return _this;
    }

    (0, _createClass2["default"])(_class, [{
      key: "render",
      value: function render() {
        return _react["default"].createElement(ComposedComponent, (0, _extends2["default"])({}, this.props, {
          getValue: this.getValue,
          onValueChange: this.onValueChange,
          onScrollChange: this.props.onScrollChange && this.onScrollChange
        }));
      }
    }]);
    return _class;
  }(_react["default"].Component), (0, _defineProperty2["default"])(_class, "defaultProps", {
    prefixCls: 'panda-picker',
    onValueChange: function onValueChange() {}
  }), _temp;
}