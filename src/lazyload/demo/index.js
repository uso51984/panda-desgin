import React from 'react';
import Lazyload from '../Lazyload';
import './index.less';

export default class Image extends React.PureComponent {
  state = {}

  render() {
    return (
      <div className="wrapper">
        <div className="widget-list image-container">
          <Lazyload throttle={200} height={300}>
            <img alt="" src="http://ww3.sinaimg.cn/mw690/62aad664jw1f2nxvya0u2j20u01hc16p.jpg" />
          </Lazyload>
          <Lazyload throttle={200} height={300}>
            <img alt="" src="http://ww1.sinaimg.cn/mw690/62aad664jw1f2nxvyo52qj20u01hcqeq.jpg" />
          </Lazyload>
          <Lazyload throttle={200} height={300}>
            <img alt="" src="http://ww2.sinaimg.cn/mw690/62aad664jw1f2nxvz2cj6j20u01hck1o.jpg" />
          </Lazyload>
          <Lazyload throttle={200} height={300}>
            <img alt="" src="http://ww1.sinaimg.cn/mw690/62aad664jw1f2nxvzfjv6j20u01hc496.jpg" />
          </Lazyload>
          <Lazyload throttle={200} height={300}>
            <img alt="" src="http://ww1.sinaimg.cn/mw690/62aad664jw1f2nxw0e1mlj20u01hcgvs.jpg" />
          </Lazyload>
          <Lazyload throttle={200} height={300}>
            <img alt="" src="http://ww4.sinaimg.cn/mw690/62aad664jw1f2nxw0p95dj20u01hc7d8.jpg" />
          </Lazyload>
          <Lazyload throttle={200} height={300}>
            <img alt="" src="http://ww2.sinaimg.cn/mw690/62aad664jw1f2nxw134xqj20u01hcqjg.jpg" />
          </Lazyload>
          <Lazyload throttle={200} height={300}>
            <img alt="" src="http://ww1.sinaimg.cn/mw690/62aad664jw1f2nxw1kcykj20u01hcn9p.jpg" />
          </Lazyload>
        </div>
      </div>
    );
  }
}
