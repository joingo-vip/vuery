// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT ? 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************

/**
 * 核心类型定义模块。
 *
 * @remarks
 * "lib.types.d.ts": 核心类型定义模块。
 *
 * @packageDocumentation
 */

declare namespace vuery {
  /**
   * 提供了可能为空的 {@link T} 类型。
   * @author Wang Yucai
   *
   * @typedef {Nullable}
   * @template T
   */
  type Nullable<T> = T | null | undefined;
}
