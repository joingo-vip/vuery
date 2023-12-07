<!--
  // *******************************************************************************************************************************************************
  // LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION. 
  // COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
  // *******************************************************************************************************************************************************
-->

<!--Home.vue: 组件-->
<template>
  <v-app>
    <router-view #default="{ Component }">
      <v-transitionbox enter-class-name="flipInY" exit-class-name="flipOutY">
        <component :is="Component" />
      </v-transitionbox>
    </router-view>
  </v-app>
</template>

<script lang="ts" setup>
import { vApp, vTransitionbox } from '~/components/index.mjs';
</script>

<style lang="scss" scoped></style>
