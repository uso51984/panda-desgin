"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Panel = _interopRequireDefault(require("./Panel"));

var _openAnimation = _interopRequireDefault(require("./openAnimation"));

var toArray = function toArray(activeKey) {
  return Array.isArray(activeKey) ? activeKey : [activeKey];
};

var Collapse =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2["default"])(Collapse, _React$Component);

  function Collapse(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, Collapse);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Collapse).call(this, props));
    var _this$props = _this.props,
        activeKey = _this$props.activeKey,
        defaultActiveKey = _this$props.defaultActiveKey;
    var currentActiveKey = defaultActiveKey;

    if ('activeKey' in _this.props) {
      currentActiveKey = activeKey;
    }

    _this.state = {
      openAnimation: _this.props.openAnimation || (0, _openAnimation["default"])(_this.props.prefixCls),
      activeKey: toArray(currentActiveKey)
    };
    return _this;
  }

  (0, _createClass2["default"])(Collapse, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if ('activeKey' in nextProps) {
        this.setState({
          activeKey: toArray(nextProps.activeKey)
        });
      }

      if ('openAnimation' in nextProps) {
        this.setState({
          openAnimation: nextProps.openAnimation
        });
      }
    }
  }, {
    key: "onClickItem",
    value: function onClickItem(key, disabled) {
      if (disabled) {
        return;
      }

      var activeKey = this.state.activeKey;

      if (this.props.accordion) {
        activeKey = activeKey[0] === key ? [] : [key];
      } else {
        activeKey = (0, _toConsumableArray2["default"])(activeKey);
        var index = activeKey.indexOf(key);
        var isActive = index > -1;

        if (isActive) {
          activeKey.splice(index, 1);
        } else {
          activeKey.push(key);
        }
      }

      this.setActiveKey(activeKey);
    }
  }, {
    key: "getItems",
    value: function getItems() {
      var _this2 = this;

      var activeKey = this.state.activeKey;
      var _this$props2 = this.props,
          prefixCls = _this$props2.prefixCls,
          accordion = _this$props2.accordion,
          destroyInactivePanel = _this$props2.destroyInactivePanel,
          expandIcon = _this$props2.expandIcon;
      var newChildren = [];

      _react["default"].Children.forEach(this.props.children, function (child, index) {
        var key = child.key || String(index);
        var disabled = child.props.disabled;
        var isActive = false;

        if (accordion) {
          isActive = activeKey[0] === key;
        } else {
          isActive = activeKey.indexOf(key) > -1;
        }

        var props = {
          key: key,
          isActive: isActive,
          prefixCls: prefixCls,
          destroyInactivePanel: destroyInactivePanel,
          openAnimation: _this2.state.openAnimation,
          accordion: accordion,
          children: child.props.children,
          onItemClick: function onItemClick() {
            return _this2.onClickItem(key, disabled);
          },
          expandIcon: expandIcon
        };
        newChildren.push(_react["default"].cloneElement(child, props));
      });

      return newChildren;
    }
  }, {
    key: "setActiveKey",
    value: function setActiveKey(activeKey) {
      if (!('activeKey' in this.props)) {
        this.setState({
          activeKey: activeKey
        });
      }

      this.props.onChange(this.props.accordion ? activeKey[0] : activeKey);
    }
  }, {
    key: "render",
    value: function render() {
      var _classNames;

      var _this$props3 = this.props,
          prefixCls = _this$props3.prefixCls,
          className = _this$props3.className,
          style = _this$props3.style,
          accordion = _this$props3.accordion;
      var cls = (0, _classnames["default"])((_classNames = {}, (0, _defineProperty2["default"])(_classNames, prefixCls, true), (0, _defineProperty2["default"])(_classNames, className, !!className), _classNames));
      return _react["default"].createElement("div", {
        className: cls,
        style: style,
        role: accordion ? 'tablist' : null
      }, this.getItems());
    }
  }]);
  return Collapse;
}(_react["default"].Component);

(0, _defineProperty2["default"])(Collapse, "defaultProps", {
  prefixCls: 'panda-collapse',
  onChange: function onChange() {},
  accordion: false,
  destroyInactivePanel: false
});
Collapse.propTypes = {
  children: _propTypes["default"].any,
  prefixCls: _propTypes["default"].string,
  activeKey: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].arrayOf(_propTypes["default"].string)]),
  defaultActiveKey: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].arrayOf(_propTypes["default"].string)]),
  openAnimation: _propTypes["default"].object,
  onChange: _propTypes["default"].func,
  accordion: _propTypes["default"].bool,
  className: _propTypes["default"].string,
  style: _propTypes["default"].object,
  destroyInactivePanel: _propTypes["default"].bool,
  expandIcon: _propTypes["default"].func
};
Collapse.Panel = _Panel["default"];
var _default = Collapse;
exports["default"] = _default;