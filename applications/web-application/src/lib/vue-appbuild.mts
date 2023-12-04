// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************

import { Application, ApplicationBuilder, ApplicationContext, sealed } from '@joingo.vip/core';
import { type App } from 'vue';

/**
 * 提供了适用于桌面浏览器的 WEB 应用程序相关的方法。密闭的，不可以从此类型派生。
 * @author Wang Yucai
 * @remarks
 *  密闭的，不可以从此类型派生。
 *
 * @export
 * @class WebApplication
 * @typedef {WebApplication}
 * @extends {Application}
 */
@sealed
export class WebApplication extends Application {
  private readonly m_appInstance: App;
  private readonly m_mountedSelector: string;

  /**
   * 初始化 {@linkcode WebApplication} 的新实例。
   * @author Wang Yucai
   *
   * @constructor
   * @param {App} app Vue 应用程序实例。
   * @param {string} [mountedSelector='body'] Vue 挂载点查询符。
   */
  constructor(app: App, mountedSelector: string = 'body') {
    super();
    this.m_appInstance = app;
    this.m_mountedSelector = mountedSelector ?? 'body';
  }

  run(): void {
    this.m_appInstance.mount(this.m_mountedSelector);
  }
}

/**
 * 定义了 WEB 应用程序上下文。
 * @author Wang Yucai
 *
 * @export
 * @interface WebApplicationContext
 * @typedef {WebApplicationContext}
 * @extends {ApplicationContext}
 */
export interface WebApplicationContext extends ApplicationContext {
  /**
   * Vue 应用程序 {@linkcode App} 类型的对象实例。
   * @author Wang Yucai
   *
   * @readonly
   * @type {App}
   */
  readonly appInstance: App;

  /**
   * 应用程序版本号。
   * @author Wang Yucai
   *
   * @readonly
   * @type {string}
   */
  readonly applicationVersion: string;
}

/**
 * 提供了构建 {@linkcode WebApplication} 类型的对象实例相关的方法。密闭的，不可以从此类型派生。
 * @author Wang Yucai
 * @remarks
 *  密闭的，不可以从此类型派生。
 *
 * @export
 * @class WebApplicationBuilder
 * @typedef {WebApplicationBuilder}
 * @extends {ApplicationBuilder}
 */
export class WebApplicationBuilder extends ApplicationBuilder {
  private readonly m_appInstance: App;
  private readonly m_mountedSelector: string;

  /**
   * 初始化 {@linkcode WebApplicationBuilder} 的新实例。
   * @author Wang Yucai
   *
   * @constructor
   * @param {App} app {@linkcode App} 类型的对象实例。
   * @param {string} [mountedSelector='body'] Vue 应用程序挂载点查询字符串。
   */
  constructor(app: App, mountedSelector: string = 'body') {
    super();
    this.m_appInstance = app;
    this.m_mountedSelector = mountedSelector;
  }

  /** {@inheritdoc Application} */
  build(): Application {
    const application = new WebApplication(this.m_appInstance, this.m_mountedSelector);
    return application;
  }

  protected createAppContext(): ApplicationContext {
    const webAppContext: WebApplicationContext = {
      appInstance: this.m_appInstance,
      applicationVersion: this.applicationVersion,
    };

    return webAppContext;
  }
}
