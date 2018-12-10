## Toast 轻提示

## API
```jsx
Toast.success(content, duration, onClose, mask)
Toast.fail(content, duration, onClose, mask)
Toast.info(content, duration, onClose, mask)
Toast.loading(content, duration, onClose, mask)
Toast.offline(content, duration, onClose, mask)
```
组件提供了五个静态方法，参数如下：

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| content    | 提示内容       | React.Element or String    | 无           |
| duration   | 自动关闭的延时，单位秒 | number                 | 3          |
| onClose    | 关闭后回调 |  Function                 | 无          |
| mask    | 是否显示透明蒙层，防止触摸穿透 |  Boolean  | true          |

> **注：**  duration = 0 时，onClose 无效，toast 不会消失；隐藏 toast 需要手动调用 hide

还提供了全局配置和全局销毁方法：

- `Toast.hide()`
