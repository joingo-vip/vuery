// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************

/**
 * 定义了可能为 undefined 类型。
 * @author Wang Yucai
 *
 * @typedef {Undefined}
 * @template TSource 可能为 undefined 类型的源类型。
 */
declare type Undefined<TSource> = TSource | undefined;

/**
 * 定义了可能为 undefined 类型或 null 值的类型。
 * @author Wang Yucai
 *
 * @typedef {Null}
 * @template TSource 可能为 undefined 类型或 null 的源类型。
 */
declare type Null<TSource> = Undefined<TSource> | null;
