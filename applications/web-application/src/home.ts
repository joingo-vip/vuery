// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************

import '@joingo.vip/native-x';
import '@joingo.vip/core';
import ElementPlusComponentSet from 'element-plus';
import { App, createApp } from 'vue';
import { WebApplicationBuilder, type WebApplicationContext } from '~/lib/index.mjs';
import HomeApp from './Home.vue';

const appInstance: App = createApp(HomeApp);

new WebApplicationBuilder(appInstance, 'body')
  .use((context) => {
    (context as WebApplicationContext).appInstance.use(ElementPlusComponentSet, { size: 'default', zIndex: 3000 });
  })
  .build();
