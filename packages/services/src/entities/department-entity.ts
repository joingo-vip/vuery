// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************

/**
 * 部门数据实体模块。
 *
 * @remarks
 * "department-entity.ts": 部门数据实体模块。
 *
 * @packageDocumentation
 */

import { BaseEntity } from './base-entity';

/**
 * 提供了部门实体相关的数据实体信息。
 * @author Wang Yucai
 *
 * @export
 * @interface DepartmentEntity
 * @typedef {DepartmentEntity}
 * @extends {BaseEntity}
 */
export interface DepartmentEntity extends BaseEntity {
  /**
   * 部门唯一标识。
   * @author Wang Yucai
   *
   * @readonly
   * @type {number}
   * @remarks
   * 获取一个 {@link Number} 类型值，用于表示部门唯一标识。
   */
  readonly deptId: number;

  /**
   * 父级部门标识。
   * @author Wang Yucai
   *
   * @readonly
   * @type {?(number | null)}
   * @remarks
   * 获取一个 {@link Number} 类型值，用于表示父级部门标识。
   */
  readonly parentId?: number | null;

  /**
   * 部门名称。
   * @author Wang Yucai
   *
   * @readonly
   * @type {string}
   * @remarks
   * 获取一个字符串，用于表示部门名称。
   */
  readonly deptName: string;

  /**
   * 部门排序标识。
   * @author Wang Yucai
   *
   * @readonly
   * @type {?(number | null)}
   * @remarks
   * 获取一个 {@link Number} 类型值，用于表示部门排序标识。
   */
  readonly orderNum?: number | null;

  /**
   * 负责人姓名。
   * @author Wang Yucai
   *
   * @readonly
   * @type {?(string | null)}
   * @remarks
   * 获取一个字符串，用于表示负责人姓名。
   */
  readonly leader?: string | null;

  /**
   * 负责人联系电话。
   * @author Wang Yucai
   *
   * @readonly
   * @type {?(string | null)}
   * @remarks
   * 获取一个字符串，用于表示负责人联系电话。
   */
  readonly phone?: string | null;

  /**
   * 负责人电邮地址。
   * @author Wang Yucai
   *
   * @readonly
   * @type {?(string | null)}
   * @remarks
   * 获取一个字符串，用于表示负责人电邮地址。
   */
  readonly email?: string | null;

  /**
   * 父级部门名称。
   * @author Wang Yucai
   *
   * @readonly
   * @type {?(string | null)}
   * @remarks
   * 获取一个字符串，用于表示父级部门名称。
   */
  readonly parentName?: string | null;
}
