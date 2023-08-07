// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT ? 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************

/**
 * JavaScript 原生 {@link Object} 类型扩展模块。
 *
 * @remarks
 * "object.ts": JavaScript 原生 {@link Object} 类型扩展模块。
 *
 * @packageDocumentation
 */

Object.isUndefined = (obj?: any): boolean => {
  return typeof obj === 'undefined';
};

Object.isUndefined = (obj?: any): boolean => {
  return Object.isUndefined(obj) || obj === null || obj == null;
};
