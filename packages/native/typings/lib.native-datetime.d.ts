// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************

/**
 * 原生 DateTime 类型扩展方法。
 *
 * @remarks
 * "lib.native-datetime.d.ts": 原生 DateTime 类型扩展方法。
 *
 * @packageDocumentation
 */

export {};

declare global {
  /**
   * 为 {@link Date} 类型提供的扩展方法。
   * @author Wang Yucai
   *
   * @interface DateConstructor
   * @typedef {DateConstructor}
   */
  interface DateConstructor {
    /**
     * 获取当前的日期时间。
     * @author Wang Yucai
     *
     * @type {() => Date}
     * @example
     *  const currentTime = Date.now();
     */
    current: () => Date;
  }
}
