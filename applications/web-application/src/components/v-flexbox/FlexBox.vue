<!--
  // *******************************************************************************************************************************************************
  // LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION. 
  // COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
  // *******************************************************************************************************************************************************
-->
<!--FlexBox.vue: 弹性盒组件-->
<template>
  <div class="v-flexbox" :style="inlineStyle">
    <!--
      组件：FlexBox.vue - 弹性盒组件。
      (标签：#5b8431)
    -->
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { DefaultPropsValue, type ThisProps } from './defs';
import { computed, StyleValue } from 'vue';

/**
 * 定义了组件 “FlexBox.vue” 的属性。
 */
const $props = withDefaults(defineProps<ThisProps>(), DefaultPropsValue);

/**
 * 组件内联样式。
 */
const inlineStyle = computed<StyleValue>(() => {
  return {
    flexDirection: $props.direction,
    flexWrap: $props.wrap,
    justifyContent: $props.justify,
    alignItems: $props.alignItems,
  };
});
</script>
