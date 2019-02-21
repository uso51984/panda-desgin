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

var _classnames = _interopRequireDefault(require("classnames"));

var Checkbox =
/*#__PURE__*/
function (_React$PureComponent) {
  (0, _inherits2["default"])(Checkbox, _React$PureComponent);

  function Checkbox(_props) {
    var _this;

    (0, _classCallCheck2["default"])(this, Checkbox);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Checkbox).call(this, _props));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleChange", function (e) {
      var _assertThisInitialize = (0, _assertThisInitialized2["default"])(_this),
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
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "saveInput", function (node) {
      _this.input = node;
    });
    var checked = 'checked' in _props ? _props.checked : _props.defaultChecked;
    _this.state = {
      checked: checked
    };
    return _this;
  }

  (0, _createClass2["default"])(Checkbox, [{
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
      var wrapperCls = (0, _classnames["default"])((_classNames = {}, (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-wrapper"), true), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-wrapper--disabled"), disabled), _classNames));
      var classString = (0, _classnames["default"])(prefixCls, className, (_classNames2 = {}, (0, _defineProperty2["default"])(_classNames2, "".concat(prefixCls, "--checked"), checked), (0, _defineProperty2["default"])(_classNames2, "".concat(prefixCls, "--disabled"), disabled), _classNames2));
      return _react["default"].createElement("label", {
        className: wrapperCls,
        style: style,
        htmlFor: "checkbox"
      }, _react["default"].createElement("span", {
        className: classString
      }, _react["default"].createElement("input", {
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
      }), _react["default"].createElement("span", {
        className: "".concat(prefixCls, "-inner")
      })), children && _react["default"].createElement("span", {
        className: "label-text"
      }, children));
    }
  }]);
  return Checkbox;
}(_react["default"].PureComponent);

exports["default"] = Checkbox;
(0, _defineProperty2["default"])(Checkbox, "defaultProps", {
  prefixCls: 'panda-checkbox',
  className: '',
  style: {},
  type: 'checkbox',
  defaultChecked: false,
  onChange: function onChange() {}
});