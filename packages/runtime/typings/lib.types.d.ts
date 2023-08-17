// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************

/**
 * 类型定义模块。
 *
 * @remarks
 * "lib.types.d.ts": 类型定义模块。
 *
 * @packageDocumentation
 */

declare namespace vuery {
  /**
   * 定义了内置提供的语言枚举类型。
   * @author Wang Yucai
   *
   * @typedef {SupportedLanguage}
   */
  type SupportedLanguage = 'zh-Hans' | 'en-US';

  /**
   * 提供了状态数据相关的类型定义。
   * @author Wang Yucai
   *
   * @interface StateData
   * @typedef {StateData}
   */
  interface StateData {}

  /**
   * 提供了可以持久化的状态数据相关的类型定义。
   * @author Wang Yucai
   *
   * @interface PersistedStateData
   * @typedef {PersistedStateData}
   * @extends {StateData}
   */
  interface PersistedStateData extends StateData {
    /**
     * 当前的文化区域名称。
     * @author Wang Yucai
     *
     * @type {(string | null)}
     * @remarks
     * 设置或获取一个字符串，用于表示当前的文化区域名称。
     */
    currentCultureName: string | null;
  }

  /**
   * 提供了运行时环境变量相关的类型定义。
   * @author Wang Yucai
   *
   * @interface EnvironmentVariableRecord
   * @typedef {EnvironmentVariableRecord}
   * @extends {Record<string, string>}
   */
  interface EnvironmentVariableRecord extends Record<string, string> {
    /**
     * 编译器配置环境名称。
     * @author Wang Yucai
     *
     * @readonly
     * @type {string}
     * @remarks
     * 获取一个字符串，用于表示编译器配置环境名称。
     */
    readonly COMPILER_CONFIGURATION: string;

    /**
     * 环境名称。
     * @author Wang Yucai
     *
     * @readonly
     * @type {string}
     * @remarks
     * 获取一个字符串，用于表示环境名称。
     */
    readonly COMPILER_ENVIRONMENT_NAME: string;

    /**
     * 默认应用名称。
     * @author Wang Yucai
     *
     * @readonly
     * @type {string}
     * @remarks
     * 获取一个字符串，用于表示默认应用名称。
     */
    readonly RUNTIME_APPLICATION_NAME: string;

    /**
     * Ruoyi 服务器框架 WebApi 接口基础 URL 地址。
     * @author Wang Yucai
     *
     * @readonly
     * @type {string}
     * @remarks
     * 获取一个字符串，用于表示 Ruoyi 服务器框架 WebApi 接口基础 URL 地址。
     */
    readonly RUNTIME_WEBAPI_BASEURL: string;

    /**
     * 运行时默认语言设置。
     * @author Wang Yucai
     *
     * @readonly
     * @type {string}
     * @remarks
     * 获取一个字符串，用于表示运行时默认语言设置。
     */
    readonly RUNTIME_DEFAULT_LANGUAGE: string;
  }

  namespace globalization {
    /**
     * 文化区域信息。
     * @author Wang Yucai
     *
     * @interface CultureInfo
     * @typedef {CultureInfo}
     */
    interface CultureInfo {
      /**
       * 文化区域名称。
       * @author Wang Yucai
       *
       * @type {string}
       * @remarks
       * 设置或获取一个字符串，用于表示文化区域名称。
       */
      name: string;

      /**
       * 文化区域友好名称。
       * @author Wang Yucai
       *
       * @type {?(string | null)}
       * @remarks
       * 设置或获取一个字符串，用于表示文化区域友好名称。
       */
      friendlyName?: string | null;
    }
  }
}
