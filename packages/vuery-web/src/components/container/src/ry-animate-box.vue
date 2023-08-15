<!--
  // *******************************************************************************************************************************************************
  // LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION. 
  // COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
  // *******************************************************************************************************************************************************
-->

<!--ry-animate-box.vue: 基于 animate.css 的动画容器组件-->
<template>
  <div class="animate__animated" :class="[animateClass]">
    <slot />
  </div>
</template>

<script lang="ts" setup>
/**
 * 定义了组件 “ry-animate-box.vue” 的属性。
 */
defineProps({
  /**
   * 动画样式类名称。
   *
   * @see {@link https://animate.style/}
   */
  animateClass: {
    type: String,
    default: 'animate__flipInY',
    required: false,
  },
});
</script>
