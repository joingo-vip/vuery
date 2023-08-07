// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT ? 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************

/**
 * JavaScript Native 原生类型扩展模块。
 *
 * @remarks
 * "lib.native.d.ts": JavaScript Native 原生类型扩展模块。
 *
 * @packageDocumentation
 */

export {};

declare global {
  /**
   * 为 {@link Object} 类型提供的静态扩展方法。
   * @author Wang Yucai
   *
   * @interface ObjectConstructor
   * @typedef {ObjectConstructor}
   */
  interface ObjectConstructor {
    /**
     * 当 {@link obj} 等于 undefined 类型时，返回 true；否则返回 false。
     * @author Wang Yucai
     *
     * @param {?*} [obj] 需要校验的 {@link Object} 对象实例。
     * @returns {boolean}
     */
    isUndefined(obj?: any): boolean;

    /**
     * 当 {@link obj} 等于 undefined 类型、或 null 时，返回 true；否则返回 false。
     * @author Wang Yucai
     *
     * @param {?*} [obj] 需要校验的 {@link Object} 对象实例。
     * @returns {boolean}
     * @see {@link isUndefined}
     */
    isNull(obj?: any): boolean;
  }
}
