import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import React from 'react';
import classNames from 'classnames';

var Checkbox =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(Checkbox, _React$PureComponent);

  function Checkbox(_props) {
    var _this;

    _classCallCheck(this, Checkbox);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Checkbox).call(this, _props));

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (e) {
      var _assertThisInitialize = _assertThisInitialized(_this),
          props = _assertThisInitialize.props;

      if (props.disabled) {
        return;
      }

      if (!('checked' in props)) {
        _this.setState({
          checked: e.target.checked
        });
      }

      props.onChange(e);
    });

    _defineProperty(_assertThisInitialized(_this), "saveInput", function (node) {
      _this.input = node;
    });

    var checked = 'checked' in _props ? _props.checked : _props.defaultChecked;
    _this.state = {
      checked: checked
    };
    return _this;
  }

  _createClass(Checkbox, [{
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
      var _classNames, _classNames2;

      var _this$props = this.props,
          prefixCls = _this$props.prefixCls,
          className = _this$props.className,
          style = _this$props.style,
          name = _this$props.name,
          id = _this$props.id,
          type = _this$props.type,
          disabled = _this$props.disabled,
          readOnly = _this$props.readOnly,
          tabIndex = _this$props.tabIndex,
          value = _this$props.value,
          children = _this$props.children;
      var checked = this.state.checked;
      var wrapperCls = classNames((_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-wrapper"), true), _defineProperty(_classNames, "".concat(prefixCls, "-wrapper--disabled"), disabled), _classNames));
      var classString = classNames(prefixCls, className, (_classNames2 = {}, _defineProperty(_classNames2, "".concat(prefixCls, "--checked"), checked), _defineProperty(_classNames2, "".concat(prefixCls, "--disabled"), disabled), _classNames2));
      return React.createElement("label", {
        className: wrapperCls,
        style: style,
        htmlFor: "checkbox"
      }, React.createElement("span", {
        className: classString
      }, React.createElement("input", {
        name: name,
        id: id,
        type: type,
        readOnly: readOnly,
        disabled: disabled,
        tabIndex: tabIndex,
        className: "".concat(prefixCls, "-input"),
        checked: !!checked,
        onChange: this.handleChange,
        ref: this.saveInput,
        value: value
      }), React.createElement("span", {
        className: "".concat(prefixCls, "-inner")
      })), children && React.createElement("span", {
        className: "label-text"
      }, children));
    }
  }]);

  return Checkbox;
}(React.PureComponent);

_defineProperty(Checkbox, "defaultProps", {
  prefixCls: 'panda-checkbox',
  className: '',
  style: {},
  type: 'checkbox',
  defaultChecked: false,
  onChange: function onChange() {}
});

export { Checkbox as default };