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
    const { docConfig } = this.props;
    return (
      <div className="panda-doc-nav" style={{ top, bottom: 0 }}>
        {
          docConfig['zh-CN'].nav.map((item, index) => (
            <div className="panda-doc-nav__item" key={index}>
              <a>{item.name}</a>
              {
                item.groups.map((group, gIndex) => (
                  <div key={gIndex}>
                    <div className="panda-doc-nav__group-title">{group.groupName}</div>
                    {
                      group.list.map(({ path, title }) => (
                        <div className="panda-doc-nav__subitem" key={path}>
                          <Link to={path}>{title}</Link>
                        </div>
                      ))
                    }
                  </div>))
              }
            </div>
          ))
        }
      </div>
    );
  }
}
