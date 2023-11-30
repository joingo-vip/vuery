// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************

export { AnonymousIdentity, ClaimFields, ClaimsIdentity, Identity, type Claim, type Claims } from './lib/identity.mjs';
export { AnonymousPrincipal, ClaimsPrincipal, Principal } from './lib/principal.mjs';

/**
 * 身份认证信息存储标识。
 * @author Wang Yucai
 *
 * @type {string}
 */
export const DefaultAuthenticationStorageKey: string = 'com.joingo.security.authentication';
