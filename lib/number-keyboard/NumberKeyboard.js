"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classnames2 = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _KeyboardItem = _interopRequireDefault(require("./KeyboardItem"));

var NumberKeyboard =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2["default"])(NumberKeyboard, _React$Component);

  function NumberKeyboard() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2["default"])(this, NumberKeyboard);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf2 = (0, _getPrototypeOf3["default"])(NumberKeyboard)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onKeyboardClick", function (value, e) {
      _this.props.onKeyboardClick(value, e);
    });
    return _this;
  }

  (0, _createClass2["default"])(NumberKeyboard, [{
    key: "keys",
    value: function keys() {
      var _this$props = this.props,
          theme = _this$props.theme,
          deleteText = _this$props.deleteText;
      var keys = [];

      for (var i = 1; i <= 9; i++) {
        keys.push({
          text: i
        });
      }

      switch (theme) {
        case 'custom':
          keys.push({
            text: 0,
            type: 'middle'
          }, {
            text: '.'
          });
          break;

        default:
          keys.push({
            text: '.',
            type: 'gray'
          }, {
            text: 0
          }, {
            text: deleteText,
            type: 'gray',
            action: 'delete'
          });
          break;
      }

      return keys;
    }
  }, {
    key: "getHeaderNode",
    value: function getHeaderNode() {
      var _this2 = this;

      var _this$props2 = this.props,
          confirm = _this$props2.confirm,
          prefixCls = _this$props2.prefixCls;
      return _react["default"].createElement("div", {
        className: "hairline--top panda-number-keyboard__title"
      }, _react["default"].createElement("span", {
        onClick: function onClick() {
          return _this2.onKeyboardClick('confirm');
        },
        className: "".concat(prefixCls, "__close")
      }, confirm));
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props3 = this.props,
          prefixCls = _this$props3.prefixCls,
          wrapProps = _this$props3.wrapProps,
          theme = _this$props3.theme,
          deleteText = _this$props3.deleteText,
          confirm = _this$props3.confirm;
      var wrapperCls = (0, _classnames2["default"])("".concat(prefixCls), (0, _defineProperty2["default"])({}, "".concat(prefixCls, "--custom"), theme === 'custom'));
      return _react["default"].createElement("div", (0, _extends2["default"])({
        className: wrapperCls,
        ref: function ref(el) {
          return _this3.antmKeyboard = el;
        }
      }, wrapProps), theme === 'default' && this.getHeaderNode(), _react["default"].createElement("div", {
        className: "".concat(prefixCls, "__body")
      }, this.keys().map(function (item) {
        return _react["default"].createElement(_KeyboardItem["default"], {
          prefixCls: prefixCls,
          onClick: _this3.onKeyboardClick,
          type: item.type,
          action: item.action,
          key: "item-".concat(item.text)
        }, item.text);
      })), theme === 'custom' && _react["default"].createElement("div", {
        className: "".concat(prefixCls, "__sidebar")
      }, _react["default"].createElement(_KeyboardItem["default"], {
        prefixCls: prefixCls,
        onClick: this.onKeyboardClick,
        key: "item-".concat(deleteText),
        type: "gray",
        action: "delete",
        className: "".concat(prefixCls, "-item--big")
      }, deleteText), _react["default"].createElement(_KeyboardItem["default"], {
        prefixCls: prefixCls,
        onClick: this.onKeyboardClick,
        action: "confirm",
        className: "".concat(prefixCls, "-item--big ").concat(prefixCls, "-item--blue"),
        key: "item-".concat(confirm)
      }, confirm)));
    }
  }]);
  return NumberKeyboard;
}(_react["default"].Component);

(0, _defineProperty2["default"])(NumberKeyboard, "defaultProps", {
  prefixCls: 'panda-number-keyboard',
  theme: 'default',
  deleteText: 'delete',
  onKeyboardClick: function onKeyboardClick() {},
  confirm: '确定'
});
var _default = NumberKeyboard;
exports["default"] = _default;