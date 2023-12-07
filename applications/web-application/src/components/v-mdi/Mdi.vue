<!--
  // *******************************************************************************************************************************************************
  // LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION. 
  // COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
  // *******************************************************************************************************************************************************
-->

<!--Mdi.vue: 基于 @mdi/font 的图标组件-->
<template>
  <span role="v-mdi" class="mdi" :class="$cssClassName">
    <slot />
  </span>
</template>

<script lang="ts" setup>
import { type MdiProperty, MdiPropertyDefaultValue } from './defs';
import { computed, useSlots } from 'vue';

const $runtimeSlots = useSlots();

/**
 * 定义了组件 “Mdi.vue” 的属性。
 */
const $props = withDefaults(defineProps<MdiProperty>(), MdiPropertyDefaultValue);

/**
 * 组件样式表。
 */
const $cssClassName = computed<string[]>(() => {
  const cssClassName: string[] = [];
  if (!String.isNullOrWhitespace($props.color)) {
    cssClassName.push(`${$props.color.transform('kebab')}-text`);
  }
  if (!String.isNullOrWhitespace($props.flipMode)) {
    if ($props.flipMode === 'both' || $props.flipMode === 'horizontal') {
      cssClassName.push('mdi-flip-h');
    }
    if ($props.flipMode === 'both' || $props.flipMode === 'vertical') {
      cssClassName.push('mdi-flip-v');
    }
  }
  if (!Object.isNull($props.size)) {
    cssClassName.push(`mdi-${$props.size}px`);
  }
  if (!Object.isNull($props.rotate)) {
    cssClassName.push(`mdi-rotate-${$props.rotate}`);
  }
  if ($props.useSpin) {
    cssClassName.push('mdi-spin');
  }
  if (!Object.isNull($runtimeSlots['default'])) {
    cssClassName.push('pd-lt-10');
  }
  return cssClassName;
});
</script>

<style lang="scss"></style>
