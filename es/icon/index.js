import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import React from 'react';
import classnames from 'classnames';
import loadSprite from './loadSprite';

var Icon =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Icon, _React$Component);

  function Icon() {
    _classCallCheck(this, Icon);

    return _possibleConstructorReturn(this, _getPrototypeOf(Icon).apply(this, arguments));
  }

  _createClass(Icon, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      loadSprite();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          type = _this$props.type,
          className = _this$props.className,
          size = _this$props.size,
          restProps = _objectWithoutProperties(_this$props, ["type", "className", "size"]);

      var cls = classnames(className, 'pan-icon', "pan-icon-".concat(type), "pan-icon-".concat(size));
      return React.createElement("svg", _extends({
        className: cls
      }, restProps), React.createElement("use", {
        xlinkHref: "#".concat(type)
      }));
    }
  }]);

  return Icon;
}(React.Component);

_defineProperty(Icon, "defaultProps", {
  size: 'md'
});

export { Icon as default };