import React from 'react';
import classNames from 'classnames';
import {
  getScrollTop,
  getElementTop,
  getRootScrollTop,
  setRootScrollTop,
  getScrollEventTarget,
} from '../utils/dom/scroll';
import getDirection from '../utils/dom/touch';

const getIndexList = () => {
  const indexList = [];
  const charCodeOfA = 'A'.charCodeAt(0);
  for (let i = 0; i < 26; i++) {
    indexList.push(String.fromCharCode(charCodeOfA + i));
  }

  return indexList;
};

export default class Countdown extends React.PureComponent {
  static defaultProps = {
    prefixCls: 'panda-index-bar',
    stickyOffsetTop: 0,
    indexList: getIndexList(),
    sticky: true,
    select() {},
  }

  constructor(props) {
    super(props);

    this.anchorElList = [];
    this.state = {
      dragging: false,
    };
  }

  componentDidMount() {
    if (!this.scroller) {
      this.scroller = getScrollEventTarget(this.el);
      this.scroller.addEventListener('scroll', this.onScroll);
    }

    this.sidebar.addEventListener('touchmove', this.onTouchMove);
  }

  componentWillUnmount() {
    this.scroller.removeEventListener('scroll', this.onScroll);
    this.sidebar.removeEventListener('touchmove', this.onTouchMove);
  }

  onScroll = () => {
    let scrollTop;

    if (this.scroller === window || this.scroller === document.body) {
      scrollTop = getScrollTop(this.scroller);
    } else {
      scrollTop = 0;
    }

    const rects = this.anchorElList.map(el => ({
      height: el.getBoundingClientRect().height,
      top: getElementTop(el),
    }));
    const activeAnchorIndex = this.getActiveAnchorIndex(scrollTop, rects);
    this.setState({ activeAnchorIndex });
  }


  getActiveAnchorIndex(scrollTop, rects) {
    const { indexList } = this.props;
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
    this.setState({ dragging: false });
    // this.setState({ active: null });
  }

  scrollToElement(element) {
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
    this.setState({ dragging: true });
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
    if (this.direction === 'vertical') {
      if (event.cancelable) {
        event.preventDefault();
      }

      const { clientX, clientY } = event.touches[0];
      const target = document.elementFromPoint(clientX, clientY);
      if (target) {
        const { index } = target.dataset;

        if (this.state.activeAnchorIndex !== index) {
          // this.touchActiveIndex = index;
          this.scrollToElement(target);
        }
      }
    }
  }

  getIndexes() {
    const { prefixCls, indexList } = this.props;

    return indexList.map((item, index) => {
      const cls = classNames(`${prefixCls}__index`, {
        [`${prefixCls}__index--active`]: index === this.state.activeAnchorIndex,
      });
      return (
        <span
          key={index}
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

  renderAnchor() {
    const { sticky, children } = this.props;
    const { activeAnchorIndex } = this.state;

    const newChildre = children.map((child, index) => {
      const childProps = {
        key: index,
        active: activeAnchorIndex === index,
        sticky,
        getIndexAnchorEl: this.saveAnchorElList,
        ...child.props,
      };

      return React.cloneElement(child, childProps);
    });
    return newChildre;
  }

  render() {
    const { prefixCls, indexList } = this.props;


    return (
      <div className={prefixCls} ref={(el) => { this.el = el; }}>
        <div
          className={`${prefixCls}__sidebar`}
          ref={el => this.sidebar = el}
          onClick={this.onClick}
          onTouchStart={this.touchStart}
          onTouchEnd={this.onTouchEnd}
          onTouchCancel={this.onTouchEnd}
        >
          {this.getIndexes()}
        </div>
        <div className={`${prefixCls}__content`}>
          {this.renderAnchor()}
          {this.state.dragging && (
          <span className="panda-index-bar-current">
            {indexList[this.state.activeAnchorIndex]}
          </span>
          )}
        </div>
      </div>
    );
  }
}
