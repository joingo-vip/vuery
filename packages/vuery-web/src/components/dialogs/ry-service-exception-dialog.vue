<!--
  // *******************************************************************************************************************************************************
  // LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION. 
  // COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
  // *******************************************************************************************************************************************************
-->

<!--ry-service-exception-dialog.vue: 服务异常对话框组件-->
<template>
  <ElDialog
    width="500px"
    v-model="anExceptionWasThrown"
    draggable
    :show-close="false"
    @close="onDialogClosed"
  >
    <template #header>
      <FlexBoxWidget align-items="center">
        <MdiconWidget icon-name="mdiAlert" class="ry-error-text ry-text-xxl" />
        <span class="ry-bold-text ry-error-text ry-text-lg ry-pd-left--10">{{
          $t('default:words.service_exception')
        }}</span>
      </FlexBoxWidget>
    </template>
    <div>
      <div class="ry-h--100">
        <ScrollableBoxWidget>
          {{ serviceException?.message }}
          <div v-show="serviceException?.serviceMessage" class="ry-pd--10">
            {{
              $format(
                '{0}{1}{2}',
                $t('default:phrases.exception_detailed'),
                $t('default:symbols.colon'),
                serviceException?.serviceMessage
              )
            }}
          </div>
        </ScrollableBoxWidget>
      </div>
    </div>
    <template #footer>
      <FlexBoxWidget justify="flex-end" align-items="center">
        <ElButton type="danger" text @click="onCloseButtonClick">{{
          $t('default:words.close')
        }}</ElButton>
      </FlexBoxWidget>
    </template>
  </ElDialog>
</template>

<script lang="ts" setup>
import { getDefaultTransientStore } from '@/libs';
import { storeToRefs } from 'pinia';
import { ref } from 'vue';
import { MdiconWidget } from '../icons';
import { FlexBoxWidget, ScrollableBoxWidget } from '../container';

const transientStore = getDefaultTransientStore();

const { serviceException } = storeToRefs(transientStore);
const anExceptionWasThrown = ref<boolean>(false);

transientStore.$subscribe((_mutation, state) => {
  anExceptionWasThrown.value = !Object.isNull(state.serviceException);
});

/**
 * 用于处理 “ElementPlus Dialog” 组件的 “DialogClosed” 事件
 *
 * @private
 */
function onDialogClosed(): void {
  transientStore.clearServiceException();
}

/**
 * 用于处理 “ElementPlus Button” 组件的 “CloseButtonClick” 事件
 *
 * @private
 */
function onCloseButtonClick(): void {
  transientStore.clearServiceException();
  anExceptionWasThrown.value = false;
}
</script>
