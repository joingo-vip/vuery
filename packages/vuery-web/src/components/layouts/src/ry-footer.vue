<!--
  // *******************************************************************************************************************************************************
  // LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION. 
  // COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
  // *******************************************************************************************************************************************************
-->

<!--ry-footer.vue: 页脚布局组件-->
<template>
  <div class="ry-footer">
    <FlexBoxWidget justify="center" align-items="center" class="ry-h--100p">
      <div class="ry-footer-item">
        <span class="ry-text-sm ry-info-text">{{
          $format(
            $t('default:templates.copyright'),
            currentYear,
            $t('default:application.corporation')
          )
        }}</span>
      </div>
      <slot name="items" />
    </FlexBoxWidget>
  </div>
</template>

<script lang="ts" setup>
import { FlexBoxWidget } from '../../container';

const currentYear = Date.current().getFullYear();
</script>
