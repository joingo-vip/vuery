<!--
  // *******************************************************************************************************************************************************
  // LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION. 
  // COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
  // *******************************************************************************************************************************************************
-->

<!--Processbox.vue: 包含了处理状态组件-->
<template>
  <div role="v-processbox" class="v-processbox">
    <div class="v-processbox__prompt" v-show="inProcessing">
      <div class="is-relative w-100p h-100p">
        <v-flexbox justify="center" align-items="center" class="w-100p h-100p">
          <v-flexbox-item>
            <div role="spinner">
              <v-flexbox align-items="center">
                <v-flexbox-item>
                  <v-mdi icon-name="TimerSand" color="primary" :size="36" use-spin></v-mdi>
                </v-flexbox-item>
                <v-flexbox-item>
                  <div class="pd-lt-10">
                    <div class="pd-5 primary-text bold-text">{{ `${$t('default:tip')}` }}</div>
                    <div class="pd-5 primary-text bold-text small-text">{{ $promptText }}</div>
                  </div>
                </v-flexbox-item>
              </v-flexbox>
            </div>
          </v-flexbox-item>
        </v-flexbox>
      </div>
    </div>
    <div class="w-100p h-100p is-relative">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { SR } from '@joingo.vip/core';
import vFlexbox from '../v-flexbox/Flexbox.vue';
import vFlexboxItem from '../v-flexbox/FlexboxItem.vue';
import vMdi from '../v-mdi/Mdi.vue';
import { type ProcessBoxProperty } from './defs';

/**
 * 定义了组件 “Processbox.vue” 的属性。
 */
const $props = withDefaults(defineProps<ProcessBoxProperty>(), {
  inProcessing: false,
});

/**
 * 数据处理中提示文本内容。
 */
const $promptText = computed<string>(() => {
  return String.isNullOrWhitespace($props.prompt) ? SR.getString('default:loadingPrompt') : $props.prompt;
});
</script>

<style lang="scss">
@use './style/v-processbox.scss';
</style>
