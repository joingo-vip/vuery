<!--
  // *******************************************************************************************************************************************************
  // LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION. 
  // COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
  // *******************************************************************************************************************************************************
-->
<!--App.vue: 应用程序根节点组件-->
<template>
  <div class="v-app" :style="canOverrideStyle">
    <!--
      组件：App.vue - Vuery2 应用程序根节点组件。
      (标签：#400c8e)
    -->
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { type AppOverrideStyle, type ThisProps } from './defs';
import { getComponentOverrideStyle } from '../common/index.mjs';

/**
 * 定义了组件 “App.vue” 的属性。
 */
const $props = withDefaults(defineProps<ThisProps>(), {});

/**
 * 可复写样式。
 */
const canOverrideStyle = computed(() => getComponentOverrideStyle<AppOverrideStyle>('v-app', $props.overrideStyle));
</script>
./defs
