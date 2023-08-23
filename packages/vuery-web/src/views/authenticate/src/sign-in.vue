<!--
  // *******************************************************************************************************************************************************
  // LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION. 
  // COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
  // *******************************************************************************************************************************************************
-->

<!--sign-in.vue: 身份认证登录视图-->
<template>
  <AnimateBox>
    <ElCard
      class="scoped-partial"
      style="--el-card-border-color: var(--ry-white)"
    >
      <template #header>
        <InternalTitlebar :title-text="$t('default:words.sign_in')" />
      </template>
      <div
        v-loading="signingIn"
        :element-loading-text="$t('prompts:is_signing')"
      >
        <div>
          <!--
            视图：sign-in.vue - 登录输入控件区域。
            (标签：#effec8)
          -->
          <ElForm
            ref="authenForm"
            :model="formAuthenData"
            :rules="formAuthenDataRules"
          >
            <ElFormItem prop="userName">
              <ElInput
                v-model="formAuthenData.userName"
                :placeholder="$t('prompts:user_name.placeholder')"
                clearable
              >
                <template #prefix>
                  <Mdicon icon-name="mdiAccountOutline" />
                </template>
              </ElInput>
            </ElFormItem>
            <ElFormItem prop="password">
              <ElInput
                v-model="formAuthenData.password"
                :placeholder="$t('prompts:password.placeholder')"
                clearable
                type="password"
                show-password
              >
                <template #prefix>
                  <Mdicon icon-name="mdiFormTextboxPassword" />
                </template>
              </ElInput>
            </ElFormItem>
            <ElFormItem prop="captcha">
              <ElInput
                v-model="formAuthenData.captcha"
                :placeholder="$t('prompts:captcha.placeholder')"
                :maxlength="8"
                :minlength="1"
              >
                <template #prefix>
                  <Mdicon icon-name="mdiSpellcheck" />
                </template>
                <template #suffix>
                  <InternalCaptcha
                    ref="captcha"
                    @refreshed="onCaptchaRefreshed"
                  />
                </template>
              </ElInput>
            </ElFormItem>
          </ElForm>
        </div>
        <div>
          <ElButton
            type="primary"
            class="ry-w--100p"
            @click="onSignInButtonClick"
            >{{ $t('default:words.sign_in') }}</ElButton
          >
        </div>
      </div>
    </ElCard>
  </AnimateBox>
</template>

<script lang="ts" setup>
import { getCurrentInstance, reactive, ref } from 'vue';

import { ElInput, FormInstance, FormRules } from 'element-plus';
import { useRoute, useRouter } from 'vue-router';

import { AnimateBox, Mdicon } from '@/components';
import { getDefaultNopersistentStore, getDefaultTransientStore } from '@/libs';
import { SR } from '@vuery/runtime';
import {
  FormAuthenticationPayloadBase,
  IAuthenticationService,
  ServiceCollection,
  ServiceProvider,
} from '@vuery/services';

import { InternalCaptcha, InternalTitlebar } from './components';

/**
 * Vue 应用程序上下文信息。
 */
const $context = getCurrentInstance();

/**
 * 当前组件的路由上下文。
 */
const $routeContext = {
  /**
   * 全局路由管理程序。
   */
  router: useRouter(),
  /**
   * 当前的路由信息。
   */
  route: useRoute(),
};

const nopersistentStore = getDefaultNopersistentStore();
const transientStore = getDefaultTransientStore();
const authenService =
  ServiceProvider.getRequiredService<IAuthenticationService>(
    ServiceCollection.FormAuthenticationService
  );

const formAuthenData = reactive<FormAuthenticationPayloadBase>({
  userName: '',
  password: '',
  captcha: '',
});

const formAuthenDataRules = reactive<FormRules<FormAuthenticationPayloadBase>>({
  userName: [
    {
      required: true,
      trigger: 'change',
      message() {
        return SR.getString('user_name.placeholder', 'prompts');
      },
    },
  ],
  password: [
    {
      required: true,
      trigger: 'change',
      message() {
        return SR.getString('password.placeholder', 'prompts');
      },
    },
  ],
  captcha: [
    {
      required: true,
      trigger: 'change',
      message() {
        return SR.getString('captcha.placeholder', 'prompts');
      },
    },
  ],
});

const signingIn = ref<boolean>(false);
const captchaChecksums = ref<string>('');

/**
 * 用于处理 “ElementPlus Button” 组件的 “SignInButtonClick” 事件
 *
 * @private
 */
function onSignInButtonClick(): void {
  const $authenForm = $context?.proxy?.$refs['authenForm'] as FormInstance;
  $authenForm.validate().then(() => {
    signingIn.value = true;
    authenService
      .signInAsync({
        userName: formAuthenData.userName,
        password: formAuthenData.password,
        captcha: formAuthenData.captcha,
        captchaChecksum: captchaChecksums.value,
      })
      .then((token) => {
        authenService.authorize(token);
        nopersistentStore.authorize();

        const redirectRoute: string =
          $routeContext.route.query['rp']?.toString() ?? '';
        if (String.isNullOrWhitespace(redirectRoute)) {
          $routeContext.router.push({ path: '/home' });
        } else {
          $routeContext.router.push({ path: redirectRoute });
        }
      })
      .catch((error: any) => {
        transientStore.catchServiceException(error);
      })
      .finally(() => {
        $context?.proxy?.$refs['captcha'].refresh();
        signingIn.value = false;
      });
  });
}

/**
 * 用于处理 “Captcha” 组件的 “CaptchaRefreshed” 事件
 *
 * @private
 */
function onCaptchaRefreshed(e: vuery.EventArgs<string>): void {
  captchaChecksums.value = e.payload;
}
</script>

<style lang="scss" scoped>
@use '../style/sign-in.vue.scss';
</style>
