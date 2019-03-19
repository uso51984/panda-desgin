import React from 'react';
import { restTimeFunc } from './utils';

export default class Countdown extends React.PureComponent {
  static defaultProps = {
    paused: true,
    showDays: true,
    showPlainText: false,
    interval: 1000,
    startTime: Date.now(),
    endTime: Date.now(),
  }

  constructor(props) {
    super(props);
    this.state = {
      restTime: this.formatTime(0),
      p: 0,
      _curr: 0,
    };
  }

  componentDidMount() {
    const { interval, startTime, endTime, paused, onChange } = this.props;
    const { p } = this.state;
    const currunt = Date.now();
    const start = new Date(startTime).getTime();
    const end = new Date(endTime).getTime();
    const diffTime = currunt - start;

    this.setState({ restTime: this.formatTime(end - (start + diffTime)) });

    this.timer = setInterval(() => {
      if (paused) {
        let restTime = end - (new Date().getTime() - p + diffTime);
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

  getPlainText() {
    const { d, h, m, s } = this.state.resttime;
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

  render() {
    const { showPlainText, showDays } = this.props;
    const { restTime } = this.state;

    return (
      <div>
        {showPlainText && <span className="panda-cd-timer">{this.getPlainText()}</span>}
        {restTime.d > 0 && showDays && [
          <span className="panda-cd-block" key="day">{restTime.d}</span>,
          <span className="panda-cd-dot" key="day-label">天</span>,
        ]}
        <span className="panda-cd-block">{restTime.h}</span>
        <span className="panda-cd-dot">:</span>
        <span className="panda-cd-block">{restTime.m}</span>
        <span className="panda-cd-dot">:</span>
        <span className="panda-cd-block">{restTime.s}</span>
      </div>
    );
  }
}
