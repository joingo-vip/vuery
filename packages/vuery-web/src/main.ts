// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************

/**
 * Vuery 主应用程序入口。
 *
 * @remarks
 * "main.ts": Vuery 主应用程序入口。
 *
 * @packageDocumentation
 */

import { AppBuilder } from '@vuery/runtime';
import { createApp } from 'vue';
import Main from './Main.vue';
import ElementPlus from 'element-plus';
import '@vuery/native';
import i18next from 'i18next';
import I18nextVue from 'i18next-vue';

new AppBuilder(createApp(Main), 'body')
  .configureBaseUri(import.meta.env.BASE_URL)
  .configureDefaultLanguage(import.meta.env.RUNTIME_DEFAULT_LANGUAGE)
  .use(() => {
    console.debug(`[DEBUG] - <main.ts: 00160e>: 注册全局样式表。`);
    import('@mdi/font/css/materialdesignicons.css');
    import('animate.css/animate.css');
    import('@/assets/overrides/element-plus.scss');
    import('@/assets/index.scss');
  })
  .use((app) => {
    app.use(ElementPlus, { size: 'default', 'zIndex': 2023 });
  })
  .use((app) => {
    app.use(I18nextVue, { i18next });
  })
  .build()
  .run();
