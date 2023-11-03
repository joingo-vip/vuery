// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************

import { changeLanguage } from 'i18next';
import { sealedDecorator as sealed } from './sealed-decorator.mjs';

let __JOINGO_NATURAL_CULTUREINFO_MAP__: string = 'zh-Hans';
let __JOINGO_CURRENT_CULTUREINFO__: string = __JOINGO_NATURAL_CULTUREINFO_MAP__;
const __JOINGO_CULTUREINFO_STORAGEKEY__: string = 'joingo.vip.globalization.cultureinfo';

/**
 * 提供了文化区域信息相关的方法。密闭的，不可以从此类型派生。
 * @author Wang Yucai
 *
 * @export
 * @class CultureInfo
 * @typedef {CultureInfo}
 * @remarks
 *  密闭的，不可以从此类型派生。
 */
@sealed
export class CultureInfo {
  /**
   * 初始化 {@linkcode CultureInfo} 的新实例。
   * @author Wang Yucai
   *
   * @constructor
   * @param {string} name 文化区域名称。
   */
  constructor(name: string) {
    this.name = String.isNullOrWhitespace(name) ? __JOINGO_NATURAL_CULTUREINFO_MAP__ : name.trim();
  }

  /**
   * 文化区域名称。
   * @author Wang Yucai
   *
   * @readonly
   * @type {string}
   * @remarks
   *  获取一个字符串，用于表示文化区域名称。
   */
  readonly name: string;

  /**
   * 设置默认的文化区域。
   * @author Wang Yucai
   *
   * @static
   * @param {string} name 文化区域名称。
   */
  static setDefaultCulture(name: string): void {
    if (!String.isNullOrWhitespace(name)) {
      __JOINGO_NATURAL_CULTUREINFO_MAP__ = name.trim();
    }
  }

  /**
   * 默认的文化区域信息。
   * @author Wang Yucai
   *
   * @static
   * @readonly
   * @type {CultureInfo}
   * @remarks
   *  获取 {@linkcode CultureInfo} 类型的对象实例，用于表示默认的文化区域信息。
   */
  static get natural(): CultureInfo {
    return new CultureInfo(__JOINGO_NATURAL_CULTUREINFO_MAP__);
  }

  /**
   * 获取当前的文化区域名称。
   * @author Wang Yucai
   *
   * @returns {string}
   * @see {@linkcode name}
   */
  toString(): string {
    return this.name;
  }

  /**
   * 变更当前的文化区域信息。
   * @author Wang Yucai
   *
   * @returns {CultureInfo}
   */
  change(callback?: sys.Action): CultureInfo;

  /**
   * 变更当前的文化区域信息。
   * @author Wang Yucai
   *
   * @param {sys.Action1<string>} storage 存储文化区域信息的方法。
   * @returns {CultureInfo}
   */
  change(storage: sys.Action1<string>): CultureInfo;
  change(storage?: any): CultureInfo {
    if (
      !console.warnIf(
        String.isNullOrWhitespace(this.name),
        `[WARN] - <globalization.mts: 700217>: Cultural information name is required.`
      )
    ) {
      if (!Object.isNull(storage)) {
        storage(this.name);
      }
      __JOINGO_CURRENT_CULTUREINFO__ = this.name;
    }
    return this;
  }

  /**
   * 当前的文化区域变更后执行的方法。
   * @author Wang Yucai
   *
   * @param {sys.Action1<CultureInfo>} callback 回调方法。
   */
  changed(callback: sys.Action1<CultureInfo>): void {
    callback(this);
  }

  /**
   * 获取当前的文化区域信息。
   * @author Wang Yucai
   *
   * @static
   * @returns {CultureInfo}
   */
  static currentCulture(): CultureInfo;

  /**
   * 获取当前的文化区域信息。
   * @author Wang Yucai
   *
   * @static
   * @param {sys.Func<string>} from 获取当前的文化区域信息的方法。
   * @returns {CultureInfo}
   */
  static currentCulture(from: sys.Func<string>): CultureInfo;
  static currentCulture(from?: any): CultureInfo {
    if (Object.isNull(from)) {
      return new CultureInfo(__JOINGO_CURRENT_CULTUREINFO__);
    } else {
      return new CultureInfo(from());
    }
  }
}

/**
 * 提供了默认的文化区域存储相关的方法。
 * @author Wang Yucai
 */
export const DefaultCultureInfoStorageProvider: sys.Action1<string> = function (name: string): void {
  if (
    !console.debugIf(
      String.isNullOrWhitespace(name),
      `[DEBUG] - <globalization.mts: 4a8112>: Cultural information name is required.`
    )
  ) {
    window.localStorage?.setItem(__JOINGO_CULTUREINFO_STORAGEKEY__, name.trim());
  }
};

/**
 * 提供了默认的获取文化区域信息相关的方法。
 * @author Wang Yucai
 */
export const DefaultCultureInfoGetProvider: sys.Func<string> = function (): string {
  const value: sys.Null<string> = window.localStorage?.getItem(__JOINGO_CULTUREINFO_STORAGEKEY__);
  if (
    console.debugIf(
      String.isNullOrWhitespace(value),
      `[DEBUG] - <globalization.mts: 9e429d>: No cultural information was found in local storage.`
    )
  ) {
    return __JOINGO_CURRENT_CULTUREINFO__;
  }
  return value;
};

/**
 * 提供了默认的文化区域变更后回调相关的方法。
 * @author Wang Yucai
 */
export const DefaultCultureChangedCallbackHandler: sys.Action1<CultureInfo> = function (current: CultureInfo): void {
  if (!String.isNullOrWhitespace(current?.name)) {
    changeLanguage(current.name)
      .then(() => {
        console.debug(
          `[DEBUG] - <globalization.mts: 86573a>: The current language of "i18next" has been changed to "${current.name}".`
        );
      })
      .catch((reason) => {
        console.error(
          `[ERROR] - <globalization.mts: 555668>: Trying to change the current language setting of "i18next" failed. The details：%o`,
          reason
        );
      });
  }
};

/**
 * 定义了 i18n 中间件配置选项类型。
 * @author Wang Yucai
 *
 * @export
 * @interface I18nMiddlewareOptions
 * @typedef {I18nMiddlewareOptions}
 */
export interface I18nMiddlewareOptions {
  /**
   * 默认的文化区域名称。
   * @author Wang Yucai
   *
   * @type {string}
   */
  natural: string;

  /**
   * 默认的资源命名空间。
   * @author Wang Yucai
   *
   * @type {string}
   */
  resourceNamespace: string;

  /**
   * 资源文件。
   * @author Wang Yucai
   *
   * @type {?Record<string, Record<string, any>>}
   */
  resources?: Record<string, Record<string, any>>;
}
