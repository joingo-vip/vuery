// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************

/**
 * 无需持久化的状态服务模块。
 *
 * @remarks
 * "nopersistent-store.ts": 无需持久化的状态服务模块。
 *
 * @packageDocumentation
 */

import { defineStore } from 'pinia';

/**
 * 获取默认的无需持久化的状态管理服务实例。
 * @author Wang Yucai
 *
 * @type {*}
 */
export const getDefaultNopersistentStore = defineStore(
  'vuery-default-nopersistent-store',
  {
    state(): vuery.desktop.SessionStateData {
      return {
        isAuthenticated: false,
        authorizationToken: String.empty(),
      };
    },
    persist: {
      storage: sessionStorage,
      paths: ['isAuthenticated', 'authorizationToken'],
      key(id) {
        if (import.meta.env.COMPILER_CONFIGURATION === 'Release') {
          return 'VdSbdqFD4OszcvMSMotvb7YhmH0KEhOV';
        }
        return id;
      },
    },
  }
);
