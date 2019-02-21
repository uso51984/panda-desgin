"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _PanelContent = _interopRequireDefault(require("./PanelContent"));

var _AnimationGroup = _interopRequireDefault(require("../AnimationGroup"));

// import PropTypes from 'prop-types';
var CollapsePanel =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2["default"])(CollapsePanel, _React$Component);

  function CollapsePanel() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2["default"])(this, CollapsePanel);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf2 = (0, _getPrototypeOf3["default"])(CollapsePanel)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleItemClick", function () {
      _this.props.onItemClick();
    });
    return _this;
  }

  (0, _createClass2["default"])(CollapsePanel, [{
    key: "render",
    value: function render() {
      var _classNames;

      var _this$props = this.props,
          className = _this$props.className,
          style = _this$props.style,
          prefixCls = _this$props.prefixCls,
          header = _this$props.header,
          children = _this$props.children,
          isActive = _this$props.isActive,
          showArrow = _this$props.showArrow,
          destroyInactivePanel = _this$props.destroyInactivePanel,
          disabled = _this$props.disabled,
          accordion = _this$props.accordion,
          expandIcon = _this$props.expandIcon;
      var itemCls = (0, _classnames["default"])((_classNames = {}, (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "__item"), true), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "__item--active"), isActive), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "__item--disabled"), disabled), _classNames), className);
      return _react["default"].createElement("div", {
        className: itemCls,
        style: style
      }, _react["default"].createElement("div", {
        className: "".concat(prefixCls, "__item-header"),
        onClick: this.handleItemClick,
        role: accordion ? 'tab' : 'button',
        "aria-expanded": isActive
      }, header, showArrow && (expandIcon || _react["default"].createElement("i", {
        className: "arrow"
      }))), _react["default"].createElement(_AnimationGroup["default"], {
        showProp: "isActive",
        exclusive: true,
        component: "",
        animation: this.props.openAnimation
      }, _react["default"].createElement(_PanelContent["default"], {
        prefixCls: prefixCls,
        isActive: isActive,
        destroyInactivePanel: destroyInactivePanel
      }, children)));
    }
  }]);
  return CollapsePanel;
}(_react["default"].Component); // CollapsePanel.propTypes = {
//   className: PropTypes.oneOfType([
//     PropTypes.string,
//     PropTypes.object,
//   ]),
//   children: PropTypes.any,
//   openAnimation: PropTypes.object,
//   prefixCls: PropTypes.string,
//   header: PropTypes.oneOfType([
//     PropTypes.string,
//     PropTypes.number,
//     PropTypes.node,
//   ]),
//   showArrow: PropTypes.bool,
//   isActive: PropTypes.bool,
//   onItemClick: PropTypes.func,
//   style: PropTypes.object,
//   destroyInactivePanel: PropTypes.bool,
//   disabled: PropTypes.bool,
//   accordion: PropTypes.bool,
//   expandIcon: PropTypes.func,
// };


CollapsePanel.defaultProps = {
  showArrow: true,
  isActive: false,
  destroyInactivePanel: false,
  onItemClick: function onItemClick() {},
  headerClass: '',
  forceRender: false
};
var _default = CollapsePanel;
exports["default"] = _default;