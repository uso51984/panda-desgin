import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import React from 'react';
import { toArrayChildren, mergeChildren, findShownChildInChildrenByKey, findChildInChildrenByKey, isSameChildren } from './ChildrenUtils';
import animUtil from './utils';
import AnimateChild from './AnimateChild';

var noop = function noop() {};

var defaultKey = "rc_animate_".concat(Date.now());

function getChildrenFromProps(props) {
  var children = props.children;

  if (React.isValidElement(children)) {
    if (!children.key) {
      return React.cloneElement(children, {
        key: defaultKey
      });
    }
  }

  return children;
}

var Animate =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Animate, _React$Component);

  function Animate(_props) {
    var _this;

    _classCallCheck(this, Animate);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Animate).call(this, _props));

    _defineProperty(_assertThisInitialized(_this), "performEnter", function (key) {
      // may already remove by exclusive
      if (_this.childrenRefs[key]) {
        _this.currentlyAnimatingKeys[key] = true;

        _this.childrenRefs[key].componentWillEnter(_this.handleDoneAdding.bind(_assertThisInitialized(_this), key, 'enter'));
      }
    });

    _defineProperty(_assertThisInitialized(_this), "performAppear", function (key) {
      if (_this.childrenRefs[key]) {
        _this.currentlyAnimatingKeys[key] = true;

        _this.childrenRefs[key].componentWillAppear(_this.handleDoneAdding.bind(_assertThisInitialized(_this), key, 'appear'));
      }
    });

    _defineProperty(_assertThisInitialized(_this), "performLeave", function (key) {
      // may already remove by exclusive
      if (_this.childrenRefs[key]) {
        _this.currentlyAnimatingKeys[key] = true;

        _this.childrenRefs[key].componentWillLeave(_this.handleDoneLeaving.bind(_assertThisInitialized(_this), key));
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleDoneLeaving", function (key) {
      var props = _this.props;
      delete _this.currentlyAnimatingKeys[key]; // if update on exclusive mode, skip check

      if (props.exclusive && props !== _this.nextProps) {
        return;
      }

      var currentChildren = toArrayChildren(getChildrenFromProps(props)); // in case state change is too fast

      if (_this.isValidChildByKey(currentChildren, key)) {
        _this.performEnter(key);
      } else {
        var end = function end() {
          if (animUtil.allowLeaveCallback(props)) {
            props.onLeave(key);
            props.onEnd(key, false);
          }
        };

        if (!isSameChildren(_this.state.children, currentChildren, props.showProp)) {
          _this.setState({
            children: currentChildren
          }, end);
        } else {
          end();
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleDoneAdding", function (key, type) {
      var props = _this.props;
      delete _this.currentlyAnimatingKeys[key];

      if (props.exclusive && props !== _this.nextProps) {
        return;
      }

      var currentChildren = toArrayChildren(getChildrenFromProps(props));

      if (!_this.isValidChildByKey(currentChildren, key)) {
        // exclusive will not need this
        _this.performLeave(key);
      } else if (type === 'appear') {
        if (animUtil.allowAppearCallback(props)) {
          props.onAppear(key);
          props.onEnd(key, true);
        }
      } else if (animUtil.allowEnterCallback(props)) {
        props.onEnter(key);
        props.onEnd(key, true);
      }
    });

    _this.currentlyAnimatingKeys = {};
    _this.keysToEnter = [];
    _this.keysToLeave = [];
    _this.state = {
      children: toArrayChildren(getChildrenFromProps(_props))
    };
    _this.childrenRefs = {};
    return _this;
  }

  _createClass(Animate, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var showProp = this.props.showProp;
      var children = this.state.children;

      if (showProp) {
        children = children.filter(function (child) {
          return !!child.props[showProp];
        });
      }

      children.forEach(function (child) {
        if (child) {
          _this2.performAppear(child.key);
        }
      });
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var _this3 = this;

      this.nextProps = nextProps;
      var nextChildren = toArrayChildren(getChildrenFromProps(nextProps));
      var props = this.props; // exclusive needs immediate response

      if (props.exclusive) {
        Object.keys(this.currentlyAnimatingKeys).forEach(function (key) {
          _this3.stop(key);
        });
      }

      var showProp = props.showProp;
      var currentlyAnimatingKeys = this.currentlyAnimatingKeys; // last props children if exclusive

      var currentChildren = props.exclusive ? toArrayChildren(getChildrenFromProps(props)) : this.state.children; // in case destroy in showProp mode

      var newChildren = [];

      if (showProp) {
        currentChildren.forEach(function (currentChild) {
          var nextChild = currentChild && findChildInChildrenByKey(nextChildren, currentChild.key);
          var newChild;

          if ((!nextChild || !nextChild.props[showProp]) && currentChild.props[showProp]) {
            newChild = React.cloneElement(nextChild || currentChild, _defineProperty({}, showProp, true));
          } else {
            newChild = nextChild;
          }

          if (newChild) {
            newChildren.push(newChild);
          }
        });
        nextChildren.forEach(function (nextChild) {
          if (!nextChild || !findChildInChildrenByKey(currentChildren, nextChild.key)) {
            newChildren.push(nextChild);
          }
        });
      } else {
        newChildren = mergeChildren(currentChildren, nextChildren);
      } // need render to avoid update


      this.setState({
        children: newChildren
      });
      nextChildren.forEach(function (child) {
        var key = child && child.key;

        if (child && currentlyAnimatingKeys[key]) {
          return;
        }

        var hasPrev = child && findChildInChildrenByKey(currentChildren, key);

        if (showProp) {
          var showInNext = child.props[showProp];

          if (hasPrev) {
            var showInNow = findShownChildInChildrenByKey(currentChildren, key, showProp);

            if (!showInNow && showInNext) {
              _this3.keysToEnter.push(key);
            }
          } else if (showInNext) {
            _this3.keysToEnter.push(key);
          }
        } else if (!hasPrev) {
          _this3.keysToEnter.push(key);
        }
      });
      currentChildren.forEach(function (child) {
        var key = child && child.key;

        if (child && currentlyAnimatingKeys[key]) {
          return;
        }

        var hasNext = child && findChildInChildrenByKey(nextChildren, key);

        if (showProp) {
          var showInNow = child.props[showProp];

          if (hasNext) {
            var showInNext = findShownChildInChildrenByKey(nextChildren, key, showProp);

            if (!showInNext && showInNow) {
              _this3.keysToLeave.push(key);
            }
          } else if (showInNow) {
            _this3.keysToLeave.push(key);
          }
        } else if (!hasNext) {
          _this3.keysToLeave.push(key);
        }
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var keysToEnter = this.keysToEnter;
      this.keysToEnter = [];
      keysToEnter.forEach(this.performEnter);
      var keysToLeave = this.keysToLeave;
      this.keysToLeave = [];
      keysToLeave.forEach(this.performLeave);
    }
  }, {
    key: "stop",
    value: function stop(key) {
      delete this.currentlyAnimatingKeys[key];
      var component = this.childrenRefs[key];

      if (component) {
        component.stop();
      }
    }
  }, {
    key: "isValidChildByKey",
    value: function isValidChildByKey(currentChildren, key) {
      var showProp = this.props.showProp;

      if (showProp) {
        return findShownChildInChildrenByKey(currentChildren, key, showProp);
      }

      return findChildInChildrenByKey(currentChildren, key);
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var props = this.props;
      this.nextProps = props;
      var stateChildren = this.state.children;
      var children = null;

      if (stateChildren) {
        children = stateChildren.map(function (child) {
          if (child === null || child === undefined) {
            return child;
          }

          if (!child.key) {
            throw new Error('must set key for <rc-animate> children');
          }

          return React.createElement(AnimateChild, {
            key: child.key,
            ref: function ref(node) {
              return _this4.childrenRefs[child.key] = node;
            },
            animation: props.animation,
            transitionName: props.transitionName,
            transitionEnter: props.transitionEnter,
            transitionAppear: props.transitionAppear,
            transitionLeave: props.transitionLeave
          }, child);
        });
      }

      return children[0] || null;
    }
  }]);

  return Animate;
}(React.Component);

_defineProperty(Animate, "defaultProps", {
  animation: {},
  component: 'span',
  componentProps: {},
  transitionEnter: true,
  transitionLeave: true,
  transitionAppear: false,
  onEnd: noop,
  onEnter: noop,
  onLeave: noop,
  onAppear: noop
});

export { Animate as default };