<!--
  // *******************************************************************************************************************************************************
  // LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION. 
  // COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
  // *******************************************************************************************************************************************************
-->

<!--ry-flex-box.vue: 弹性盒容器组件-->
<template>
  <div class="ry-flex-box" :style="$thisInlineStyles">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { PropType, StyleValue, computed } from 'vue';

/**
 * 定义了组件 “ry-flex-box.vue” 的属性。
 */
const $props = defineProps({
  /**
   * 弹性盒 direction 样式。
   */
  direction: {
    type: String as PropType<vuery.ui.UIFlexBoxDirectionOptions>,
    default: 'row',
    required: false,
  },
  /**
   * 弹性盒 justify-content 样式。
   */
  justify: {
    type: String as PropType<vuery.ui.UIFlexBoxJustifyContentOptions>,
    default: 'flex-start',
    required: false,
  },
  /**
   * 弹性盒 align-items 样式。
   */
  alignItems: {
    type: String as PropType<vuery.ui.UIFlexBoxAlignItemsOptions>,
    default: 'flex-start',
    required: false,
  },
  /**
   * 弹性盒 flex-wrap 样式。
   */
  wrap: {
    type: Boolean,
    default: false,
    required: false,
  },
});

/* 组件 ry-flex-box.vue 内联样式 */
const $thisInlineStyles = computed<StyleValue>(() => {
  const inlineStyles: StyleValue = {
    flexDirection: $props.direction,
    justifyContent: $props.justify,
    alignItems: $props.alignItems,
    flexWrap: $props.wrap ? 'wrap' : 'nowrap',
  };

  return inlineStyles;
});
</script>
