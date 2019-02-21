import _objectSpread from "@babel/runtime/helpers/objectSpread";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
import React from 'react';

var LazyRenderBox =
/*#__PURE__*/
function (_React$Component) {
  _inherits(LazyRenderBox, _React$Component);

  function LazyRenderBox() {
    _classCallCheck(this, LazyRenderBox);

    return _possibleConstructorReturn(this, _getPrototypeOf(LazyRenderBox).apply(this, arguments));
  }

  _createClass(LazyRenderBox, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      return !!nextProps.hiddenClassName || !!nextProps.visible;
    }
  }, {
    key: "render",
    value: function render() {
      var className = this.props.className;

      if (!!this.props.hiddenClassName && !this.props.visible) {
        className += " ".concat(this.props.hiddenClassName);
      }

      var props = _objectSpread({}, this.props);

      delete props.hiddenClassName;
      delete props.visible;
      props.className = className;
      return React.createElement("div", props);
    }
  }]);

  return LazyRenderBox;
}(React.Component);

export { LazyRenderBox as default };