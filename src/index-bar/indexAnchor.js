import React from 'react';
import classNames from 'classnames';

export default class IndexAnchor extends React.PureComponent {
  static defaultProps = {
    sticky: true,
  }

  constructor(props) {
    super(props);

    this.state = {
      height: 'auto',
    };
  }

  componentDidMount() {
    this.setState({
      height: this.anchorEl.offsetHeight,
    });
  }

  saveAnchorEl = (el) => {
    this.anchorEl = el;
    this.props.getIndexAnchorEl(el);
  }

  render() {
    const { active, text, sticky, children } = this.props;
    const { height } = this.state;

    return (
      <div>
        <div
          ref={this.saveAnchorEl}
          style={{ height: sticky && height ? `${this.state.height}px` : null, zIndex: 1 }}
        >
          <div
            className={classNames('panda-index-bar-anchor', {
              'panda-index-bar-anchor--sticky': active,
              'panda-hairline--bottom': active,
            })}
          >
            {text}
          </div>
        </div>
        {children}
      </div>
    );
  }
}
