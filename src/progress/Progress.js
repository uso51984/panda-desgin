import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import CircleProgress from './CircleProgress';

const propTypes = {
  prefixCls: PropTypes.string,
  type: PropTypes.oneOf(['line', 'circle', 'dashboard']),
  width: PropTypes.number,
  strokeWidth: PropTypes.number,
  percent: PropTypes.number,
  gapDegree: PropTypes.number,
  showInfo: PropTypes.bool,
  trailColor: PropTypes.string,
  format: PropTypes.func,
};

export default class Progress extends React.PureComponent {
  static propTypes = propTypes

  static defaultProps = {
    prefixCls: 'panda-progress',
    type: 'line',
    percent: 0,
    gapDegree: 0,
    showInfo: true,
    trailColor: '#f3f3f3',
  };

  getProgressInfoNode() {
    const { prefixCls, percent, format, showInfo } = this.props;
    if (!showInfo) {
      return null;
    }

    const textFormatter = format || (percentNumber => `${percentNumber}%`);
    return <span className={`${prefixCls}-text`}>{textFormatter(percent)}</span>;
  }

  getLineNode() {
    const { percent, strokeWidth, prefixCls, color } = this.props;
    const percentStyle = {
      width: `${percent}%`,
      height: strokeWidth || 8,
    };
    if (color) {
      percentStyle.backgroundColor = color;
    }

    return (
      <div>
        <div className={`${prefixCls}-outer`}>
          <div className={`${prefixCls}-inner`}>
            <div className={`${prefixCls}-bg`} style={percentStyle} />
          </div>
        </div>
        {this.getProgressInfoNode()}
      </div>
    );
  }

  getCircleNode() {
    const { prefixCls, percent, width, strokeWidth, gapPosition,
      trailColor, gapDegree, type, color } = this.props;
    const circleSize = width || 120;
    const circleStyle = {
      width: circleSize,
      height: circleSize,
      fontSize: (circleSize * 0.15) + 6,
    };
    const circleWidth = strokeWidth || 6;
    const gapPos = gapPosition || (type === 'dashboard' && 'bottom') || 'top';
    const gapDeg = gapDegree || (type === 'dashboard' ? 75 : 0);

    return (
      <div className={`${prefixCls}-inner`} style={circleStyle}>
        <CircleProgress
          percent={percent}
          strokeWidth={circleWidth}
          trailWidth={circleWidth}
          strokeColor={color}
          trailColor={trailColor}
          prefixCls={prefixCls}
          gapDegree={gapDeg}
          gapPosition={gapPos}
        />
        {this.getProgressInfoNode()}
      </div>
    );
  }

  render() {
    const props = this.props;
    const { prefixCls, className, type, showInfo } = props;
    const classString = classNames(prefixCls, {
      [`${prefixCls}-${(type === 'dashboard' && 'circle') || type}`]: true,
      [`${prefixCls}-show-info`]: showInfo,
    }, className);

    return (
      <div className={classString}>
        {type === 'line' ?
          this.getLineNode()
          :
          this.getCircleNode()
        }
      </div>
    );
  }
}
