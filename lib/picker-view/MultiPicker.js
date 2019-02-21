"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _MultiPickerMixin = _interopRequireDefault(require("./MultiPickerMixin"));

var MultiPicker = function MultiPicker(props) {
  var prefixCls = props.prefixCls,
      className = props.className,
      rootNativeProps = props.rootNativeProps,
      children = props.children,
      style = props.style;
  var selectedValue = props.getValue();

  var colElements = _react["default"].Children.map(children, function (col, i) {
    return _react["default"].cloneElement(col, {
      selectedValue: selectedValue[i],
      onValueChange:
      /* istanbul ignore next */
      function onValueChange() {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return props.onValueChange.apply(props, [i].concat(args));
      },
      onScrollChange:
      /* istanbul ignore next */
      props.onScrollChange && function () {
        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }

        return props.onScrollChange.apply(props, [i].concat(args));
      }
    });
  });

  return _react["default"].createElement("div", (0, _extends2["default"])({}, rootNativeProps, {
    style: style,
    className: (0, _classnames["default"])(prefixCls, className)
  }), colElements);
};

var _default = (0, _MultiPickerMixin["default"])(MultiPicker);

exports["default"] = _default;