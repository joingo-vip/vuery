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

import { DefaultRouteManager } from '@/libs';
import '@vuery/native';
import '@vuery/services';
import { AppBuilder } from '@vuery/runtime';
import ElementPlus from 'element-plus';
import i18next from 'i18next';
import I18nextVue from 'i18next-vue';
import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import { createApp } from 'vue';
import Main from './Main.vue';

new AppBuilder(createApp(Main), 'body')
  .configureBaseUri(import.meta.env.BASE_URL)
  .configureDefaultLanguage(import.meta.env.RUNTIME_DEFAULT_LANGUAGE)
  .configureServiceBaseUri(import.meta.env.RUNTIME_WEBAPI_BASEURL)
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
  .use((app) => {
    DefaultRouteManager.current.configure(app);
  })
  .use((app) => {
    const pinia = createPinia();
    pinia.use(piniaPluginPersistedstate);
    app.use(pinia);
  })
  .build()
  .run();
