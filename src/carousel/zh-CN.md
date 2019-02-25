## carousel 轮播

### 代码演示

```jsx
import React from 'react';
import DemoBlock from 'docs/mobileComponents/DemoBlock';
import Carousel from '../index';

export default class App extends React.Component {
  state = {
    data: ['1', '2', '3'],
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
      });
    }, 100);
  }
  render() {
    return (
      <div>
        <DemoBlock title="水平">
          <Carousel>
            {this.state.data.map(val => (
              <span
                key={val}
                style={{ display: 'inline-block', width: '100%' }}
              >
                <img
                  src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                  onDragStart={(e) => { e.preventDefault(); }}
                  alt=""
                  style={{ width: '100%', height: '100%', verticalAlign: 'top' }}
                />
              </span>
            ))}
          </Carousel>
        </DemoBlock>
        <DemoBlock title="数值">
          <Carousel vertical style={{ height: 170 }}>
            {this.state.data.map(val => (
              <a
                key={val}
                style={{ display: 'inline-block', width: '100%', height: '100%' }}
              >
                <img
                  src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                  onDragStart={(e) => { e.preventDefault(); }}
                  alt=""
                  style={{ width: '100%', height: '100%', verticalAlign: 'top' }}
                />
              </a>
            ))}
          </Carousel>
        </DemoBlock>
        <DemoBlock title="竖向流动文字">
          <Carousel className="my-carousel"
            style={{ height: 20 }}
            vertical
            autoplay={2000}

            showIndicators={false}
            height={20}
          >
            <div className="v-item">carousel 1</div>
            <div className="v-item">carousel 2</div>
            <div className="v-item">carousel 3</div>
          </Carousel>
        </DemoBlock>
      </div>
    );
  }
}

```

### API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| autoplay | 自动轮播间隔，单位为 ms | `Number` | - | - |
| duration | 动画时长，单位为 ms | `Number` | `500` | - |
| initialSwipe | 初始位置索引值 | `Number` | `0` | - |
| loop | 是否开启循环播放 | `Boolean` | `true` | - |
| showIndicators | 是否显示指示器 | `Boolean` | `true` | - |
| vertical | 是否为纵向滚动 | `Boolean` | `false` | 1.1.1 |
| touchable | 是否可以通过手势滑动 | `Boolean` | `true` | 1.1.1 |
| width | 滑块宽度 | `Number` | `0` | 1.2.1 |
| height | 滑块高度 | `Number` | `0` | 1.2.1 |