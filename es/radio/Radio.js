import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import React from 'react';
import Checkbox from '../checkbox';

var Radio =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(Radio, _React$PureComponent);

  function Radio() {
    _classCallCheck(this, Radio);

    return _possibleConstructorReturn(this, _getPrototypeOf(Radio).apply(this, arguments));
  }

  _createClass(Radio, [{
    key: "render",
    value: function render() {
      return React.createElement(Checkbox, this.props);
    }
  }]);

  return Radio;
}(React.PureComponent);

_defineProperty(Radio, "defaultProps", {
  prefixCls: 'panda-radio',
  type: 'radio'
});

export default Radio;