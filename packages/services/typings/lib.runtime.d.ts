// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************

/**
 * Vuery 运行时扩展类型模块。
 *
 * @remarks
 * "lib.runtime.d.ts": Vuery 运行时扩展类型模块。
 *
 * @packageDocumentation
 */

import '@vuery/runtime';

declare module '@vuery/runtime' {
  interface IAppBuilder {
    /**
     * 配置服务默认基础 URL 地址。
     * @author Wang Yucai
     *
     * @param {string} baseUri 默认基础 URI 地址。
     * @returns {IAppBuilder}
     */
    configureServiceBaseUri(baseUri: string): IAppBuilder;

    /**
     * 配置服务。
     * @author Wang Yucai
     *
     * @returns {IAppBuilder}
     */
    configureServices(): IAppBuilder;

    /**
     * 配置加密服务所需的密钥。
     * @author Wang Yucai
     *
     * @param {string} secretKey
     * @returns {IAppBuilder}
     */
    configureCryptographySecretKey(secretKey: string): IAppBuilder;
  }

  interface AppBuilder extends IAppBuilder {}
}
