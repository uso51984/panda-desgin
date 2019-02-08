## grid 栅格

提供了`Row`和`Col`两个组件来进行行列布局

### 代码演示

#### 基本用法

grid 组件提供了`24列栅格`，通过在`Col`上添加`span`属性设置列所占的宽度百分比
此外，添加`offset`属性可以设置列的偏移宽度，计算方式与 span 相同

```jsx
<Row>
  <Col span="6">span: 8</Col>
  <Col span="6">span: 8</Col>
  <Col span="6">span: 8</Col>
  <Col span="6">span: 8</Col>
</Row>
<Row>
  <Col span="4">span: 4</Col>
  <Col span="10" offset="4">offset: 4, span: 10</Col>
</Row>
<Row>
  <Col offset="12" span="12">offset: 12, span: 12</Col>
</Row>
```

#### 设置列元素间距

通过`gutter`属性可以设置列元素之间的间距，默认间距为 0

```jsx
<Row gutter="15">
  <Col span="6">span: 8</Col>
  <Col span="6">span: 8</Col>
  <Col span="6">span: 8</Col>
  <Col span="6">span: 8</Col>
</Row>
```

#### Flex 布局

将 `type` 属性设置为 flex 可以启用 flex 布局，便于进行灵活的对齐

```jsx
<!-- 左对齐 -->
<Row type="flex">
  <Col span="6">span: 6</Col>
  <Col span="6">span: 6</Col>
  <Col span="6">span: 6</Col>
</Row>

<!-- 居中 -->
<Row type="flex" justify="center">
  <Col span="6">span: 6</Col>
  <Col span="6">span: 6</Col>
  <Col span="6">span: 6</Col>
</Row>

<!-- 右对齐 -->
<Row type="flex" justify="end">
  <Col span="6">span: 6</Col>
  <Col span="6">span: 6</Col>
  <Col span="6">span: 6</Col>
</Row>

<!-- 两端对齐 -->
<Row type="flex" justify="space-between">
  <Col span="6">span: 6</Col>
  <Col span="6">span: 6</Col>
  <Col span="6">span: 6</Col>
</Row>

<!-- 每个元素的两侧间隔相等 -->
<Row type="flex" justify="space-around">
  <Col span="6">span: 6</Col>
  <Col span="6">span: 6</Col>
  <Col span="6">span: 6</Col>
</Row>
```

### API

#### Row

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| type | 布局方式，可选值为`flex` | `String` | - | 1.1.9 |
| gutter | 列元素之间的间距（单位为px） | `String | Number` | - | - |
| tag | 自定义元素标签 | `String` | `div` | - |
| justify | Flex 主轴对齐方式，可选值为 `end` `center` <br> `space-around` `space-between` | `String` | `start` | 1.1.9  |
| align | Flex 交叉轴对齐方式，可选值为 `center` `bottom` | `String` | `top` | 1.1.9 |

#### Col

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| span | 列元素宽度 | `String | Number` | - | - |
| offset | 列元素偏移距离 | `String | Number` | - | - |
| tag | 自定义元素标签 | `String` | `div` | - |
