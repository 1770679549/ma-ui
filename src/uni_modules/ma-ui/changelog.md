# 更新日志

## [1.0.0] - 2025-09-28

### 新增

- 发布第一个版本的ma-ui组件库
- 添加ma-button组件，支持多种类型、尺寸和状态
- 添加ma-icon组件，支持字体图标和图片图标
- 提供完整的样式系统和主题定制能力

### 特性

- 支持uni-app跨平台开发（H5、小程序、App等）
- 使用Vue 3 Composition API和TypeScript开发
- 遵循BEM命名规范的SCSS样式系统
- 支持按需引入和全局引入两种使用方式

### 使用说明

1. 安装依赖：
   ```bash
   npm install ma-ui
   ```

2. 在项目中使用：
   ```javascript
   import MaUI from 'ma-ui'
   import 'ma-ui/index.scss'
   
   export function createApp() {
     const app = createSSRApp(App)
     app.use(MaUI)
     return { app }
   }
   ```

### 发布说明

该版本为ma-ui组件库的初始版本，包含基础的按钮和图标组件，后续将持续更新更多组件。