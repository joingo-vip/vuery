// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************

import { Principal } from '@joingo.vip/security-authentication';

export {};

declare global {
  /**
   * 当前的用户身份摘要信息。
   * @author Wang Yucai
   *
   * @type {Principal}
   */
  var currentPrincipal: Principal;
}
