// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************

/**
 * 文化区域设置相关方法模块。
 *
 * @remarks
 * "culture.ts": 文化区域设置相关方法模块。
 *
 * @packageDocumentation
 */

/**
 * 提供了文化区域设置相关的方法。
 * @author Wang Yucai
 *
 * @export
 * @class Culture
 * @typedef {Culture}
 */
export class Culture {
  private static readonly s_keyOfCurrentCultureInfoStorage: string =
    'vuery_globalization_current_cultureinfo';

  /**
   * 初始化 {@link Culture} 的新实例。
   * @author Wang Yucai
   *
   * @constructor
   * @private
   */
  private constructor() {}

  /**
   * 简体中文。
   * @author Wang Yucai
   *
   * @public
   * @static
   * @readonly
   * @type {vuery.globalization.CultureInfo}
   */
  public static readonly CultureInfoOfChina: vuery.globalization.CultureInfo = {
    friendlyName: 'zh-CN',
    name: 'zh-Hans',
  };

  /**
   * 美国。
   * @author Wang Yucai
   *
   * @public
   * @static
   * @readonly
   * @type {vuery.globalization.CultureInfo}
   */
  public static readonly CultureInfoOfUnitedStates: vuery.globalization.CultureInfo =
    {
      name: 'en-US',
    };

  private static readonly s_cultureInfoDictionary: Record<
    string,
    vuery.globalization.CultureInfo
  > = {
    'zh-Hans': Culture.CultureInfoOfChina,
    'en-US': Culture.CultureInfoOfUnitedStates,
  };

  /**
   * 默认的文化区域信息。
   * @author Wang Yucai
   *
   * @public
   * @static
   * @readonly
   * @type {vuery.globalization.CultureInfo}
   * @remarks
   * 获取 {@linkcode vuery.globalization.CultureInfo} 类型的对象实例，用于表示默认的文化区域信息。
   */
  public static get defaultCultureInfo(): vuery.globalization.CultureInfo {
    return this.s_cultureInfoDictionary[window.__VUERY_DEFAULT_LANGUAGE];
  }

  /**
   * 变更当前的文化区域信息。
   * @author Wang Yucai
   *
   * @public
   * @static
   * @param {vuery.globalization.CultureInfo} culture {@linkcode vuery.globalization.CultureInfo} 类型的对象实例。
   */
  public static changeCurrentCulture(
    culture: vuery.globalization.CultureInfo
  ): void;

  /**
   * 变更当前的文化区域信息。
   * @author Wang Yucai
   *
   * @public
   * @static
   * @param {vuery.SupportedLanguage | string} lng 语言名称。
   */
  public static changeCurrentCulture(
    lng: vuery.SupportedLanguage | string
  ): void;
  public static changeCurrentCulture(value: any): void {
    let _current;
    if (typeof value === 'string') {
      _current = Culture.s_cultureInfoDictionary[value];
    } else {
      _current = value;
    }
    console.debug(
      `[DEBUG] - <culture.ts: e92ad9>: 尝试更新当前的文化区域设置。详情参见：%o`,
      _current
    );
    localStorage.setItem(
      Culture.s_keyOfCurrentCultureInfoStorage,
      JSON.stringify(_current)
    );
  }

  /**
   * 获取当前的文化区域信息。
   * @author Wang Yucai
   *
   * @public
   * @static
   * @returns {vuery.globalization.CultureInfo}
   */
  public static getCurrentCulture(): vuery.globalization.CultureInfo {
    try {
      let cultureJsonStr: string | null | undefined = localStorage.getItem(
        Culture.s_keyOfCurrentCultureInfoStorage
      );
      if (String.isNullOrWhitespace(cultureJsonStr)) {
        console.debug(
          `[DEBUG] - <culture.ts: 198d45>: 未发现当前的文化区域设置，将返回默认的文化区域设置。详情参见：%o`,
          Culture.defaultCultureInfo
        );

        return Culture.defaultCultureInfo;
      }
      return JSON.parse(cultureJsonStr);
    } catch {
      return Culture.defaultCultureInfo;
    }
  }
}
