// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT ? 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************

/**
 * Vuery 运行时类型定义模块。
 *
 * @remarks
 * "lib.runtime.d.ts": Vuery 运行时类型定义模块。
 *
 * @packageDocumentation
 */

declare namespace vuery {
  /**
   * 定义了字符串格式化的方法委托。
   * @author Wang Yucai
   *
   * @interface StringFormatFunction
   * @typedef {StringFormatFunction}
   */
  interface StringFormatFunction {
    /**
     * 定义了字符串格式化的方法委托。
     * @author Wang Yucai
     *
     * @param {string} formatter 格式化字符串。
     * @param {...Array<any>} args 格式化参数数组。
     * @returns {string}
     */
    (formatter: string, ...args: Array<any>): string;
  }
}
