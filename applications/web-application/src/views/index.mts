// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************

/**
 * (可等待的方法) 动态导入 “AuthenticationDefault” 视图。
 *
 * @export
 * @public
 * @async
 */
export function AuthenticationDefaultView() {
  return import('./authentication/Default.vue');
}
