<!--
  // *******************************************************************************************************************************************************
  // LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION. 
  // COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
  // *******************************************************************************************************************************************************
-->

<!--ry-scrollable-box.vue: 可滚动的容器组件-->
<template>
  <div class="ry-scrollbar-box" :style="$thisInlineStyles">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { PropType } from 'vue';
import { StyleValue, computed } from 'vue';

/**
 * 定义了组件 “ry-scrollable-box.vue” 的属性。
 */
const $props = defineProps({
  /**
   * 横向滚动条选项。
   */
  horizontalScrollbar: {
    type: String as PropType<vuery.ui.UIScrollbarOptions>,
    default: null,
    required: false,
  },
  /**
   * 纵向滚动条选项。
   */
  verticalScrollbar: {
    type: String as PropType<vuery.ui.UIScrollbarOptions>,
    default: 'auto',
    required: false,
  },
});

/* 组件 ry-scrollable-box.vue 内联样式 */
const $thisInlineStyles = computed<StyleValue>(() => {
  let inlineStyle: StyleValue = {};
  if ($props.horizontalScrollbar) {
    inlineStyle.overflowX = $props.horizontalScrollbar;
  }
  if ($props.verticalScrollbar) {
    inlineStyle.overflowY = $props.verticalScrollbar;
  }
  return inlineStyle;
});
</script>
