// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************

/**
 * 服务名称集合模块。
 *
 * @remarks
 * "service-collection.ts": 服务名称集合模块。
 *
 * @packageDocumentation
 */

/**
 * 定义了服务名称集合枚举类型。
 * @author Wang Yucai
 *
 * @export
 * @enum {number}
 */
export enum ServiceCollection {
  /**
   * 验证码服务。
   * @author Wang Yucai
   */
  CaptchaService = 'Captcha',

  /**
   * 基于用户名、口令的身份认证服务。
   * @author Wang Yucai
   */
  FormAuthenticationService = 'FormAuthenticationService',

  /**
   * AES 加密、解密服务。
   * @author Wang Yucai
   */
  AESCryptographyService = 'AES',

  /**
   * 用户信息服务。
   * @author Wang Yucai
   */
  UserService = 'UserService',
}
