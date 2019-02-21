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

var Input =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(Input, _React$PureComponent);

  function Input() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Input);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Input)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "onInputBlur", function (e) {
      var value = e.target.value;

      _this.props.onBlur(value);
    });

    _defineProperty(_assertThisInitialized(_this), "onInputFocus", function (e) {
      var value = e.target.value;

      _this.props.onFocus(value);
    });

    _defineProperty(_assertThisInitialized(_this), "focus", function () {
      _this.inputRef.focus();
    });

    return _this;
  }

  _createClass(Input, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          onBlur = _this$props.onBlur,
          onFocus = _this$props.onFocus,
          restProps = _objectWithoutProperties(_this$props, ["onBlur", "onFocus"]);

      return React.createElement("input", _extends({
        ref: function ref(el) {
          return _this2.inputRef = el;
        },
        onBlur: this.onInputBlur,
        onFocus: this.onInputFocus
      }, restProps));
    }
  }]);

  return Input;
}(React.PureComponent);

_defineProperty(Input, "defaultProps", {
  onBlur: function onBlur() {},
  onFocus: function onFocus() {}
});

export default Input;