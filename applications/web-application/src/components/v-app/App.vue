<!--
  // *******************************************************************************************************************************************************
  // LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION. 
  // COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
  // *******************************************************************************************************************************************************
-->

<!--App.vue: 应用程序根节点组件-->
<template>
  <div class="v-app" :style="[$inlineOverridableStyles]">
    <!-- 组件：App.vue 应用程序根节点组件。 -->
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { type AppProperty } from './defs';
import { computed } from 'vue';
import { getOverridableStyles } from '~/lib/index.mjs';

/**
 * 定义了组件 “App.vue” 的属性。
 */
const $props = defineProps<AppProperty>();

/**
 * 内联可覆盖私有样式。
 */
const $inlineOverridableStyles = computed<Record<string, any>>(() => getOverridableStyles($props.overridableStyles));
</script>

<style lang="scss">
@use './style/v-app.scss';
</style>
