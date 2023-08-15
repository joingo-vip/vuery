<!--
  // *******************************************************************************************************************************************************
  // LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION. 
  // COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
  // *******************************************************************************************************************************************************
-->

<!--titlebar.vue: 身份认证标题条组件-->
<template>
  <div>
    <FlexBox justify="flex-start" align-items="center">
      <img
        :src="$staticUri('static/icons/vuery.png')"
        class="ry-h--30 ry-w--30"
      />
      <span class="ry-pd-left--10 ry-bold-text ry-text-xl ry-tertiary-text">{{
        titleText
      }}</span>
    </FlexBox>
  </div>
</template>

<script lang="ts" setup>
import { FlexBox } from '@/components';

/**
 * 定义了组件 “titlebar.vue” 的属性。
 */
const $props = defineProps({
  /**
   * 标题文本内容。
   */
  titleText: {
    type: String,
    default: '',
    required: true,
  },
});
</script>

<style lang="scss" scoped></style>
