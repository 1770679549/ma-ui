/*
 * @Author: 李红林 1770679549@qq.com
 * @Date: 2025-09-28 15:50:10
 * @LastEditors: 李红林 1770679549@qq.com
 * @LastEditTime: 2025-09-28 16:01:55
 * @FilePath: \ma-ui\src\uni_modules\ma-ui\index.js
 * @Description: 
 * 
 */
// ma-ui 组件库入口文件

import MaButton from './components/ma-button/ma-button.vue'
import MaIcon from './components/ma-icon/ma-icon.vue'

// 所有组件列表
const components = [MaButton, MaIcon]

// 定义 install 方法
const install = (app) => {
  // 注册所有组件
  components.forEach(component => {
    console.log(components,"components")
    // 使用组件的displayName或name作为注册名
    const name = component.displayName || component.name
    if (name) {
      app.component(name, component)
    }
  })
  return app
}

// 兼容直接通过script标签引入的情况
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

// 导出所有组件
export {
  MaButton,
  MaIcon
}

// 默认导出install方法
export default install