/* eslint no-console: 0 */
import React from 'react';
import Rate from '../index';


function onChange(v) {
  console.log('selected star', v);
}

export default () => (
  <div>
    <Rate
      defaultValue={2.5}
      onChange={onChange}
      style={{ fontSize: 40 }}
      allowHalf
      allowClear={false}
    />
    <br />
    <Rate
      defaultValue={2.5}
      onChange={onChange}
      style={{ fontSize: 22, marginTop: 24 }}
      allowHalf
      character="$"
    />
    <br />
    <Rate
      defaultValue={2.5}
      onChange={onChange}
      style={{ fontSize: 22, marginTop: 24 }}
      allowHalf
      character="好"
    />
    <br />
    <Rate
      defaultValue={2}
      onChange={onChange}
      style={{ fontSize: 22, marginTop: 24 }}
      character="美"
    />
  </div>
);
