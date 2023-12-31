// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************

export {};

declare global {
  /**
   * 应用程序版本号。
   * @author Wang Yucai
   *
   * @type {string}
   */
  var __JOINGO_APPLICATION_VERSION__: string;

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

    /**
     * 将字符串转换成指定的大小写格式。
     * @author Wang Yucai
     *
     * @param {sys.TextCaseOptions} [options='none'] {@linkcode sys.TextCaseOptions} 中的一个值。
     * @returns {string}
     * @see {@link https://www.npmjs.com/package/change-case}
     */
    transform(options: sys.TextCaseOptions = 'none'): string;
  }

  /**
   * 为 {@link Date} 类型提供的扩展方法。
   * @author Wang Yucai
   *
   * @interface DateConstructor
   * @typedef {DateConstructor}
   */
  interface DateConstructor {
    /**
     * 获取当前的日期时间。
     * @author Wang Yucai
     *
     * @returns {Date}
     */
    currentDateTime(): Date;

    /**
     * 日期时间格式化字符串。
     * @author Wang Yucai
     *
     * @type {string}
     */
    DateTimeFormatter: string;

    /**
     * 日期格式化字符串。
     * @author Wang Yucai
     *
     * @type {string}
     */
    DateFormatter: string;

    /**
     * 时间格式化字符串。
     * @author Wang Yucai
     *
     * @type {string}
     */
    TimeFormatter: string;

    /**
     * 短日期格式化字符串。
     * @author Wang Yucai
     *
     * @type {string}
     */
    ShortDateFormatter: string;

    /**
     * 短时间（排除秒位）格式化字符串。
     * @author Wang Yucai
     *
     * @type {string}
     */
    ShortTimeFormatter: string;

    /**
     * 短日期时间格式化字符串。
     * @author Wang Yucai
     *
     * @type {string}
     */
    ShortDateTimeFormatter: string;
  }

  /**
   * 为 {@link Date} 类型提供的扩展方法。
   * @author Wang Yucai
   *
   * @interface Date
   * @typedef {Date}
   * @see {@link https://www.npmjs.com/package/dayjs}
   */
  interface Date {
    /**
     * 将日期时间值格式化成字符串。
     * @author Wang Yucai
     *
     * @param {?(string | sys.Func<string>)} [formatter] 格式化模板字符串。
     * @returns {string}
     */
    format(formatter?: string | sys.Func<string>): string;

    /**
     * 计算指定日期时间与 {@linkcode target} 之间的时间跨度。
     * @author Wang Yucai
     *
     * @param {Date} target 目标日期时间。
     * @returns {Readonly<sys.TimeSpan>}
     */
    diff(target: Date): Readonly<sys.TimeSpan>;

    /**
     * 添加指定的时间间隔。
     * @author Wang Yucai
     *
     * @param {number} interval 时间间隔。
     * @param {sys.UnitOfDate} [unit='ms'] 时间单位。
     * @returns {Date}
     */
    add(interval: number, unit: sys.UnitOfDate = 'ms'): Date;
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
    /**
     * 初始化 {@linkcode ArgumentError} 的新实例。
     *
     * @param {?string} [message] 异常描述信息。
     * @param {?string} [argName] 引发异常的参数名称。
     */
    new (message?: string, argName?: string): ArgumentError;

    /**
     * 创建 {@linkcode ArgumentError} 类型的对象实例。
     * @author Wang Yucai
     *
     * @param {?string} [message] 异常描述信息。
     * @param {?string} [argName] 引发异常的参数名称。
     * @returns {ArgumentError}
     */
    (message?: string, argName?: string): ArgumentError;
  }

  var ArgumentError: ArgumentErrorConstructor;

  /**
   * 提供了 HTTP 请求异常相关的方法。
   * @author Wang Yucai
   *
   * @interface HttpError
   * @typedef {HttpError}
   * @extends {Error}
   */
  interface HttpError extends Error {
    /**
     * HTTP 状态码。
     * @author Wang Yucai
     *
     * @type {?number}
     */
    statusCode?: number;

    /**
     * HTTP 响应数据。
     * @author Wang Yucai
     *
     * @type {?*}
     */
    response?: any;

    /**
     * HTTP 请求的 URI 地址。
     * @author Wang Yucai
     *
     * @type {?string}
     */
    uri?: string;
  }

  /**
   * 定义了构造 {@linkcode HttpError} 类型的对象实例的接口。
   * @author Wang Yucai
   *
   * @interface HttpErrorConstructor
   * @typedef {HttpErrorConstructor}
   * @extends {ErrorConstructor}
   */
  interface HttpErrorConstructor extends ErrorConstructor {
    /**
     * 初始化 {@linkcode HttpError} 的新实例。
     *
     * @param {?string} [message] 异常描述信息。
     * @param {?number} [statusCode] 错误的 HTTP 状态码。
     * @param {?string} [uri] 当前请求的 HTTP URI 地址。
     * @param {?*} [response] HTTP 请求响应信息。
     */
    new (message?: string, statusCode?: number, uri?: string, response?: any): HttpError;

    /**
     * 创建一个 {@linkcode HttpError} 类型的对象实例。
     *
     * @param {?string} [message] 异常描述信息。
     * @param {?number} [statusCode] 错误的 HTTP 状态码。
     * @param {?string} [uri] 当前请求的 HTTP URI 地址。
     * @param {?*} [response] HTTP 请求响应信息。
     */
    (message?: string, statusCode?: number, uri?: string, response?: any): HttpError;
  }

  var HttpError: HttpErrorConstructor;
}
