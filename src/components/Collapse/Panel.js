import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import PanelContent from './PanelContent';
import Animate from '../AnimationGroup';

class CollapsePanel extends React.Component {
  handleItemClick = () => {
    const { onItemClick } = this.props;

    if (onItemClick) {
      onItemClick();
    }
  }

  render() {
    const {
      className, style, prefixCls, header, children, isActive, showArrow,
      destroyInactivePanel, disabled, accordion, expandIcon,
    } = this.props;

    const itemCls = classNames({
      [`${prefixCls}-item`]: true,
      [`${prefixCls}-item-active`]: isActive,
      [`${prefixCls}-item-disabled`]: disabled,
    }, className);

    return (
      <div className={itemCls} style={style}>
        <div
          className={`${prefixCls}-header`}
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

CollapsePanel.propTypes = {
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
  expandIcon: PropTypes.func,
};

CollapsePanel.defaultProps = {
  showArrow: true,
  isActive: false,
  destroyInactivePanel: false,
  onItemClick() { },
  headerClass: '',
  forceRender: false,
};

export default CollapsePanel;
