<!--
  // *******************************************************************************************************************************************************
  // LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION. 
  // COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
  // *******************************************************************************************************************************************************
-->

<!--ry-mdicon.vue: 基于 @mdi/font 的图标组件-->
<template>
  <i class="ry-mdicon mdi" :class="$thisStyleClasses"></i>
</template>

<script lang="ts" setup>
import { PropType, computed } from 'vue';

/**
 * 定义了组件 “ry-mdicon.vue” 的属性。
 */
const $props = defineProps({
  /**
   * @mdi/font 图标名称。
   *
   * @see {@link https://pictogrammers.com/library/mdi/}
   */
  iconName: {
    type: String,
    default: '',
    required: true,
  },
  /**
   * 是否渲旋转。
   */
  spin: {
    type: Boolean,
    default: false,
    required: false,
  },
  /**
   * 旋转角度。
   */
  rotateAngle: {
    type: Number as PropType<vuery.ui.UIMaterialIconRotateAngle>,
    default: 0,
    required: false,
  },
});

/* 组件 ry-mdicon.vue 样式类 */
const $thisStyleClasses = computed<Record<string, boolean> | string[]>(() => {
  const dynamicClasses: string[] = [$props.iconName.toKebabCase()];
  if ($props.spin) {
    dynamicClasses.push('mdi-spin');
  }
  if ($props.rotateAngle > 0) {
    dynamicClasses.push(`mdi-rotate-${$props.rotateAngle}`);
  }
  return dynamicClasses;
});
</script>
