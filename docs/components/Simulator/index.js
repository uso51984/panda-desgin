import React from 'react';
import classNames from 'classnames';

export default class Simulator extends React.PureComponent {
  state = {
    isFixed: false,
    src: this.props.path,
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
  }

  componentWillReceiveProps({ path }) {
    this.setState({ src: path });
  }

  render() {
    const cls = classNames({
      'panda-doc-simulator': true,
      'panda-doc-simulator-fixed': this.state.isFixed,
    });
    return (
      <div className={cls} >
        <div className="panda-doc-simulator__nav">
          <div className="panda-doc-simulator__url">{this.state.src}</div>
          <div className="panda-doc-simulator__reload" />
        </div>
        <iframe title="mobile" ref={el => this.iframe = el} src={this.state.src} style={{ height: this.state.height }} frameBorder="0" />
      </div>
    );
  }
}
