// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT ? 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************

import { App } from 'vue';
import formatImpl from 'string-template';

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
  registerGlobalExtensions(): RuntimeExtensions {
    console.debug(
      `[DEBUG] - <runtime-extensions.ts: 0bc88e>: 尝试注册 Vue 应用程序全局扩展方法 “$format”。`
    );

    this.m_app.config.globalProperties.$format = formatImpl;

    return this;
  }
}
