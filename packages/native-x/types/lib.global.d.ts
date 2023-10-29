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
     * @see {@link https://www.npmjs.com/package/deepmerge}
     */
    extends(...values: any[]): any;

    /**
     * 当 {@linkcode a} 与 {@linkcode b} 相等时返回 true；否则返回 false。
     * @author Wang Yucai
     *
     * @param {*} a 需要对比的值。
     * @param {*} b 需要对比的值。
     * @returns {boolean}
     * @see {@link https://www.npmjs.com/package/fast-deep-equal}
     */
    referenceEquals(a: any, b: any): boolean;
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

  /**
   * 为 {@link String} 类型提供的静态扩展方法。
   * @author Wang Yucai
   *
   * @interface StringConstructor
   * @typedef {StringConstructor}
   */
  interface StringConstructor {
    /**
     * 当字符串 {@linkcode s} 为 undefined 类型；null 值或长度等于 0 时返回 true；否则返回 false。
     * @author Wang Yucai
     *
     * @param {sys.Null<string>} s 需要验证的字符串。
     * @returns {boolean}
     * @see {@linkcode Object.isNull}
     */
    isNullOrEmpty(s: sys.Null<string>): boolean;

    /**
     * 当字符串 {@linkcode s} 为 undefined 类型；null 值、长度等于 0 或空白符时返回 true；否则返回 false。
     * @author Wang Yucai
     *
     * @param {sys.Null<string>} s 需要验证的字符串。
     * @returns {boolean}
     * @see {@linkcode String.isNullOrEmpty}
     */
    isNullOrWhitespace(s: sys.Null<string>): boolean;

    /**
     * 空字符串。
     * @author Wang Yucai
     *
     * @type {string}
     */
    empty: string;

    /**
     * 格式化字符串。
     * @author Wang Yucai
     *
     * @param {string} formatter 格式化字符串。
     * @param {...any[]} args 格式化参数。
     * @returns {string}
     * @see {@link https://www.npmjs.com/package/string-template}
     */
    format(formatter: string, ...args: any[]): string;
  }

  /**
   * 为 {@link String} 类型提供的扩展方法。
   * @author Wang Yucai
   *
   * @interface String
   * @typedef {String}
   */
  interface String {
    /**
     * 对比字符串与 {@linkcode s} 是否相等。
     * @author Wang Yucai
     *
     * @param {sys.Null<string>} s 需要对比的字符串。
     * @param {sys.StringComparerOptions} [options='Default'] {@linkcode sys.StringComparerOptions} 中的一个值。默认为 {@linkcode sys.StringComparerOptions}.Default。
     * @returns {boolean}
     * @see {@linkcode Object.referenceEquals}
     */
    equals(s: sys.Null<string>, options: sys.StringComparerOptions = 'Default'): boolean;
  }

  /**
   * 提供了参数异常相关的方法。
   * @author Wang Yucai
   *
   * @interface ArgumentError
   * @typedef {ArgumentError}
   * @extends {Error}
   */
  interface ArgumentError extends Error {
    /**
     * 引发异常的参数名称。
     * @author Wang Yucai
     *
     * @type string
     */
    argumentName?: string;
  }

  /**
   * 定义了构造 {@linkcode ArgumentError} 类型的对象实例的接口。
   * @author Wang Yucai
   *
   * @interface ArgumentErrorConstructor
   * @typedef {ArgumentErrorConstructor}
   * @extends {ErrorConstructor}
   */
  interface ArgumentErrorConstructor extends ErrorConstructor {
    new (message?: string, argName?: string): ArgumentError;
    (message?: string, argName?: string): ArgumentError;
  }

  var ArgumentError: ArgumentErrorConstructor;
}
