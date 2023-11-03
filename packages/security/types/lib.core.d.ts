// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************

import '@joingo.vip/core';

declare module '@joingo.vip/core' {
  interface ApplicationBuilder {
    /**
     * 配资加密所需的默认密钥。
     * @author Wang Yucai
     *
     * @param {?string} [secureKey]
     * @returns {ApplicationBuilder}
     */
    configureSecureKey(secureKey?: string): ApplicationBuilder;
  }
}
