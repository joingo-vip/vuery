// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************

/**
 * 系统安全服务模块。
 *
 * @remarks
 * "index.ts": 系统安全服务模块。
 *
 * @packageDocumentation
 */

export {
  AuthenticationPayloadBase,
  AuthenticationServiceProvider,
  CaptchaResult,
  CaptchaServiceProvider,
  FormAuthenticationPayload,
  FormAuthenticationPayloadBase,
  FormAuthenticationResult,
  IAuthenticationService,
  ICaptchaService,
  ITokenString,
  TokenString,
} from './authentication-service';
export {
  AESCryptographyServiceProvider,
  CryptographyService,
  ICryptographyService,
} from './cryptography-service';
export {
  AnonymousIdentity,
  AnonymousPrincipal,
  ClaimsIdentity,
  ClaimsPrincipal,
  IIdentity,
  IPrincipal,
  Principal,
} from './principal';
