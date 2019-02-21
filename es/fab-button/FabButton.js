import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import React from 'react';
import classNames from 'classnames';
import Icon from '../icon';

var FabButton =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(FabButton, _React$PureComponent);

  function FabButton(props) {
    var _this;

    _classCallCheck(this, FabButton);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(FabButton).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "toggle", function () {
      if (_this.state.visible) {
        _this.close();
      } else {
        _this.open();
      }

      _this.setState({
        visible: !_this.state.visible
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getRef", function (node) {
      _this.btnNode = node;
    });

    _this.itemsStyle = [];
    _this.state = {
      visible: false
    };
    return _this;
  }

  _createClass(FabButton, [{
    key: "open",
    value: function open() {
      var _this$props = this.props,
          type = _this$props.type,
          delay = _this$props.delay,
          distance = _this$props.distance,
          position = _this$props.position,
          reverse = _this$props.reverse;
      var op = reverse ? '-' : '';
      this.itemWidth = this.btnNode.offsetWidth;

      switch (type) {
        case 'horizontal':
          for (var i = 0; i < this.items.length; i++) {
            var x = "".concat(op + (this.itemWidth + distance) * (i + 1), "px");
            this.itemsStyle[i] = {
              opacity: 1,
              left: x
            };
          }

          break;

        case 'vertical':
          for (var _i = 0; _i < this.items.length; _i++) {
            var _x = "".concat(op + (this.itemWidth + distance) * (_i + 1), "px");

            this.itemsStyle[_i] = {
              opacity: 1,
              top: _x
            };
          }

          break;

        case 'circle':
          var radius = this.itemWidth + distance;
          var dir = {
            center: -90,
            'top-left': -180,
            'bottom-left': 90,
            'top-right': -90,
            'bottom-right': 0
          };
          var rotation = dir[position];

          for (var _i2 = 0; _i2 < this.items.length; _i2++) {
            this.anim(_i2, rotation, radius, delay);
          }

          break;

        default:
          break;
      }
    }
  }, {
    key: "anim",
    value: function anim(i, rotation, radius, delay) {
      // -180/左上(lt)、 90/左下(lb)、-90/右上(rt)、0/右下(rb)
      var angle = (this.props.angle * i - rotation) / 180 * Math.PI;
      var x = Math.sin(angle) * radius;
      var y = Math.cos(angle) * radius;
      x = parseFloat(x.toFixed(3));
      y = parseFloat(y.toFixed(3));
      /* istanbul ignore else */

      if (delay) {
        this.itemsStyle[i] = {
          'transition-delay': "".concat(delay * i, "ms")
        };
      }

      var xy = "scale(.9) translate(".concat(x, "px,").concat(y, "px)");
      this.itemsStyle[i] = {
        opacity: 1,
        top: 0,
        transform: xy
      };
    }
  }, {
    key: "close",
    value: function close() {
      for (var i = 0; i < this.items.length; i++) {
        this.itemsStyle[i] = {
          left: '0px',
          opacity: 0,
          top: '0px',
          transform: 'translate(0,0)'
        };
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          className = _this$props2.className,
          childrenProp = _this$props2.children,
          icon = _this$props2.icon,
          position = _this$props2.position,
          prefixCls = _this$props2.prefixCls;
      var styleClass = classNames(prefixCls, _defineProperty({}, "".concat(prefixCls, "-open"), this.state.visible), "".concat(prefixCls, "-").concat(position), className);
      this.items = React.Children.map(childrenProp, function (child, index) {
        if (!React.isValidElement(child)) {
          return false;
        }

        var styles = _this2.itemsStyle[index] ? _this2.itemsStyle[index] : {};
        return React.createElement("span", {
          style: styles,
          className: "".concat(prefixCls, "-item"),
          key: "item".concat(index)
        }, React.cloneElement(child, child.props));
      });
      return React.createElement("div", {
        className: styleClass
      }, React.createElement("button", {
        ref: this.getRef,
        className: "".concat(prefixCls, "-btn"),
        onClick: this.toggle
      }, React.createElement("span", {
        className: "".concat(prefixCls, "-close")
      }, React.createElement("span", null), React.createElement("span", null), React.createElement("span", null)), React.createElement("span", {
        className: "".concat(prefixCls, "-inner")
      }, icon || React.createElement(Icon, {
        type: "plus"
      }))), this.items);
    }
  }]);

  return FabButton;
}(React.PureComponent);

_defineProperty(FabButton, "defaultProps", {
  angle: 90,
  distance: 20,
  position: 'bottom-right',
  prefixCls: 'bee-fab-button',
  type: 'horizontal',
  reverse: false
});

export default FabButton;