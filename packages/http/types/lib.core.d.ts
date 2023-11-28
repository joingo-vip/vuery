// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************

import '@joingo.vip/core';

declare module '@joingo.vip/core' {
  interface ApplicationBuilder {
    /**
     * 配置 HTTP 请求基础 URI 地址。
     * @author Wang Yucai
     *
     * @param {string} baseUri HTTP 请求基础 URI 地址。
     * @returns {ApplicationBuilder}
     */
    configureHttpBaseUri(baseUri: string): ApplicationBuilder;
  }
}
