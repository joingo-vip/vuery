<!--
  // *******************************************************************************************************************************************************
  // LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION. 
  // COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
  // *******************************************************************************************************************************************************
-->
<!--FlexItem.vue: 弹性盒内部容器组件-->
<template>
  <div :style="inlineStyle">
    <!--
      组件：FlexItem.vue - 弹性盒内部容器组件。
      (标签：#01c553)
    -->
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { DefaultInternalItemPropsValue, type InternalItemProps } from './defs';
import { computed, type StyleValue } from 'vue';

/**
 * 定义了组件 “FlexItem.vue” 的属性。
 */
const $props = withDefaults(defineProps<InternalItemProps>(), DefaultInternalItemPropsValue);

/**
 * 内联样式。
 */
const inlineStyle = computed<StyleValue>(() => {
  return {
    flexGrow: $props.grow,
    flexShrink: $props.shrink,
  };
});
</script>
