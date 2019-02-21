import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import React from 'react'; // import PropTypes from 'prop-types';

import classNames from 'classnames';
import PanelContent from './PanelContent';
import Animate from '../AnimationGroup';

var CollapsePanel =
/*#__PURE__*/
function (_React$Component) {
  _inherits(CollapsePanel, _React$Component);

  function CollapsePanel() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, CollapsePanel);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(CollapsePanel)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "handleItemClick", function () {
      _this.props.onItemClick();
    });

    return _this;
  }

  _createClass(CollapsePanel, [{
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
      var itemCls = classNames((_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "__item"), true), _defineProperty(_classNames, "".concat(prefixCls, "__item--active"), isActive), _defineProperty(_classNames, "".concat(prefixCls, "__item--disabled"), disabled), _classNames), className);
      return React.createElement("div", {
        className: itemCls,
        style: style
      }, React.createElement("div", {
        className: "".concat(prefixCls, "__item-header"),
        onClick: this.handleItemClick,
        role: accordion ? 'tab' : 'button',
        "aria-expanded": isActive
      }, header, showArrow && (expandIcon || React.createElement("i", {
        className: "arrow"
      }))), React.createElement(Animate, {
        showProp: "isActive",
        exclusive: true,
        component: "",
        animation: this.props.openAnimation
      }, React.createElement(PanelContent, {
        prefixCls: prefixCls,
        isActive: isActive,
        destroyInactivePanel: destroyInactivePanel
      }, children)));
    }
  }]);

  return CollapsePanel;
}(React.Component); // CollapsePanel.propTypes = {
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
export default CollapsePanel;