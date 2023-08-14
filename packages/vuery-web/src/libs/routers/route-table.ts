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
    component: () => import('@/views/startup.vue'),
    meta: {
      allowAnonymous: true,
    },
  },
];
