import React from 'react';
import ReactDOM from 'react-dom';
import Dialog from './Dialog';

const IS_REACT_16 = !!ReactDOM.createPortal;

export default class DialogWrap extends React.Component {
  static defaultProps = {
    visible: false,
    prefixCls: 'panda-dialog',
    onClose() {},
  };

  componentDidMount() {
    if (this.props.visible) {
      this.componentDidUpdate();
    }
  }

  componentWillUnmount() {
    if (this.props.visible) {
      /* istanbul ignore if */
      if (!IS_REACT_16) {
        this.renderDialog(false);
      } else {
        this.removeContainer();
      }
    } else {
      this.removeContainer();
    }
  }

  componentDidUpdate() {
    /* istanbul ignore if */
    if (!IS_REACT_16) {
      this.renderDialog(this.props.visible);
    }
  }

  shouldComponentUpdate({ visible }) {
    return !!(this.props.visible || visible);
  }

  saveRef = (node) => {
    /* istanbul ignore else */
    if (IS_REACT_16) {
      this.component = node;
    }
  }

  getComponent = (visible) => {
    const props = { ...this.props };
    ['visible', 'onAnimateLeave'].forEach((key) => {
      delete props[key];
    });
    return (
      <Dialog {...props} visible={visible} onAnimateLeave={this.removeContainer} ref={this.saveRef} />
    );
  }

  removeContainer = () => {
    if (this.container) {
      /* istanbul ignore if */
      if (!IS_REACT_16) {
        ReactDOM.unmountComponentAtNode(this.container);
      }
      this.container.parentNode.removeChild(this.container);
      this.container = null;
    }
  }

  getContainer = () => {
    if (!this.container) {
      const container = document.createElement('div');
      const containerId = `${this.props.prefixCls}-container-${(new Date().getTime())}`;
      container.setAttribute('id', containerId);
      document.body.appendChild(container);
      this.container = container;
    }
    return this.container;
  }

  renderDialog(visible) {
    /* istanbul ignore next */
    ReactDOM.unstable_renderSubtreeIntoContainer(
      this,
      this.getComponent(visible),
      this.getContainer(),
    );
  }

  render() {
    const { visible } = this.props;
    if (IS_REACT_16 && (visible || this.component)) {
      return ReactDOM.createPortal(this.getComponent(visible), this.getContainer());
    }
    return null;
  }
}
