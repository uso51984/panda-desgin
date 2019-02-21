import _toConsumableArray from "@babel/runtime/helpers/toConsumableArray";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import CollapsePanel from './Panel';
import openAnimation from './openAnimation';

var toArray = function toArray(activeKey) {
  return Array.isArray(activeKey) ? activeKey : [activeKey];
};

var Collapse =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Collapse, _React$Component);

  function Collapse(props) {
    var _this;

    _classCallCheck(this, Collapse);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Collapse).call(this, props));
    var _this$props = _this.props,
        activeKey = _this$props.activeKey,
        defaultActiveKey = _this$props.defaultActiveKey;
    var currentActiveKey = defaultActiveKey;

    if ('activeKey' in _this.props) {
      currentActiveKey = activeKey;
    }

    _this.state = {
      openAnimation: _this.props.openAnimation || openAnimation(_this.props.prefixCls),
      activeKey: toArray(currentActiveKey)
    };
    return _this;
  }

  _createClass(Collapse, [{
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
        activeKey = _toConsumableArray(activeKey);
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
      React.Children.forEach(this.props.children, function (child, index) {
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
        newChildren.push(React.cloneElement(child, props));
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
      var cls = classNames((_classNames = {}, _defineProperty(_classNames, prefixCls, true), _defineProperty(_classNames, className, !!className), _classNames));
      return React.createElement("div", {
        className: cls,
        style: style,
        role: accordion ? 'tablist' : null
      }, this.getItems());
    }
  }]);

  return Collapse;
}(React.Component);

_defineProperty(Collapse, "defaultProps", {
  prefixCls: 'panda-collapse',
  onChange: function onChange() {},
  accordion: false,
  destroyInactivePanel: false
});

Collapse.propTypes = {
  children: PropTypes.any,
  prefixCls: PropTypes.string,
  activeKey: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
  defaultActiveKey: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
  openAnimation: PropTypes.object,
  onChange: PropTypes.func,
  accordion: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object,
  destroyInactivePanel: PropTypes.bool,
  expandIcon: PropTypes.func
};
Collapse.Panel = CollapsePanel;
export default Collapse;