<!--
  // *******************************************************************************************************************************************************
  // LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION. 
  // COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
  // *******************************************************************************************************************************************************
-->

<!--startup.vue: 启动页视图-->
<template>
  <FlexBox
    class="ry-w--100p ry-h--100p startup-scope"
    direction="column"
    justify="center"
    align-items="center"
    :style="{
      backgroundImage: `url(${$staticUri('static/images/background.jpg')})`,
    }"
  >
    <div>
      <img :src="$staticUri('static/icons/vuery.png')" />
    </div>
    <div
      class="ry-white-text ry-text-xxl ry-pd-top--20"
      style="font-weight: bolder"
    >
      "Vuery" - {{ $t('default:phrases.application') }}
    </div>
    <div class="ry-pd-top--20">
      <ElButton type="primary" size="large">{{
        $t('default:phrases.get_started')
      }}</ElButton>
    </div>
  </FlexBox>
</template>

<script lang="ts" setup>
import { FlexBox } from '@/components';
</script>

<style lang="scss" scoped>
.startup-scope {
  background: {
    size: percentage($number: 1) percentage($number: 1);
    repeat: no-repeat;
    position: 0 0;
  }
}
</style>
