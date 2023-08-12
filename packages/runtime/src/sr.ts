// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************

/**
 * 读取资源的方法模块。
 *
 * @remarks
 * "sr.ts": 读取资源的方法模块。
 *
 * @packageDocumentation
 */

import { t } from 'i18next';

/**
 * 提供了多语言资源字符串相关的方法。
 * @author Wang Yucai
 *
 * @export
 * @class SR
 * @typedef {SR}
 */
export class SR {
  /**
   * 初始化 {@link SR} 的新实例。
   * @author Wang Yucai
   *
   * @constructor
   * @private
   */
  private constructor() {}

  private static readonly s_defaultNamespace: string = 'default';

  /**
   * 构建完成的资源名称。
   * @author Wang Yucai
   *
   * @private
   * @static
   * @param {string} name 资源名称。
   * @param {?(string | null)} [ns] 资源命名空间。
   * @returns {string}
   */
  private static buildResourceName(name: string, ns?: string | null): string {
    const _namespace: string = String.isNullOrWhitespace(ns)
      ? this.s_defaultNamespace
      : ns;

    return `${_namespace}:${name}`;
  }

  /**
   * 获取指定名称的资源字符串。
   * @author Wang Yucai
   *
   * @public
   * @static
   * @param {string} name 资源名称。
   * @param {?(string | null)} [ns] 资源命名空间。
   * @returns {string}
   * @example
   * const resourceStr = SR.getString("words.submit", "default");
   */
  public static getString(name: string, ns?: string | null): string {
    return t(SR.buildResourceName(name, ns));
  }
}
