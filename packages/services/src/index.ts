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
  AESCryptographyServiceProvider,
  AuthenticationPayloadBase,
  CaptchaResult,
  CaptchaServiceProvider,
  CryptographyService,
  FormAuthenticationPayload,
  FormAuthenticationPayloadBase,
  FormAuthenticationResult,
  IAuthenticationService,
  ICaptchaService,
  ICryptographyService,
  ITokenString,
  TokenString,
} from './security';
export {
  AbstractServiceResult,
  DefaultServiceResult,
  IServiceClient,
  IServiceClientBuilder,
  PagingQueryParameter,
  PagingServiceResult,
  ServiceClient,
  ServiceClientBuilder,
  ServiceException,
  ServiceResult,
  ServiceStatus,
} from './service-client';

export { IServiceBase, ServiceBase } from './service-base';
export { ServiceCollection } from './service-collection';
export { ServiceProvider } from './service-provider';
