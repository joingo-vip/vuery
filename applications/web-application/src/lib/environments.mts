// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************

/**
 * 是否为后台管理模式。
 * @author Wang Yucai
 *
 * @export
 * @returns {boolean}
 */
export function isAdministrateMode(): boolean {
  return import.meta.env.VITE_APPLICATION_ROLE.equals('administrate', 'IgnoreCase');
}
