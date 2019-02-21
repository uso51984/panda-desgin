import _extends from "@babel/runtime/helpers/extends";
import _objectSpread from "@babel/runtime/helpers/objectSpread";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import React from 'react';
import ReactDOM from 'react-dom';
import Dialog from './Dialog';
var IS_REACT_16 = !!ReactDOM.createPortal;

var DialogWrap =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DialogWrap, _React$Component);

  function DialogWrap() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, DialogWrap);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(DialogWrap)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "saveRef", function (node) {
      /* istanbul ignore else */
      if (IS_REACT_16) {
        _this.component = node;
      }
    });

    _defineProperty(_assertThisInitialized(_this), "getComponent", function (visible) {
      var props = _objectSpread({}, _this.props);

      ['visible', 'onAnimateLeave'].forEach(function (key) {
        delete props[key];
      });
      return React.createElement(Dialog, _extends({}, props, {
        visible: visible,
        onAnimateLeave: _this.removeContainer,
        ref: _this.saveRef
      }));
    });

    _defineProperty(_assertThisInitialized(_this), "removeContainer", function () {
      if (_this.container) {
        /* istanbul ignore if */
        if (!IS_REACT_16) {
          ReactDOM.unmountComponentAtNode(_this.container);
        }

        _this.container.parentNode.removeChild(_this.container);

        _this.container = null;
      }
    });

    _defineProperty(_assertThisInitialized(_this), "getContainer", function () {
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

  _createClass(DialogWrap, [{
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
      ReactDOM.unstable_renderSubtreeIntoContainer(this, this.getComponent(visible), this.getContainer());
    }
  }, {
    key: "render",
    value: function render() {
      var visible = this.props.visible;

      if (IS_REACT_16 && (visible || this.component)) {
        return ReactDOM.createPortal(this.getComponent(visible), this.getContainer());
      }

      return null;
    }
  }]);

  return DialogWrap;
}(React.Component);

_defineProperty(DialogWrap, "defaultProps", {
  visible: false,
  prefixCls: 'panda-dialog',
  onClose: function onClose() {}
});

export { DialogWrap as default };