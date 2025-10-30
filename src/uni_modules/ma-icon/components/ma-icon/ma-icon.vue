<script lang="ts">
export default {
  // 组件配置
  name: 'ma-icon',
  options: {
    virtualHost: true,
    addGlobalClass: true,
    styleIsolation: 'shared'
  }
}
</script>

<script setup lang="ts">
import { computed } from 'vue';
// 假设你的类型文件定义了 name: string, color?: string, size?: string | number
import type { MaIconProps } from '../../../ma-icon/types/ma-icon.d.ts';

// ------------------------------------
// 1. Props 定义
// ------------------------------------
const props = withDefaults(defineProps<MaIconProps>(), {
  color: '#333333',
  size: 24,
});

// ------------------------------------
// 2. Computed 属性
// ------------------------------------
const iconSizeStyle = computed(() => {
  const size = props.size;
  // 转换为带单位的样式值
  const isNumberSize = typeof size === 'number' || (typeof size === 'string' && /^\d+$/.test(size));
  return isNumberSize ? `${size}px` : (size as string);
});

const iconStyle = computed(() => {
  return {
    color: props.color,
    fontSize: iconSizeStyle.value,
  };
});

/**
 * 完整的 class 样式数组
 */
const iconClass = computed(() => {
  // 核心：使用阿里图标库导出的基础类名 'iconfont' 
  // 和动态的图标类名 'icon-name'
  if (!props.name) return ['iconfont'];
  return ['iconfont', `icon-${props.name}`];
});
</script>

<template>
  <view :class="iconClass" :style="iconStyle" v-bind="$attrs">
  </view>
</template>

<style scoped>
/* 引入阿里图标库导出的 CSS 文件 */
@import "../../../ma-icon/theme/fonts/iconfont.css";
</style>