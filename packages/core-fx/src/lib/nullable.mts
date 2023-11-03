// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************

import { sealedDecorator as sealed } from './sealed-decorator.mjs';

/**
 * 提供了可能为空 {@linkcode T} 类型相关的方法。密闭的，不可以从此类型派生。
 * @author Wang Yucai
 *
 * @export
 * @class Nullable
 * @typedef {Nullable}
 * @template T
 * @remarks
 *  密闭的，不可以从此类型派生。
 */
@sealed
export class Nullable<T> {
  private readonly m_rawValue: sys.Null<T>;

  /**
   * 初始化 {@linkcode Nullable} 的新实例。
   * @author Wang Yucai
   *
   * @constructor
   * @param {sys.Null<T>} value 可能为空的 {@linkcode T} 类型值。
   */
  constructor(value: sys.Null<T>) {
    this.m_rawValue = value;
  }

  /**
   * 原始值。
   * @author Wang Yucai
   *
   * @readonly
   * @type {sys.Null<T>}
   * @remarks
   *  获取 {@linkcode T} 类型的对象实例或值，用于表示原始值。
   */
  get rawValue(): sys.Null<T> {
    return this.m_rawValue;
  }

  /**
   * 当 {@linkcode rawValue} 为 undefined 类型或 null 值时，返回 false；否则返回 true。
   * @author Wang Yucai
   *
   * @readonly
   * @type {boolean}
   * @remarks
   *  获取一个 {@link Boolean} 类型值，用于表示 {@linkcode rawValue} 是否不为 undefined 类型或 null 值。
   */
  get hasValue(): boolean {
    return !Object.isNull(this.m_rawValue);
  }

  /**
   * 当 {@linkcode rawValue} 为 undefined 类型或 null 值时，返回 {@linkcode value}；否则返回 {@linkcode rawValue}。
   * @author Wang Yucai
   *
   * @param {T} value 当 {@linkcode rawValue} 为 undefined 类型或 null 值时需要返回的值。
   * @returns {T}
   */
  value(value: T): T;

  /**
   * 当 {@linkcode rawValue} 为 undefined 类型或 null 值时，返回 {@linkcode value} 的返回值；否则返回 {@linkcode rawValue}。
   * @author Wang Yucai
   *
   * @param {sys.Func1<sys.Null<T>, T>} value 当 {@linkcode rawValue} 为 undefined 类型或 null 值时，返回 {@linkcode value} 的返回值。
   * @returns {T}
   */
  value(value: sys.Func1<sys.Null<T>, T>): T;
  value(value: any): T {
    if (this.hasValue) return this.rawValue;
    else {
      if (typeof value === 'function' && typeof this.rawValue !== 'function') return value(this.rawValue);
      return value;
    }
  }
}
