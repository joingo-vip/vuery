// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************

/**
 * 用于修饰密闭类的装饰器模块。
 *
 * @remarks
 * "sealed-decorator.ts": 用于修饰密闭类的装饰器模块。
 *
 * @packageDocumentation
 */

/**
 * 提供了修饰密闭类相关的方法。
 * @author Wang Yucai
 *
 * @export
 * @param {Function} ctor 目标类的构造方法。
 */
export function sealedDecorator(ctor: Function): void {
  Object.seal(ctor);
  Object.seal(ctor.prototype);
}
