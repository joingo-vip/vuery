// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************

/**
 * 路由表配置模块。
 *
 * @remarks
 * "route-table.ts": 路由表配置模块。
 *
 * @packageDocumentation
 */

import { RouteRecordRaw } from 'vue-router';
import { AuthenticationIndexView, SignInPartial } from '@/views/authenticate';

/**
 * 默认应用路由表。
 * @author Wang Yucai
 *
 * @type {Array<RouteRecordRaw>}
 */
export const DefaultRouteTable: Array<RouteRecordRaw> = [
  {
    name: 'Default',
    path: '/',
    redirect(to) {
      return { name: 'Authentication' };
    },
    meta: {
      allowAnonymous: true,
    },
  },
  {
    name: 'Authentication',
    path: '/authentication-service',
    component: AuthenticationIndexView,
    meta: {
      allowAnonymous: true,
    },
    children: [
      {
        name: 'Authentication:Default',
        path: '',
        component: SignInPartial,
      },
      {
        name: 'Authentication:SignIn',
        path: 'sign-in',
        component: SignInPartial,
      },
    ],
  },
];
