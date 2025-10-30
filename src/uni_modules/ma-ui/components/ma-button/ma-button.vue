<template>
  <view class="ma-button" :class="buttonClasses" :style="buttonStyle" @click="handleClick"
    :hover-class="isDisabled ? '' : 'ma-button--hover'" :hover-start-time="20" :hover-stay-time="70"
    :aria-disabled="isDisabled" :aria-busy="isLoading">
    <!-- 加载状态 -->
    <view v-if="isLoading" class="ma-button__loading">
      #ifdef H5
      <span class="iconify" data-icon="line-md:loading-twotone-loop" :style="{ fontSize: loadingSize + 'px' }"></span>
      #endif
      #ifdef MP
      <view class="ma-button__loading-svg" :style="{ width: loadingSize + 'px', height: loadingSize + 'px' }">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" :width="loadingSize" :height="loadingSize">
          <path d="M12,4V2A10,10 0 0,0 2,12H4A8,8 0 0,1 12,4Z" opacity=".5" />
        </svg>
      </view>
      #endif
      #ifdef APP-PLUS
      <span class="iconify" data-icon="line-md:loading-twotone-loop" :style="{ fontSize: loadingSize + 'px' }"></span>
      #endif
    </view>

    <!-- 左侧图标 -->
    <ma-icon v-if="icon || $slots.icon" class="ma-button__icon ma-button__icon--left" :icon="icon" :size="iconSize">
      <slot name="icon" />
    </ma-icon>

    <!-- 按钮内容 -->
    <view class="ma-button__content">
      <slot>{{ text }}</slot>
    </view>

    <!-- 右侧图标 -->
    <ma-icon v-if="rightIcon || $slots.rightIcon" class="ma-button__icon ma-button__icon--right" :icon="rightIcon"
      :size="iconSize">
      <slot name="rightIcon" />
    </ma-icon>
  </view>
</template>
<script lang="ts">
export default {
  name: 'ma-button',
  options: {
    virtualHost: true,
    addGlobalClass: true,
    styleIsolation: 'shared'
  }
}
</script>
<script setup lang="ts">
import { computed, ref } from 'vue';
const emit = defineEmits(['click'])
const props = defineProps({
  // 按钮文本
  text: {
    type: String,
    default: ''
  },
  /**按钮类型*/
  type: {
    type: String,
    default: 'primary',
    validator: (value: string) => ['primary', 'success', 'warning', 'danger', 'info', 'link', 'text'].includes(value)
  },
  // 按钮尺寸
  size: {
    type: String,
    default: 'medium',
    validator: (value: string) => ['large', 'medium', 'small', 'mini'].includes(value)
  },
  // 是否块级按钮
  block: {
    type: Boolean,
    default: false
  },
  // 是否朴素按钮
  plain: {
    type: Boolean,
    default: false
  },
  // 是否圆形按钮
  round: {
    type: Boolean,
    default: false
  },
  // 是否圆形图标按钮
  circle: {
    type: Boolean,
    default: false
  },
  // 是否禁用
  disabled: {
    type: Boolean,
    default: false
  },
  // 是否加载中
  loading: {
    type: Boolean,
    default: false
  },
  // 加载文本
  loadingText: {
    type: String,
    default: ''
  },
  // 左侧图标
  icon: {
    type: String,
    default: ''
  },
  // 右侧图标
  rightIcon: {
    type: String,
    default: ''
  },
  // 自定义圆角
  radius: {
    type: [Number, String],
    default: null
  },
  // 自定义颜色
  color: {
    type: String,
    default: null
  },
  // 点击反馈
  active: {
    type: Boolean,
    default: true
  }
});
const disabled = ref(false);
const loading = ref(false);
const isLoading = computed(() => {
  return loading.value && !props.loadingText;
})
const isDisabled = computed(() => {
  return disabled.value || isLoading.value;
})

const buttonClasses = computed(() => {
  return {
    [`ma-button--${props.type}`]: props.type,
    [`ma-button--${props.size}`]: props.size,
    'ma-button--block': props.block,
    'ma-button--plain': props.plain,
    'ma-button--round': props.round,
    'ma-button--circle': props.circle,
    'ma-button--disabled': isDisabled.value,
    'ma-button--active': props.active && !isDisabled.value
  };
})
const buttonStyle = computed(() => {
  const style = {};

  // 自定义圆角
  if (props.radius !== null) {
    style.borderRadius = typeof props.radius === 'number' ? `${props.radius}px` : props.radius;
  }

  // 自定义颜色
  if (props.color && !props.plain) {
    style.backgroundColor = props.color;
    style.borderColor = props.color;
  }

  return style;
})
const iconSize = computed(() => {
  const sizeMap = {
    large: 20,
    medium: 18,
    small: 16,
    mini: 14
  };
  return sizeMap[props.size];
})
const loadingSize = computed(() => {
  const sizeMap = {
    large: 20,
    medium: 18,
    small: 16,
    mini: 14
  };
  return sizeMap[props.size];
})

const handleClick = (event: any) => {
  if (isDisabled.value) return;
  emit('click', event);
}


</script>

<style lang="scss" scoped>
@use  './index.scss';

.ma-button {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  transition: all 0.3s;
  overflow: hidden;
  user-select: none;

  // 状态样式
  &--hover {
    transform: translateY(-1px);
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  }

  &--active:not(.ma-button--disabled) {
    transform: translateY(1px);
    transition: all 0.1s;
  }

  // 尺寸
  &--large {
    height: $button-large-height;
    padding: 0 $button-large-padding;
    font-size: $button-large-font-size;
    border-radius: $button-large-radius;
  }

  &--medium {
    height: $button-medium-height;
    padding: 0 $button-medium-padding;
    font-size: $button-medium-font-size;
    // border-radius: $button-medium-radius;
  }

  &--small {
    height: $button-small-height;
    padding: 0 $button-small-padding;
    font-size: $button-small-font-size;
    border-radius: $button-small-radius;
  }

  &--mini {
    height: $button-mini-height;
    padding: 0 $button-mini-padding;
    font-size: $button-mini-font-size;
    border-radius: $button-mini-radius;
  }

  // 布局
  &--block {
    display: flex;
    width: 100%;
  }

  &--round {
    border-radius: 999px;
  }

  &--circle {
    border-radius: 50%;
    aspect-ratio: 1/1;
    padding: 0;

    .ma-button__content {
      display: none;
    }
  }

  // 状态
  &--disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none !important;
    box-shadow: none !important;
  }

  // 内容区域
  &__content {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  // 图标
  &__icon {
    display: flex;
    align-items: center;

    &--left {
      margin-right: 4px;
    }

    &--right {
      margin-left: 4px;
    }
  }

  // 加载状态
  &__loading {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none;

    &-text {
      margin-left: 6px;
    }
  }
}
</style>