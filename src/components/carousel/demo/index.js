import React from 'react';
import Carousel from '../index';

export default class App extends React.Component {
  state = {
    data: ['1', '2', '3'],
    imgHeight: 176,
  }
  componentDidMount() {
    // simulate img loading
    setTimeout(() => {
      this.setState({
        data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
      });
    }, 100);
  }
  render() {
    return (
      <div>
        <Carousel
          autoplay={false}
          wrapAround
        >
          {this.state.data.map(val => (
            <a
              key={val}
              href="http://www.alipay.com"
              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
            >
              <img
                src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
            </a>
          ))}
        </Carousel>
        <Carousel className="my-carousel"
          vertical
          withoutControls
          dragging={false}
          swiping={false}
          autoplay
          wrapAround
        >
          <div className="v-item">carousel 1</div>
          <div className="v-item">carousel 2</div>
          <div className="v-item">carousel 3</div>
        </Carousel>
      </div>

    );
  }
}
