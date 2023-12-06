// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************

import { RouteRecordRaw, Router, createRouter, createWebHashHistory } from 'vue-router';
import { AuthenticationDefaultView, BasicAuthenticationPartial } from '~/views/index.mjs';

/**
 * Home 应用程序路由表。
 * @author Wang Yucai
 *
 * @type {RouteRecordRaw[]}
 */
const HomeRouteTable: RouteRecordRaw[] = [
  {
    path: '/',
    redirect(to) {
      return { path: '/authentication/basic' };
    },
    meta: {
      allowAnonymous: true,
    },
  },
  {
    path: '/authentication',
    component: AuthenticationDefaultView,
    children: [
      {
        path: '',
        redirect: '/authentication/basic',
      },
      {
        path: 'basic',
        component: BasicAuthenticationPartial,
        meta: {
          allowAnonymous: true,
        },
      },
    ],
    meta: {
      allowAnonymous: true,
    },
  },
];

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
