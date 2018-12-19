import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import getOffsetLeft from './util';
import Star from './Star';

export default class Rate extends React.Component {
  static defaultProps = {
    defaultValue: 0,
    count: 5,
    allowHalf: false,
    allowClear: true,
    style: {},
    prefixCls: 'panda-rate',
    onChange() {},
    character: '★',
    tabIndex: 0,
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

  componentDidMount() {
    if (this.props.autoFocus && !this.props.disabled) {
      this.focus();
    }
  }

  componentWillReceiveProps(nextProps) {
    if ('value' in nextProps) {
      let value = nextProps.value;
      if (value === undefined) {
        value = nextProps.defaultValue;
      }
      this.setState({
        value,
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
    return ReactDOM.findDOMNode(this.stars[index]);
  }

  getStarValue(index, x) {
    let value = index + 1;
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
      className, character } = this.props;
    const { value } = this.state;
    const stars = [];
    const disabledClass = disabled ? `${prefixCls}-disabled` : '';

    for (let index = 0; index < count; index++) {
      stars.push(<Star
        ref={this.saveRef(index)}
        index={index}
        count={count}
        disabled={disabled}
        prefixCls={`${prefixCls}-star`}
        allowHalf={allowHalf}
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
