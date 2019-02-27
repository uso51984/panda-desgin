import React from 'react';
import PropTypes from 'prop-types';
import TouchFeedback from 'react-tap-feedback';
import classnames from 'classnames';
import Dialog from '../dialog';

const propTypes = {
  prefixCls: PropTypes.string,
  className: PropTypes.string,
  wrapClassName: PropTypes.string,
  maskTransitionName: PropTypes.string,
  transitionName: PropTypes.node,
  transparent: PropTypes.bool,
  popup: PropTypes.bool,
  animationType: PropTypes.string,
  animated: PropTypes.bool,
  style: PropTypes.object,
  onShow: PropTypes.func,
  footer: PropTypes.array,
  closable: PropTypes.bool,
};

export default class Modal extends React.Component {
  static propTypes = propTypes

  static defaultProps = {
    prefixCls: 'panda-modal',
    transparent: true,
    popup: false,
    animationType: 'slide-down',
    animated: true,
    style: {},
    onShow() {},
    footer: [],
    closable: false,
  };

  renderFooterButton(button, prefixCls, i) {
    let buttonStyle = {};
    if (button.style) {
      buttonStyle = button.style;
    }

    const onClickFn = (e) => {
      e.preventDefault();
      if (button.onPress) {
        button.onPress();
      }
    };

    return (
      <TouchFeedback activeClassName={`${prefixCls}-button-active`} key={i}>
        <a
          className={`${prefixCls}-button`}
          role="button"
          style={buttonStyle}
          onClick={onClickFn}
        >
          {button.text || 'Button'}
        </a>
      </TouchFeedback>
    );
  }

  render() {
    const { prefixCls, className, wrapClassName, transitionName, maskTransitionName, style,
      footer, animated, transparent, popup, animationType, ...restProps
    } = this.props;

    const btnGroupClass = classnames(`${prefixCls}-button-group-${
      footer.length === 2 ? 'h' : 'v'
    }`);

    const footerDom = footer.length ? (
      <div className={btnGroupClass} role="group">
        {footer.map((button, i) =>
          this.renderFooterButton(button, prefixCls, i))}
      </div>
    ) : null;

    let transName;
    let maskTransName;

    if (animated) {
      if (transparent) {
        transName = 'am-fade';
        maskTransName = 'am-fade';
      } else {
        transName = 'am-slide-up';
        maskTransName = 'am-slide-up';
      }
      if (popup) {
        transName =
          animationType === 'slide-up' ? 'am-slide-up' : 'am-slide-down';
        maskTransName = 'am-fade';
      }
    }

    const wrapCls = classnames(wrapClassName, {
      [`${prefixCls}-wrap-popup`]: popup,
    });
    const cls = classnames(className, {
      [`${prefixCls}-transparent`]: transparent,
      [`${prefixCls}-popup`]: popup,
      [`${prefixCls}-popup-${animationType}`]: popup && animationType,
    });

    return (
      <Dialog
        {...restProps}
        prefixCls={prefixCls}
        className={cls}
        wrapClassName={wrapCls}
        transitionName={transitionName || transName}
        maskTransitionName={maskTransitionName || maskTransName}
        style={style}
        footer={footerDom}
      />
    );
  }
}
