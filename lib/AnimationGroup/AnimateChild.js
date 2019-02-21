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

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _domAnimation = _interopRequireWildcard(require("dom-animation"));

var _utils = _interopRequireDefault(require("./utils"));

var transitionMap = {
  enter: 'transitionEnter',
  appear: 'transitionAppear',
  leave: 'transitionLeave'
};

var AnimateChild =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2["default"])(AnimateChild, _React$Component);

  function AnimateChild() {
    (0, _classCallCheck2["default"])(this, AnimateChild);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(AnimateChild).apply(this, arguments));
  }

  (0, _createClass2["default"])(AnimateChild, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.stop();
    }
  }, {
    key: "componentWillEnter",
    value: function componentWillEnter(done) {
      if (_utils["default"].isEnterSupported(this.props)) {
        this.transition('enter', done);
      } else {
        done();
      }
    }
  }, {
    key: "componentWillAppear",
    value: function componentWillAppear(done) {
      if (_utils["default"].isAppearSupported(this.props)) {
        this.transition('appear', done);
      } else {
        done();
      }
    }
  }, {
    key: "componentWillLeave",
    value: function componentWillLeave(done) {
      if (_utils["default"].isLeaveSupported(this.props)) {
        this.transition('leave', done);
      } else {
        // always sync, do not interupt with react component life cycle
        // update hidden -> animate hidden ->
        // didUpdate -> animate leave -> unmount (if animate is none)
        done();
      }
    }
  }, {
    key: "transition",
    value: function transition(animationType, finishCallback) {
      var _this = this;

      var node = _reactDom["default"].findDOMNode(this);

      var props = this.props;
      var transitionName = props.transitionName;
      var nameIsObj = typeof transitionName === 'object';
      this.stop();

      var end = function end() {
        _this.stopper = null;
        finishCallback();
      };

      if ((_domAnimation.isCssAnimationSupported || !props.animation[animationType]) && transitionName && props[transitionMap[animationType]]) {
        var name = nameIsObj ? transitionName[animationType] : "".concat(transitionName, "-").concat(animationType);
        var activeName = "".concat(name, "-active");

        if (nameIsObj && transitionName["".concat(animationType, "Active")]) {
          activeName = transitionName["".concat(animationType, "Active")];
        }

        this.stopper = (0, _domAnimation["default"])(node, {
          name: name,
          active: activeName
        }, end);
      } else {
        this.stopper = props.animation[animationType](node, end);
      }
    }
  }, {
    key: "stop",
    value: function stop() {
      var stopper = this.stopper;

      if (stopper) {
        this.stopper = null;
        stopper.stop();
      }
    }
  }, {
    key: "render",
    value: function render() {
      return this.props.children;
    }
  }]);
  return AnimateChild;
}(_react["default"].Component);

exports["default"] = AnimateChild;
(0, _defineProperty2["default"])(AnimateChild, "propTypes", {
  children: _propTypes["default"].any
});