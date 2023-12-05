// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************

/**
 * 定义了可覆盖的样式类型。
 * @author Wang Yucai
 *
 * @export
 * @interface OverrideStyle
 * @typedef {OverrideStyle}
 * @extends {Record<string, any>}
 */
export interface OverrideStyle extends Record<string, any> {}

/**
 * 定义了字符串或数值类型。
 * @author Wang Yucai
 *
 * @export
 * @typedef {StringOrNumeric}
 */
export type StringOrNumeric = string | number;
