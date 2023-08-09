// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************

/// <reference types="@vuery/native" />

import { App } from 'vue';

/**
 * 定义了配置 {@link https://www.npmjs.com/package/vue} 应用程序方法委托。
 * @author Wang Yucai
 *
 * @interface RuntimeConfigureFunction
 * @typedef {RuntimeConfigureFunction}
 */
interface RuntimeConfigureFunction {
  /**
   * 定义了配置 {@link https://www.npmjs.com/package/vue} 应用程序方法委托。
   * @author Wang Yucai
   *
   * @param {App} app {@link App} 类型的对象实例。
   */
  (app: App): void;
}

/**
 * 提供了 Vue 运行时相关的扩展方法。
 * @author Wang Yucai
 *
 * @export
 * @class RuntimeExtensions
 * @typedef {RuntimeExtensions}
 */
export class RuntimeExtensions {
  private readonly m_app: App;

  /**
   * 初始化 {@link RuntimeExtensions} 的新实例。
   * @author Wang Yucai
   *
   * @constructor
   * @param {App} app Vue 应用程序对象实例。
   */
  constructor(app: App) {
    this.m_app = app;
  }

  /**
   * 注册 Vue 应用程序全局扩展。
   * @author Wang Yucai
   *
   * @returns {RuntimeExtensions}
   */
  useExtensions(): RuntimeExtensions {
    console.debug(
      `[DEBUG] - <runtime-extensions.ts: 0bc88e>: 尝试注册 Vue 应用程序全局扩展方法 “$format”。`
    );

    this.m_app.config.globalProperties.$format = String.format;

    return this;
  }

  /**
   * 注册 Vue 插件。
   * @author Wang Yucai
   *
   * @param {RuntimeConfigureFunction} configure 配置 Vue 应用程序插件的方法。
   * @returns {RuntimeExtensions}
   */
  use(configure: RuntimeConfigureFunction): RuntimeExtensions {
    console.debug(
      `[DEBUG] - <runtime-extensions.ts: 113899>: 尝试配置 Vue 应用程序插件。`
    );

    configure(this.m_app);

    return this;
  }
}
