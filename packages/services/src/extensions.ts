// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************

/**
 * Vuery 服务扩展。
 *
 * @remarks
 * "extensions.ts": Vuery 服务扩展。
 *
 * @packageDocumentation
 */

import { AppBuilder, IAppBuilder } from '@vuery/runtime';

var __VUERY_SERVICE_BASE_URI: string = '';

AppBuilder.prototype.configureServiceBaseUri = function (
  baseUri: string
): IAppBuilder {
  console.debug(
    `[DEBUG] - <extensions.ts: 02a79e>: 尝试配置服务基础 URI 地址为 “${baseUri}”。`
  );

  __VUERY_SERVICE_BASE_URI = baseUri;

  return this;
};