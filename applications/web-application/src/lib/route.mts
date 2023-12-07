// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************

import { RouteRecordRaw, Router, createRouter, createWebHashHistory } from 'vue-router';

/**
 * Home 应用程序路由表。
 * @author Wang Yucai
 *
 * @type {RouteRecordRaw[]}
 */
const HomeRouteTable: RouteRecordRaw[] = [];

/**
 * 创建 Home 应用程序路由。
 * @author Wang Yucai
 *
 * @export
 * @returns {Router}
 */
export function createHomeRouter(): Router {
  const router: Router = createRouter({
    routes: HomeRouteTable,
    history: createWebHashHistory(),
  });

  return router;
}
