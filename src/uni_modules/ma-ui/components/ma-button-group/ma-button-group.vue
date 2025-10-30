<template>
  <view 
    class="ma-button-group" 
    :class="{
      'ma-button-group--vertical': vertical
    }"
  >
    <slot />
  </view>
</template>

<script setup lang="ts">
import { provide, computed } from 'vue';
import { defineOptions } from 'vue';
import type { ButtonGroupProps, ButtonGroupContext } from './types';
import { BUTTON_GROUP_KEY } from './types';

defineOptions({
  name: 'ma-button-group'
});

const props = withDefaults(defineProps<ButtonGroupProps>(), {
  vertical: false
});

const groupContext = computed<ButtonGroupContext>(() => ({
  vertical: props.vertical
}));

provide(BUTTON_GROUP_KEY, groupContext.value);
</script>

<style lang="scss" scoped>
@use './index' as *;
</style>