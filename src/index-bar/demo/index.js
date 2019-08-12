import React from 'react';
import { Cell } from '../../cell';
import IndexAnchor from '../indexAnchor';
import IndexBar from '../index';
import './index.less';

const indexList = [];
const charCodeOfA = 'A'.charCodeAt(0);
for (let i = 0; i < 26; i++) {
  indexList.push(String.fromCharCode(charCodeOfA + i));
}

const dataTwo = [];
for (let i = 0; i < 15; i += 1) {
  dataTwo.push(i);
}

export default () => (
  <div className="index-bar-demo">
    <IndexBar indexList={indexList}>
      {
        indexList.map((text, index) => (
          <IndexAnchor text={text} key={`${text}-${index}`}>
            {dataTwo.map(cIndex => (<Cell key={cIndex} title="单元格" />))}
          </IndexAnchor>
        ))
      }
    </IndexBar>
  </div>
);
