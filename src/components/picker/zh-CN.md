## Picker 选择器

### 代码演示

#### 单列
```jsx

onOk = (value) => {
  this.setState({
    inputValue:[value[0]],
  });
}

const district = [
  [
    {
      label: '2013',
      value: '2013',
    },
    {
      label: '2014',
      value: '2014',
    },
  ],
];
return (
  <div>
    <DemoBlock title="基本用法" className="has-padding">
      <Picker
        className="fortest"
        data={district}
        cols={1}
        title="Picker"
        disabled={this.state.disabled}
        onDismiss={this.onDismiss}
        onOk={this.onOk}
      >
        <InputItem
          label="年份"
          readOnly
          value={this.state.inputValue}
          placeholder="请输入年龄"
        />
      </Picker>
```

## API

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| data  | 数据源     | `Array<{value, label}>` / `Array<Array<{value, label}>>` | -   |
| value  | 值, 格式是`[value1, value2, value3]`, 对应数据源的相应级层 value  | Array  | -   |
| cols     | 列数    | Number | `3` |
| onChange | 选中后的回调| (val): void      | -   |
| prefixCls    | prefix class         | string | am-picker     |
| pickerPrefixCls  | picker prefix class  | string | am-picker-col |
| itemStyle| 每列样式   | Object | -   |
| indicatorStyle  | indicator 样式  | Object | -  |
