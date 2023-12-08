<!--
  // *******************************************************************************************************************************************************
  // LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION. 
  // COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
  // *******************************************************************************************************************************************************
-->
<!--AvatarButton.vue: 用户头像按钮组件-->
<template>
  <el-popover trigger="click" :show-arrow="false" width="var(--v-avatar-button-popover-width)">
    <template #reference>
      <img :src="$url" class="v-avatar-button" :title="$t('default:userProfile')" :style="[$inlineOverridableStyles]" />
    </template>
    <div>
      <div class="pd-10 center-text primary">
        <img :src="$url" class="w-60 h-60" />
      </div>
      <div class="pd-10 left-text upper-text primary-text bold-text large-text">{{ accountName }}</div>
      <div class="pd-10 left-text small-text tertiary-text">
        {{ `${$t('default:emailAddress')}${$t('default:symbols.colon')}${emailAddress}` }}
      </div>
      <div class="pd-10 left-text small-text tertiary-text">
        {{ `${$t('default:mobileNumber')}${$t('default:symbols.colon')}${mobileNumber}` }}
      </div>
      <el-divider></el-divider>
      <div class="pd-10 right-text">
        <el-button type="default" text class="upper-text">{{ $t('default:userProfile') }}</el-button>
        <el-button type="danger" text class="upper-text">{{ $t('default:signOut') }}</el-button>
      </div>
    </div>
  </el-popover>
</template>

<script lang="ts" setup>
import { AvatarButtonProperty } from './defs';
import { computed, ref } from 'vue';
import { getNobuildResourceUri, getOverridableStyles } from '~/lib/index.mjs';

/**
 * 定义了组件 “AvatarButton.vue” 的属性。
 */
const $props = defineProps<AvatarButtonProperty>();

/**
 * 头像 URL 地址。
 */
const $url = computed<string>(() => (String.isNullOrWhitespace($props.url) ? getNobuildResourceUri('avatar.png') : $props.url));

/**
 * 可覆盖的内联样式。
 */
const $inlineOverridableStyles = computed<Record<string, any>>(() => getOverridableStyles($props.overridableStyles));

/**
 * 当前账户名。
 */
const accountName = ref<string>(window.currentPrincipal.user.name);

/**
 * 电邮地址。
 */
const emailAddress = ref<string>('');

/**
 * 移动电话号码
 */
const mobileNumber = ref<string>('');

// TODO: 此处为模拟代码，请酌情修改。
console.log(
  '%cTODO: 脚本 “AvatarButton.vue” 中包含了模拟代码。<35c128>',
  'background-color: #BF360C; color: #FFEB3B; font-weight: bold; padding: 5px 10px'
);
</script>

<style lang="scss">
@use './style/v-avatar-button.scss';
</style>
