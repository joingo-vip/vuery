// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************

import { EnabledState } from './common.mjs';

/**
 * 定义了角色列表过滤条件类型。
 * @author Wang Yucai
 *
 * @export
 * @typedef {RoleFilters}
 */
export type RoleFilters = {
  /**
   * 角色编码。
   * @author Wang Yucai
   *
   * @type {string}
   */
  code: string;

  /**
   * 角色名称。
   * @author Wang Yucai
   *
   * @type {string}
   */
  name: string;

  /**
   * 是否启用状态。
   * @author Wang Yucai
   *
   * @type {EnabledState}
   */
  enabled: EnabledState;
};

/**
 * 默认的角色过滤条件。
 * @author Wang Yucai
 *
 * @type {RoleFilters}
 */
export const DefaultRoleFilters: RoleFilters = {
  code: '',
  name: '',
  enabled: EnabledState.ALL,
};
