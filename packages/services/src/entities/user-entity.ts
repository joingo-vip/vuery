// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************

/**
 * 用户数据实体模块。
 *
 * @remarks
 * "user-entity.ts": 用户数据实体模块。
 *
 * @packageDocumentation
 */

import { BaseEntity } from './base-entity';

/**
 * 提供了用户相关的数据实体。
 * @author Wang Yucai
 *
 * @export
 * @interface UserEntity
 * @typedef {UserEntity}
 * @extends {BaseEntity}
 */
export interface UserEntity extends BaseEntity {
  /**
   * 用户唯一标识。
   * @author Wang Yucai
   *
   * @readonly
   * @type {number}
   * @remarks
   * 获取一个 {@link Number} 类型值，用于表示用户唯一标识。
   */
  readonly userId: number;

  /**
   * 用户所属部门标识。
   * @author Wang Yucai
   *
   * @readonly
   * @type {?(number | null)}
   * @remarks
   * 获取一个 {@link Number} 类型值，用于表示用户所属部门标识。
   */
  readonly deptId?: number | null;

  /**
   * 用户名。
   * @author Wang Yucai
   *
   * @readonly
   * @type {string}
   * @remarks
   * 获取一个字符串，用于表示用户名。
   */
  readonly userName: string;

  /**
   * 昵称。
   * @author Wang Yucai
   *
   * @readonly
   * @type {?(string | null)}
   * @remarks
   * 获取一个字符串，用于表示昵称。
   */
  readonly nickName?: string | null;

  /**
   * 用户电邮地址。
   * @author Wang Yucai
   *
   * @readonly
   * @type {?(string | null)}
   * @remarks
   * 获取一个字符串，用于表示用户电邮地址。
   */
  readonly email?: string | null;

  /**
   * 手机号码。
   * @author Wang Yucai
   *
   * @readonly
   * @type {?(string | null)}
   * @remarks
   * 获取一个字符串，用于表示手机号码。
   */
  readonly phonenumber?: string | null;

  /**
   * 用户性别信息。
   * @author Wang Yucai
   *
   * @readonly
   * @type {?(string | null)}
   * @remarks
   * 获取一个字符串，用于表示用户性别信息。
   */
  readonly sex?: string | null;

  /**
   * 用户头像 URL 地址。
   * @author Wang Yucai
   *
   * @readonly
   * @type {?(string | null)}
   * @remarks
   * 获取一个字符串，用于表示用户头像 URL 地址。
   */
  readonly avatar?: string | null;

  /**
   * 用户登录口令。
   * @author Wang Yucai
   *
   * @readonly
   * @type {?(string | null)}
   * @remarks
   * 获取一个字符串，用于表示用户登录口令。
   */
  readonly password?: string | null;

  /**
   * 是否为管理员用户。
   * @author Wang Yucai
   *
   * @readonly
   * @type {boolean}
   * @remarks
   * 获取一个 {@link Boolean} 类型值，用于表示是否为管理员用户。
   */
  readonly admin: boolean;
}
