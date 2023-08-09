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

import { RuntimeExtensions } from '@vuery/runtime';
import { App, createApp } from 'vue';
import Main from './Main.vue';
import ElementPlus from 'element-plus';
import '@vuery/native';

/**
 * 配置应用程序。
 * @author Wang Yucai
 *
 * @param {App} app {@link App} 类型的对象实例。
 */
function configureApp(app: App): void {
  new RuntimeExtensions(app)
    .useExtensions()
    .use((_app) => {
      console.debug(`[DEBUG] - <main.ts: aedfad>: 尝试注册样式表。`);
      import('animate.css/animate.css');
      import('@mdi/font/css/materialdesignicons.css');
    })
    .use((_app) => {
      console.debug(
        `[DEBUG] - <main.ts: c44ac1>: 尝试注册 Element-Plus 组件库。`
      );
      _app.use(ElementPlus, { size: 'default', 'zIndex': 2023 });
    });
  app.mount('body');
}

configureApp(createApp(Main));
