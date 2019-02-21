"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = alert;

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _closest = _interopRequireDefault(require("src/utils/closest"));

var _Modal = _interopRequireDefault(require("./Modal"));

var IS_REACT_16 = !!_reactDom["default"].createPortal;

var ConfirmDialog = function ConfirmDialog(props) {
  var close = props.close,
      options = props.options,
      actions = props.actions,
      visible = props.visible,
      afterClose = props.afterClose;
  var title = options.title,
      message = options.message,
      className = options.className,
      closable = options.closable,
      wrapClassName = options.wrapClassName,
      maskClosable = options.maskClosable;
  var footer = actions.map(function (button) {
    var orginPress = button.onPress || function () {};

    button.onPress = function () {
      var res = orginPress();

      if (res && res.then) {
        res.then(function () {
          close();
        })
        /* istanbul ignore next */
        ["catch"](function () {});
      } else {
        close();
      }
    };

    return button;
  });
  var prefixCls = 'panda-modal';

  function onWrapTouchStart(e) {
    /* istanbul ignore next */
    if (!/iPhone|iPod|iPad/i.test(navigator.userAgent)) {
      return;
    }
    /* istanbul ignore next */


    var pNode = (0, _closest["default"])(e.target, ".".concat(prefixCls, "-footer"));
    /* istanbul ignore next */

    if (!pNode) {
      e.preventDefault();
    }
  }

  return _react["default"].createElement(_Modal["default"], {
    visible: visible,
    className: className,
    maskClosable: maskClosable,
    wrapClassName: wrapClassName,
    transparent: true,
    title: title,
    afterClose: afterClose,
    transitionName: "am-zoom",
    closable: closable,
    onClose: close,
    footer: footer,
    maskTransitionName: "am-fade",
    wrapProps: {
      onTouchStart: onWrapTouchStart
    }
  }, _react["default"].createElement("div", {
    className: "".concat(prefixCls, "-alert-content")
  }, message));
};

function alert(options) {
  var actions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [{
    text: '确定'
  }];
  var title = options.title,
      message = options.message;

  if (!title && !message) {
    return {
      close: function close() {}
    };
  }

  var div = document.createElement('div');
  document.body.appendChild(div);
  /* istanbul ignore next */

  function destroy() {
    /* istanbul ignore next */
    _reactDom["default"].unmountComponentAtNode(div);
    /* istanbul ignore next */


    if (div && div.parentNode) {
      div.parentNode.removeChild(div);
    }
  }

  function render(props) {
    _reactDom["default"].render(_react["default"].createElement(ConfirmDialog, props), div);
  }

  function close() {
    /* istanbul ignore else */
    if (IS_REACT_16) {
      render({
        close: close,
        visible: false,
        options: options,
        actions: actions,
        afterClose: destroy.bind(this)
      });
    } else {
      destroy();
    }
  }

  render({
    close: close,
    visible: true,
    options: options,
    actions: actions,
    afterClose: destroy.bind(this)
  });
  return {
    close: close
  };
}