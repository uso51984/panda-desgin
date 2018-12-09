## Icon 图标
## 图标的命名规范

每个图标赋予了语义化的命名，命名规则如下:

- 实心和描线图标保持同名，用 `-o` 来区分，比如 `question-circle`(实心) 和 `question-circle-o`(描线)；

- 命名顺序：`[icon名]-[形状可选]-[描线与否]-[方向可选]`。

## 如何使用

```jsx
<Icon type="check" />
```

## 类型

内置的 `check-circle`, `check`, `check-circle-o`, `cross-circle`, `cross`, `cross-circle-o`, `up`, `down`, `left`, `right`, `ellipsis`, `loading`。

## API

| 属性        | 说明           | 类型            | 默认值       |
|------------|----------------|----------------|--------------|
| type    |   内置 icon 名称   | String   |
| size    |   图标大小    | `xxs` `xs` `sm` `md` `lg`  | `md` |
| color   | 图标颜色  | Color | `#000` |
