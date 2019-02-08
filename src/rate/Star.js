import React from 'react';

export default class Star extends React.Component {
  onClick = (e) => {
    const { onClick, index } = this.props;
    onClick(e, index);
  }

  getClassName() {
    const { prefixCls, index, value, allowHalf } = this.props;
    const starValue = index + 1;
    let className = prefixCls;
    if (allowHalf && value + 0.5 === starValue) {
      className += ` ${prefixCls}--half ${prefixCls}--active`;
    } else {
      className += starValue <= value ? ` ${prefixCls}--full` : ` ${prefixCls}--zero`;
    }
    return className;
  }


  render() {
    const { onClick } = this;
    const { disabled, prefixCls, character } = this.props;

    return (
      <li
        className={this.getClassName()}
        onClick={disabled ? null : onClick}
      >
        <div className={`${prefixCls}-first`}>{character}</div>
        <div className={`${prefixCls}-second`}>{character}</div>
      </li>
    );
  }
}
