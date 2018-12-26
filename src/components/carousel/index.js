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
    duration: 500,
  }

  constructor(props) {
    super(props);

    this.state = {
      direction: '',
    };
  }

  componentDidMount() {

  }

  getSwipeItem() {
    const { children, prefixCls } = this.props;
    const mapFunc = (child, index) => {
      return (
        <div key={index} className={`${prefixCls}-item`}>
          {child}
        </div>
      );
    };

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
      transform: `translate${vertical ? 'Y' : 'X'}(${0}px)`
    };
  }

  onTouchStart(event) {
    this.resetTouchStatus();
    this.startX = event.touches[0].clientX;
    this.startY = event.touches[0].clientY;
  }

  onTouchMove(event) {
    const touch = event.touches[0];
    this.deltaX = touch.clientX - this.startX;
    this.deltaY = touch.clientY - this.startY;
    this.offsetX = Math.abs(this.deltaX);
    this.offsetY = Math.abs(this.deltaY);
    this.direction = this.direction || getDirection(this.offsetX, this.offsetY);
  }

  resetTouchStatus() {
    this.direction = '';
    this.deltaX = 0;
    this.deltaY = 0;
    this.offsetX = 0;
    this.offsetY = 0;
  }

  onTouchEnd() {

  }

  render() {
    const { prefixCls, className } = this.props;
    const carouselCls = classNames(prefixCls, className);

    return (
      <div className={carouselCls}>
        <div
          style={this.getTrackStyle()}
          ref={(el)=> this.el = el}
          className={`${prefixCls}__track`}
          onTouchStart={this.onTouchStart}
          onTouchMove={this.onTouchMove}
          onTouchEnd={this.onTouchEnd}
          onTouchCancel={this.onTouchEnd}
        >
          {this.getSwipeItem()}
        </div>
      </div>
    );
  }
}

export default Carousel;
