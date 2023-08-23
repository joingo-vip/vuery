<!--
  // *******************************************************************************************************************************************************
  // LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION. 
  // COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
  // *******************************************************************************************************************************************************
-->

<!--ry-appbar.vue: 应用导航条布局组件-->
<template>
  <div class="ry-appbar">
    <FlexBoxWidget align-items="center" class="ry-h--100p">
      <div class="ry-appbar-item" v-show="appiconVisible">
        <MdiconWidget
          icon-name="mdiApps"
          class="ry-white-text ry-text-xxl ry-clickable"
          @click="onClick('app-icon')"
        />
      </div>
      <div class="ry-appbar-item" v-show="!String.isNullOrWhitespace(appTitle)">
        <span class="ry-text-reglar ry-white-text">{{ appTitle }}</span>
      </div>
      <div class="ry-appbar-item ry-flex-box--fill ry-h--100p ry-w--0">
        <FlexBoxWidget
          align-items="center"
          justify="flex-end"
          class="ry-h--100p"
        >
          <AppbarItemWidget v-show="userIconVisible">
            <ElPopover trigger="click" :width="300" :show-arrow="false">
              <template #reference>
                <MdiconWidget
                  icon-name="mdiAccountCircle"
                  class="ry-white-text ry-text-xxl ry-clickable"
                />
              </template>
              <div class="ry-appbar-userprofiler"></div>
            </ElPopover>
          </AppbarItemWidget>
        </FlexBoxWidget>
      </div>
    </FlexBoxWidget>
  </div>
</template>

<script lang="ts" setup>
import { FlexBoxWidget } from '../../container';
import { MdiconWidget } from '../../icons';
import AppbarItemWidget from './ry-appbar-item.vue';

/**
 * 定义了组件 “ry-appbar.vue” 的属性。
 */
const $props = defineProps({
  /**
   * 是否显示应用图标。
   */
  appIconVisible: {
    type: Boolean,
    default: true,
    required: false,
  },
  /**
   * 应用标题。
   */
  appTitle: {
    type: String,
    default: 'Vuery',
    required: false,
  },
  /**
   * 是否显示当前用户图标。
   */
  userIconVisible: {
    type: Boolean,
    default: true,
    required: false,
  },
});

/**
 * 定义了组件 “ry-appbar.vue” 的事件。
 */
const $emits = defineEmits<{
  click: [e: vuery.EventArgs<string>];
}>();

/**
 * 用于处理 “Appbar” 组件的 “Click” 事件
 *
 * @private
 */
function onClick(target: string): void {
  /**
   * 触发组件的 “Click” 事件。
   *
   * @private
   * @see {@link $emits}
   */
  function $onClick(): void {
    $emits('click', { payload: target });
  }

  console.debug(
    `[DEBUG] - <ry-appbar.vue: 506b89>: appbar 组件被单击 “${target}”。`
  );

  $onClick();
}
</script>
