<!--
  // *******************************************************************************************************************************************************
  // LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION. 
  // COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
  // *******************************************************************************************************************************************************
-->
<!--Default.vue: 身份认证视图-->
<template>
  <div class="h-100p w-100p authentication-default-view" :style="{ backgroundImage: `url(${$backgroundImageUri})` }">
    <v-flexbox class="h-100p" direction="column">
      <v-flexbox-item class="w-100p no-height" :scale-up="1">
        <div class="w-100p h-100p">
          <v-flexbox class="w-100p h-100p" justify="center" align-items="center">
            <div class="authentication-default-view__container">
              <div class="pd-20 center-text extra-large-text white-text upper-text">
                {{ `@ ${$t('default:words.signIn')}` }}
              </div>
              <div>
                <router-view />
              </div>
            </div>
          </v-flexbox>
        </div>
      </v-flexbox-item>
      <v-flexbox-item class="w-100p">
        <div class="authentication-default-view__footer">
          <div class="pd-10 right-text">
            <span class="small-text placeholder-text">&copy;&nbsp;{{ `${currentYear} ${$t('default:corporationName')}` }}</span>
          </div>
        </div>
      </v-flexbox-item>
    </v-flexbox>
  </div>
</template>

<script lang="ts" setup>
import { getNobuildResourceUri } from '~/lib/index.mjs';
import { vFlexbox, vFlexboxItem } from '~/components/index.mjs';

// 背景图片 URL 地址。
const $backgroundImageUri: string = getNobuildResourceUri('Authentication.jpg');

const currentYear: number = Date.currentDateTime().getFullYear();
</script>

<style lang="scss" scoped>
@use './style/default.scss';
</style>
