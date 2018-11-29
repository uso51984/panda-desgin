import React from 'react';
import classNames from 'classnames';

export default class Simulator extends React.Component {
  state = {
    isFixed: false,
    iframeHostName: '',
    height: Math.min(580, window.innerHeight - 150),
  }

  componentDidMount() {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 60) {
        this.setState({ isFixed: true });
      } else {
        this.setState({ isFixed: false });
      }
    });
    window.addEventListener('resize', () => {
      this.setState({ height: Math.min(580, window.innerHeight - 150) });
    });

    // const { iframe } = this.$refs;
    // if (iframe) {
    //   if (iframe.contentDocument.readyState === 'complete') {
    //     setTimeout(this.onSrcChanged, 0);
    //   } else {
    //     iframe.onload = () => {
    //       this.onSrcChanged();
    //     };
    //   }
    // }
  }

  render() {
    const cls = classNames({
      'panda-doc-simulator': true,
      'panda-doc-simulator-fixed': this.state.isFixed,
    });
    return (
      <div className={cls} >
        <div className="panda-doc-simulator__nav">
          <div className="panda-doc-simulator__url">iframeHostName</div>
          <div className="panda-doc-simulator__reload" />
        </div>
        <iframe ref="iframe" src='https://h5.m.taobao.com/' style={{ height: this.state.height }} frameBorder="0" />
      </div>
    );
  }
}
