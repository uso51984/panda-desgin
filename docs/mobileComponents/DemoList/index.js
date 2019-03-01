import React from 'react';
import { Cell } from 'src/cell';
import Collapse from 'src/collapse';
import DocConfig from '../../doc.config';

export default class DemoList extends React.PureComponent {
  handleClick({ path }) {
    this.props.history.push(path);
  }

  render() {
    return (
      <div className="side-nav">
        <h1 className="panda-title">
          <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K" alt="" />
          <span>panda</span>
        </h1>
        <h2 className="panda-desc">轻量、可靠的移动端 react 组件库</h2>
        <Collapse>
          {
          DocConfig['zh-CN'].nav[1].groups.map((item, index) => (
            <Collapse.Panel key={index} header={item.groupName}>
              {
                  item.list.map((listItem, Lindex) => (
                    <Cell key={Lindex} title={listItem.title} onClick={() => { this.handleClick(listItem); }} arrow="right" />
                  ))
                }
            </Collapse.Panel>
          ))
          }
        </Collapse>

      </div>
    );
  }
}
