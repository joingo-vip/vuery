// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************

/**
 * Vuery Desktop 应用类型定义模块。
 *
 * @remarks
 * "lib.types.d.ts": Vuery Desktop 应用类型定义模块。
 *
 * @packageDocumentation
 */

declare namespace vuery.desktop {
  /**
   * 会话级状态数据类型定义。
   * @author Wang Yucai
   *
   * @interface SessionStateData
   * @typedef {SessionStateData}
   * @extends {vuery.StateData}
   */
  interface SessionStateData extends vuery.StateData {
    /**
     * 是否已经身份认证。
     * @author Wang Yucai
     *
     * @type {false}
     * @remarks
     * 设置或获取一个 {@link Boolean} 类型值，用于表示是否已经身份认证。
     */
    isAuthenticated: false;

    /**
     * 授权凭据。
     * @author Wang Yucai
     *
     * @type {string}
     * @remarks
     * 设置或获取一个字符串，用于表示授权凭据。
     */
    authorizationToken: string;
  }
}
