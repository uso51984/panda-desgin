import React from 'react';
import classNames from 'classnames';
import PickerMixin from './PickerMixin';
import { setTransform, setTransition, Velocity } from './utils';

export class Picker extends React.Component {
  static defaultProps = {
    prefixCls: 'panda-picker-col',
  }

  constructor(props) {
    super(props);

    const { selectedValue, defaultSelectedValue, children } = this.props;
    let selectedValueState = selectedValue || defaultSelectedValue;

    if (!selectedValueState) {
      const childrenList = React.Children.toArray(this.props.children);
      selectedValueState = childrenList && children[0] && children[0].props.value;
    }

    this.state = { selectedValue: selectedValueState };

    this.scrollY = -1;
    this.lastY = 0;
    this.startY = 0;
    this.scrollDisabled = false;
    this.isMoving = false;
  }

  componentDidMount() {
    const { contentRef, indicatorRef, maskRef, rootRef } = this;

    const rootHeight = rootRef.getBoundingClientRect().height;
    const itemHeight = indicatorRef.getBoundingClientRect().height;
    this.itemHeight = itemHeight;
    let num = Math.floor(rootHeight / itemHeight);
    if (num % 2 === 0) {
      num--;
    }
    num--;
    num /= 2;
    contentRef.style.padding = `${itemHeight * num}px 0`;
    indicatorRef.style.top = `${itemHeight * num}px`;
    maskRef.style.backgroundSize = `100% ${itemHeight * num}px`;

    this.props.select(this.state.selectedValue, this.itemHeight, this.scrollTo);
    Object.keys(this.scrollHanders()).forEach((key) => {
      rootRef.addEventListener(key, this.scrollHanders()[key], false);
    });
  }


  componentWillReceiveProps(nextProps) {
    if ('selectedValue' in nextProps) {
      if (this.state.selectedValue !== nextProps.selectedValue) {
        this.setState({
          selectedValue: nextProps.selectedValue,
        }, () => {
          this.props.select(
            nextProps.selectedValue,
            this.itemHeight,
            nextProps.noAnimate ? this.scrollToWithoutAnimation : this.scrollTo,
          );
        });
      }
    }
    this.setDisabled(nextProps.disabled);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.selectedValue !== nextState.selectedValue
      || this.props.children !== nextProps.children;
  }

  componentDidUpdate() {
    this.props.select(this.state.selectedValue, this.itemHeight, this.scrollToWithoutAnimation);
  }

  componentWillUnmount() {
    Object.keys(this.scrollHanders()).forEach((key) => {
      (this.rootRef).removeEventListener(key, this.scrollHanders()[key]);
    });
  }

  scrollToFunc = (x, y, time = 0.3) => {
    if (this.scrollY !== y) {
      this.scrollY = y;
      if (time && !this.props.noAnimate) {
        setTransition(this.contentRef.style, `cubic-bezier(0,0,0.2,1.15) ${time}s`);
      }
      setTransform(this.contentRef.style, `translate3d(0,${-y}px,0)`);

      setTimeout(() => {
        this.scrollingComplete();
        if (this.contentRef) {
          setTransition(this.contentRef.style, '');
        }
      }, +time * 1000);
    }
  };

  scrollTo = (top) => {
    this.scrollToFunc(0, top);
  }

  scrollToWithoutAnimation = (top) => {
    this.scrollToFunc(0, top, 0);
  }

  onStart = (y) => {
    if (this.scrollDisabled) {
      return;
    }

    this.isMoving = true;
    this.startY = y;
    this.lastY = this.scrollY;
  };

  onMove = (y) => {
    if (this.scrollDisabled || !this.isMoving) {
      return;
    }
    this.scrollY = (this.lastY - y) + this.startY;

    Velocity.record(this.scrollY);

    this.onScrollChange();
    setTransform(this.contentRef.style, `translate3d(0,${-this.scrollY}px,0)`);
  };

  onFinish = () => {
    this.isMoving = false;
    let targetY = this.scrollY;

    const height = (this.props.children.length - 1) * this.itemHeight;

    let time = 0.3;

    const velocity = Velocity.getVelocity(targetY) * 4;
    if (velocity) {
      targetY = (velocity * 40) + targetY;
      time = Math.abs(velocity) * 0.1;
    }

    if (targetY % this.itemHeight !== 0) {
      targetY = Math.round(targetY / this.itemHeight) * this.itemHeight;
    }

    if (targetY < 0) {
      targetY = 0;
    } else if (targetY > height) {
      targetY = height;
    }

    this.scrollToFunc(0, targetY, time < 0.3 ? 0.3 : time);

    this.onScrollChange();
  };

  fireValueChange = (selectedValue) => {
    if (selectedValue !== this.state.selectedValue) {
      if (!('selectedValue' in this.props)) {
        this.setState({
          selectedValue,
        });
      }
      if (this.props.onValueChange) {
        this.props.onValueChange(selectedValue);
      }
    }
  }

  onScrollChange = () => {
    const top = this.getScrollY();
    if (top >= 0) {
      const children = React.Children.toArray(this.props.children);
      const index = this.props.computeChildIndex(top, this.itemHeight, children.length);
      if (this.scrollValue !== index) {
        this.scrollValue = index;
        const child = children[index];
        if (child && this.props.onScrollChange) {
          this.props.onScrollChange(child.props.value);
        } else if (!child && console.warn) {
          console.warn('child not found', children, index);
        }
      }
    }
  }

  scrollingComplete = () => {
    const top = this.getScrollY();
    if (top >= 0) {
      this.props.doScrollingComplete(top, this.itemHeight, this.fireValueChange);
    }
  }

  scrollHanders = () => ({
    mousedown: e => this.onStart(e.screenY),
    touchstart: e => this.onStart(e.touches[0].screenY),
    touchmove: (e) => {
      e.preventDefault();
      this.onMove(e.touches[0].screenY);
    },
    mousemove: (e) => {
      e.preventDefault();
      this.onMove(e.screenY);
    },
    touchend: () => this.onFinish(),
    touchcancel: () => this.onFinish(),
    mouseup: () => this.onFinish(),
  })

  setDisabled = (disabled) => {
    this.scrollDisabled = disabled;
  }

  getScrollY = () => this.scrollY

  getValue() {
    if ('selectedValue' in this.props) {
      return this.props.selectedValue;
    }
    const children = React.Children.toArray(this.props.children);
    return children && children[0] && children[0].props.value;
  }

  getItems() {
    const { children, prefixCls, itemStyle } = this.props;
    const { selectedValue } = this.state;
    const itemClassName = `${prefixCls}-item`;
    const selectedItemClassName = `${itemClassName} ${prefixCls}-item-selected`;

    const mapFunc = (item) => {
      const { value, className, style } = item.props;
      const isSelectedValue = selectedValue === value;
      const itemcls = classNames({
        [selectedItemClassName]: isSelectedValue,
        [itemClassName]: !isSelectedValue,
      }, className);

      return (
        <div
          style={{ ...itemStyle, ...style }}
          className={itemcls}
          key={value}
        >
          {item.children || item.props.children}
        </div>
      );
    };

    return React.Children.map(children, mapFunc);
  }

  render() {
    const { prefixCls, className, indicatorClassName, disabled, style, indicatorStyle } = this.props;

    const pickerCls = classNames(prefixCls, {
      [`${prefixCls}--disabled`]: disabled,
      className,
    });

    const indicatorCls = classNames(`${prefixCls}__indicator`, indicatorClassName);
    return (
      <div className={pickerCls} ref={el => this.rootRef = el} style={style}>
        <div className={`${prefixCls}__mask`} ref={el => this.maskRef = el} />
        <div
          className={indicatorCls}
          ref={el => this.indicatorRef = el}
          style={indicatorStyle}
        />
        <div className={`${prefixCls}__content`} ref={el => this.contentRef = el}>
          {this.getItems()}
        </div>
      </div>
    );
  }
}

export default PickerMixin(Picker);
