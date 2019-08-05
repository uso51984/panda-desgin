import React from 'react';
import classNames from 'classnames';
import {
  getScrollTop,
  getElementTop,
  getRootScrollTop,
  setRootScrollTop,
  getScrollEventTarget,
} from '../utils/dom/scroll';

const dataTwo = [];
for (let i = 0; i < 15; i += 1) {
  dataTwo.push(i);
}

const indexList = [];
const charCodeOfA = 'A'.charCodeAt(0);
for (let i = 0; i < 26; i++) {
  indexList.push(String.fromCharCode(charCodeOfA + i));
}

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

export default class Countdown extends React.PureComponent {
  static defaultProps = {
    prefixCls: 'panda-index',
    stickyOffsetTop: 0,
    sticky: true,
    select() {},
  }

  constructor(props) {
    super(props);

    this.anchorElList = [];
    this.state = {
      height: 0,
    };
  }

  componentDidMount() {
    if (!this.scroller) {
      this.scroller = getScrollEventTarget(this.el);
      this.scroller.addEventListener('scroll', this.onScroll);
    }

    this.setState({
      height: this.anchorElList[0].offsetHeight,
    });
  }

  onScroll = () => {
    let scrollTop;
    if (this.scroller === window || this.scroller === document.body) {
      scrollTop = getScrollTop(this.scroller);
    } else {
      scrollTop = 0;
    }
    this.cellListEl = [...document.querySelectorAll('.anchor')];

    const rects = this.cellListEl.map(el => ({
      height: el.getBoundingClientRect().height,
      top: getElementTop(el),
    }));

    const active = this.getActiveAnchorIndex(scrollTop, rects);
    this.setState({ active });

    console.log('232323')
  }


  getActiveAnchorIndex(scrollTop, rects) {
    for (let i = indexList.length - 1; i >= 0; i--) {
      const prevHeight = i > 0 ? rects[i - 1].height : 0;

      if (scrollTop + prevHeight + this.props.stickyOffsetTop >= rects[i].top) {
        return i;
      }
    }
    return -1;
  }

  onClick = (event) => {
    this.scrollToElement(event.target);
  }

  onTouchEnd = () => {
    // this.setState({ active: null });
  }

  scrollToElement(element, setActive) {
    const { index } = element.dataset;
    if (!index) {
      return null;
    }

    const achorTargetEl = this.anchorElList[index];
    if (achorTargetEl) {
      achorTargetEl.scrollIntoView();

      if (this.stickyOffsetTop) {
        setRootScrollTop(getRootScrollTop() - this.stickyOffsetTop);
      }
    }
  }

  resetTouchStatus() {
    this.direction = '';
    this.deltaX = 0;
    this.deltaY = 0;
    this.offsetX = 0;
    this.offsetY = 0;
  }

  touchStart = (event) => {
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
  }

  onTouchMove = (event) => {
    this.touchMove(event);
    console.log('onTouchMove', event)
    if (this.direction === 'vertical') {
      if (event.cancelable) {
        event.preventDefault();
      }

      const { clientX, clientY } = event.touches[0];
      const target = document.elementFromPoint(clientX, clientY);
      if (target) {
        const { index } = target.dataset;
        console.log('0target', index)
        if (this.touchActiveIndex !== index) {
          this.touchActiveIndex = index;
          this.scrollToElement(target);
        }
      }
    }
  }

  getIndexes() {
    const { prefixCls } = this.props;

    return indexList.map((item, index) => {
      const cls = classNames(`${prefixCls}__index`, {
        [`${prefixCls}__index--active`]: index === this.state.active,
      });

      return (
        <span
          className={cls}
          data-index={index}
        >
          {item}
        </span>
      );
    });
  }

  saveAnchorElList = (el) => {
    this.anchorElList.push(el);
  }

  renderAnchor(text, index) {
    const { sticky } = this.props;
    const { height, active } = this.state;
    return (
      <div
        ref={this.saveAnchorElList}
        className="anchor"
        style={{ height: sticky && height ? `${this.state.height}px` : null }}
      >
        <div
          style={{ zIndex: 1 }}
          className={classNames('panda-index-anchor', {
            'panda-index-anchor--sticky': active === index,
            'pandan-hairline--bottom': active === index,
          })}
        >
          {text}
        </div>
      </div>
    );
  }

  render() {
    const { prefixCls } = this.props;


    return (
      <div className={`${prefixCls}-bar`} ref={(el) => { this.el = el; }}>
        <div
          className={`${prefixCls}-bar__sidebar`}
          onClick={this.onClick}
          onTouchStart={this.touchStart}
          onTouchMove={this.onTouchMove}
          onTouchEnd={this.onTouchEnd}
          onTouchCancel={this.onTouchEnd}
        >
          {this.getIndexes()}
        </div>
        <div className="bar__content">
          {
            indexList.map((item, index) => (
              <div>
                {this.renderAnchor(item, index)}
                {dataTwo.map(() => (<div>adfasdf32232</div>))}

              </div>
            ))
          }
        </div>

      </div>
    );
  }
}
