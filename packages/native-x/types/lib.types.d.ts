// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************

declare namespace sys {
  /**
   * 定义了可能为 undefined 类型。
   * @author Wang Yucai
   *
   * @typedef {Undefined}
   * @template TSource 可能为 undefined 类型的源类型。
   */
  type Undefined<TSource> = TSource | undefined;

  /**
   * 定义了可能为 undefined 类型或 null 值的类型。
   * @author Wang Yucai
   *
   * @typedef {Null}
   * @template TSource 可能为 undefined 类型或 null 的源类型。
   */
  type Null<TSource> = Undefined<TSource> | null;

  /**
   * 定义了 {@link String} 比较配置选项枚举类型。
   * @author Wang Yucai
   *
   * @typedef {StringComparerOptions}
   */
  type StringComparerOptions = 'Default' | 'IgnoreCase';

  /**
   * 定义了时间跨度相关的信息。
   * @author Wang Yucai
   *
   * @interface TimeSpan
   * @typedef {TimeSpan}
   */
  interface TimeSpan {
    /**
     * 总毫秒值。
     * @author Wang Yucai
     *
     * @type {number}
     */
    totalMilliseconds: number;

    /**
     * 总秒值。
     * @author Wang Yucai
     *
     * @type {number}
     */
    totalSeconds: number;

    /**
     * 总分钟值。
     * @author Wang Yucai
     *
     * @type {number}
     */
    totalMinutes: number;

    /**
     * 总小时值。
     * @author Wang Yucai
     *
     * @type {number}
     */
    totalHours: number;

    /**
     * 总天数值。
     * @author Wang Yucai
     *
     * @type {number}
     */
    totalDays: number;

    /**
     * 总星期值。
     * @author Wang Yucai
     *
     * @type {number}
     */
    totalWeeks: number;

    /**
     * 总月份值。
     * @author Wang Yucai
     *
     * @type {number}
     */
    totalMonths: number;

    /**
     * 总年份值。
     * @author Wang Yucai
     *
     * @type {number}
     */
    totalYears: number;

    /**
     * 是否在指定日期时间之前。
     * @author Wang Yucai
     *
     * @type {boolean}
     */
    before: boolean;

    /**
     * 是否在指定日期时间之后。
     * @author Wang Yucai
     *
     * @type {boolean}
     */
    after: boolean;
  }

  /**
   * 定义了日期时间枚举类型。
   * @author Wang Yucai
   *
   * @typedef {UnitOfDate}
   */
  type UnitOfDate =
    | 'Year'
    | 'year'
    | 'y'
    | 'Month'
    | 'month'
    | 'Day'
    | 'day'
    | 'd'
    | 'Hour'
    | 'hour'
    | 'h'
    | 'Minute'
    | 'minute'
    | 'm'
    | 'Second'
    | 'second'
    | 's'
    | 'Millisecond'
    | 'ms';

  /**
   * 定义了事件参数类型。
   * @author Wang Yucai
   *
   * @interface EventArgs
   * @typedef {EventArgs}
   */
  interface EventArgs {}

  /**
   * 定义了通用事件参数类型。
   * @author Wang Yucai
   *
   * @interface GenericEventArgs
   * @typedef {GenericEventArgs}
   * @template TPayload 事件负载数据类型。
   * @extends {EventArgs}
   */
  interface GenericEventArgs<TPayload> extends EventArgs {
    /**
     * 事件负载数据。
     * @author Wang Yucai
     *
     * @type {sys.Null<TPayload>}
     */
    payload: sys.Null<TPayload>;
  }

  /**
   * 定义了文本大小写选项枚举类型。
   * @author Wang Yucai
   *
   * @typedef {TextCaseOptions}
   */
  type TextCaseOptions =
    | 'lower'
    | 'upper'
    | 'camel'
    | 'capital'
    | 'constant'
    | 'dot'
    | 'kebab'
    | 'pascal'
    | 'pascal-snake'
    | 'path'
    | 'sentence'
    | 'snake'
    | 'train'
    | 'none';

  /**
   * 定义了键值对类型。
   * @author Wang Yucai
   *
   * @interface KeyValuePair
   * @typedef {KeyValuePair}
   * @template TKey 键类型。
   * @template TValue 值类型。
   */
  interface KeyValuePair<TKey, TValue> {
    /**
     * {@linkcode TKey} 类型的键值。
     * @author Wang Yucai
     *
     * @type {TKey}
     */
    key: TKey;

    /**
     * {@linkcode TValue} 类型的值。
     * @author Wang Yucai
     *
     * @type {?sys.Null<TValue>}
     */
    value?: sys.Null<TValue>;
  }
}
