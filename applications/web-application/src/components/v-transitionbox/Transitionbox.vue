<!--
  // *******************************************************************************************************************************************************
  // LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION. 
  // COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
  // *******************************************************************************************************************************************************
-->

<!--Transitionbox.vue: 转场动画容器组件-->
<template>
  <transition role="v-transitionbox" :enter-active-class="$enterClassName" :leave-active-class="$exitClassName">
    <slot />
  </transition>
</template>

<script lang="ts" setup>
import { type TransitionboxProperty, TransitionboxPropertyDefaultValue } from './defs';
import { computed } from 'vue';

/**
 * 定义了组件 “Transitionbox.vue” 的属性。
 */
const $props = withDefaults(defineProps<TransitionboxProperty>(), TransitionboxPropertyDefaultValue);

/**
 * 入场时的转场动画样式。
 */
const $enterClassName = computed<string[]>(() => {
  return ['animate__animated', `animate__${$props.enterClassName}`];
});

/**
 * 退场时的转场动画样式。
 */
const $exitClassName = computed<string[]>(() => {
  return ['animate__animated', `animate__${$props.exitClassName}`];
});
</script>

<style lang="scss"></style>
