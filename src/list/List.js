import React from 'react';
import utils from './utils';

export default class List extends React.PureComponent {
  static defaultProps = {
    immediateCheck: true,
    offset: 300,
    load() {},
  }

  componentDidMount() {
    // this.scroller = utils.getScrollEventTarget(this.el);
    this.scroller = this.el;
    this.scroller.addEventListener('scroll', this.check);

    if (this.immediateCheck) {
      this.check();
    }
  }

  componentWillUnmount() {
    this.scroller.removeEventListener('scroll', this.check);
  }

  check = () => {
    if (this.props.loading || this.props.finished) {
      return;
    }

    const el = this.el;

    const { scroller } = this;
    const scrollerHeight = utils.getVisibleHeight(scroller);
    if (!scrollerHeight || utils.getComputedStyle(el).display === 'none' || el.offsetParent === null) {
      return;
    }

    const scrollTop = utils.getScrollTop(scroller);
    const targetBottom = scrollTop + scrollerHeight;

    let reachBottom = false;

    if (el === scroller) {
      reachBottom = scroller.scrollHeight - targetBottom < this.props.offset;
    } else {
      const elBottom =
        (utils.getElementTop(el) -
        utils.getElementTop(scroller)) +
        utils.getVisibleHeight(el);
      reachBottom = elBottom - scrollerHeight < this.props.offset;
    }

    if (reachBottom) {
      this.props.load();
    }
  }

  render() {
    const { children } = this.props;
    return (
      <div className="panda-list" ref={el => this.el = el}>
        {children}
        <div className="panda-list__loading">
          <span className="panda-list__loading-text">加载中...</span>
        </div>
      </div>
    );
  }
}
