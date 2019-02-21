import React from 'react';
import ReactDOM from 'react-dom';
import closest from 'src/utils/closest';
import Modal from './Modal';
var IS_REACT_16 = !!ReactDOM.createPortal;

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


    var pNode = closest(e.target, ".".concat(prefixCls, "-footer"));
    /* istanbul ignore next */

    if (!pNode) {
      e.preventDefault();
    }
  }

  return React.createElement(Modal, {
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
  }, React.createElement("div", {
    className: "".concat(prefixCls, "-alert-content")
  }, message));
};

export default function alert(options) {
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
    ReactDOM.unmountComponentAtNode(div);
    /* istanbul ignore next */

    if (div && div.parentNode) {
      div.parentNode.removeChild(div);
    }
  }

  function render(props) {
    ReactDOM.render(React.createElement(ConfirmDialog, props), div);
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