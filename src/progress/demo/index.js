import React from 'react';
import DemoBlock from 'docs/mobileComponents/DemoBlock';
import { Row, Col } from '../../grid';
import Progress from '../Progress';
import Button from '../../button';
import './index.less';

export default class Demo extends React.PureComponent {
  state = {
    percent: 10,
  };

  add = () => {
    let percent = this.state.percent + 10;
    if (this.state.percent >= 100) {
      percent = 0;
    }
    this.setState({ percent });
  }

  subtraction = () => {
    let percent = this.state.percent - 10;
    if (this.state.percent <= 0) {
      percent = 100;
    }
    this.setState({ percent });
  }

  render() {
    const { percent } = this.state;
    return (
      <div className="progress-demo">
        <DemoBlock title="基本(line)" className="has-padding">
          <Progress percent={percent} />
        </DemoBlock>

        <DemoBlock title="hide百分比(line)" className="has-padding">
          <Progress percent={percent} showInfo={false} />
        </DemoBlock>

        <DemoBlock title="自定义颜色(line)" className="has-padding">
          <Progress percent={percent} color="#4b0" />
          <Progress percent={percent} color="#f44" />
        </DemoBlock>

        <DemoBlock title="基本(circle)" className="has-padding">
          <Progress type="circle" percent={percent} width={60} gapPosition="left" />
          <div style={{ marginLeft: 20, display: 'inline-block' }}>
            <Progress
              type="circle"
              percent={percent}
              width={80}
              color="#ff5500"
              gapPosition="bottom"
            />
          </div>
          <div style={{ marginLeft: 20, display: 'inline-block' }}>
            <Progress
              type="circle"
              percent={percent}
              width={90}
              format={pe => `${pe}小时`}
            />
          </div>
        </DemoBlock>

        <DemoBlock title="基本(circle-dashboard)" className="has-padding">
          <Progress type="dashboard" percent={percent} width={60} />
        </DemoBlock>
        <DemoBlock title="操作" className="has-padding">
          <Row>
            <Col span="10">
              <Button type="warning" onClick={this.subtraction}>减少</Button>
            </Col>
            <Col span="10" offset="4">
              <Button type="primary" onClick={this.add}>增加</Button>
            </Col>
          </Row>
        </DemoBlock>

      </div>
    );
  }
}
