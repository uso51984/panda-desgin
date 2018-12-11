## 单选框 Radio

#### 基础用法
```javascript
function onChange(e) {
  console.log('Checkbox checked:', (e.target.checked));
}
```
#### 禁用状态
```jsx
<Radio
  onChange={onChange}
  disabled
>
  单选框
</Radio>
<Radio
  defaultChecked
  onChange={onChange}
  disabled
>
  单选框
</Radio>
```
#### 自定义样式
```jsx
<Radio
  defaultChecked
  className="selected-red"
  onChange={onChange}
>
  单选框
</Radio>
```
#### 单选框组

```javascript
function groupChange(e) {
  console.log('groupChange checked:', (e.target.value));
}
```
```jsx
const optionsWithDisabled = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange', disabled: true },
];
<RadioGroup
  name="test"
  options={optionsWithDisabled}
  defaultValue="Pear"
  onChange={groupChange}
/>
```

## API

### Radio

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| checked | 指定当前是否选中 | boolean | false |
| defaultChecked | 初始是否选中 | boolean | false |

### RadioGroup

单选框组合，用于包裹一组 `Radio`。

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| defaultValue | 默认选中的值 | any | 无 |
| name | RadioGroup 下所有 `input[type="radio"]` 的 `name` 属性 | string | 无 |
| options | 以配置形式设置子元素 | `Array` `{ label: string value: string disabled: boolean` } | 无 |
| value | 用于设置当前选中的值 | any | 无 |
| onChange | 选项变化时的回调函数 | Function(e:Event) | 无 |
