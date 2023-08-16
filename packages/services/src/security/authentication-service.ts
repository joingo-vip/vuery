// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************

/**
 * 身份认证相关服务模块。
 *
 * @remarks
 * "authentication-service.ts": 身份认证相关服务模块。
 *
 * @packageDocumentation
 */

/**
 * 身份认证服务负载数据抽象结构。
 * @author Wang Yucai
 *
 * @export
 * @interface AuthenticationPayloadBase
 * @typedef {AuthenticationPayloadBase}
 */
export interface AuthenticationPayloadBase {}

/**
 * 表单身份认证服务所需的基本负载数据。
 * @author Wang Yucai
 *
 * @export
 * @interface FormAuthenticationPayloadBase
 * @typedef {FormAuthenticationPayloadBase}
 * @extends {AuthenticationPayloadBase}
 */
export interface FormAuthenticationPayloadBase
  extends AuthenticationPayloadBase {
  /**
   * 验证码。
   * @author Wang Yucai
   *
   * @type {string}
   * @remarks
   * 设置或获取一个字符串，用于表示验证码。
   */
  captcha: string;

  /**
   * 登录用户名。
   * @author Wang Yucai
   *
   * @type {string}
   * @remarks
   * 设置或获取一个字符串，用于表示登录用户名。
   */
  userName: string;

  /**
   * 登录口令。
   * @author Wang Yucai
   *
   * @type {string}
   * @remarks
   * 设置或获取一个字符串，用于表示登录口令。
   */
  password: string;
}

/**
 * 基于表单登录操作所需的实际负载数据结构。
 * @author Wang Yucai
 *
 * @export
 * @interface FormAuthenticationPayload
 * @typedef {FormAuthenticationPayload}
 * @extends {FormAuthenticationPayloadBase}
 */
export interface FormAuthenticationPayload
  extends FormAuthenticationPayloadBase {
  /**
   * 验证码校验码。
   * @author Wang Yucai
   *
   * @type {string}
   * @remarks
   * 设置或获取一个字符串，用于表示验证码校验码。
   */
  captchaChecksum: string;
}
