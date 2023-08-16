// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************

/**
 * 服务模块。
 *
 * @remarks
 * "index.ts": 服务模块。
 *
 * @packageDocumentation
 */

/// <reference path="../typings/index.d.ts" />

import 'reflect-metadata';
import './extensions';

export {
  AuthenticationPayloadBase,
  FormAuthenticationPayload,
  FormAuthenticationPayloadBase,
} from './security';
export {
  AbstractServiceResult,
  DefaultServiceResult,
  PagingQueryParameter,
  PagingServiceResult,
  ServiceClient,
  ServiceResult,
  ServiceStatus,
} from './service-client';
