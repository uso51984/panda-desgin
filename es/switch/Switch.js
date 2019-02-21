import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import classnames from 'classnames';
import React from 'react';
import Icon from '../Icon';

var Switch =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(Switch, _React$PureComponent);

  function Switch(props) {
    var _this;

    _classCallCheck(this, Switch);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Switch).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "onChange", function (e) {
      var checked = e.target.checked;

      if (!('checked' in _this.props)) {
        _this.setState({
          checked: checked
        });
      }

      _this.props.onChange(checked);
    });

    _defineProperty(_assertThisInitialized(_this), "onClick", function (e) {
      var val;

      if (e && e.target && e.target.checked !== undefined) {
        val = e.target.checked;
      } else {
        val = _this.props.checked;
      }

      _this.props.onClick(val);
    });

    var _checked = props.defaultChecked;

    if ('checked' in props) {
      _checked = props.checked;
    }

    _this.state = {
      checked: _checked
    };
    return _this;
  }

  _createClass(Switch, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if ('checked' in nextProps) {
        this.setState({
          checked: nextProps.checked
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _classnames;

      var _this$props = this.props,
          prefixCls = _this$props.prefixCls,
          name = _this$props.name,
          disabled = _this$props.disabled,
          className = _this$props.className,
          platform = _this$props.platform,
          color = _this$props.color,
          loading = _this$props.loading,
          restProps = _objectWithoutProperties(_this$props, ["prefixCls", "name", "disabled", "className", "platform", "color", "loading"]);

      var checked = this.state.checked;
      var wrapCls = classnames(prefixCls, className, (_classnames = {}, _defineProperty(_classnames, "".concat(prefixCls, "-android"), platform === 'android'), _defineProperty(_classnames, "".concat(prefixCls, "-checked"), checked), _classnames));
      var fackInputCls = classnames('checkbox', {
        'checkbox-disabled': disabled
      });
      var style = this.props.style || {};

      if (color && checked) {
        style.backgroundColor = color;
      }

      return React.createElement("label", {
        className: wrapCls
      }, React.createElement("input", _extends({
        type: "checkbox",
        name: name,
        className: "".concat(prefixCls, "-checkbox"),
        disabled: disabled,
        checked: checked,
        onChange: this.onChange,
        value: checked ? 'on' : 'off'
      }, !disabled ? {
        onClick: this.onClick
      } : {})), loading && React.createElement(Icon, {
        type: "loading",
        className: "".concat(prefixCls, "-loading-icon")
      }), React.createElement("div", _extends({
        className: fackInputCls,
        style: style
      }, disabled ? {
        onClick: this.onClick
      } : {})));
    }
  }]);

  return Switch;
}(React.PureComponent);

_defineProperty(Switch, "defaultProps", {
  prefixCls: 'panda-switch',
  name: '',
  defaultChecked: false,
  disabled: false,
  onChange: function onChange() {},
  platform: 'ios',
  onClick: function onClick() {}
});

export { Switch as default };