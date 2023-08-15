// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************

/**
 * 身份认证视图模块。
 *
 * @remarks
 * "index.ts": 身份认证视图模块。
 *
 * @packageDocumentation
 */

/**
 * (可等待的方法) 动态导入 “AuthenticationIndex” 视图。
 *
 * @export
 * @public
 * @async
 */
export function AuthenticationIndexView() {
  return import('./src/index.vue');
}

/**
 * (可等待的方法) 动态导入 “SignIn” 视图。
 *
 * @export
 * @public
 * @async
 */
export function SignInPartial() {
  return import('./src/sign-in.vue');
}
