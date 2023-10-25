/**
 * 提供了校验相关的工具方法。
 * @author Wang Yucai
 *
 * @export
 * @class AssertUtilities
 * @typedef {AssertUtilities}
 */
export declare class AssertUtilities {
    /**
     * 初始化 {@linkcode AssertUtilities} 的新实例。
     * @author Wang Yucai
     *
     * @constructor
     * @private
     */
    private constructor();
    /**
     * 当 {@linkcode target} 为 undefined 类型时，返回 true；否则返回 false。
     * @author Wang Yucai
     *
     * @static
     * @param {*} target 需要校验的目标值。
     * @returns {boolean}
     */
    static isUndefined(target: any): boolean;
    /**
     * 当 {@linkcode target} 为 undefined 类型或 null 值时，返回 true；否则返回 false。
     * @author Wang Yucai
     *
     * @static
     * @param {*} target 需要校验的目标值。
     * @returns {boolean}
     * @see {@linkcode AssertUtilities.isUndefined}
     */
    static isNull(target: any): boolean;
    /**
     * 当 {@linkcode num} 为 {@link Number} 类型时，返回 true；否则返回 false。当 {@linkcode num} 为 undefined 类型、null 值或 {@link NaN} 值时，返回 false。
     * @author Wang Yucai
     *
     * @static
     * @param {*} num 需要校验的 {@link Number} 类型值。
     * @returns {boolean}
     * @see {@link AssertUtilities.isNull}
     * @see {@link isNaN}
     */
    static isNumber(num: any): boolean;
    /**
     * 是否为无穷大或无穷小的数。
     * @author Wang Yucai
     *
     * @static
     * @param {number} num 需要校验的数字。
     * @returns {boolean}
     * @see {@linkcode AssertUtilities.isNumber}
     */
    static isInfinity(num: number): boolean;
    /**
     * 当 {@linkcode dateTime} 为 {@link Date} 类型时，返回 true；否则返回 false。当 {@linkcode dateTime} 为 undefined 类型或 null 值时，返回 false。
     * @author Wang Yucai
     *
     * @static
     * @param {*} dateTime 需要校验的日期时间类型值。
     * @returns {boolean}
     * @see {@link AssertUtilities.isNull}
     */
    static isDateTime(dateTime: any): boolean;
}
