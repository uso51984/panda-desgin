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

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var Notice =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2["default"])(Notice, _Component);

  function Notice() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2["default"])(this, Notice);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf2 = (0, _getPrototypeOf3["default"])(Notice)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "close", function () {
      _this.clearCloseTimer();

      _this.props.onClose();
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "startCloseTimer", function () {
      if (_this.props.duration) {
        _this.closeTimer = setTimeout(function () {
          _this.close();
        }, _this.props.duration * 1000);
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "clearCloseTimer", function () {
      if (_this.closeTimer) {
        clearTimeout(_this.closeTimer);
        _this.closeTimer = null;
      }
    });
    return _this;
  }

  (0, _createClass2["default"])(Notice, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.startCloseTimer();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.clearCloseTimer();
    }
  }, {
    key: "render",
    value: function render() {
      var _className;

      var props = this.props;
      var componentClass = "".concat(props.prefixCls, "-notice");
      var className = (_className = {}, (0, _defineProperty2["default"])(_className, "".concat(componentClass), 1), (0, _defineProperty2["default"])(_className, "".concat(componentClass, "-closable"), props.closable), (0, _defineProperty2["default"])(_className, props.className, !!props.className), _className);
      return _react["default"].createElement("div", {
        className: (0, _classnames["default"])(className),
        style: props.style
      }, _react["default"].createElement("div", {
        className: "".concat(componentClass, "-content")
      }, props.children), props.closable ? _react["default"].createElement("a", {
        onClick: this.close,
        className: "".concat(componentClass, "-close")
      }, _react["default"].createElement("span", {
        className: "".concat(componentClass, "-close-x")
      })) : null);
    }
  }]);
  return Notice;
}(_react.Component);

exports["default"] = Notice;
(0, _defineProperty2["default"])(Notice, "defaultProps", {
  onEnd: function onEnd() {},
  onClose: function onClose() {},
  duration: 1.5,
  style: {
    right: '50%'
  }
});