// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************

import '@joingo.vip/native-x';
import '@joingo.vip/core';
import { Version } from '@joingo.vip/core';
import ElementPlusComponentSet from 'element-plus';
import i18next from 'i18next';
import I18nextVue from 'i18next-vue';
import { App, createApp } from 'vue';
import {
  SimplifiedChineseLanguagePack,
  TraditionalChineseLanguagePack,
  UnitiedStatesAmericaLanguagePack,
  WebApplicationBuilder,
  type WebApplicationContext,
} from '~/lib/index.mjs';
import HomeApp from './Home.vue';

const appInstance: App = createApp(HomeApp);

new WebApplicationBuilder(appInstance, 'body')
  .configureAppVersion(new Version(1, 0, 0))
  .useI18n((_options) => {
    return {
      'resources': {
        'zh-Hans': SimplifiedChineseLanguagePack,
        'zh-Hant': TraditionalChineseLanguagePack,
        'en-US': UnitiedStatesAmericaLanguagePack,
      },
      'natural': 'zh-Hans',
      'resourceNamespace': 'exceptions',
    };
  })
  .use((context) => {
    (context as WebApplicationContext).appInstance
      .use(ElementPlusComponentSet, { size: 'default', zIndex: 3000 })
      .use(I18nextVue, { i18next });
  })
  .build()
  .run();
