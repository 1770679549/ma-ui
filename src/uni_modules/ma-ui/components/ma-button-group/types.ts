// src/uni_modules/ma-ui/components/ma-button-group/types.ts
import type { InjectionKey } from 'vue';

/**
 * 按钮组组件的 Props 类型定义
 */
export interface ButtonGroupProps {
  /**
   * 是否垂直排列
   * @default false
   */
  vertical?: boolean;
}

/**
 * 按钮组上下文类型
 */
export interface ButtonGroupContext {
  /**
   * 垂直排列状态
   */
  vertical: boolean;
}

/**
 * 按钮组依赖注入标识符
 * @internal
 */
export const BUTTON_GROUP_KEY: InjectionKey<ButtonGroupContext> = Symbol('ma-button-group');