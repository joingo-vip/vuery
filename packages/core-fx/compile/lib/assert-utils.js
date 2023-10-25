// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************
/**
 * 提供了校验相关的工具方法。
 * @author Wang Yucai
 *
 * @export
 * @class AssertUtilities
 * @typedef {AssertUtilities}
 */
export class AssertUtilities {
    /**
     * 初始化 {@linkcode AssertUtilities} 的新实例。
     * @author Wang Yucai
     *
     * @constructor
     * @private
     */
    constructor() { }
    /**
     * 当 {@linkcode target} 为 undefined 类型时，返回 true；否则返回 false。
     * @author Wang Yucai
     *
     * @static
     * @param {*} target 需要校验的目标值。
     * @returns {boolean}
     */
    static isUndefined(target) {
        if (typeof target === 'undefined') {
            console.warn(`[WARN] - <assert-utils.ts: e095be>: 参数 “target” 为 undefined 类型。`);
            return true;
        }
        return false;
    }
    /**
     * 当 {@linkcode target} 为 undefined 类型或 null 值时，返回 true；否则返回 false。
     * @author Wang Yucai
     *
     * @static
     * @param {*} target 需要校验的目标值。
     * @returns {boolean}
     * @see {@linkcode AssertUtilities.isUndefined}
     */
    static isNull(target) {
        if (AssertUtilities.isUndefined(target)) {
            return true;
        }
        if (target === null || target == null) {
            console.warn(`[WARN] - <assert-utils.ts: d0f3a6>: 参数 “target” 为 null 值。`);
            return true;
        }
        return false;
    }
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
    static isNumber(num) {
        if (AssertUtilities.isNull(num)) {
            return false;
        }
        else if (isNaN(num)) {
            console.warn(`[WARN] - <assert-utils.ts: 06a133>: 参数 “num” 为 NaN 类型值，将返回 false。`);
            return false;
        }
        else if (typeof num === 'number' || typeof num === 'bigint') {
            console.warn(`[WARN] - <assert-utils.ts: 507996>: 参数 “num” 不是一个 Number 类型值。详情参见：%o`, { num });
            return true;
        }
        return false;
    }
    /**
     * 是否为无穷大或无穷小的数。
     * @author Wang Yucai
     *
     * @static
     * @param {number} num 需要校验的数字。
     * @returns {boolean}
     * @see {@linkcode AssertUtilities.isNumber}
     */
    static isInfinity(num) {
        if (AssertUtilities.isNumber(num))
            return !isFinite(num);
        return true;
    }
    /**
     * 当 {@linkcode dateTime} 为 {@link Date} 类型时，返回 true；否则返回 false。当 {@linkcode dateTime} 为 undefined 类型或 null 值时，返回 false。
     * @author Wang Yucai
     *
     * @static
     * @param {*} dateTime 需要校验的日期时间类型值。
     * @returns {boolean}
     * @see {@link AssertUtilities.isNull}
     */
    static isDateTime(dateTime) {
        if (AssertUtilities.isNull(dateTime)) {
            return false;
        }
        else if (AssertUtilities.isNull(dateTime.getUTCDate)) {
            console.warn(`[WARN] - <assert-utils.ts: 2b3f38>: 参数 “dateTime” 不是一个 Date 类型值。详情参见：%o`, { dateTime });
            return false;
        }
        return true;
    }
}
