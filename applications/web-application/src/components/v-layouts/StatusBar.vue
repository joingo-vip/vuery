<!--
  // *******************************************************************************************************************************************************
  // LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION. 
  // COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
  // *******************************************************************************************************************************************************
-->
<!--StatusBar.vue: 页脚状态栏组件-->
<template>
  <div class="pd-10 v-status-bar">
    <v-flexbox class="w-100p" justify="flex-end" align-items="center">
      <v-flexbox-item class="pd-rt-10">
        <span class="placeholder-text small-text">&copy;&nbsp;{{ `${currentYear} ${$t('default:corporationName')}` }}</span>
      </v-flexbox-item>
      <slot />
    </v-flexbox>
  </div>
</template>

<script lang="ts" setup>
import vFlexbox from '../v-flexbox/Flexbox.vue';
import vFlexboxItem from '../v-flexbox/FlexboxItem.vue';

/**
 * 当前的年份。
 */
const currentYear: number = Date.currentDateTime().getFullYear();
</script>

<style lang="scss">
@use './style/v-status-bar.scss';
</style>
