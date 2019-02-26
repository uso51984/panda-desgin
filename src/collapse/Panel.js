import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import PanelContent from './PanelContent';
import Animate from '../AnimationGroup';

const propTypes = {
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
  children: PropTypes.any,
  openAnimation: PropTypes.object,
  prefixCls: PropTypes.string,
  header: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.node,
  ]),
  showArrow: PropTypes.bool,
  isActive: PropTypes.bool,
  onItemClick: PropTypes.func,
  style: PropTypes.object,
  destroyInactivePanel: PropTypes.bool,
  disabled: PropTypes.bool,
  accordion: PropTypes.bool,
  expandIcon: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
};

class CollapsePanel extends React.Component {
  static propTypes = propTypes

  static defaultProps = {
    showArrow: true,
    isActive: false,
    destroyInactivePanel: false,
    onItemClick() { },
  }

  handleItemClick = () => {
    this.props.onItemClick();
  }

  render() {
    const {
      className, style, prefixCls, header, children, isActive, showArrow,
      destroyInactivePanel, disabled, accordion, expandIcon,
    } = this.props;

    const itemCls = classNames({
      [`${prefixCls}__item`]: true,
      [`${prefixCls}__item--active`]: isActive,
      [`${prefixCls}__item--disabled`]: disabled,
    }, className);

    return (
      <div className={itemCls} style={style}>
        <div
          className={`${prefixCls}__item-header`}
          onClick={this.handleItemClick}
          role={accordion ? 'tab' : 'button'}
          aria-expanded={isActive}
        >
          {header}
          {showArrow && (expandIcon || <i className="arrow" />)}
        </div>
        <Animate
          showProp="isActive"
          exclusive
          component=""
          animation={this.props.openAnimation}
        >
          <PanelContent
            prefixCls={prefixCls}
            isActive={isActive}
            destroyInactivePanel={destroyInactivePanel}
          >
            {children}
          </PanelContent>
        </Animate>
      </div>
    );
  }
}

export default CollapsePanel;
