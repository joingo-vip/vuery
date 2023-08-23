// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************

/**
 * 角色数据实体模块。
 *
 * @remarks
 * "role-entity.ts": 角色数据实体模块。
 *
 * @packageDocumentation
 */

import { BaseEntity } from './base-entity';

/**
 * 提供了用户角色相关的数据实体。
 * @author Wang Yucai
 *
 * @export
 * @interface RoleEntity
 * @typedef {RoleEntity}
 * @extends {BaseEntity}
 */
export interface RoleEntity extends BaseEntity {
  /**
   * 角色唯一标识。
   * @author Wang Yucai
   *
   * @readonly
   * @type {number}
   * @remarks
   * 获取一个 {@link Number} 类型值，用于表示角色唯一标识。
   */
  readonly roleId: number;

  /**
   * 角色名称。
   * @author Wang Yucai
   *
   * @readonly
   * @type {string}
   * @remarks
   * 获取一个字符串，用于表示角色名称。
   */
  readonly roleName: string;

  /**
   * 角色标识。
   * @author Wang Yucai
   *
   * @readonly
   * @type {string}
   * @remarks
   * 获取一个字符串，用于表示角色标识。
   */
  readonly roleKey: string;

  /**
   * 角色排序标识。
   * @author Wang Yucai
   *
   * @readonly
   * @type {string}
   * @remarks
   * 获取一个字符串，用于表示角色排序标识。
   */
  readonly roleSort: string;

  /**
   * 数据范畴。
   * @author Wang Yucai
   *
   * @readonly
   * @type {string}
   * @remarks
   * 获取一个字符串，用于表示数据范畴。
   */
  readonly dataScope: string;

  /**
   * 是有启用菜单严格模式。
   * @author Wang Yucai
   *
   * @readonly
   * @type {boolean}
   * @remarks
   * 获取一个 {@link Boolean} 类型值，用于表示是有启用菜单严格模式。
   */
  readonly menuCheckStrictly: boolean;

  /**
   * 是否启用部门严格模式。
   * @author Wang Yucai
   *
   * @readonly
   * @type {boolean}
   * @remarks
   * 获取一个 {@link Boolean} 类型值，用于表示是否启用部门严格模式。
   */
  readonly deptCheckStrictly: boolean;

  /**
   * 角色标记。
   * @author Wang Yucai
   *
   * @readonly
   * @type {boolean}
   * @remarks
   * 获取一个 {@link Boolean} 类型值，用于表示角色标记。
   */
  readonly flag: boolean;

  /**
   * 是否为管理员角色。
   * @author Wang Yucai
   *
   * @readonly
   * @type {boolean}
   * @remarks
   * 获取一个 ? 类型值，用于表示是否为管理员角色。
   */
  readonly admin: boolean;
}
