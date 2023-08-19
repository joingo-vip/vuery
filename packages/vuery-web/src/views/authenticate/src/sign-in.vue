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
      <div>
        <div>
          <!--
            视图：sign-in.vue - 登录输入控件区域。
            (标签：#effec8)
          -->
          <ElForm :model="formAuthenData" :rules="formAuthenDataRules">
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
                clearable
                :maxlength="8"
                :minlength="1"
              >
                <template #prefix>
                  <Mdicon icon-name="mdiSpellcheck" />
                </template>
                <template #suffix>
                  <InternalCaptcha />
                </template>
              </ElInput>
            </ElFormItem>
          </ElForm>
        </div>
      </div>
    </ElCard>
  </AnimateBox>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';

import { ElInput, FormRules } from 'element-plus';

import { AnimateBox, Mdicon } from '@/components';
import { SR } from '@vuery/runtime';
import { FormAuthenticationPayloadBase } from '@vuery/services';

import { InternalCaptcha, InternalTitlebar } from './components';

/**
 * 表单身份认证数据。
 */
const formAuthenData = reactive<FormAuthenticationPayloadBase>({
  userName: '',
  password: '',
  captcha: '',
});

/**
 * 表单身份认证数据校验规则。
 */
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
</script>

<style lang="scss" scoped>
@use '../style/sign-in.vue.scss';
</style>
