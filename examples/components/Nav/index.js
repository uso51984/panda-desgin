import React from 'react';
import { Link } from 'react-router-dom';

export default class Nav extends React.Component {
  state = {
    top: 60,
    bottom: 0,
  }
  componentDidMount() {
    window.addEventListener('scroll', this.onScroll);
    this.onScroll();
  }

  onScroll = () => {
    const { pageYOffset: offset } = window;
    this.setState({ top: Math.max(0, 60 - offset) });
  }


  render() {
    const { top } = this.state;
    return (
      <div className="panda-doc-nav" style={{ top, bottom: 0 }}>
        {
          [1, 2, 2, 3, 4, 5, 34, 3].map((item, index) => (
            <div className="panda-doc-nav__item" key={index}>
              <a>组件</a>
              <div>
                <div className="panda-doc-nav__group-title">基础组件</div>
                <div>
                  <div className="panda-doc-nav__subitem">
                    <Link to="/button"> Button <span>按钮</span></Link>
                  </div>
                  <div className="panda-doc-nav__subitem">
                    <Link to="/alert">Alert <span>单元格</span></Link>
                  </div>
                  <div className="panda-doc-nav__subitem">
                    <a href="#/zh-CN/icon" className="">
                      Icon <span>图标</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    );
  }
}
