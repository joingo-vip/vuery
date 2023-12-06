<!--
  // *******************************************************************************************************************************************************
  // LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION. 
  // COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
  // *******************************************************************************************************************************************************
-->

<!--BasicAuthentication.vue: 基础身份视图-->
<template>
  <div class="animate__animated animate__slideInRight">
    <div>
      <el-form>
        <el-form-item>
          <el-input size="large" :placeholder="$t('fields:userName.placeholder')" v-model="userName"> </el-input>
        </el-form-item>
        <el-form-item>
          <el-input type="password" size="large" :placeholder="$t('fields:password.placeholder')" v-model="password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input size="large" :placeholder="$t('fields:validationCode.placeholder')" v-model="validationCode"></el-input>
        </el-form-item>
        <el-form-item>
          <el-switch
            active-color="var(--v-warning)"
            :inactive-value="false"
            :active-value="true"
            v-model="rememberMe"
          ></el-switch>
          <span class="warning-text bold-text pd-lt-20">{{ $t('default:words.rememberMe') }}</span>
        </el-form-item>
        <el-form-item>
          <el-button size="large" class="is-block w-100p large-text" type="warning">{{ $t('default:words.signIn') }}</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

/**
 * 登录账户名。
 */
const userName = ref<string>('');

/**
 * 登录口令。
 */
const password = ref<string>('');

/**
 * 验证码。
 */
const validationCode = ref<string>('');

/**
 * 记住我标记。
 */
const rememberMe = ref<boolean>(false);
</script>

<style lang="scss" scoped></style>
