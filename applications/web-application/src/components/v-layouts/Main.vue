<!--
  // *******************************************************************************************************************************************************
  // LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION. 
  // COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
  // *******************************************************************************************************************************************************
-->

<!--Main.vue: 主内容布局组件-->
<template>
  <div role="v-main" class="v-main" :style="[$inlineOverridableStyles]">
    <div class="w-100p h-100p">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { type MainProperty } from './defs';
import { computed } from 'vue';

/**
 * 定义了组件 “Main.vue” 的属性。
 */
const $props = defineProps<MainProperty>();

/**
 * 内联的可覆盖样式。
 */
const $inlineOverridableStyles = computed<Record<string, any>>(() => $props.overridableStyles);
</script>

<style lang="scss">
@use './style/v-main.scss';
</style>
