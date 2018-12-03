import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

class PanelContent extends React.PureComponent {
  render() {
    const { prefixCls, isActive, children, destroyInactivePanel } = this.props;
    const contentCls = classnames({
      [`${prefixCls}-content`]: true,
      [`${prefixCls}-content-active`]: isActive,
      [`${prefixCls}-content-inactive`]: !isActive,
    });

    return (
      <div
        className={contentCls}
      >
        {
          !isActive && destroyInactivePanel ? null :
          <div className={`${prefixCls}-content-box`}>{children}</div>
        }
      </div>
    );
  }
}

PanelContent.propTypes = {
  prefixCls: PropTypes.string,
  isActive: PropTypes.bool,
  children: PropTypes.any,
  destroyInactivePanel: PropTypes.bool,
};

export default PanelContent;
