import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import React from 'react';

var Star =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Star, _React$Component);

  function Star() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Star);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Star)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "onClick", function (e) {
      var _this$props = _this.props,
          onClick = _this$props.onClick,
          index = _this$props.index;
      onClick(e, index);
    });

    return _this;
  }

  _createClass(Star, [{
    key: "getClassName",
    value: function getClassName() {
      var _this$props2 = this.props,
          prefixCls = _this$props2.prefixCls,
          index = _this$props2.index,
          value = _this$props2.value,
          allowHalf = _this$props2.allowHalf;
      var starValue = index + 1;
      var className = prefixCls;

      if (allowHalf && value + 0.5 === starValue) {
        className += " ".concat(prefixCls, "--half ").concat(prefixCls, "--active");
      } else {
        className += starValue <= value ? " ".concat(prefixCls, "--full") : " ".concat(prefixCls, "--zero");
      }

      return className;
    }
  }, {
    key: "render",
    value: function render() {
      var onClick = this.onClick;
      var _this$props3 = this.props,
          disabled = _this$props3.disabled,
          prefixCls = _this$props3.prefixCls,
          character = _this$props3.character;
      return React.createElement("li", {
        className: this.getClassName(),
        onClick: disabled ? null : onClick
      }, React.createElement("div", {
        className: "".concat(prefixCls, "-first")
      }, character), React.createElement("div", {
        className: "".concat(prefixCls, "-second")
      }, character));
    }
  }]);

  return Star;
}(React.Component);

export { Star as default };