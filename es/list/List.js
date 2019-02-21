import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import React from 'react';
import utils from './utils';

var List =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(List, _React$PureComponent);

  function List() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, List);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(List)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "check", function () {
      if (_this.props.loading || _this.props.finished) {
        return;
      }

      var el = _this.el;

      var _assertThisInitialize = _assertThisInitialized(_this),
          scroller = _assertThisInitialize.scroller;

      var scrollerHeight = utils.getVisibleHeight(scroller);

      if (!scrollerHeight || utils.getComputedStyle(el).display === 'none' || el.offsetParent === null) {
        return;
      }

      var scrollTop = utils.getScrollTop(scroller);
      var targetBottom = scrollTop + scrollerHeight;
      var reachBottom = false;

      if (el === scroller) {
        reachBottom = scroller.scrollHeight - targetBottom < _this.props.offset;
      } else {
        var elBottom = utils.getElementTop(el) - utils.getElementTop(scroller) + utils.getVisibleHeight(el);
        reachBottom = elBottom - scrollerHeight < _this.props.offset;
      }

      if (reachBottom) {
        _this.props.load();
      }
    });

    return _this;
  }

  _createClass(List, [{
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
      return React.createElement("div", {
        className: "panda-list",
        ref: function ref(el) {
          return _this2.el = el;
        }
      }, children, React.createElement("div", {
        className: "panda-list__loading"
      }, React.createElement("span", {
        className: "panda-list__loading-text"
      }, "\u52A0\u8F7D\u4E2D...")));
    }
  }]);

  return List;
}(React.PureComponent);

_defineProperty(List, "defaultProps", {
  immediateCheck: true,
  offset: 300,
  load: function load() {}
});

export { List as default };