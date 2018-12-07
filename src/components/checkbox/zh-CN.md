## Checkbox 复选框

### 代码演示

#### 基础用法

```javascript
function onChange(e) {
  console.log('Checkbox checked:', (e.target.checked));
}
```

```jsx
<DemoBlock title="基础用法" className="has-padding">
  <Checkbox
    checked
    onChange={onChange}
  >
    复选框(受控)
  </Checkbox>
  <br />
  <Checkbox
    defaultChecked
    onChange={onChange}
  >
    复选框(非受控)
  </Checkbox>
```

#### 禁用状态

```jsx
<Checkbox
  onChange={onChange}
  disabled
>
  复选框
</Checkbox>

<Checkbox
  defaultChecked
  onChange={onChange}
  disabled
>
  复选框
</Checkbox>
```

#### 自定义class
```jsx
<Checkbox
  defaultChecked
  className="selected-green"
  onChange={onChange}
>
  复选框
</Checkbox>
```

#### 复选框组
```javascript
function groupChange(value) {
  console.log('groupChange checked:', (value));
}
```

```jsx
const optionsWithDisabled = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange', disabled: true },
];
<CheckboxGroup
  options={optionsWithDisabled}
  defaultValue={['Apple']}
  onChange={groupChange}
/>
```
> CheckboxGroup onChange返回为一个数组

#### 搭配单元格组件使用

此时你需要再引入`Cell`

```jsx
<Cell
  title="单元格"
  onClick={() => { this.setState({ value: !this.state.value }); }}
  value={<Checkbox checked={this.state.value} />}
  />
```

### API
#### Checkbox

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| checked | 指定当前是否选中 | Boolean | false |
| defaultChecked | 初始是否选中 | Boolean | false |
| onChange | 变化时回调函数 | Function(e:Event) | - |
| disabled | 禁用 | Boolean | - |

#### Checkbox Group

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| defaultValue | 默认选中的选项 | string [] | [] |
| options | 指定可选项 | string [] | [] |
| value | 指定选中的选项 | string [] | [] |
| onChange | 变化时回调函数 | Function(checkedValue) | - |
| disabled | 禁用 | Boolean | - |

### 方法

### Checkbox

| 名称 | 描述 |
| --- | --- |
| blur() | 移除焦点 |
| focus() | 获取焦点 |
