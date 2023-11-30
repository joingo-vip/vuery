// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************

import '@joingo.vip/core';

declare module '@joingo.vip/core' {
  interface ApplicationBuilder {
    /**
     * 启用身份认证中间件。
     * @author Wang Yucai
     *
     * @returns {ApplicationBuilder}
     */
    useAuthentication(): ApplicationBuilder;
  }
}
