"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classnames2 = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _icon = _interopRequireDefault(require("../icon"));

var Switch =
/*#__PURE__*/
function (_React$PureComponent) {
  (0, _inherits2["default"])(Switch, _React$PureComponent);

  function Switch(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, Switch);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Switch).call(this, props));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onChange", function (e) {
      var checked = e.target.checked;

      if (!('checked' in _this.props)) {
        _this.setState({
          checked: checked
        });
      }

      _this.props.onChange(checked);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onClick", function (e) {
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

  (0, _createClass2["default"])(Switch, [{
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
          loading = _this$props.loading;
      var checked = this.state.checked;
      var wrapCls = (0, _classnames2["default"])(prefixCls, className, (_classnames = {}, (0, _defineProperty2["default"])(_classnames, "".concat(prefixCls, "-android"), platform === 'android'), (0, _defineProperty2["default"])(_classnames, "".concat(prefixCls, "-checked"), checked), _classnames));
      var fackInputCls = (0, _classnames2["default"])('checkbox', {
        'checkbox-disabled': disabled
      });
      var style = this.props.style || {};

      if (color && checked) {
        style.backgroundColor = color;
      }

      return _react["default"].createElement("label", {
        className: wrapCls,
        htmlFor: "checkbox"
      }, _react["default"].createElement("input", (0, _extends2["default"])({
        type: "checkbox",
        name: name,
        className: "".concat(prefixCls, "-checkbox"),
        disabled: disabled,
        checked: checked,
        onChange: this.onChange,
        value: checked ? 'on' : 'off'
      }, !disabled ? {
        onClick: this.onClick
      } : {})), loading && _react["default"].createElement(_icon["default"], {
        type: "loading",
        className: "".concat(prefixCls, "-loading-icon")
      }), _react["default"].createElement("div", (0, _extends2["default"])({
        className: fackInputCls,
        style: style
      }, disabled ? {
        onClick: this.onClick
      } : {})));
    }
  }]);
  return Switch;
}(_react["default"].PureComponent);

exports["default"] = Switch;
(0, _defineProperty2["default"])(Switch, "defaultProps", {
  prefixCls: 'panda-switch',
  name: '',
  defaultChecked: false,
  disabled: false,
  onChange: function onChange() {},
  platform: 'ios',
  onClick: function onClick() {}
});