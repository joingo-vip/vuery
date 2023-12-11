<!--
  // *******************************************************************************************************************************************************
  // LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION. 
  // COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
  // *******************************************************************************************************************************************************
-->

<!--RootSection.vue: 根节点布局视图-->
<template>
  <div class="w-100p h-100p root-section">
    <v-layout>
      <template #left-side> </template>
    </v-layout>
  </div>
</template>

<script lang="ts" setup>
import { vLayout } from '~/components/index.mjs';
</script>

<style lang="scss" scoped>
@use './style/root-section.scss';
</style>
