## Cell 单元格

### 代码演示

#### 基础用法

`Cell`可以单独使用，也可以与`CellGroup`搭配使用。`CellGroup`可以为`Cell`提供上下外边框。

```jsx
<CellGroup>
  <Cell title="单元格" value="内容" />
  <Cell title="单元格" value="内容" label="描述信息" />
</CellGroup>
```

#### 单元格大小

通过`size`属性可以控制单元格的大小

```jsx
<Cell title="单元格" value="内容" size="large" />
<Cell title="单元格" value="内容" size="large" label="描述信息" />
```

#### 展示图标

通过`icon`属性在标题左侧展示图标

```jsx
<Cell title="单元格" icon="location" />
```

#### 只设置 value

只设置`value`时会向左对齐

```jsx
<Cell value="内容" />
```

#### 展示箭头及点击反馈

传入`arrow`属性则会在右侧显示箭头，传入onClick会有点击反馈, `activeClass`属性自定义点击时候的class

```jsx
<Cell title="单元格" onClick={() => {}} arrow="right" />
<Cell title="单元格" onClick={() => { }} arrow="right" value="内容" />
<Cell title="单元格" onClick={() => { }} arrow="down" value="内容" />
```

### CellGroup API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| border | 是否显示外边框 | `Boolean` | `true` | - |

### Cell API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| icon | 左侧图标，可选值见 Icon 组件 | `String` | - | - |
| title | 左侧标题 | `String | number | React.Element` | - | - |
| desc | 标题下方的描述信息 | `String` | - | - |
| value | 右侧内容 | `String | number | React.Element` | - | - |
| size | 单元格大小，可选值为 `large` | `String` | - | 1.4.4 |
| border | 是否显示内边框 | `Boolean` | `true` | - |
| required | 是否显示表单必填星号 | `Boolean` | `false` | - |
| arrow | 箭头方向，可选值为 `left` `up` `down` `right` | `String` | - | 1.1.10 |

### Cell Event

| 事件名 | 说明 | 参数 |
|------|------|------|
| onClick | 点击单元格时触发 | - |
