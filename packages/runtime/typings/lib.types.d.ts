// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************

/**
 * 类型定义模块。
 *
 * @remarks
 * "lib.types.d.ts": 类型定义模块。
 *
 * @packageDocumentation
 */

declare namespace vuery {
  /**
   * 提供了状态数据相关的类型定义。
   * @author Wang Yucai
   *
   * @interface StateData
   * @typedef {StateData}
   */
  interface StateData {}

  /**
   * 提供了可以持久化的状态数据相关的类型定义。
   * @author Wang Yucai
   *
   * @interface PersistedStateData
   * @typedef {PersistedStateData}
   * @extends {StateData}
   */
  interface PersistedStateData extends StateData {
    /**
     * 当前的文化区域名称。
     * @author Wang Yucai
     *
     * @type {(string | null)}
     * @remarks
     * 设置或获取一个字符串，用于表示当前的文化区域名称。
     */
    currentCultureName: string | null;
  }
}
