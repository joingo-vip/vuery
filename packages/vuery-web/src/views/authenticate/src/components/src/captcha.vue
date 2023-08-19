<!--
  // *******************************************************************************************************************************************************
  // LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION. 
  // COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
  // *******************************************************************************************************************************************************
-->

<!--captcha.vue: 组件-->
<template>
  <img class="scoped-component" :src="captchaDataUri" />
</template>

<script lang="ts" setup>
import {
  CaptchaResult,
  ICaptchaService,
  ServiceCollection,
  ServiceProvider,
} from '@vuery/services';
import { onMounted } from 'vue';
import { ref } from 'vue';

const captchaService = ServiceProvider.getRequiredService<ICaptchaService>(
  ServiceCollection.CaptchaService
);

const captchaDataUri = ref<string>('');

/**
 * (可等待的方法) 刷新验证码。
 */
async function refreshAsync(): Promise<void> {
  try {
    const result: CaptchaResult = await captchaService.refreshAsync();
    captchaDataUri.value = `data:image/git;base64,${result.img ?? ''}`;
  } catch (error) {}
}

onMounted(async () => {
  await refreshAsync();
});
</script>

<style lang="scss" scoped>
@use '../style/captcha.vue.scss';
</style>
