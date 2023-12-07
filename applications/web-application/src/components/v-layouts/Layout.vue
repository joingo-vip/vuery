<!--
  // *******************************************************************************************************************************************************
  // LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION. 
  // COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
  // *******************************************************************************************************************************************************
-->

<!--Layout.vue: 布局容器组件-->
<template>
  <div role="v-layout" class="v-layout" :style="[$inlineOverridableStyles]">
    <!-- 组件：Layout.vue 主要布局区域。 -->
    <v-flexbox role="v-layout-primary" direction="column" class="v-layout__primary">
      <v-flexbox-item role="v-layout-primary-header" v-if="$hasHeaderSlot">
        <!-- 组件：Layout.vue 头部布局区域。 -->
        <header>
          <slot name="header" layout-role="header" />
        </header>
      </v-flexbox-item>
      <v-flexbox-item role="v-layout-primary-main" class="no-height" :scale-up="1">
        <!-- 组件：Layout.vue 主布局区域。 -->
        <main>
          <div class="h-100p w-100p">
            <!-- 组件：Layout.vue 内部布局区域。 -->
            <v-flexbox role="v-layout-content" class="h-100p" justify="space-between">
              <v-flexbox-item role="v-layout-content-leftside" class="h-100p" v-if="$hasLeftSlot">
                <!-- 组件：Layout.vue 左侧边栏布局区域。 -->
                <aside>
                  <slot name="left-side" layout-role="left-side" />
                </aside>
              </v-flexbox-item>
              <v-flexbox-item role="v-layout-content-placeholder" class="no-width h-100p" :scale-up="1">
                <!-- 组件：Layout.vue 内容布局区域。 -->
                <main>
                  <slot layout-role="main" />
                </main>
              </v-flexbox-item>
              <v-flexbox-item role="v-layout-content-rightside" class="h-100p" v-if="$hasRightSlot">
                <!-- 组件：Layout.vue 右侧边栏布局区域。 -->
                <aside>
                  <slot name="right-side" layout-role="right-side" />
                </aside>
              </v-flexbox-item>
            </v-flexbox>
          </div>
        </main>
      </v-flexbox-item>
      <v-flexbox-item role="v-layout-primary-footer" v-if="$hasFooterSlot">
        <!-- 组件：Layout.vue 脚部布局区域。 -->
        <footer>
          <slot name="footer" layout-role="footer" />
        </footer>
      </v-flexbox-item>
    </v-flexbox>
  </div>
</template>

<script lang="ts" setup>
import { computed, useSlots } from 'vue';
import { getOverridableStyles } from '~/lib/index.mjs';
import vFlexbox from '../v-flexbox/Flexbox.vue';
import vFlexboxItem from '../v-flexbox/FlexboxItem.vue';
import { type LayoutProperty, type LayoutSlots } from './defs';

const $runtimeSlots = useSlots();

/**
 * 定义了组件 “Layout.vue” 的属性。
 */
const $props = defineProps<LayoutProperty>();

/**
 *
 */
const $slots = defineSlots<LayoutSlots>();

/**
 * 可覆盖的内联私有样式。
 */
const $inlineOverridableStyles = computed<Record<string, any>>(() => {
  return getOverridableStyles($props.overridableStyles);
});

/**
 * 是否使用了 `header` 插槽。
 */
const $hasHeaderSlot = computed<boolean>(() => !Object.isNull($runtimeSlots['header']));

/**
 * 是否使用了 `footer` 插槽。
 */
const $hasFooterSlot = computed<boolean>(() => !Object.isNull($runtimeSlots['footer']));

/**
 * 是否使用了 `left-side` 插槽。
 */
const $hasLeftSlot = computed<boolean>(() => !Object.isNull($runtimeSlots['left-side']));

/**
 * 是否使用了 `right-side` 插槽。
 */
const $hasRightSlot = computed<boolean>(() => !Object.isNull($runtimeSlots['right-side']));
</script>

<style lang="scss">
@use './style/v-layout.scss';
</style>
