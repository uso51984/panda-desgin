"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _index = _interopRequireDefault(require("./index"));

var getDisplayName = function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
};

var _default = function _default() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return function lazyload(WrappedComponent) {
    return (
      /*#__PURE__*/
      function (_Component) {
        (0, _inherits2["default"])(LazyLoadDecorated, _Component);

        function LazyLoadDecorated() {
          var _this;

          (0, _classCallCheck2["default"])(this, LazyLoadDecorated);
          _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(LazyLoadDecorated).call(this));
          _this.displayName = "LazyLoad".concat(getDisplayName(WrappedComponent));
          return _this;
        }

        (0, _createClass2["default"])(LazyLoadDecorated, [{
          key: "render",
          value: function render() {
            return _react["default"].createElement(_index["default"], options, _react["default"].createElement(WrappedComponent, this.props));
          }
        }]);
        return LazyLoadDecorated;
      }(_react.Component)
    );
  };
};

exports["default"] = _default;