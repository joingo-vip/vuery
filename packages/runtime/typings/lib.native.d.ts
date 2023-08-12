// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************

/**
 * JavaScript 原生类型运行时扩展类型模块。
 *
 * @remarks
 * "lib.native.d.ts": JavaScript 原生类型运行时扩展类型模块。
 *
 * @packageDocumentation
 */

export {};

declare global {
  /**
   * Vuery 默认语言。
   * @author Wang Yucai
   *
   * @type {(string | vuery.SupportedLanguage | null)}
   */
  var __VUERY_DEFAULT_LANGUAGE: string | vuery.SupportedLanguage | null;
}
