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
          <Carousel autoplay={1000}>
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
