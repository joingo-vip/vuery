<!--
  // *******************************************************************************************************************************************************
  // LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION. 
  // COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
  // *******************************************************************************************************************************************************
-->

<!--ry-desktop.vue: 默认桌面布局组件-->
<template>
  <div class="ry-desktop">
    <FlexBoxWidget direction="column" class="ry-h--100p">
      <div class="ry-desktop-header" v-show="hasHeaderSlot">
        <div>
          <slot name="header" />
        </div>
      </div>
      <div class="ry-desktop-body">
        <div>
          <slot />
        </div>
      </div>
      <div class="ry-desktop-footer" v-show="hasFooterSlot">
        <div>
          <slot name="footer" />
        </div>
      </div>
    </FlexBoxWidget>
  </div>
</template>

<script lang="ts" setup>
import { getCurrentInstance } from 'vue';
import { FlexBoxWidget } from '../../container';
import { computed } from 'vue';

/**
 * Vue 应用程序上下文信息。
 */
const $context = getCurrentInstance();

const hasHeaderSlot = computed<boolean>(() => {
  return !Object.isNull($context?.proxy?.$slots['header']);
});

const hasFooterSlot = computed<boolean>(() => {
  return !Object.isNull($context?.proxy?.$slots['footer']);
});
</script>
