## Picker 选择器

### 代码演示

#### 单列
```jsx

state = {
  items: this.getItems(count),
  value: `${count + (len / 2)}`,
};

onChange = (value) => {
  Toast.info(value, 1);
  this.setState({
    value,
  });
}

onScrollChange = (value) => {
  console.log('onScrollChange', value);
}

getItems(start) {
  const items = [];
  for (let i = start; i < start + len; i++) {
    items.push((
      <Picker.Item value={`${i}`} key={i}>
        {count} {i}
      </Picker.Item>
    ));
  }
  return items;
}

<Picker
  selectedValue={this.state.value}
  onValueChange={this.onChange}
  onScrollChange={this.onScrollChange}
>
  {this.state.items}
</Picker>
```

#### 多列
```jsx

state = {
  value: ['1', '11'],
};

onChange = (value) => {
  Toast.info(value, 1);
  this.setState({
    value,
  });
}

onScrollChange = (value) => {
  console.log('onScrollChange', value);
}

<MultiPicker
  selectedValue={this.state.value}
  onValueChange={this.onChange}
  onScrollChange={this.onScrollChange}
>
  <Picker indicatorClassName="my-picker-indicator">
    <Picker.Item value="1">一</Picker.Item>
    <Picker.Item value="2">二</Picker.Item>
    <Picker.Item value="3">三</Picker.Item>
    <Picker.Item value="4">四</Picker.Item>

  </Picker>
  <Picker indicatorClassName="my-picker-indicator">
    <Picker.Item value="5">五</Picker.Item>
    <Picker.Item value="6">六</Picker.Item>
    <Picker.Item value="7">七</Picker.Item>
    <Picker.Item value="8">八</Picker.Item>
    <Picker.Item value="9">九</Picker.Item>
  </Picker>
</MultiPicker>

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
