// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************

/**
 * 定义了若依 HTTP 接口无数据返回值结构。
 * @author Wang Yucai
 *
 * @export
 * @interface RyVoid
 * @typedef {RyVoid}
 */
export interface RyVoid {
  /**
   * 若依 HTTP 接口状态码。
   * @author Wang Yucai
   *
   * @type {?sys.Null<number>}
   */
  code?: sys.Null<number>;

  /**
   * 若依 HTTP 接口描述信息。
   * @author Wang Yucai
   *
   * @type {?sys.Null<string>}
   */
  msg?: sys.Null<string>;
}

/**
 * 定义了包含了 `data` 字段的若依 HTTP 接口返回值结构。
 * @author Wang Yucai
 *
 * @export
 * @interface RyData
 * @typedef {RyData}
 * @template T 数据字段类型。
 * @extends {RyVoid}
 */
export interface RyData<T> extends RyVoid {
  /**
   * {@linkcode T} 类型的数据返回值。
   * @author Wang Yucai
   *
   * @type {?sys.Null<T>}
   */
  data?: sys.Null<T>;
}

/**
 * 定义了可供分页的若依 HTTP 接口返回值结构。
 * @author Wang Yucai
 *
 * @export
 * @interface RyDataTable
 * @typedef {RyDataTable}
 * @template TRow 单行数据结构类型。
 * @extends {RyVoid}
 */
export interface RyDataTable<TRow> extends RyVoid {
  /**
   * {@linkcode TRow} 类型的结果集。
   * @author Wang Yucai
   *
   * @type {?sys.Null<Array<TRow>>}
   */
  rows?: sys.Null<Array<TRow>>;

  /**
   * 总行数。
   * @author Wang Yucai
   *
   * @type {number}
   */
  total: number;
}
