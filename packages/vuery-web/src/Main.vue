<!--
  // *******************************************************************************************************************************************************
  // LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION. 
  // COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
  // *******************************************************************************************************************************************************
-->

<template>
  <Application>
    <RouterView />
  </Application>
  <ServiceExceptionDialog />
</template>

<script lang="ts" setup>
import { Application, ServiceExceptionDialog } from '@/components';
import { getDefaultNopersistentStore, getDefaultTransientStore } from './libs';
import { storeToRefs } from 'pinia';
import {
  ServiceCollection,
  ServiceException,
  ServiceProvider,
} from '@vuery/services';
import { IUserService } from '@vuery/services';

const nopersistentStore = getDefaultNopersistentStore();
const transientStore = getDefaultTransientStore();
const { isAuthenticated } = storeToRefs(nopersistentStore);

/**
 * (可等待的方法) 初始化当前的用户信息。
 * @param _isAuthenticated 是否已经身份认证。
 */
async function initializeCurrentUser(_isAuthenticated: boolean): Promise<void> {
  if (_isAuthenticated) {
    try {
      const user = await ServiceProvider.getRequiredService<IUserService>(
        ServiceCollection.UserService
      ).getAuthenticatedUserAsync();
      nopersistentStore.updateCurrentUser(user);
    } catch (error) {
      transientStore.catchServiceException(error as ServiceException);
    }
  }
}

initializeCurrentUser(isAuthenticated.value).then(() => {});
</script>
