// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************

/**
 * 基础数据实体模块。
 *
 * @remarks
 * "base-entity.ts": 基础数据实体模块。
 *
 * @packageDocumentation
 */

/**
 * 提供了数据实体相关的基本信息。
 * @author Wang Yucai
 *
 * @export
 * @interface BaseEntity
 * @typedef {BaseEntity}
 */
export interface BaseEntity {
  /**
   * 搜索值。
   * @author Wang Yucai
   *
   * @readonly
   * @type {?(string | null)}
   * @remarks
   * 获取一个字符串，用于表示搜索值。
   */
  readonly searchValue?: string | null;

  /**
   * 创建人姓名。
   * @author Wang Yucai
   *
   * @readonly
   * @type {?(string | null)}
   * @remarks
   * 获取一个字符串，用于表示创建人姓名。
   */
  readonly createBy?: string | null;

  /**
   * 创建时间。
   * @author Wang Yucai
   *
   * @readonly
   * @type {?(string | Date | null)}
   * @remarks
   * 获取一个 {@link Date} 类型值或字符串，用于表示创建时间。
   */
  readonly createTime?: string | Date | null;

  /**
   * 最后更新人姓名。
   * @author Wang Yucai
   *
   * @readonly
   * @type {?(string | null)}
   * @remarks
   * 获取一个字符串，用于表示最后更信任姓名。
   */
  readonly updateBy?: string | null;

  /**
   * 最后更新时间。
   * @author Wang Yucai
   *
   * @readonly
   * @type {?(string | Date | null)}
   * @remarks
   * 获取一个 {@link Date} 类型值或字符串，用于表示最后更新时间。
   */
  readonly updateTime?: string | Date | null;

  /**
   * 备注信息。
   * @author Wang Yucai
   *
   * @readonly
   * @type {?(string | null)}
   * @remarks
   * 获取一个字符串，用于表示备注信息。
   */
  readonly remark?: string | null;

  /**
   * 扩展参数信息。
   * @author Wang Yucai
   *
   * @readonly
   * @type {?*}
   * @remarks
   * 获取 {@link Object} 类型的对象实例或值，用于表示扩展参数信息。
   */
  readonly params?: any;

  /**
   * 状态信息。
   * @author Wang Yucai
   *
   * @readonly
   * @type {?(string | null)}
   * @remarks
   * 获取一个字符串，用于表示状态信息。
   */
  readonly status?: string | null;

  /**
   * 是否已经删除。
   * @author Wang Yucai
   *
   * @readonly
   * @type {?(string | null)}
   * @remarks
   * 获取一个字符串，用于表示是否已经删除。
   */
  readonly delFlag?: string | null;
}
