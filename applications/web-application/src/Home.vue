<!--
  // *******************************************************************************************************************************************************
  // LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION. 
  // COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
  // *******************************************************************************************************************************************************
-->

<!--Home.vue: 组件-->
<template>
  <v-app>
    <v-layout>
      <template #header>
        <v-app-bar
          :app-icon-url="appIconUrl"
          app-icon-visibility="visible"
          app-icon-clickable
          :title="$t('default:applicationName')"
        ></v-app-bar>
      </template>
    </v-layout>
  </v-app>
</template>

<script lang="ts" setup>
import { vApp, vAppBar, vLayout } from '~/components/index.mjs';
import { getNobuildResourceUri } from '~/lib/index.mjs';

/**
 * 应用图标 URL 地址。
 */
const appIconUrl: string = getNobuildResourceUri('app.png');
</script>

<style lang="scss" scoped></style>
