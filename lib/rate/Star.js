"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var Star =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2["default"])(Star, _React$Component);

  function Star() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2["default"])(this, Star);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf2 = (0, _getPrototypeOf3["default"])(Star)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onClick", function (e) {
      var _this$props = _this.props,
          onClick = _this$props.onClick,
          index = _this$props.index;
      onClick(e, index);
    });
    return _this;
  }

  (0, _createClass2["default"])(Star, [{
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
      return _react["default"].createElement("li", {
        className: this.getClassName(),
        onClick: disabled ? null : onClick
      }, _react["default"].createElement("div", {
        className: "".concat(prefixCls, "-first")
      }, character), _react["default"].createElement("div", {
        className: "".concat(prefixCls, "-second")
      }, character));
    }
  }]);
  return Star;
}(_react["default"].Component);

exports["default"] = Star;