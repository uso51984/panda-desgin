"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _ChildrenUtils = require("./ChildrenUtils");

var _utils = _interopRequireDefault(require("./utils"));

var _AnimateChild = _interopRequireDefault(require("./AnimateChild"));

var noop = function noop() {};

var defaultKey = "rc_animate_".concat(Date.now());

function getChildrenFromProps(props) {
  var children = props.children;

  if (_react["default"].isValidElement(children)) {
    if (!children.key) {
      return _react["default"].cloneElement(children, {
        key: defaultKey
      });
    }
  }

  return children;
}

var Animate =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2["default"])(Animate, _React$Component);

  function Animate(_props) {
    var _this;

    (0, _classCallCheck2["default"])(this, Animate);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Animate).call(this, _props));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "performEnter", function (key) {
      // may already remove by exclusive
      if (_this.childrenRefs[key]) {
        _this.currentlyAnimatingKeys[key] = true;

        _this.childrenRefs[key].componentWillEnter(_this.handleDoneAdding.bind((0, _assertThisInitialized2["default"])(_this), key, 'enter'));
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "performAppear", function (key) {
      if (_this.childrenRefs[key]) {
        _this.currentlyAnimatingKeys[key] = true;

        _this.childrenRefs[key].componentWillAppear(_this.handleDoneAdding.bind((0, _assertThisInitialized2["default"])(_this), key, 'appear'));
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "performLeave", function (key) {
      // may already remove by exclusive
      if (_this.childrenRefs[key]) {
        _this.currentlyAnimatingKeys[key] = true;

        _this.childrenRefs[key].componentWillLeave(_this.handleDoneLeaving.bind((0, _assertThisInitialized2["default"])(_this), key));
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleDoneLeaving", function (key) {
      var props = _this.props;
      delete _this.currentlyAnimatingKeys[key]; // if update on exclusive mode, skip check

      if (props.exclusive && props !== _this.nextProps) {
        return;
      }

      var currentChildren = (0, _ChildrenUtils.toArrayChildren)(getChildrenFromProps(props)); // in case state change is too fast

      if (_this.isValidChildByKey(currentChildren, key)) {
        _this.performEnter(key);
      } else {
        var end = function end() {
          if (_utils["default"].allowLeaveCallback(props)) {
            props.onLeave(key);
            props.onEnd(key, false);
          }
        };

        if (!(0, _ChildrenUtils.isSameChildren)(_this.state.children, currentChildren, props.showProp)) {
          _this.setState({
            children: currentChildren
          }, end);
        } else {
          end();
        }
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleDoneAdding", function (key, type) {
      var props = _this.props;
      delete _this.currentlyAnimatingKeys[key];

      if (props.exclusive && props !== _this.nextProps) {
        return;
      }

      var currentChildren = (0, _ChildrenUtils.toArrayChildren)(getChildrenFromProps(props));

      if (!_this.isValidChildByKey(currentChildren, key)) {
        // exclusive will not need this
        _this.performLeave(key);
      } else if (type === 'appear') {
        if (_utils["default"].allowAppearCallback(props)) {
          props.onAppear(key);
          props.onEnd(key, true);
        }
      } else if (_utils["default"].allowEnterCallback(props)) {
        props.onEnter(key);
        props.onEnd(key, true);
      }
    });
    _this.currentlyAnimatingKeys = {};
    _this.keysToEnter = [];
    _this.keysToLeave = [];
    _this.state = {
      children: (0, _ChildrenUtils.toArrayChildren)(getChildrenFromProps(_props))
    };
    _this.childrenRefs = {};
    return _this;
  }

  (0, _createClass2["default"])(Animate, [{
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
      var nextChildren = (0, _ChildrenUtils.toArrayChildren)(getChildrenFromProps(nextProps));
      var props = this.props; // exclusive needs immediate response

      if (props.exclusive) {
        Object.keys(this.currentlyAnimatingKeys).forEach(function (key) {
          _this3.stop(key);
        });
      }

      var showProp = props.showProp;
      var currentlyAnimatingKeys = this.currentlyAnimatingKeys; // last props children if exclusive

      var currentChildren = props.exclusive ? (0, _ChildrenUtils.toArrayChildren)(getChildrenFromProps(props)) : this.state.children; // in case destroy in showProp mode

      var newChildren = [];

      if (showProp) {
        currentChildren.forEach(function (currentChild) {
          var nextChild = currentChild && (0, _ChildrenUtils.findChildInChildrenByKey)(nextChildren, currentChild.key);
          var newChild;

          if ((!nextChild || !nextChild.props[showProp]) && currentChild.props[showProp]) {
            newChild = _react["default"].cloneElement(nextChild || currentChild, (0, _defineProperty2["default"])({}, showProp, true));
          } else {
            newChild = nextChild;
          }

          if (newChild) {
            newChildren.push(newChild);
          }
        });
        nextChildren.forEach(function (nextChild) {
          if (!nextChild || !(0, _ChildrenUtils.findChildInChildrenByKey)(currentChildren, nextChild.key)) {
            newChildren.push(nextChild);
          }
        });
      } else {
        newChildren = (0, _ChildrenUtils.mergeChildren)(currentChildren, nextChildren);
      } // need render to avoid update


      this.setState({
        children: newChildren
      });
      nextChildren.forEach(function (child) {
        var key = child && child.key;

        if (child && currentlyAnimatingKeys[key]) {
          return;
        }

        var hasPrev = child && (0, _ChildrenUtils.findChildInChildrenByKey)(currentChildren, key);

        if (showProp) {
          var showInNext = child.props[showProp];

          if (hasPrev) {
            var showInNow = (0, _ChildrenUtils.findShownChildInChildrenByKey)(currentChildren, key, showProp);

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

        var hasNext = child && (0, _ChildrenUtils.findChildInChildrenByKey)(nextChildren, key);

        if (showProp) {
          var showInNow = child.props[showProp];

          if (hasNext) {
            var showInNext = (0, _ChildrenUtils.findShownChildInChildrenByKey)(nextChildren, key, showProp);

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
        return (0, _ChildrenUtils.findShownChildInChildrenByKey)(currentChildren, key, showProp);
      }

      return (0, _ChildrenUtils.findChildInChildrenByKey)(currentChildren, key);
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

          return _react["default"].createElement(_AnimateChild["default"], {
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
}(_react["default"].Component);

exports["default"] = Animate;
(0, _defineProperty2["default"])(Animate, "defaultProps", {
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