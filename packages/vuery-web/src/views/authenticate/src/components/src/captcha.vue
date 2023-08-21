<!--
  // *******************************************************************************************************************************************************
  // LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION. 
  // COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
  // *******************************************************************************************************************************************************
-->

<!--captcha.vue: 组件-->
<template>
  <img
    class="scoped-component"
    :src="captchaPictureUri"
    :title="$t('prompts:captcha.refresh')"
    @click="onImageElementClick"
  />
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
import { getDefaultTransientStore } from '@/libs';

const transientStore = getDefaultTransientStore();

const captchaService = ServiceProvider.getRequiredService<ICaptchaService>(
  ServiceCollection.CaptchaService
);

const captchaPictureUri = ref<string>('');
const captchaPictureChecksums = ref<string>('');

/**
 * 定义了组件 “captcha.vue” 的事件。
 */
const $emits = defineEmits<{
  refreshed: [e: vuery.EventArgs<string>];
}>();

/**
 * (可等待的方法) 刷新验证码。
 */
async function refreshAsync(): Promise<void> {
  try {
    const result: CaptchaResult = await captchaService.refreshAsync();
    captchaPictureUri.value = `data:image/git;base64,${result.img ?? ''}`;
    captchaPictureChecksums.value = result.uuid ?? '';

    /**
     * 触发组件的 “Refreshed” 事件。
     *
     * @private
     * @see {@link $emits}
     */
    function $onRefreshed(): void {
      console.debug(`[DEBUG] - <captcha.vue: 131651>: 验证码已经刷新。`);
      $emits('refreshed', { payload: captchaPictureChecksums.value });
    }

    $onRefreshed();
  } catch (error: any) {
    transientStore.catchServiceException(error);
  }
}

/**
 * 用于处理 “HTML Image Element” 组件的 “ImageElementClick” 事件
 *
 * @private
 */
async function onImageElementClick(): Promise<void> {
  await refreshAsync();
}

onMounted(async () => {
  await refreshAsync();
});
</script>

<style lang="scss" scoped>
@use '../style/captcha.vue.scss';
</style>
