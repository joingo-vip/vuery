<!--
  // *******************************************************************************************************************************************************
  // LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION. 
  // COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
  // *******************************************************************************************************************************************************
-->

<!--SizeListener.vue: 动态尺寸监听器组件-->
<template>
  <div v-resize:50.immediate="onResize" class="w-100p h-100p">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { resizeDirective as vResize } from 'v-resize-observer';
import { type SizeListenerEmits } from './defs';

/**
 * 定义了组件 “SizeListener.vue” 的事件。
 */
const $emits = defineEmits<SizeListenerEmits>();

/**
 * 用于处理 “Resize” 组件的 “Resize” 事件
 * @remarks
 *  用于处理 `v-resize-observer` 组件的 `resize` 事件。
 *
 * @private
 */
function onResize(e: any): void {
  /**
   * 触发组件的 “Resize” 事件。
   *
   * @private
   * @see {@link $emits}
   */
  function $onResize(): void {
    const payload: sys.ui.Size = { width: 0, height: 0 };
    if (e.width && typeof e.width === 'number') {
      payload.width = `${e.width}px`;
    } else {
      payload.width = e.width ?? '100%';
    }
    if (e.height && typeof e.height === 'number') {
      payload.height = `${e.height}px`;
    } else {
      payload.height = e.height ?? '100%';
    }

    $emits('resize', { payload });
  }

  console.debug(`[DEBUG] - <SizeListener.vue: 64d0c4>: 尺寸发生了变更。详情参见：%o`, e);

  $onResize();
}
</script>

<style lang="scss"></style>
