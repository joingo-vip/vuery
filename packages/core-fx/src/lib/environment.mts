// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************

import { SdkVersion } from './version.mjs';

/**
 * 提供了环境相关的方法。
 * @author Wang Yucai
 *
 * @export
 * @class Environment
 * @typedef {Environment}
 */
export class Environment {
  /**
   * 应用程序版本号。
   * @author Wang Yucai
   * @remarks
   *  获取一个字符串，用于表示应用程序版本号。
   *
   * @static
   * @readonly
   * @type {string}
   */
  static get applicationVersion(): string {
    return __JOINGO_APPLICATION_VERSION__;
  }

  /**
   * SDK 版本号。
   * @author Wang Yucai
   * @remarks
   *  获取一个字符串，用于表示 SDK 版本号。
   *
   * @static
   * @readonly
   * @type {string}
   */
  static get sdkVersion(): string {
    return SdkVersion.toString();
  }
}
