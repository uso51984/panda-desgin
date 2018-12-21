import React from 'react';
import TextareaItem from '../TextAreaItem';

export default class Demo extends React.Component {
  render() {
    return (
      <div>
        <TextareaItem
          title="标题"
          placeholder="auto focus in Alipay client"
          data-seed="logId"
          ref={el => this.autoFocusInst = el}
          autoHeight
        />
        <TextareaItem
          title="标题"
          placeholder="click the button below to focus"
          data-seed="logId"
          autoHeight
          ref={el => this.customFocusInst = el}
        />

        <TextareaItem
          title="受控组件"
          placeholder="controlled"
        />
        <TextareaItem
          title="非受控组件"
          placeholder="please input content"
          clear
        />
        <TextareaItem
          title="高度自适应"
          autoHeight
          labelNumber={5}
        />
        <TextareaItem
          rows={3}
          placeholder="fixed number of lines"
        />
        <TextareaItem
          clear
          title="标题"
          placeholder="displayed clear while typing"
        />
        <TextareaItem
          title={<img src="https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png" style={{ width: '28px', height: '28px' }} alt="" />}
          placeholder="title can be customized"
        />
        <TextareaItem
          defaultValue="计数功能,我的意见是..."
          placeholder="can enter up to 10 characters"
          rows={5}
          count={100}
        />

        <TextareaItem
          title="姓名"
          editable={false}
        />

        <TextareaItem
          value="disabled style"
          title="姓名"
          disabled
        />
      </div>
    );
  }
}
