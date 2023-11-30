// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************

import { type StorableOptions } from '@joingo.vip/storage';

/**
 * 身份认证信息存储标识。
 * @author Wang Yucai
 *
 * @type {string}
 */
export const DefaultAuthenticationStorageKey: string = 'com.joingo.security.authentication';

/**
 * 身份认证信息存储配置配置选项。
 * @author Wang Yucai
 *
 * @type {StorableOptions}
 */
export const DefaultAuthenticationStorageOptions: StorableOptions = {
  key: DefaultAuthenticationStorageKey,
  secretKey: 'P^7HCG*GE<3G/T4B',
  secure: true,
};
