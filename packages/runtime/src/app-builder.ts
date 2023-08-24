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

import i18next from 'i18next';
import { App } from 'vue';
import {
  SimplifiedChineseLanguagePack,
  UnitedStatesLanguagePack,
} from './resources';
import { Culture } from './globalization';
import merge from 'deepmerge';

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
   * 配置 Vuery 应用程序基础 URI 地址。
   * @author Wang Yucai
   *
   * @param {string} baseUri
   * @returns {IAppBuilder}
   */
  configureBaseUri(baseUri: string): IAppBuilder;

  /**
   * 配置 Vuery 默认语言。
   * @author Wang Yucai
   *
   * @param {(string | vuery.SupportedLanguage | null)} lng 默认的语言名称。
   * @returns {IAppBuilder}
   */
  configureDefaultLanguage(
    lng: string | vuery.SupportedLanguage | null
  ): IAppBuilder;

  /**
   * 配置多语言支持资源。
   * @author Wang Yucai
   *
   * @param {Record<string, any>} resources 资源包。
   * @returns {IAppBuilder}
   */
  configureMultilingualResources(resources: Record<string, any>): IAppBuilder;

  /**
   * 配置读取当前文化区域信息的工厂方法。
   * @author Wang Yucai
   *
   * @param {vuery.CurrentCultureInfoReadFunction} factory {@linkcode vuery.CurrentCultureInfoReadFunction} 类型的对象实例。
   * @returns {IAppBuilder}
   */
  configureCurrentCultureInfoFactory(
    factory: vuery.CurrentCultureInfoReadFunction
  ): IAppBuilder;

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

  private m_resources: Record<string, any> = {
    'zh-Hans': SimplifiedChineseLanguagePack,
    'en-US': UnitedStatesLanguagePack,
  };

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

  configureCurrentCultureInfoFactory(
    factory: vuery.CurrentCultureInfoReadFunction
  ): IAppBuilder {
    console.debug(
      `[DEBUG] - <app-builder.ts: c89dcf>: 尝试配置读取当前文化区域设置的工厂方法。`
    );

    window.__getCurrentCulture = factory;

    return this;
  }

  configureMultilingualResources(resources: Record<string, any>): IAppBuilder {
    this.m_resources = merge(this.m_resources, resources);
    return this;
  }

  configureDefaultLanguage(lng: string): IAppBuilder {
    window.__VUERY_DEFAULT_LANGUAGE = lng ?? 'zh-Hans';
    return this;
  }

  configureBaseUri(baseUri: string): IAppBuilder {
    window.__VUERY_BASE_URI = baseUri;
    return this;
  }

  use(configure: (app: App<any>) => void): IAppBuilder {
    configure(this.app);
    return this;
  }

  /**
   * 配置 Vue 应用程序扩展方法。
   * @author Wang Yucai
   *
   * @protected
   */
  protected configureFunctionEx(): void {
    console.debug(
      `[DEBUG] - <app-builder.ts: 01f9a7>: 尝试配置 Vue 应用程序扩展。`
    );
    this.app.config.globalProperties.$format = String.format;
    this.app.config.globalProperties.$staticUri = String.getStaticResourceUri;
    console.debug(
      `[DEBUG] - <app-builder.ts: be9406>: Vue 应用程序扩展注册完成。`
    );
  }

  /**
   * 配置 {@link https://www.npmjs.com/package/i18next} 多语言支持。
   * @author Wang Yucai
   *
   * @protected
   * @see {@link https://www.npmjs.com/package/i18next}
   */
  protected configureI18next(): void {
    console.debug(
      `[DEBUG] - <app-builder.ts: abf20f>: 尝试配置 i18next 多语言支持资源包。详情参见：%o`,
      this.m_resources
    );
    i18next.init({
      lng: window.__VUERY_DEFAULT_LANGUAGE,
      defaultNS: 'default',
      resources: this.m_resources,
    });
    if (!window.__getCurrentCulture) {
      console.warn(
        `[WARN] - <app-builder.ts: 7a195f>: 设置默认的获取当前的文化区域信息的工厂方法。`
      );

      window.__getCurrentCulture = Culture.getCurrentCulture;
    }
  }

  build(): IApplication {
    this.configureFunctionEx();
    this.configureI18next();
    return new Application(this.app, this.selector);
  }
}
