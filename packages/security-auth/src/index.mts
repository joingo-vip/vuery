// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************

export {
  AuthenticationService,
  AuthorizationService,
  DefaultAuthenticationStorageKey,
  DefaultAuthenticationStorageOptions,
  type AuthenticatedResult,
  type BasicCredentials,
  type Credentials,
} from './lib/authenticate.mjs';
export { AnonymousIdentity, ClaimFields, ClaimsIdentity, Identity, type Claim, type Claims } from './lib/identity.mjs';
export { AnonymousPrincipal, ClaimsPrincipal, Principal } from './lib/principal.mjs';
