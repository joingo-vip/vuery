// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************

/**
 * 首页视图模块。
 *
 * @remarks
 * "index.ts": 首页视图模块。
 *
 * @packageDocumentation
 */

/**
 * (可等待的方法) 动态导入 “Home” 视图。
 *
 * @export
 * @public
 * @async
 */
export function HomeView() {
  return import('./src/index.vue');
}
