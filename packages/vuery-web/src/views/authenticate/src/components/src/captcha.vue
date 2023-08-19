<!--
  // *******************************************************************************************************************************************************
  // LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION. 
  // COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
  // *******************************************************************************************************************************************************
-->

<!--captcha.vue: 组件-->
<template>
  <img class="scoped-component" />
</template>

<script lang="ts" setup>
import {
  ICaptchaService,
  ServiceCollection,
  ServiceProvider,
} from '@vuery/services';
import { onMounted } from 'vue';

const captchaService = ServiceProvider.getRequiredService<ICaptchaService>(
  ServiceCollection.CaptchaService
);

/**
 * (可等待的方法) 刷新验证码。
 */
async function refreshAsync(): Promise<void> {
  await captchaService.refreshAsync();
}

onMounted(async () => {
  await refreshAsync();
});
</script>

<style lang="scss" scoped>
@use '../style/captcha.vue.scss';
</style>
