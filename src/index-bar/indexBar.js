import React from 'react';
import classNames from 'classnames';
import {
  getScrollTop,
  getElementTop,
  getRootScrollTop,
  setRootScrollTop,
  getScrollEventTarget,
} from '../utils/dom/scroll';

const data = [];
for (let i = 0; i < 16; i += 1) {
  data.push(i);
}

const dataTwo = [];
for (let i = 0; i < 15; i += 1) {
  dataTwo.push(i);
}

const indexList = [];
const charCodeOfA = 'A'.charCodeAt(0);
for (let i = 0; i < 26; i++) {
  indexList.push(String.fromCharCode(charCodeOfA + i));
}

export default class Countdown extends React.PureComponent {
  static defaultProps = {
    prefixCls: 'panda-index',
    stickyOffsetTop: 0,
    sticky: true,
  }

  constructor(props) {
    super(props);

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
      height: this.anchorEl.offsetHeight,
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
    // console.log('active', active);
    // if (this.props.sticky) {
    //   data.forEach((item, index) => {
    //     // console.log('index', index)
    //     if (index === active) {
    //       this.setState({ active: index });
    //     } else if (index === active - 1) {
    //       const activeItemTop = rects[active].top - scrollTop;
    //       if (activeItemTop > 0) {
    //         this.setState({ active: index });
    //       }
    //     } else {
    //       console.log('------')
    //       this.setState({ active: '' });
    //     }
    //   });
    // }
  }


  getActiveAnchorIndex(scrollTop, rects) {
    for (let i = data.length - 1; i >= 0; i--) {
      const prevHeight = i > 0 ? rects[i - 1].height : 0;

      if (scrollTop + prevHeight + this.props.stickyOffsetTop >= rects[i].top) {
        return i;
      }
    }
    return -1;
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

  renderAnchor(text, index) {
    const { sticky } = this.props;
    const { height, active } = this.state;
    console.log('active', active)
    return (
      <div
        ref={el => this.anchorEl = el}
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
        <div className={`${prefixCls}-bar__sidebar`}>
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
