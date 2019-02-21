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

var _icon = _interopRequireDefault(require("../icon"));

var FabButton =
/*#__PURE__*/
function (_React$PureComponent) {
  (0, _inherits2["default"])(FabButton, _React$PureComponent);

  function FabButton(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, FabButton);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(FabButton).call(this, props));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "toggle", function () {
      if (_this.state.visible) {
        _this.close();
      } else {
        _this.open();
      }

      _this.setState({
        visible: !_this.state.visible
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "getRef", function (node) {
      _this.btnNode = node;
    });
    _this.itemsStyle = [];
    _this.state = {
      visible: false
    };
    return _this;
  }

  (0, _createClass2["default"])(FabButton, [{
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
      var styleClass = (0, _classnames["default"])(prefixCls, (0, _defineProperty2["default"])({}, "".concat(prefixCls, "-open"), this.state.visible), "".concat(prefixCls, "-").concat(position), className);
      this.items = _react["default"].Children.map(childrenProp, function (child, index) {
        if (!_react["default"].isValidElement(child)) {
          return false;
        }

        var styles = _this2.itemsStyle[index] ? _this2.itemsStyle[index] : {};
        return _react["default"].createElement("span", {
          style: styles,
          className: "".concat(prefixCls, "-item"),
          key: "item".concat(index)
        }, _react["default"].cloneElement(child, child.props));
      });
      return _react["default"].createElement("div", {
        className: styleClass
      }, _react["default"].createElement("button", {
        ref: this.getRef,
        className: "".concat(prefixCls, "-btn"),
        onClick: this.toggle
      }, _react["default"].createElement("span", {
        className: "".concat(prefixCls, "-close")
      }, _react["default"].createElement("span", null), _react["default"].createElement("span", null), _react["default"].createElement("span", null)), _react["default"].createElement("span", {
        className: "".concat(prefixCls, "-inner")
      }, icon || _react["default"].createElement(_icon["default"], {
        type: "plus"
      }))), this.items);
    }
  }]);
  return FabButton;
}(_react["default"].PureComponent);

(0, _defineProperty2["default"])(FabButton, "defaultProps", {
  angle: 90,
  distance: 20,
  position: 'bottom-right',
  prefixCls: 'bee-fab-button',
  type: 'horizontal',
  reverse: false
});
var _default = FabButton;
exports["default"] = _default;