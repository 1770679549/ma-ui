/*
 * @Author: 李红林 1770679549@qq.com
 * @Date: 2025-10-15 13:13:37
 * @LastEditors: 李红林 1770679549@qq.com
 * @LastEditTime: 2025-10-15 13:13:46
 * @FilePath: \ma-ui\src\uni_modules\ma-icon\types\ma-icon.d.ts
 * @Description: 
 * 
 */
/**
 * ma-icon 组件的 Props 类型定义
 */
export interface MaIconProps {
  /**
   * 图标的类型（名称），如 'home'，对应 CSS 中的 .icon-home
   */
  name: string; // 更改为 name，并标记为必需
  /**
   * 图标颜色
   */
  color?: string;
  /**
   * 图标大小，可以是一个数字（默认单位px）或带单位的字符串（如 '32rpx'）
   */
  size?: string | number;
}