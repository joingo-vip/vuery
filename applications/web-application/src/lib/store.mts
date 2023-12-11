// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************

import { defineStore } from 'pinia';

/**
 * 定义了 UI 状态管理类型。
 * @author Wang Yucai
 *
 * @export
 * @typedef {UIState}
 */
export type UIState = {
  /**
   * 侧边栏菜单是否折叠。
   * @author Wang Yucai
   *
   * @type {?boolean}
   */
  sideMenuCollapsed?: boolean;
};

/**
 * 使用 UI 状态管理服务。
 * @author Wang Yucai
 *
 * @type {*}
 */
export const useUIStore = defineStore('ui-store', {
  state(): UIState {
    return {
      sideMenuCollapsed: false,
    };
  },
  persist: {
    storage: localStorage,
    key: 'vip.joingo.ui-state',
    paths: ['sideMenuCollapsed'],
  },
});
