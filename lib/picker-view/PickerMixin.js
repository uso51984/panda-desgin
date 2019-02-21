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

var Item = function Item() {
  return null;
};

function _default(Component) {
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
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "select", function (value, itemHeight, scrollTo) {
        var children = _react["default"].Children.toArray(_this.props.children);

        for (var i = 0, len = children.length; i < len; i++) {
          /* istanbul ignore else */
          if (children[i].props.value === value) {
            _this.selectByIndex(i, itemHeight, scrollTo);

            return;
          }
        }

        _this.selectByIndex(0, itemHeight, scrollTo);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "doScrollingComplete", function (top, itemHeight, fireValueChange) {
        var children = _react["default"].Children.toArray(_this.props.children);

        var index = _this.computeChildIndex(top, itemHeight, children.length);

        var child = children[index];

        if (child) {
          fireValueChange(child.props.value);
        }
      });
      return _this;
    }

    (0, _createClass2["default"])(_class, [{
      key: "selectByIndex",
      value: function selectByIndex(index, itemHeight, zscrollTo) {
        if (index < 0 || index >= _react["default"].Children.count(this.props.children) || !itemHeight) {
          return;
        }

        zscrollTo(index * itemHeight);
      }
    }, {
      key: "computeChildIndex",
      value: function computeChildIndex(top, itemHeight, childrenLength) {
        var index = Math.round(top / itemHeight);
        return Math.min(index, childrenLength - 1);
      }
    }, {
      key: "render",
      value: function render() {
        return _react["default"].createElement(Component, (0, _extends2["default"])({}, this.props, {
          doScrollingComplete: this.doScrollingComplete,
          computeChildIndex: this.computeChildIndex,
          select: this.select
        }));
      }
    }]);
    return _class;
  }(_react["default"].Component), (0, _defineProperty2["default"])(_class, "Item", Item), _temp;
}