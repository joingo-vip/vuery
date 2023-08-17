<!--
  // *******************************************************************************************************************************************************
  // LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION. 
  // COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
  // *******************************************************************************************************************************************************
-->

<template>
  <Application>
    <RouterView />
  </Application>
</template>

<script lang="ts" setup>
import { Application } from '@/components';
import { ICaptchaService, ServiceProvider } from '@vuery/services';

const a = ServiceProvider.getRequiredService<ICaptchaService>('Captcha');
a.test();
</script>
