<!--
  // *******************************************************************************************************************************************************
  // LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION. 
  // COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
  // *******************************************************************************************************************************************************
-->
<!--Flexbox.vue: 弹性盒容器组件-->
<template>
  <div role="v-flexbox" class="is-flex" :style="[$inlineStyles]">
    <!-- 组件：Flexbox.vue 弹性盒容器组件。 -->
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { FlexboxDefaultPropertyValue, type FlexboxProperty } from './defs';
import { computed, StyleValue } from 'vue';

/**
 * 定义了组件 “Flexbox.vue” 的属性。
 */
const $props = withDefaults(defineProps<FlexboxProperty>(), FlexboxDefaultPropertyValue);

/**
 * 组件内联样式。
 */
const $inlineStyles = computed<StyleValue>(() => {
  return {
    flexDirection: $props.direction,
    flexWrap: $props.wrap,
    justifyContent: $props.justify,
    alignItems: $props.alignItems,
  };
});
</script>

<style lang="scss"></style>
