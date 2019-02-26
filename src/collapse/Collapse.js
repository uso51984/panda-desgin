import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import CollapsePanel from './Panel';
import openAnimation from './openAnimation';

const propTypes = {
  children: PropTypes.any,
  prefixCls: PropTypes.string,
  activeKey: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  defaultActiveKey: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  openAnimation: PropTypes.object,
  onChange: PropTypes.func,
  accordion: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object,
  destroyInactivePanel: PropTypes.bool,
  expandIcon: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
};

const toArray = activeKey => (Array.isArray(activeKey) ? activeKey : [activeKey]);

class Collapse extends React.Component {
  static propTypes = propTypes

  static defaultProps = {
    prefixCls: 'panda-collapse',
    onChange() {},
    accordion: false,
    destroyInactivePanel: false,
  }

  constructor(props) {
    super(props);

    const { activeKey, defaultActiveKey } = this.props;
    let currentActiveKey = defaultActiveKey;
    if ('activeKey' in this.props) {
      currentActiveKey = activeKey;
    }

    this.state = {
      openAnimation: this.props.openAnimation || openAnimation(this.props.prefixCls),
      activeKey: toArray(currentActiveKey),
    };
  }

  componentWillReceiveProps(nextProps) {
    if ('activeKey' in nextProps) {
      this.setState({
        activeKey: toArray(nextProps.activeKey),
      });
    }
    if ('openAnimation' in nextProps) {
      this.setState({
        openAnimation: nextProps.openAnimation,
      });
    }
  }

  onClickItem(key, disabled) {
    if (disabled) {
      return;
    }

    let activeKey = this.state.activeKey;
    if (this.props.accordion) {
      activeKey = activeKey[0] === key ? [] : [key];
    } else {
      activeKey = [...activeKey];
      const index = activeKey.indexOf(key);
      const isActive = index > -1;
      if (isActive) {
        activeKey.splice(index, 1);
      } else {
        activeKey.push(key);
      }
    }
    this.setActiveKey(activeKey);
  }

  getItems() {
    const activeKey = this.state.activeKey;
    const { prefixCls, accordion, destroyInactivePanel, expandIcon } = this.props;
    const newChildren = [];

    React.Children.forEach(this.props.children, (child, index) => {
      const key = child.key || String(index);
      const { disabled } = child.props;
      let isActive = false;

      if (accordion) {
        isActive = activeKey[0] === key;
      } else {
        isActive = activeKey.indexOf(key) > -1;
      }

      const props = {
        key,
        isActive,
        prefixCls,
        destroyInactivePanel,
        openAnimation: this.state.openAnimation,
        accordion,
        children: child.props.children,
        onItemClick: () => this.onClickItem(key, disabled),
        expandIcon,
      };

      newChildren.push(React.cloneElement(child, props));
    });

    return newChildren;
  }

  setActiveKey(activeKey) {
    if (!('activeKey' in this.props)) {
      this.setState({ activeKey });
    }
    this.props.onChange(this.props.accordion ? activeKey[0] : activeKey);
  }

  render() {
    const { prefixCls, className, style, accordion } = this.props;
    const cls = classNames({
      [prefixCls]: true,
      [className]: !!className,
    });
    return (
      <div className={cls} style={style} role={accordion ? 'tablist' : null}>
        {this.getItems()}
      </div>
    );
  }
}

Collapse.Panel = CollapsePanel;

export default Collapse;
