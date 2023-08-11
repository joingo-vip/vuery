// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************

/**
 * 构建 Vuery 应用程序的模块。
 *
 * @remarks
 * "app-builder.ts": 构建 Vuery 应用程序的模块。
 *
 * @packageDocumentation
 */

import { App } from 'vue';

/**
 * 定义了 Vuery 应用程序的接口。
 * @author Wang Yucai
 *
 * @export
 * @interface IApplication
 * @typedef {IApplication}
 */
export interface IApplication {
  /**
   * 运行 Vuery 应用程序。
   * @author Wang Yucai
   */
  run(): void;
}

/**
 * 提供了 Vuery 应用程序相关的方法。
 * @author Wang Yucai
 *
 * @export
 * @class Application
 * @typedef {Application}
 * @implements {IApplication}
 */
export class Application implements IApplication {
  /**
   * Vue {@link App} 类型的对象实例。
   * @author Wang Yucai
   *
   * @protected
   * @readonly
   * @type {App}
   * @remarks
   * 获取 {@link App} 类型的对象实例，用于表示 Vue 应用程序对象实例。
   */
  protected readonly app: App;

  /**
   * {@link app} 的挂载点查询字符串。
   * @author Wang Yucai
   *
   * @protected
   * @readonly
   * @type {string}
   * @remarks
   * 获取一个字符串，用于表示 {@link app} 的挂载点查询字符串。
   */
  protected readonly selector: string;

  /**
   * 初始化 {@link Application} 的新实例。
   * @author Wang Yucai
   *
   * @constructor
   * @param {App} app {@link App} 类型的对象实例。
   * @param {(string | null)} [selector='body'] 挂载点查询字符串。
   */
  constructor(app: App, selector: string | null = 'body') {
    this.app = app;
    this.selector = String.isNullOrWhitespace(selector) ? 'body' : selector;
  }

  run(): void {
    console.debug(
      `[DEBUG] - <app-builder.ts: e46b67>: 尝试启动 Vuery 应用程序。`
    );
    this.app.mount(this.selector);
    console.debug(
      `[DEBUG] - <app-builder.ts: 6fd68d>: Vuery 应用程序已经启动。··`
    );
  }
}

/**
 * 定义了构建 Vuery 应用程序 {@link IApplication} 的接口。
 * @author Wang Yucai
 *
 * @export
 * @interface IAppBuilder
 * @typedef {IAppBuilder}
 */
export interface IAppBuilder {
  /**
   * 注册插件。
   * @author Wang Yucai
   *
   * @param {(app: App) => void} configure 插件配置方法。
   * @returns {IAppBuilder}
   * @see {@link App}
   */
  use(configure: (app: App) => void): IAppBuilder;

  /**
   * 构建应用程序 {@link IApplication} 类型的对象实例。
   * @author Wang Yucai
   *
   * @returns {IApplication}
   */
  build(): IApplication;
}

/**
 * 提供了构建 Vuery 应用程序相关的方法。
 * @author Wang Yucai
 *
 * @export
 * @class AppBuilder
 * @typedef {AppBuilder}
 * @implements {IAppBuilder}
 */
export class AppBuilder implements IAppBuilder {
  /**
   * Vue 应用程序对象实例。
   * @author Wang Yucai
   *
   * @protected
   * @readonly
   * @type {App}
   * @remarks
   * 获取 {@link App} 类型的对象实例，用于表示 Vue 应用程序。
   */
  protected readonly app: App;

  /**
   * Vue 应用程序 {@link app} 的挂载点查询字符串。
   * @author Wang Yucai
   *
   * @protected
   * @readonly
   * @type {string}
   * @remarks
   * 获取一个字符串，用于表示 Vue 应用程序 {@link app} 的挂载点查询字符串。
   */
  protected readonly selector: string;

  /**
   * 初始化 {@link AppBuilder} 的新实例。
   * @author Wang Yucai
   *
   * @constructor
   * @param {App} app Vue 应用程序对象实例。
   * @param {(string | null)} [selector='body'] Vue 应用程序 {@link app} 的挂载点查询字符串。
   */
  constructor(app: App, selector: string | null = 'body') {
    this.app = app;
    this.selector = String.isNullOrWhitespace(selector)
      ? 'body'
      : selector.trim();
  }

  use(configure: (app: App<any>) => void): IAppBuilder {
    configure(this.app);
    return this;
  }

  build(): IApplication {
    return new Application(this.app, this.selector);
  }
}
