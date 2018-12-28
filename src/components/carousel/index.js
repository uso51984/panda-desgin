import React from 'react';
import classNames from 'classnames';

const MIN_DISTANCE = 10;
function getDirection(x, y) {
  if (x > y && x > MIN_DISTANCE) {
    return 'horizontal';
  }
  if (y > x && y > MIN_DISTANCE) {
    return 'vertical';
  }
  return '';
}

class Carousel extends React.PureComponent {
  static defaultProps = {
    prefixCls: 'van-swipe',
    vertical: false,
    autoplay: 2000,
    duration: 500,
    showIndicators: true,
    initialSwipe: 0,
    loop: true,
    touchable: true,
    style: {},
  }

  constructor(props) {
    super(props);

    const { children } = this.props;
    this.count = React.Children.count(children);
    this.swipes = [];
    React.Children.forEach(children, () => {
      this.swipes.push({ offset: 0 });
    });

    this.state = {
      active: 0,
    };
  }

  componentDidMount() {
    this.initialize();
    const styleObj = this.getTrackStyle();
    for (const key in styleObj) {
      this.el.style[key] = styleObj[key];
    }

    this.el.addEventListener('touchstart', this.onTouchStart);
    this.el.addEventListener('touchmove', this.onTouchMove);
    this.el.addEventListener('touchend', this.onTouchEnd);
    this.el.addEventListener('touchcancel', this.onTouchEnd);
  }


  initialize(active = this.props.initialSwipe) {
    const { vertical } = this.props;
    if (this.carouselEl) {
      const rect = this.carouselEl.getBoundingClientRect();
      this.computedWidth = this.props.width || rect.width;
      this.computedHeight = this.props.height || rect.height;
    }

    this.size = this[vertical ? 'computedHeight' : 'computedWidth'];
    this.trackSize = this.count * this.size;

    this.swiping = true;
    this.active = active;
    this.setState({ active });
    this.offset = this.count > 1 ? -this.size * active : 0;

    this.autoPlay();
  }

  getSwipeItem() {
    const { children, prefixCls, vertical } = this.props;
    this.swipeItemEl = [];
    const mainAxis = vertical ? 'height' : 'width';
    const mapFunc = (child, index) => (
      <div
        style={{ [mainAxis]: this.size }}
        key={index}
        className={`${prefixCls}-item`}
        ref={el => this.swipeItemEl[index] = el}
      >
        {child}
      </div>
    );

    return React.Children.map(children, mapFunc);
  }

  getTrackStyle = () => {
    const { vertical, duration } = this.props;
    const mainAxis = vertical ? 'height' : 'width';
    const crossAxis = vertical ? 'width' : 'height';
    return {
      [mainAxis]: `${this.trackSize}px`,
      [crossAxis]: this[crossAxis] ? `${this[crossAxis]}px` : '',
      transitionDuration: `${this.swiping ? 0 : duration}ms`,
      transform: `translate${vertical ? 'Y' : 'X'}(${this.offset}px)`,
    };
  }

  touchStart(event) {
    this.resetTouchStatus();
    this.startX = event.touches[0].clientX;
    this.startY = event.touches[0].clientY;
  }

  touchMove(event) {
    const touch = event.touches[0];
    this.deltaX = touch.clientX - this.startX;
    this.deltaY = touch.clientY - this.startY;
    this.offsetX = Math.abs(this.deltaX);
    this.offsetY = Math.abs(this.deltaY);
    this.direction = this.direction || getDirection(this.offsetX, this.offsetY);
    const expect = this.props.vertical ? 'vertical' : 'horizontal';

    this.isCorrectDirection = this.direction === expect;
  }

  resetTouchStatus() {
    this.direction = '';
    this.deltaX = 0;
    this.deltaY = 0;
    this.offsetX = 0;
    this.offsetY = 0;
  }

  onTouchStart = (event) => {
    if (!this.props.touchable) return;

    this.el.style.transitionDuration = '0ms';
    this.clear();
    this.swiping = true;
    this.touchStart(event);
    this.correctPosition();
  }

  onTouchMove = (event) => {
    if (!this.props.touchable || !this.swiping) return;

    this.touchMove(event);
    this.delta = this.props.vertical ? this.deltaY : this.deltaX;
    if (this.isCorrectDirection) {
      event.preventDefault();
      event.stopPropagation();
      this.move(0, Math.min(Math.max(this.delta, -this.size), this.size));
    }
  }

  resetTouchStatus = () => {
    this.direction = '';
    this.deltaX = 0;
    this.deltaY = 0;
    this.offsetX = 0;
    this.offsetY = 0;
  }

  onTouchEnd = () => {
    if (!this.props.touchable || !this.swiping) return;

    if (this.delta && this.isCorrectDirection) {
      const offset = this.props.vertical ? this.offsetY : this.offsetX;
      const direction = this.delta > 0 ? -1 : 1;
      this.move(offset > 0 ? direction : 0, 0, true);
    }

    const { duration } = this.props;

    this.el.style.transitionDuration = `${duration}ms`;
    this.setState({ active: this.active });
    this.swiping = false;
    this.autoPlay();
  }

  move(move = 0, offset = 0, istest) {
    let { active } = this;
    const { delta, count, swipes, trackSize } = this;

    const atFirst = active === 0;
    const atLast = active === count - 1;
    const outOfBounds =
      !this.props.loop &&
      ((atFirst && (offset > 0 || move < 0)) ||
        (atLast && (offset < 0 || move > 0)));


    if (outOfBounds || count <= 1) {
      return;
    }

    swipes[0].offset = atLast && (delta < 0 || move > 0) ? trackSize : 0;

    swipes[count - 1].offset =
      atFirst && (delta > 0 || move < 0) ? -trackSize : 0;

    if (move && active + move >= -1 && active + move <= count) {
      active += move;
    }

    this.active = active;
    this.offset = offset - (active * this.size);

    const { vertical } = this.props;
    this.swipeItemEl[0].style.transform = `translate${vertical ? 'Y' : 'X'}(${swipes[0].offset}px)`;
    this.swipeItemEl[count - 1].style.transform = `translate${vertical ? 'Y' : 'X'}(${swipes[count - 1].offset}px)`;

    this.el.style.transform = `translate${vertical ? 'Y' : 'X'}(${this.offset}px)`;
  }

  correctPosition() {
    const { active } = this;
    if (active <= -1) {
      this.move(this.count);
    }
    if (active >= this.count) {
      this.move(-this.count);
    }
  }

  clear() {
    clearTimeout(this.timer);
  }

  autoPlay() {
    const { autoplay, duration } = this.props;

    if (autoplay && this.count > 1) {
      this.clear();
      this.timer = setTimeout(() => {
        this.swiping = true;
        this.resetTouchStatus();
        this.correctPosition();
        this.el.style.transitionDuration = `${0}ms`;

        setTimeout(() => {
          this.swiping = false;
          this.el.style.transitionDuration = `${duration}ms`;
          this.move(1, 0, true);
          this.setState({ active: this.active });
          this.autoPlay();
        }, 30);
      }, autoplay);
    }
  }

  render() {
    const { prefixCls, className, vertical, showIndicators, style } = this.props;
    const { active } = this.state;
    const carouselCls = classNames(prefixCls, {
      [`${prefixCls}--vertical`]: vertical,
    }, className);

    const indicatorsCls = classNames({
      [`${prefixCls}__indicators`]: true,
      [`${prefixCls}__indicators--vertical`]: vertical,
    });

    const getIndicatorCls = index => classNames({
      [`${prefixCls}__indicator`]: true,
      [`${prefixCls}__indicator--active`]: (active + this.count) % this.count === index,
    });

    return (
      <div className={carouselCls} ref={el => this.carouselEl = el} style={style}>
        <div
          ref={el => this.el = el}
          className={`${prefixCls}__track`}
        >
          {this.getSwipeItem()}
        </div>
        {
          showIndicators && (
            <div className={indicatorsCls}>
              {
                this.swipes.map((_, index) => (
                  <i key={index} className={getIndicatorCls(index)} />
                ))
              }
            </div>
          )
        }

      </div>
    );
  }
}

export default Carousel;
