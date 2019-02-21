"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _Dialog = _interopRequireDefault(require("./Dialog"));

var IS_REACT_16 = !!_reactDom["default"].createPortal;

var DialogWrap =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2["default"])(DialogWrap, _React$Component);

  function DialogWrap() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2["default"])(this, DialogWrap);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf2 = (0, _getPrototypeOf3["default"])(DialogWrap)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "saveRef", function (node) {
      /* istanbul ignore else */
      if (IS_REACT_16) {
        _this.component = node;
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "getComponent", function (visible) {
      var props = (0, _objectSpread2["default"])({}, _this.props);
      ['visible', 'onAnimateLeave'].forEach(function (key) {
        if (props.hasOwnProperty(key)) {
          delete props[key];
        }
      });
      return _react["default"].createElement(_Dialog["default"], (0, _extends2["default"])({}, props, {
        visible: visible,
        onAnimateLeave: _this.removeContainer,
        ref: _this.saveRef
      }));
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "removeContainer", function () {
      if (_this.container) {
        /* istanbul ignore if */
        if (!IS_REACT_16) {
          _reactDom["default"].unmountComponentAtNode(_this.container);
        }

        _this.container.parentNode.removeChild(_this.container);

        _this.container = null;
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "getContainer", function () {
      if (!_this.container) {
        var container = document.createElement('div');
        var containerId = "".concat(_this.props.prefixCls, "-container-").concat(new Date().getTime());
        container.setAttribute('id', containerId);
        document.body.appendChild(container);
        _this.container = container;
      }

      return _this.container;
    });
    return _this;
  }

  (0, _createClass2["default"])(DialogWrap, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.visible) {
        this.componentDidUpdate();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.props.visible) {
        /* istanbul ignore if */
        if (!IS_REACT_16) {
          this.renderDialog(false);
        } else {
          this.removeContainer();
        }
      } else {
        this.removeContainer();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      /* istanbul ignore if */
      if (!IS_REACT_16) {
        this.renderDialog(this.props.visible);
      }
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(_ref) {
      var visible = _ref.visible;
      return !!(this.props.visible || visible);
    }
  }, {
    key: "renderDialog",
    value: function renderDialog(visible) {
      /* istanbul ignore next */
      _reactDom["default"].unstable_renderSubtreeIntoContainer(this, this.getComponent(visible), this.getContainer());
    }
  }, {
    key: "render",
    value: function render() {
      var visible = this.props.visible;

      if (IS_REACT_16 && (visible || this.component)) {
        return _reactDom["default"].createPortal(this.getComponent(visible), this.getContainer());
      }

      return null;
    }
  }]);
  return DialogWrap;
}(_react["default"].Component);

exports["default"] = DialogWrap;
(0, _defineProperty2["default"])(DialogWrap, "defaultProps", {
  visible: false,
  prefixCls: 'panda-dialog',
  onClose: function onClose() {}
});