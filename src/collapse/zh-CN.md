## Collapse 折叠面板
### 代码演示

#### 基础用法
可以通过`defaultActiveKey`、`activeKey`控制展开的面板列表，`Pannel`key默认值是索引字符串

```jsx
<Collapse defaultActiveKey="0">
  <Panel header="微商城" >
    提供多样店铺模板，快速搭建网上商城
  </Panel>
  <Panel header="零售">
    网店吸粉获客、会员分层营销、一机多种收款，告别经营低效和客户流失
  </Panel>
  <Panel header="美业" disabled>
    线上拓客，随时预约，贴心顺手的开单收银
  </Panel>
</Collapse>
```

#### 手风琴
通过`accordion`可以设置为手风琴模式，最多展开一个面板

```jsx
<Collapse
  accordion
  className="demo-collapse"
>
  <Panel
    header={<span className="demo-collapse-header">微商城 <Icon type="check-circle-o" /></span>}
    key="1"
  >
    提供多样店铺模板，快速搭建网上商城
  </Panel>
  <Panel header="零售" key="2">
    网店吸粉获客、会员分层营销、一机多种收款，告别经营低效和客户流失
  </Panel>
  <Panel header="美业" key="3" disabled>
    线上拓客，随时预约，贴心顺手的开单收银
  </Panel>
</Collapse>
```

#### 受控组件

```jsx
<Collapse activeKey=["1"]>
  <Panel header="微商城" >
    提供多样店铺模板，快速搭建网上商城
  </Panel>
  <Panel header="零售">
    网店吸粉获客、会员分层营销、一机多种收款，告别经营低效和客户流失
  </Panel>
  <Panel header="美业" disabled>
    线上拓客，随时预约，贴心顺手的开单收银
  </Panel>
</Collapse>
```



### Collapse API

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| activeKey        | 当前激活 tab 面板的 key| Array/String   | 默认无，accordion模式下默认第一个元素|
| defaultActiveKey | 初始化选中面板的 key | String   | 无 |
| onChange      |   切换面板的回调   | (key: string): void |  noop  |
| accordion    | `手风琴`模式 | Boolean | false  |
| openAnimation  |  设置自定义切换动画，禁止动画可设为`{}` | Object | 参考 openAnimationFactory.js 文件  |

### Collapse.Panel

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| key  | 对应 activeKey   | String          | 无     |
| header | 面板头内容 | React.Element or String | 无  |
