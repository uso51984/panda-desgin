import _extends from "@babel/runtime/helpers/extends";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import classnames from 'classnames';
import React from 'react';
import KeyboardItem from './KeyboardItem';

var NumberKeyboard =
/*#__PURE__*/
function (_React$Component) {
  _inherits(NumberKeyboard, _React$Component);

  function NumberKeyboard() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, NumberKeyboard);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(NumberKeyboard)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "onKeyboardClick", function (value, e) {
      _this.props.onKeyboardClick(value, e);
    });

    return _this;
  }

  _createClass(NumberKeyboard, [{
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
      return React.createElement("div", {
        className: "hairline--top panda-number-keyboard__title"
      }, React.createElement("span", {
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
      var wrapperCls = classnames("".concat(prefixCls), _defineProperty({}, "".concat(prefixCls, "--custom"), theme === 'custom'));
      return React.createElement("div", _extends({
        className: wrapperCls,
        ref: function ref(el) {
          return _this3.antmKeyboard = el;
        }
      }, wrapProps), theme === 'default' && this.getHeaderNode(), React.createElement("div", {
        className: "".concat(prefixCls, "__body")
      }, this.keys().map(function (item) {
        return React.createElement(KeyboardItem, {
          prefixCls: prefixCls,
          onClick: _this3.onKeyboardClick,
          type: item.type,
          action: item.action,
          key: "item-".concat(item.text)
        }, item.text);
      })), theme === 'custom' && React.createElement("div", {
        className: "".concat(prefixCls, "__sidebar")
      }, React.createElement(KeyboardItem, {
        prefixCls: prefixCls,
        onClick: this.onKeyboardClick,
        key: "item-".concat(deleteText),
        type: "gray",
        action: "delete",
        className: "".concat(prefixCls, "-item--big")
      }, deleteText), React.createElement(KeyboardItem, {
        prefixCls: prefixCls,
        onClick: this.onKeyboardClick,
        action: "confirm",
        className: "".concat(prefixCls, "-item--big ").concat(prefixCls, "-item--blue"),
        key: "item-".concat(confirm)
      }, confirm)));
    }
  }]);

  return NumberKeyboard;
}(React.Component);

_defineProperty(NumberKeyboard, "defaultProps", {
  prefixCls: 'panda-number-keyboard',
  theme: 'default',
  deleteText: 'delete',
  onKeyboardClick: function onKeyboardClick() {},
  confirm: '确定'
});

export default NumberKeyboard;