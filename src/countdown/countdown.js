import React from 'react';
import { restTimeFunc } from './utils';

export default class Countdown extends React.PureComponent {
  static defaultProps = {
    paused: false,
    showDays: true,
    showPlainText: false,
    interval: 1000,
    startTime: Date.now(),
    endTime: Date.now(),
    onChange() {},
  }

  constructor(props) {
    super(props);
    this.state = {
      restTime: this.formatTime(0),
    };

    this.p = 0;
    this._curr = 0;
  }

  componentDidMount() {
    const { interval, startTime, endTime, onChange } = this.props;
    const currunt = Date.now();
    const start = new Date(startTime).getTime();
    const end = new Date(endTime).getTime();
    const diffTime = currunt - start;

    this.setState({ restTime: this.formatTime(end - (start + diffTime)) });

    this.timer = setInterval(() => {
      if (!this.props.paused) {
        let restTime = end - (new Date().getTime() - this.p + diffTime);
        restTime -= 1000;
        this.setState({ restTime: this.formatTime(restTime) }, () => {
          onChange(this.formatTime(restTime), restTime);
        });

        if (restTime < 0) {
          this.setState({ restTime: this.formatTime(0) }, () => {
            onChange(this.formatTime(restTime), restTime);
          });
          clearInterval(this.timer);
        }
      }
    }, interval);
  }

  componentWillReceiveProps() {
    if (!this.props.paused) {
      this._curr = Date.now();
    } else {
      this.p += (Date.now() - this._curr);
    }
  }

  getPlainText() {
    const { d, h, m, s } = this.state.restTime;
    const { showDays } = this.props;

    return `${d > 0 && showDays ? `${d}天${h}` : h}小时${m}分${s}秒`;
  }

  formatTime(time) {
    const { showDays } = this.props;
    const rest = restTimeFunc(time);
    const { d } = rest;

    if (!showDays && d > 0) {
      rest.h = Number(rest.h) + d * 24;
      rest.d = 0;
    }
    return rest;
  }

  renderDefaultTime() {
    const { restTime } = this.state;
    const { showDays } = this.props;
    return (
      <React.Fragment>
        {restTime.d > 0 && showDays && [
          <span className="panda-cd-block" key="day">{restTime.d}</span>,
          <span className="panda-cd-dot" key="day-label">天</span>,
        ]}
        <span className="panda-cd-block">{restTime.h}</span>
        <span className="panda-cd-dot">:</span>
        <span className="panda-cd-block">{restTime.m}</span>
        <span className="panda-cd-dot">:</span>
        <span className="panda-cd-block">{restTime.s}</span>
      </React.Fragment>
    );
  }

  render() {
    const { showPlainText } = this.props;
    return (
      <div>
        {showPlainText ?
          <span className="panda-cd-timer">{this.getPlainText()}</span>
          :
          this.renderDefaultTime()
        }
      </div>
    );
  }
}
