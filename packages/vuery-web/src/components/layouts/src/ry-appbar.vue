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
      <div class="ry-appbar-item" v-show="appIconVisible">
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
          <slot name="actions" />
          <AppbarItemWidget v-show="settingsIconVisible">
            <MdiconWidget
              icon-name="mdiCog"
              class="ry-white-text ry-text-xxl ry-clickable"
              :title="
                $format(
                  '{0}{1}',
                  $t('default:words.preferences'),
                  $t('default:words.settings')
                )
              "
              @click="onClick('perference-settings')"
            />
          </AppbarItemWidget>
          <AppbarItemWidget v-show="translateIconVisible">
            <MdiconWidget
              icon-name="mdiTranslate"
              class="ry-white-text ry-text-xxl ry-clickable"
              :title="$t('default:phrases.languages')"
              @click="onClick('languages')"
            />
          </AppbarItemWidget>
          <AppbarItemWidget v-show="userIconVisible && currentUser">
            <ElPopover trigger="click" :width="200" :show-arrow="false">
              <template #reference>
                <MdiconWidget
                  icon-name="mdiAccount"
                  class="ry-white-text ry-text-xxl ry-clickable"
                />
              </template>
              <div class="ry-appbar-userprofiler">
                <div>
                  <FlexBoxWidget justify="center" align-items="center">
                    <div class="ry-appbar-userprofiler-gravatar">
                      <img
                        :src="$staticUri('static/icons/default-gravatar.png')"
                      />
                    </div>
                  </FlexBoxWidget>
                </div>
                <div class="ry-center-text">
                  <ElText truncate type="primary" class="ry-text-reglar">{{
                    currentUser?.user.userName
                  }}</ElText>
                </div>
                <div>
                  <FlexBoxWidget align-items="center" justify="center">
                    <ElButton
                      :title="$t('default:words.settings')"
                      plain
                      @click="onClick('settings')"
                    >
                      <MdiconWidget icon-name="mdiCog" />
                    </ElButton>
                    <ElButton type="primary" plain @click="onClick('sign-off')">
                      <MdiconWidget icon-name="mdiLogoutVariant" />
                      {{ $t('default:words.sign_off') }}
                    </ElButton>
                  </FlexBoxWidget>
                </div>
              </div>
            </ElPopover>
          </AppbarItemWidget>
        </FlexBoxWidget>
      </div>
    </FlexBoxWidget>
  </div>
</template>

<script lang="ts" setup>
import {
  IUserService,
  ServiceCollection,
  ServiceException,
  ServiceProvider,
} from '@vuery/services';
import { FlexBoxWidget } from '../../container';
import { MdiconWidget } from '../../icons';
import AppbarItemWidget from './ry-appbar-item.vue';
import { getDefaultNopersistentStore, getDefaultTransientStore } from '@/libs';
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';

const userService: IUserService =
  ServiceProvider.getRequiredService<IUserService>(
    ServiceCollection.UserService
  );

const nopersistentStore = getDefaultNopersistentStore();
const { currentUser } = storeToRefs(nopersistentStore);

const transientStore = getDefaultTransientStore();

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
  /**
   * 是否显示语言设置图标。
   */
  translateIconVisible: {
    type: Boolean,
    default: true,
    required: false,
  },
  /**
   * 是否显示设置图标。
   */
  settingsIconVisible: {
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

/**
 * (可等待的方法) 初始化组件。
 */
async function initializeComponent(): Promise<void> {
  try {
    const user = await userService.getAuthenticatedUserAsync();
    nopersistentStore.updateCurrentUser(user);
  } catch (error) {
    transientStore.catchServiceException(error as ServiceException);
  }
}

onMounted(async () => {
  await initializeComponent();
});
</script>
