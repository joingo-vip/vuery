<!--
  // *******************************************************************************************************************************************************
  // LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION. 
  // COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
  // *******************************************************************************************************************************************************
-->

<!--AppBar.vue: 应用头部导航条组件-->
<template>
  <div class="v-app-bar" :style="[$inlineOverridableStyles]">
    <v-flexbox align-items="center">
      <v-flexbox-item
        class="v-app-bar__icon"
        v-if="$showAppIcon"
        :style="{ backgroundImage: `url(${appIconUrl})` }"
        :class="{ 'clickable': appIconClickable }"
        :title="title"
        @click="onAppIconClick"
      ></v-flexbox-item>
      <v-flexbox-item v-if="(title ?? '').trim() !== ''">
        <span
          :title="title"
          class="pd-lt-5 v-app-bar__title upper-text"
          :class="{ 'clickable': appIconClickable }"
          @click="onAppIconClick"
          >{{ title }}</span
        >
      </v-flexbox-item>
    </v-flexbox>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { getOverridableStyles } from '~/lib/index.mjs';
import vFlexbox from '../v-flexbox/Flexbox.vue';
import vFlexboxItem from '../v-flexbox/FlexboxItem.vue';
import { type AppBarProperty, type AppBarEmits } from './defs';

/**
 * 定义了组件 “AppBar.vue” 的属性。
 */
const $props = defineProps<AppBarProperty>();

/**
 * 定义了组件 “AppBar.vue” 的事件。
 */
const $emits = defineEmits<AppBarEmits>();

/**
 * 内联的可覆盖样式。
 */
const $inlineOverridableStyles = computed<Record<string, any>>(() => getOverridableStyles($props.overridableStyles));

/**
 * 是否显示应用图标。
 */
const $showAppIcon = computed<boolean>(() => {
  return (
    String.isNullOrWhitespace($props.appIconVisibility) ||
    (($props.appIconVisibility ?? 'visible') === 'visible' && !String.isNullOrWhitespace($props.appIconUrl))
  );
});

/**
 * 用于处理 “HTML” 组件的 “AppIconClick” 事件。
 * @remarks
 *  应用图标单击事件处理方法。
 *
 * @private
 */
function onAppIconClick(): void {
  /**
   * 触发组件的 “AppIconClick” 事件。
   *
   * @private
   * @see {@link $emits}
   */
  function $onAppIconClick(): void {
    $emits('app-icon-click', {});
  }

  if (console.debugIf($props.appIconClickable, `[DEBUG] - <AppBar.vue: 3fd9f2>: 应用图标被单击了一次。`)) {
    $onAppIconClick();
  }
}
</script>

<style lang="scss">
@use './style/v-app-bar.scss';
</style>
