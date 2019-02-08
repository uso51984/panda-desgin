## Toast 轻提示

## API
```jsx
import React from 'react';
import DemoBlock from 'docs/mobileComponents/DemoBlock';
import Toast from '../Toast';
import Button from '../../Button';

function showToast() {
  Toast.info('This is a toast tips !!!', 1);
}

function showToastNoMask() {
  Toast.info('Toast without mask !!!', 2, null, false);
}

function successToast() {
  Toast.success('Load success !!!', 1);
}

function failToast() {
  Toast.fail('Load failed !!!', 1);
}

function offline() {
  Toast.offline('Network connection failed !!!', 1);
}

function loadingToast() {
  Toast.loading('Loading...', 1, () => {
    console.log('Load complete !!!');
  });
}

export default() =>
  (
    <div>
      <DemoBlock title="基本文字提示" className="has-padding">
        <Button inline onClick={showToast} style={{ marginRight: 20 }}>文字提示</Button>
        <Button inline onClick={showToastNoMask}>无mask</Button>
      </DemoBlock>

      <DemoBlock title="成功/失败" className="has-padding">
        <Button inline onClick={successToast} style={{ marginRight: 20 }}>成功提示</Button>
        <Button inline onClick={failToast}>失败提示</Button>
      </DemoBlock>

      <DemoBlock title="网络离线状态" className="has-padding">
        <Button onClick={offline}>网络离线状态</Button>
      </DemoBlock>

      <DemoBlock title="loading" className="has-padding">
        <Button onClick={loadingToast}>loading</Button>
      </DemoBlock>
    </div>
  );


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
