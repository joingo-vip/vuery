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

  /**
   * 为 console 类型提供的扩展方法。
   * @author Wang Yucai
   *
   * @interface Console
   * @typedef {Console}
   */
  interface Console {
    /**
     * 当条件表达式 {@linkcode where} 为 true 时，输出日志信息 {@linkcode message}，并返回 {@linkcode where}。
     * @author Wang Yucai
     *
     * @param {(boolean | sys.Func<boolean>)} where 条件表达式。
     * @param {?sys.Null<string>} [message] 日志信息。
     * @param {...any[]} optionalParams 可选的参数数组。
     * @returns {boolean}
     */
    logIf(where: boolean | sys.Func<boolean>, message?: sys.Null<string>, ...optionalParams: any[]): boolean;

    /**
     * 当条件表达式 {@linkcode where} 为 true 时，输出日志信息 {@linkcode message}，并返回 {@linkcode where}。
     * @author Wang Yucai
     *
     * @param {(boolean | sys.Func<boolean>)} where 条件表达式。
     * @param {?sys.Null<string>} [message] 日志信息。
     * @param {...any[]} optionalParams 可选的参数数组。
     * @returns {boolean}
     */
    debugIf(where: boolean | sys.Func<boolean>, message?: sys.Null<string>, ...optionalParams: any[]): boolean;

    /**
     * 当条件表达式 {@linkcode where} 为 true 时，输出日志信息 {@linkcode message}，并返回 {@linkcode where}。
     * @author Wang Yucai
     *
     * @param {(boolean | sys.Func<boolean>)} where 条件表达式。
     * @param {?sys.Null<string>} [message] 日志信息。
     * @param {...any[]} optionalParams 可选的参数数组。
     * @returns {boolean}
     */
    infoIf(where: boolean | sys.Func<boolean>, message?: sys.Null<string>, ...optionalParams: any[]): boolean;

    /**
     * 当条件表达式 {@linkcode where} 为 true 时，输出日志信息 {@linkcode message}，并返回 {@linkcode where}。
     * @author Wang Yucai
     *
     * @param {(boolean | sys.Func<boolean>)} where 条件表达式。
     * @param {?sys.Null<string>} [message] 日志信息。
     * @param {...any[]} optionalParams 可选的参数数组。
     * @returns {boolean}
     */
    warnIf(where: boolean | sys.Func<boolean>, message?: sys.Null<string>, ...optionalParams: any[]): boolean;

    /**
     * 当条件表达式 {@linkcode where} 为 true 时，输出日志信息 {@linkcode message}，并返回 {@linkcode where}。
     * @author Wang Yucai
     *
     * @param {(boolean | sys.Func<boolean>)} where 条件表达式。
     * @param {?sys.Null<string>} [message] 日志信息。
     * @param {...any[]} optionalParams 可选的参数数组。
     * @returns {boolean}
     */
    traceIf(where: boolean | sys.Func<boolean>, message?: sys.Null<string>, ...optionalParams: any[]): boolean;

    /**
     * 当条件表达式 {@linkcode where} 为 true 时，输出日志信息 {@linkcode message}，并返回 {@linkcode where}。
     * @author Wang Yucai
     *
     * @param {(boolean | sys.Func<boolean>)} where 条件表达式。
     * @param {?sys.Null<string>} [message] 日志信息。
     * @param {...any[]} optionalParams 可选的参数数组。
     * @returns {boolean}
     */
    errorIf(where: boolean | sys.Func<boolean>, message?: sys.Null<string>, ...optionalParams: any[]): boolean;
  }
}