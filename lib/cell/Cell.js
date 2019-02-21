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

var _classnames = _interopRequireDefault(require("classnames"));

var _reactTapFeedback = _interopRequireDefault(require("react-tap-feedback"));

var _icon = _interopRequireDefault(require("../icon"));

var Cell =
/*#__PURE__*/
function (_React$PureComponent) {
  (0, _inherits2["default"])(Cell, _React$PureComponent);

  function Cell() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2["default"])(this, Cell);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf2 = (0, _getPrototypeOf3["default"])(Cell)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleClick", function () {
      _this.props.onClick();
    });
    return _this;
  }

  (0, _createClass2["default"])(Cell, [{
    key: "render",
    value: function render() {
      var _classNames, _classNames2;

      var _this$props = this.props,
          prefixCls = _this$props.prefixCls,
          title = _this$props.title,
          onClick = _this$props.onClick,
          value = _this$props.value,
          desc = _this$props.desc,
          icon = _this$props.icon,
          arrow = _this$props.arrow,
          size = _this$props.size,
          activeClass = _this$props.activeClass,
          border = _this$props.border,
          required = _this$props.required;
      var cls = (0, _classnames["default"])((_classNames = {}, (0, _defineProperty2["default"])(_classNames, prefixCls, true), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "--").concat(size), size), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "--borderless"), !border), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "--required"), required), _classNames));
      return _react["default"].createElement(_reactTapFeedback["default"], {
        disabled: !onClick,
        activeClassName: (0, _classnames["default"])((_classNames2 = {}, (0, _defineProperty2["default"])(_classNames2, "".concat(prefixCls, "--active"), !activeClass), (0, _defineProperty2["default"])(_classNames2, activeClass, activeClass), _classNames2))
      }, _react["default"].createElement("div", {
        className: cls,
        onClick: this.handleClick
      }, (icon || title) && _react["default"].createElement("div", {
        className: "".concat(prefixCls, "__title")
      }, icon && icon, _react["default"].createElement("span", null, title), _react["default"].createElement("div", {
        className: "".concat(prefixCls, "__label")
      }, desc)), _react["default"].createElement("div", {
        className: (0, _classnames["default"])("".concat(prefixCls, "__value"), (0, _defineProperty2["default"])({}, "".concat(prefixCls, "__value--alone"), !icon && !title))
      }, _react["default"].createElement("span", null, value), arrow && _react["default"].createElement(_icon["default"], {
        type: arrow,
        className: "".concat(prefixCls, "__right-icon")
      }))));
    }
  }]);
  return Cell;
}(_react["default"].PureComponent);

exports["default"] = Cell;
(0, _defineProperty2["default"])(Cell, "defaultProps", {
  prefixCls: 'panda-cell',
  border: true,
  onClick: function onClick() {}
});