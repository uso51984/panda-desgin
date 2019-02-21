import _extends from "@babel/runtime/helpers/extends";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import React from 'react';

var Item = function Item() {
  return null;
};

export default function (Component) {
  var _class, _temp;

  return _temp = _class =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(_class, _React$Component);

    function _class() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, _class);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(_class)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _defineProperty(_assertThisInitialized(_this), "select", function (value, itemHeight, scrollTo) {
        var children = React.Children.toArray(_this.props.children);

        for (var i = 0, len = children.length; i < len; i++) {
          /* istanbul ignore else */
          if (children[i].props.value === value) {
            _this.selectByIndex(i, itemHeight, scrollTo);

            return;
          }
        }

        _this.selectByIndex(0, itemHeight, scrollTo);
      });

      _defineProperty(_assertThisInitialized(_this), "doScrollingComplete", function (top, itemHeight, fireValueChange) {
        var children = React.Children.toArray(_this.props.children);

        var index = _this.computeChildIndex(top, itemHeight, children.length);

        var child = children[index];

        if (child) {
          fireValueChange(child.props.value);
        }
      });

      return _this;
    }

    _createClass(_class, [{
      key: "selectByIndex",
      value: function selectByIndex(index, itemHeight, zscrollTo) {
        if (index < 0 || index >= React.Children.count(this.props.children) || !itemHeight) {
          return;
        }

        zscrollTo(index * itemHeight);
      }
    }, {
      key: "computeChildIndex",
      value: function computeChildIndex(top, itemHeight, childrenLength) {
        var index = Math.round(top / itemHeight);
        return Math.min(index, childrenLength - 1);
      }
    }, {
      key: "render",
      value: function render() {
        return React.createElement(Component, _extends({}, this.props, {
          doScrollingComplete: this.doScrollingComplete,
          computeChildIndex: this.computeChildIndex,
          select: this.select
        }));
      }
    }]);

    return _class;
  }(React.Component), _defineProperty(_class, "Item", Item), _temp;
}