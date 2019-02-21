import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import React, { Component } from 'react';
import classNames from 'classnames';

var Notice =
/*#__PURE__*/
function (_Component) {
  _inherits(Notice, _Component);

  function Notice() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Notice);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Notice)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "close", function () {
      _this.clearCloseTimer();

      _this.props.onClose();
    });

    _defineProperty(_assertThisInitialized(_this), "startCloseTimer", function () {
      if (_this.props.duration) {
        _this.closeTimer = setTimeout(function () {
          _this.close();
        }, _this.props.duration * 1000);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "clearCloseTimer", function () {
      if (_this.closeTimer) {
        clearTimeout(_this.closeTimer);
        _this.closeTimer = null;
      }
    });

    return _this;
  }

  _createClass(Notice, [{
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
      var className = (_className = {}, _defineProperty(_className, "".concat(componentClass), 1), _defineProperty(_className, "".concat(componentClass, "-closable"), props.closable), _defineProperty(_className, props.className, !!props.className), _className);
      return React.createElement("div", {
        className: classNames(className),
        style: props.style
      }, React.createElement("div", {
        className: "".concat(componentClass, "-content")
      }, props.children), props.closable ? React.createElement("a", {
        onClick: this.close,
        className: "".concat(componentClass, "-close")
      }, React.createElement("span", {
        className: "".concat(componentClass, "-close-x")
      })) : null);
    }
  }]);

  return Notice;
}(Component);

_defineProperty(Notice, "defaultProps", {
  onEnd: function onEnd() {},
  onClose: function onClose() {},
  duration: 1.5,
  style: {
    right: '50%'
  }
});

export { Notice as default };