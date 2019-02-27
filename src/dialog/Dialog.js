import React from 'react';
import PropTypes from 'prop-types';
import Animate from '../AnimationGroup';
import LazyRenderBox from './LazyRenderBox';

const propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.element,
  ]).isRequired,
  footer: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.element,
  ]),
  title: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.element,
  ]),
  prefixCls: PropTypes.string,
  className: PropTypes.string,
  mask: PropTypes.bool,
  visible: PropTypes.bool,
  closable: PropTypes.bool,
  maskClosable: PropTypes.bool,
  style: PropTypes.objectOf(PropTypes.string),
  bodyStyle: PropTypes.objectOf(PropTypes.string),
  onClose: PropTypes.func,
  onAnimateLeave: PropTypes.func,
  afterClose: PropTypes.func,
};

export default class Dialog extends React.Component {
  static propTypes = propTypes

  static defaultProps = {
    mask: true,
    visible: false,
    closable: true,
    maskClosable: true,
    prefixCls: 'panda-dialog',
    onClose() { },
    onAnimateLeave() { },
    afterClose() {},
  };

  componentWillUnmount() {
    // fix: react@16 no dismissing animation
    document.body.style.overflow = '';
    /* istanbul ignore else */
    if (this.wrapRef) {
      this.wrapRef.style.display = 'none';
    }
  }

  getZIndexStyle() {
    const style = {};
    const props = this.props;
    if (props.zIndex !== undefined) {
      style.zIndex = props.zIndex;
    }
    return style;
  }

  getWrapStyle() {
    const wrapStyle = this.props.wrapStyle || {};
    return { ...this.getZIndexStyle(), ...wrapStyle };
  }

  getMaskStyle() {
    const maskStyle = this.props.maskStyle || {};
    return { ...this.getZIndexStyle(), ...maskStyle };
  }

  getMaskTransitionName() {
    const props = this.props;
    let transitionName = props.maskTransitionName;
    const animation = props.maskAnimation;
    if (!transitionName && animation) {
      transitionName = `${props.prefixCls}-${animation}`;
    }
    return transitionName;
  }

  getTransitionName() {
    const props = this.props;
    let transitionName = props.transitionName;
    const animation = props.animation;
    if (!transitionName && animation) {
      transitionName = `${props.prefixCls}-${animation}`;
    }
    return transitionName;
  }

  getMaskElement() {
    const props = this.props;
    let maskElement;
    if (props.mask) {
      const maskTransition = this.getMaskTransitionName();
      maskElement = (
        <LazyRenderBox
          style={this.getMaskStyle()}
          key="mask-element"
          className={`${props.prefixCls}-mask`}
          hiddenClassName={`${props.prefixCls}-mask-hidden`}
          visible={props.visible}
          {...props.maskProps}
        />
      );
      if (maskTransition) {
        maskElement = (
          <Animate
            key="mask"
            showProp="visible"
            transitionAppear
            component=""
            transitionName={maskTransition}
          >
            {maskElement}
          </Animate>
        );
      }
    }
    return maskElement;
  }

  getDialogElement = () => {
    const props = this.props;
    const closable = props.closable;
    const prefixCls = props.prefixCls;

    let footer;
    if (props.footer) {
      footer = (
        <div className={`${prefixCls}-footer`} ref={el => this.footerRef = el}>
          {props.footer}
        </div>
      );
    }

    let header;
    if (props.title) {
      header = (
        <div className={`${prefixCls}-header`}>
          <div className={`${prefixCls}-title`}>
            {props.title}
          </div>
        </div>
      );
    }

    let closer;
    if (closable) {
      closer = (
        <button
          onClick={this.close}
          aria-label="Close"
          className={`${prefixCls}-close`}
        >
          <span className={`${prefixCls}-close-x`} />
        </button>
      );
    }

    const transitionName = this.getTransitionName();
    const dialogElement = (
      <LazyRenderBox
        key="dialog-element"
        role="document"
        ref={el => this.dialogRef = el}
        style={props.style || {}}
        className={`${prefixCls} ${props.className || ''}`}
        visible={props.visible}
      >
        <div className={`${prefixCls}-content`}>
          {closer}
          {header}
          <div
            className={`${prefixCls}-body`}
            style={props.bodyStyle}
            ref={el => this.bodyRef = el}
          >
            {props.children}
          </div>
          {footer}
        </div>
      </LazyRenderBox>
    );
    return (
      <Animate
        key="dialog"
        showProp="visible"
        onAppear={this.onAnimateAppear}
        onLeave={this.onAnimateLeave}
        transitionName={transitionName}
        component=""
        transitionAppear
      >
        {dialogElement}
      </Animate>
    );
  }

  onAnimateAppear = () => {
    document.body.style.overflow = 'hidden';
  }

  onAnimateLeave = () => {
    document.body.style.overflow = '';
    /* istanbul ignore else */
    if (this.wrapRef) {
      this.wrapRef.style.display = 'none';
    }

    this.props.onAnimateLeave();
    this.props.afterClose();
  }

  close = (e) => {
    this.props.onClose(e);
  }

  onMaskClick = (e) => {
    if (e.target === e.currentTarget) {
      this.close(e);
    }
  }

  render() {
    const { props } = this;
    const { prefixCls, maskClosable } = props;
    const style = this.getWrapStyle();
    if (props.visible) {
      style.display = null;
    }
    return (
      <div>
        {this.getMaskElement()}
        <div
          className={`${prefixCls}-wrap ${props.wrapClassName || ''}`}
          ref={el => this.wrapRef = el}
          onClick={maskClosable ? this.onMaskClick : undefined}
          role="dialog"
          aria-labelledby={props.title}
          style={style}
          {...props.wrapProps}
        >
          {this.getDialogElement()}
        </div>
      </div>
    );
  }
}
