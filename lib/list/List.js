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

var _utils = _interopRequireDefault(require("./utils"));

var List =
/*#__PURE__*/
function (_React$PureComponent) {
  (0, _inherits2["default"])(List, _React$PureComponent);

  function List() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2["default"])(this, List);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf2 = (0, _getPrototypeOf3["default"])(List)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "check", function () {
      if (_this.props.loading || _this.props.finished) {
        return;
      }

      var el = _this.el;

      var _assertThisInitialize = (0, _assertThisInitialized2["default"])(_this),
          scroller = _assertThisInitialize.scroller;

      var scrollerHeight = _utils["default"].getVisibleHeight(scroller);

      if (!scrollerHeight || _utils["default"].getComputedStyle(el).display === 'none' || el.offsetParent === null) {
        return;
      }

      var scrollTop = _utils["default"].getScrollTop(scroller);

      var targetBottom = scrollTop + scrollerHeight;
      var reachBottom = false;

      if (el === scroller) {
        reachBottom = scroller.scrollHeight - targetBottom < _this.props.offset;
      } else {
        var elBottom = _utils["default"].getElementTop(el) - _utils["default"].getElementTop(scroller) + _utils["default"].getVisibleHeight(el);

        reachBottom = elBottom - scrollerHeight < _this.props.offset;
      }

      if (reachBottom) {
        _this.props.load();
      }
    });
    return _this;
  }

  (0, _createClass2["default"])(List, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // this.scroller = utils.getScrollEventTarget(this.el);
      this.scroller = this.el;
      this.scroller.addEventListener('scroll', this.check);

      if (this.immediateCheck) {
        this.check();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.scroller.removeEventListener('scroll', this.check);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var children = this.props.children;
      return _react["default"].createElement("div", {
        className: "panda-list",
        ref: function ref(el) {
          return _this2.el = el;
        }
      }, children, _react["default"].createElement("div", {
        className: "panda-list__loading"
      }, _react["default"].createElement("span", {
        className: "panda-list__loading-text"
      }, "\u52A0\u8F7D\u4E2D...")));
    }
  }]);
  return List;
}(_react["default"].PureComponent);

exports["default"] = List;
(0, _defineProperty2["default"])(List, "defaultProps", {
  immediateCheck: true,
  offset: 300,
  load: function load() {}
});