// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************

/**
 * Object 扩展定义类型模块。
 *
 * @remarks
 * "lib.native-object.d.ts": Object 扩展定义类型模块。
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
     * 当 {@link obj} 为 undefined 类型时，返回 true；否则返回 false。
     * @author Wang Yucai
     *
     * @type {(obj: any) => boolean}
     * @example
     *  if(Object.isUndefined(null)) {
     *      // Your code
     *  }
     */
    isUndefined: (obj: any) => boolean;

    /**
     * 当 {@link obj} 为 undefined 类型、或 null 时，返回 true；否则返回 false。
     * @author Wang Yucai
     *
     * @type {(obj: any) => boolean}
     * @example
     *  if(Object.isNull(null)) {
     *      // Your code
     *  }
     */
    isNull: (obj: any) => boolean;
  }
}
