import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
import React from 'react';
import ReactDOM from 'react-dom';
import cssAnimate, { isCssAnimationSupported } from 'dom-animation';
import animUtil from './utils';
var transitionMap = {
  enter: 'transitionEnter',
  appear: 'transitionAppear',
  leave: 'transitionLeave'
};

var AnimateChild =
/*#__PURE__*/
function (_React$Component) {
  _inherits(AnimateChild, _React$Component);

  function AnimateChild() {
    _classCallCheck(this, AnimateChild);

    return _possibleConstructorReturn(this, _getPrototypeOf(AnimateChild).apply(this, arguments));
  }

  _createClass(AnimateChild, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.stop();
    }
  }, {
    key: "componentWillEnter",
    value: function componentWillEnter(done) {
      if (animUtil.isEnterSupported(this.props)) {
        this.transition('enter', done);
      } else {
        done();
      }
    }
  }, {
    key: "componentWillAppear",
    value: function componentWillAppear(done) {
      if (animUtil.isAppearSupported(this.props)) {
        this.transition('appear', done);
      } else {
        done();
      }
    }
  }, {
    key: "componentWillLeave",
    value: function componentWillLeave(done) {
      if (animUtil.isLeaveSupported(this.props)) {
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

      var node = ReactDOM.findDOMNode(this);
      var props = this.props;
      var transitionName = props.transitionName;
      var nameIsObj = typeof transitionName === 'object';
      this.stop();

      var end = function end() {
        _this.stopper = null;
        finishCallback();
      };

      if ((isCssAnimationSupported || !props.animation[animationType]) && transitionName && props[transitionMap[animationType]]) {
        var name = nameIsObj ? transitionName[animationType] : "".concat(transitionName, "-").concat(animationType);
        var activeName = "".concat(name, "-active");

        if (nameIsObj && transitionName["".concat(animationType, "Active")]) {
          activeName = transitionName["".concat(animationType, "Active")];
        }

        this.stopper = cssAnimate(node, {
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
}(React.Component);

export { AnimateChild as default };