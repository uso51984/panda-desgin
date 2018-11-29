import React from 'react';

export default () => (
  <div className="panda-doc-content">
    <div className="van-doc-content van-doc-content--button">
      <section>
        <h2>Button 按钮</h2>
        <h3>API</h3>
        <table>
          <thead>
            <tr>
              <th>参数</th>
              <th>说明</th>
              <th>类型</th>
              <th>默认值</th>
              <th>版本</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>type</td>
              <td>类型，可选值为 <code>primary</code> <code>warning</code> <code>danger</code></td>
              <td><code>String</code></td>
              <td><code>default</code></td>
              <td>-</td>
            </tr>
            <tr>
              <td>size</td>
              <td>尺寸，可选值为 <code>large</code> <code>small</code> <code>mini</code></td>
              <td><code>String</code></td>
              <td><code>normal</code></td>
              <td>-</td>
            </tr>
            <tr>
              <td>text</td>
              <td>文字</td>
              <td><code>String</code></td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td>tag</td>
              <td>HTML 标签</td>
              <td><code>String</code></td>
              <td><code>button</code></td>
              <td>-</td>
            </tr>
            <tr>
              <td>native-type</td>
              <td>原生 type 属性</td>
              <td><code>String</code></td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td>disabled</td>
              <td>是否禁用按钮</td>
              <td><code>Boolean</code></td>
              <td><code>false</code></td>
              <td>-</td>
            </tr>
            <tr>
              <td>loading</td>
              <td>是否显示为加载状态</td>
              <td><code>Boolean</code></td>
              <td><code>false</code></td>
              <td>-</td>
            </tr>
            <tr>
              <td>block</td>
              <td>是否为块级元素</td>
              <td><code>Boolean</code></td>
              <td><code>false</code></td>
              <td>-</td>
            </tr>
            <tr>
              <td>plain</td>
              <td>是否为朴素按钮</td>
              <td><code>Boolean</code></td>
              <td><code>false</code></td>
              <td>1.1.13</td>
            </tr>
            <tr>
              <td>square</td>
              <td>是否为方形按钮</td>
              <td><code>Boolean</code></td>
              <td><code>false</code></td>
              <td>1.2.0</td>
            </tr>
            <tr>
              <td>round</td>
              <td>是否为圆形按钮</td>
              <td><code>Boolean</code></td>
              <td><code>false</code></td>
              <td>1.3.4</td>
            </tr>
          </tbody>
        </table>
        <h3>Event</h3>
        <table>
          <thead>
            <tr>
              <th>事件名</th>
              <th>说明</th>
              <th>参数</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>click</td>
              <td>点击按钮且按钮状态不为加载或禁用时触发</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>
      </section>
      <div className="van-doc-footer-nav">
        <div className="van-doc-footer-nav__link van-doc-footer-nav__left">
          <div className="van-doc-footer-nav__arrow-left" />
          <span>国际化</span>
        </div>
        <div className="van-doc-footer-nav__link van-doc-footer-nav__right">
          <span>Cell 单元格</span>
          <div className="van-doc-footer-nav__arrow-right" />
        </div>
      </div>
    </div>
  </div>
);
