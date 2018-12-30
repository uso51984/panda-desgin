import React from 'react';
import TextareaItem from '../TextAreaItem';

export default class Demo extends React.Component {
  render() {
    return (
      <div>
        <TextareaItem
          placeholder="请输入描述"
        />
        <TextareaItem
          label="地址"
          rows={3}
          placeholder="请输入地址"
        />

        <TextareaItem
          label="受控组件"
          value="受控组件的值"
          placeholder="controlled"
        />
        <TextareaItem
          label="非受控组件"
          placeholder="please input content"
        />
        <TextareaItem
          label="高度自适应"
          autoHeight
          rows={2}
        />
        <TextareaItem
          clear
          label="标题"
          placeholder="显示clear按钮"
        />
        <TextareaItem
          label={<img src="https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png" style={{ width: '28px', height: '28px' }} alt="" />}
          placeholder="title can be customized"
        />
        <TextareaItem
          defaultValue="计数功能,我的意见是..."
          placeholder="can enter up to 10 characters"
          rows={5}
          count={100}
        />

        <TextareaItem
          label="error"
          error
          defaultValue="has error"
        />

        <TextareaItem
          label="readOnly"
          readOnly
          defaultValue="只读"
        />

        <TextareaItem
          value="禁用"
          label="姓名"
          disabled
        />
      </div>
    );
  }
}
