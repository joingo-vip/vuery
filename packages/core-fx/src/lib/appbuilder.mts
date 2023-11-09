// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************

import { CultureInfo, type I18nMiddlewareOptions } from './globalization.mjs';
import { SimplifiedChineseLanguagePack, TraditionalChineseLanguagePack, UnitedStatesLanguagePack } from './i18n/index.mjs';
import i18next, { InitOptions } from 'i18next';
import { SdkVersion, Version } from './version.mjs';

/**
 * 提供了应用程序相关的基本方法。
 * @author Wang Yucai
 *
 * @export
 * @abstract
 * @class Application
 * @typedef {Application}
 */
export abstract class Application {
  /**
   * 应用程序版本号。
   * @author Wang Yucai
   *
   * @type {Version}
   */
  applicationVersion: Version;

  /**
   * 初始化 {@linkcode Application} 的新实例。
   * @author Wang Yucai
   *
   * @constructor
   * @protected
   */
  protected constructor() {
    this.applicationVersion = SdkVersion;
  }

  /**
   * 启动应用程序。
   * @author Wang Yucai
   *
   * @abstract
   */
  abstract run(): void;
}

/**
 * 定义了应用上下文类型。
 * @author Wang Yucai
 *
 * @export
 * @interface ApplicationContext
 * @typedef {ApplicationContext}
 */
export interface ApplicationContext {}

/**
 * 无返回值的应用程序中间件方法委托。
 * @author Wang Yucai
 *
 * @export
 * @typedef {ApplicationMiddleware}
 */
export type ApplicationMiddleware = sys.Action1<ApplicationContext>;

/**
 * 提供了构建应用程序相关的基本方法。
 * @author Wang Yucai
 *
 * @export
 * @abstract
 * @class ApplicationBuilder
 * @typedef {ApplicationBuilder}
 */
export abstract class ApplicationBuilder {
  /**
   * 初始化 {@linkcode ApplicationBuilder} 的新实例。
   * @author Wang Yucai
   *
   * @constructor
   * @protected
   */
  protected constructor() {
    __JOINGO_APPLICATION_VERSION__ = this.applicationVersion = SdkVersion.toString();
  }

  /**
   * 构建应用程序。
   * @author Wang Yucai
   *
   * @abstract
   * @returns {Application}
   */
  abstract build(): Application;

  /**
   * 应用程序版本号。
   * @author Wang Yucai
   *
   * @protected
   * @type {string}
   */
  protected applicationVersion: string;

  /**
   * 配置当前的应用程序版本。
   * @author Wang Yucai
   *
   * @param {(string | Version)} version 版本号。
   * @returns {ApplicationBuilder}
   */
  configureAppVersion(version: string | Version): ApplicationBuilder {
    if (typeof version === 'string') {
      this.applicationVersion = version;
    } else {
      this.applicationVersion = version.toString();
    }
    __JOINGO_APPLICATION_VERSION__ = this.applicationVersion;
    return this;
  }

  /**
   * 创建应用程序上下文。
   * @author Wang Yucai
   *
   * @protected
   * @abstract
   * @returns {ApplicationContext}
   */
  protected abstract createAppContext(): ApplicationContext;

  /**
   * 使用指定的应用程序中间件。
   * @author Wang Yucai
   *
   * @param {ApplicationMiddleware} middleware 中间件函数。
   * @returns {ApplicationBuilder}
   */
  use(middleware: ApplicationMiddleware): ApplicationBuilder {
    middleware(this.createAppContext());
    return this;
  }

  useI18n(configure?: sys.Func1<I18nMiddlewareOptions, I18nMiddlewareOptions>): ApplicationBuilder {
    let defaultOptions: I18nMiddlewareOptions = {
      natural: CultureInfo.natural.name,
      resourceNamespace: 'exceptions',
      resources: {
        'zh-Hans': SimplifiedChineseLanguagePack.resourceNamespaces,
        'zh-Hant': TraditionalChineseLanguagePack.resourceNamespaces,
        'en-US': UnitedStatesLanguagePack.resourceNamespaces,
      },
    };
    if (!Object.isNull(configure)) {
      const options = configure(defaultOptions);
      defaultOptions = Object.extends(defaultOptions, options);
    }
    console.debug(
      `[DEBUG] - <appbuilder.mts: 98492f>: Try to initialize the i18next middleware service. See details: %o`,
      defaultOptions
    );
    const initOptions: InitOptions = {
      lng: defaultOptions.natural,
      resources: defaultOptions.resources,
      defaultNS: defaultOptions.resourceNamespace,
      debug: true,
    };
    i18next.init(initOptions);
    return this;
  }
}
