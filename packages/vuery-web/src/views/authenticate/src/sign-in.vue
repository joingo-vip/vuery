<!--
  // *******************************************************************************************************************************************************
  // LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION. 
  // COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
  // *******************************************************************************************************************************************************
-->

<!--sign-in.vue: 身份认证登录视图-->
<template>
  <AnimateBox>
    <ElCard class="scoped-partial">
      <template #header>
        <InternalTitlebar :title-text="$t('default:words.sign_in')" />
      </template>
    </ElCard>
  </AnimateBox>
</template>

<script lang="ts" setup>
import { AnimateBox } from '@/components';
import { InternalTitlebar } from './components';
</script>

<style lang="scss" scoped>
@use '../style/sign-in.vue.scss';
</style>
