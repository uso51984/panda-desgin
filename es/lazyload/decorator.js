import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
import React, { Component } from 'react';
import LazyLoad from './index';

var getDisplayName = function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
};

export default (function () {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return function lazyload(WrappedComponent) {
    return (
      /*#__PURE__*/
      function (_Component) {
        _inherits(LazyLoadDecorated, _Component);

        function LazyLoadDecorated() {
          var _this;

          _classCallCheck(this, LazyLoadDecorated);

          _this = _possibleConstructorReturn(this, _getPrototypeOf(LazyLoadDecorated).call(this));
          _this.displayName = "LazyLoad".concat(getDisplayName(WrappedComponent));
          return _this;
        }

        _createClass(LazyLoadDecorated, [{
          key: "render",
          value: function render() {
            return React.createElement(LazyLoad, options, React.createElement(WrappedComponent, this.props));
          }
        }]);

        return LazyLoadDecorated;
      }(Component)
    );
  };
});