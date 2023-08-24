<!--
  // *******************************************************************************************************************************************************
  // LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION. 
  // COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
  // *******************************************************************************************************************************************************
-->

<!--index.vue: 默认页视图-->
<template>
  <div class="ry-h--100p">
    <Desktop>
      <template #header>
        <Appbar @click="onAppbarClick"></Appbar>
      </template>
      <template #footer>
        <Footer />
      </template>
    </Desktop>
  </div>
</template>

<script lang="ts" setup>
import { Desktop, Appbar, Footer } from '@/components';

/**
 * 用于处理 “Appbar” 组件的 “AppbarClick” 事件
 *
 * @private
 */
function onAppbarClick(e: vuery.EventArgs<string>): void {
  console.warn(e.payload);
}
</script>

<style lang="scss" scoped></style>
