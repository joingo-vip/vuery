<!--
  // *******************************************************************************************************************************************************
  // LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION. 
  // COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
  // *******************************************************************************************************************************************************
-->

<!--ActionArea.vue: 数据操作区组件-->
<template>
  <div role="v-action-area" class="v-action-area">
    <v-flexbox class="w-100p h-100p" direction="column">
      <v-flexbox-item class="w-100p" v-if="$useTitle">
        <div v-if="!$hasTitleSlots" class="v-action-area__title">{{ title }}</div>
        <div v-else>
          <slot name="title" />
        </div>
      </v-flexbox-item>
      <v-flexbox-item class="w-100p no-height" :scale-up="1">
        <div class="v-action-area__content is-block h-100p">
          <slot />
        </div>
      </v-flexbox-item>
    </v-flexbox>
  </div>
</template>

<script lang="ts" setup>
import { type ActionAreaProperty } from './defs';
import { computed, useSlots } from 'vue';
import vFlexbox from '../v-flexbox/Flexbox.vue';
import vFlexboxItem from '../v-flexbox/FlexboxItem.vue';

const $runtimeSlots = useSlots();

/**
 * 定义了组件 “ActionArea.vue” 的属性。
 */
const $props = defineProps<ActionAreaProperty>();

/**
 * 是否使用操作区标题。
 */
const $useTitle = computed<boolean>(() => !String.isNullOrWhitespace($props.title) || !Object.isNull($runtimeSlots['title']));

/**
 * 是否使用的操作区标题插槽。
 */
const $hasTitleSlots = computed<boolean>(() => !Object.isNull($runtimeSlots['title']));
</script>

<style lang="scss">
@use './style/v-action-area.scss';
</style>
