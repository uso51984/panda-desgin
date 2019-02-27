import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import getOffsetLeft from './util';
import Star from './Star';

const propTypes = {
  prefixCls: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
  defaultValue: PropTypes.number,
  count: PropTypes.number,
  allowHalf: PropTypes.bool,
  allowClear: PropTypes.bool,
  onChange: PropTypes.func,
  character: PropTypes.string,
  color: PropTypes.string,
};

export default class Rate extends React.Component {
  static propTypes = propTypes

  static defaultProps = {
    defaultValue: 0,
    count: 5,
    allowHalf: false,
    allowClear: true,
    style: {},
    prefixCls: 'panda-rate',
    onChange() {},
    character: '★',
  };

  constructor(props) {
    super(props);
    let value = props.value;
    if (value === undefined) {
      value = props.defaultValue;
    }

    this.stars = {};

    this.state = { value };
  }

  componentWillReceiveProps(nextProps) {
    if ('value' in nextProps) {
      this.setState({
        value: nextProps.value,
      });
    }
  }

  onClick = (event, index) => {
    const value = this.getStarValue(index, event.pageX);
    let isReset = false;
    if (this.props.allowClear) {
      isReset = value === this.state.value;
    }
    this.changeValue(isReset ? 0 : value);
  }

  getStarDOM(index) {
    /* istanbul ignore next */
    return ReactDOM.findDOMNode(this.stars[index]);
  }

  getStarValue(index, x) {
    let value = index + 1;
    /* istanbul ignore if */
    if (this.props.allowHalf) {
      const starEle = this.getStarDOM(index);
      const leftDis = getOffsetLeft(starEle);
      const width = starEle.clientWidth;
      if ((x - leftDis) < width / 2) {
        value -= 0.5;
      }
    }
    return value;
  }

  changeValue(value) {
    if (!('value' in this.props)) {
      this.setState({
        value,
      });
    }
    this.props.onChange(value);
  }

  saveRef = index => (node) => {
    this.stars[index] = node;
  }

  saveRate = (node) => {
    this.rate = node;
  }

  render() {
    const { count, allowHalf, style, prefixCls, disabled,
      className, character, color } = this.props;
    const { value } = this.state;
    const stars = [];
    const disabledClass = disabled ? `${prefixCls}--disabled` : '';

    for (let index = 0; index < count; index++) {
      stars.push(<Star
        ref={this.saveRef(index)}
        index={index}
        count={count}
        disabled={disabled}
        prefixCls={`${prefixCls}__star`}
        allowHalf={allowHalf}
        color={color}
        value={value}
        onClick={this.onClick}
        key={index}
        character={character}
      />);
    }
    return (
      <ul
        className={classNames(prefixCls, disabledClass, className)}
        style={style}
        ref={this.saveRate}
      >
        {stars}
      </ul>
    );
  }
}
