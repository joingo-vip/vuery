// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************

export {};

declare global {
  /**
   * 为 {@link Object} 类型提供的扩展方法。
   * @author Wang Yucai
   *
   * @interface ObjectConstructor
   * @typedef {ObjectConstructor}
   */
  interface ObjectConstructor {
    /**
     * 当 {@linkcode value} 为 undefined 类型时返回 true；否则返回 false。
     * @author Wang Yucai
     *
     * @param {*} value 需要校验的值。
     * @returns {boolean}
     */
    isUndefined(value: any): boolean;

    /**
     * 当 {@linkcode value} 为 undefined 类型或 null 值时返回 true；否则返回 false。
     * @author Wang Yucai
     *
     * @param {*} value 需要校验的值。
     * @returns {boolean}
     * @see {@linkcode Object.isUndefined}
     */
    isNull(value: any): boolean;

    /**
     * 将 {@linkcode value} 转换成 {@linkcode T} 类型的对象实例或值。
     * @author Wang Yucai
     *
     * @template T 目标类型。
     * @param {*} value 原始值。
     * @returns {sys.Null<T>}
     */
    as<T>(value: any): sys.Null<T>;

    /**
     * 合并 {@linkcode values} 为一个全新的对象实例。
     * @author Wang Yucai
     *
     * @param {...any[]} values 需要扩展的数组。
     * @returns {*}
     */
    extends(...values: any[]): any;
  }
}
