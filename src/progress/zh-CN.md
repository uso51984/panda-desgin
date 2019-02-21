## Progress 进度条

### 代码演示
```jsx
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
              <Button type="warning" onClick={this.subtraction} >减少</Button>
            </Col>
            <Col span="10" offset="4">
              <Button type="primary" onClick={this.add} >增加</Button>
            </Col>
          </Row>
        </DemoBlock>

      </div>
    );
  }
}
```

### API

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| format | 内容的模板函数 | function(percent) | percent => percent + '%' |
| gapDegree (type=circle) | 圆形进度条缺口角度，可取值 0 ~ 360 | number | 0 |
| gapPosition (type=circle) | 圆形进度条缺口位置 | Enum{ 'top', 'bottom', 'left', 'right' } | top |
| percent | 百分比 | number | 0 |
| showInfo | 是否显示进度数值或状态图标 | boolean | true |
| strokeWidth (type=line) | 进度条线的宽度，单位 px | number | 10 |
| strokeWidth (type=circle) | 圆形进度条线的宽度，单位是进度条画布宽度的百分比 | number | 6 |
| type | 类型，可选 line, circle, dashboard | string | line |
| width (type=circle) | 圆形进度条画布宽度，单位 px | number | 132 |
