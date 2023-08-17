// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************

/**
 * 函数定义模块。
 *
 * @remarks
 * "lib.functions.d.ts": 函数定义模块。
 *
 * @packageDocumentation
 */

declare namespace vuery {
  /**
   * 定义了读取当前文化区域信息的方法委托。
   * @author Wang Yucai
   *
   * @interface CurrentCultureInfoReadFunction
   * @typedef {CurrentCultureInfoReadFunction}
   */
  interface CurrentCultureInfoReadFunction {
    /**
     * 定义了读取当前文化区域信息的方法委托。
     * @author Wang Yucai
     *
     * @returns {Readonly<vuery.globalization.CultureInfo>}
     */
    (): Readonly<vuery.globalization.CultureInfo>;
  }
}
