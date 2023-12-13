<!--
  // *******************************************************************************************************************************************************
  // LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION. 
  // COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
  // *******************************************************************************************************************************************************
-->

<!--DataContainer.vue: 数据容器组件-->
<template>
  <div role="v-databox" class="v-databox">
    <v-flexbox class="w-100p h-100p" direction="column">
      <v-flexbox-item class="w-100p" v-if="$hasSearchAreaSlot">
        <div class="v-databox__item v-databox__search-area">
          <slot name="search-area" />
        </div>
      </v-flexbox-item>
      <v-flexbox-item class="w-100p" v-if="$hasActionsBarSlot">
        <div class="v-databox__item">
          <slot name="actions-bar" />
        </div>
      </v-flexbox-item>
      <v-flexbox-item class="w-100p no-height" :scale-up="1">
        <div class="v-databox__item h-100p">
          <slot />
        </div>
      </v-flexbox-item>
      <v-flexbox-item class="w-100p" v-if="$hasFooterSlot">
        <div class="v-databox__item">
          <slot />
        </div>
      </v-flexbox-item>
    </v-flexbox>
  </div>
</template>

<script lang="ts" setup>
import { computed, useSlots } from 'vue';
import vFlexbox from '../v-flexbox/Flexbox.vue';
import vFlexboxItem from '../v-flexbox/FlexboxItem.vue';

/**
 * 运行时插槽。
 */
const $runtimeSlots = useSlots();

/**
 * 是否使用了查询区域插槽。
 */
const $hasSearchAreaSlot = computed<boolean>(() => !Object.isNull($runtimeSlots['search-area']));

/**
 * 是否使用了操作条插槽。
 */
const $hasActionsBarSlot = computed<boolean>(() => !Object.isNull($runtimeSlots['actions-bar']));

/**
 * 是否使用了脚部插槽。
 */
const $hasFooterSlot = computed<boolean>(() => !Object.isNull($runtimeSlots['footer']));
</script>

<style lang="scss">
@use './style/v-databox.scss';
</style>
