<!--
  // *******************************************************************************************************************************************************
  // LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION. 
  // COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
  // *******************************************************************************************************************************************************
-->
<!--FlexboxItem.vue: 弹性盒条目容器组件-->
<template>
  <div role="v-flexbox-item" :style="[$inlineStyles]">
    <!-- 组件：FlexboxItem.vue 弹性盒条目容器组件 -->
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { type FlexboxItemProperty, FlexboxItemDefaultPropertyValue } from './defs';
import { computed, StyleValue } from 'vue';

/**
 * 定义了组件 “FlexboxItem.vue” 的属性。
 */
const $props = withDefaults(defineProps<FlexboxItemProperty>(), FlexboxItemDefaultPropertyValue);

/**
 * 组件内联样式。
 */
const $inlineStyles = computed<StyleValue>(() => {
  return {
    flexGrow: $props.scaleUp,
    flexShrink: $props.scaleDown,
  };
});
</script>
