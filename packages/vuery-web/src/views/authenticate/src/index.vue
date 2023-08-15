<!--
  // *******************************************************************************************************************************************************
  // LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION. 
  // COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
  // *******************************************************************************************************************************************************
-->

<!--index.vue: 身份认证默认页视图-->
<template>
  <div
    class="scoped-view ry-h--100p"
    :style="{
      backgroundImage: `url(${$staticUri('static/images/background.jpg')})`,
    }"
  >
    <FlexBox
      justify="center"
      align-items="center"
      class="ry-h--100p ry-w--100p"
    >
      <div class="scoped-view-container">
        <!--
          视图：index.vue - 身份认证内容容器。
          (标签：#a339fa)
        -->
        <RouterView />
      </div>
    </FlexBox>
  </div>
</template>

<script lang="ts" setup>
import { FlexBox } from '@/components';
</script>

<style lang="scss" scoped>
@use '../style/index.vue.scss';
</style>
