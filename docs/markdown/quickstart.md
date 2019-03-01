## 快速上手
## 安装

#### NPM

```shell
npm install panda-desgin
```

#### YARN

```shell
yarn add panda-desgin
```

## 快速上手

#### 方式一. 使用  [babel-plugin-import](https://github.com/ant-design/babel-plugin-import) (推荐)

`babel-plugin-import` 是一款 babel 插件，它会在编译过程中将 import 的写法自动转换为按需引入的方式

```shell
# 安装 babel-plugin-import 插件
npm i babel-plugin-import -D
```

```jsx
// 在 .babelrc 或 babel-loader 中添加插件配置
// 注意：webpack 1 无需设置 libraryDirectory。
{
  "plugins": [
    ["import", {
      "libraryName": "panda-desgin",
      "libraryDirectory": "es",
      "style": true
    }]
  ]
}
```

接着你可以在代码中直接引入 panda-desgin 组件，插件会自动将代码转化为方式二中的按需引入形式。

```jsx
import { Button } from 'panda-desgin';
```

#### 方式二. 按需引入组件

在不使用插件的情况下，可以手动引入需要的组件

```jsx
import Button from 'panda-desgin/lib/button';
import 'panda-desgin/lib/button/style';
```

#### 方式三. 导入所有组件

```jsx
import { Button } from 'panda-desgin';
import 'panda-desgin/lib/index.css';

```

> 注意：配置 babel-plugin-import 插件后将不允许导入所有组件
