# ma-ui

一个基于uni-app的跨平台UI组件库

## 安装

```bash
npm install ma-ui
```

或

```bash
yarn add ma-ui
```

## 使用

### 方式一：全局引入（推荐）

在 main.js 中引入：

```javascript
import { createSSRApp } from 'vue'
import App from './App.vue'
import MaUI from 'ma-ui'
import 'ma-ui/index.scss' // 如果有全局样式文件

export function createApp() {
  const app = createSSRApp(App)
  
  app.use(MaUI)
  
  return {
    app
  }
}
```

### 方式二：按需引入

```vue
<template>
  <view>
    <ma-button type="primary">主要按钮</ma-button>
    <ma-icon name="success"></ma-icon>
  </view>
</template>

<script>
import { MaButton, MaIcon } from 'ma-ui'

export default {
  components: {
    MaButton,
    MaIcon
  }
}
</script>
```

## 组件列表

- [ma-button](./components/ma-button/) - 按钮组件
- [ma-icon](./components/ma-icon/) - 图标组件

## 平台兼容性

ma-ui 支持以下平台：

- H5
- 微信小程序
- 支付宝小程序
- 百度小程序
- 字节跳动小程序
- QQ 小程序
- App（Vue)

## 许可证

MIT