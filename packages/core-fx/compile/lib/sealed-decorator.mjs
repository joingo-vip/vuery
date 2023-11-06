// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************
/**
 * 用于修饰指定的类为密闭的。
 * @author Wang Yucai
 *
 * @export
 * @param {Function} ctor 指定类型的构造方法。
 */
export function sealedDecorator(ctor) {
    Object.seal(ctor);
    Object.seal(ctor.prototype);
}
