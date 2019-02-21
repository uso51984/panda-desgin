import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

var PanelContent =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(PanelContent, _React$PureComponent);

  function PanelContent() {
    _classCallCheck(this, PanelContent);

    return _possibleConstructorReturn(this, _getPrototypeOf(PanelContent).apply(this, arguments));
  }

  _createClass(PanelContent, [{
    key: "render",
    value: function render() {
      var _classnames;

      var _this$props = this.props,
          prefixCls = _this$props.prefixCls,
          isActive = _this$props.isActive,
          children = _this$props.children,
          destroyInactivePanel = _this$props.destroyInactivePanel;
      var contentCls = classnames((_classnames = {}, _defineProperty(_classnames, "".concat(prefixCls, "__item-content"), true), _defineProperty(_classnames, "".concat(prefixCls, "__item-content--active"), isActive), _defineProperty(_classnames, "".concat(prefixCls, "__item-content--inactive"), !isActive), _classnames));
      return React.createElement("div", {
        className: contentCls
      }, !isActive && destroyInactivePanel ? null : React.createElement("div", {
        className: "".concat(prefixCls, "__item-content-box")
      }, children));
    }
  }]);

  return PanelContent;
}(React.PureComponent);

PanelContent.propTypes = {
  prefixCls: PropTypes.string,
  isActive: PropTypes.bool,
  children: PropTypes.any,
  destroyInactivePanel: PropTypes.bool
};
export default PanelContent;