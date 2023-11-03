/// <reference types="@joingo.vip/native-x" />
/**
 * 提供了字符串拼接操作相关的方法。密闭的，不可以从此类型派生。
 * @author Wang Yucai
 *
 * @export
 * @class StringBuilder
 * @typedef {StringBuilder}
 * @sealed
 * @remarks
 *  密闭的，不可以从此类型派生。
 */
export declare class StringBuilder {
    private readonly m_initStr;
    private m_buffer;
    /**
     * 初始化 {@linkcode StringBuilder} 的新实例。
     * @author Wang Yucai
     *
     * @constructor
     * @param {?sys.Null<string>} [s] 初始化字符串。
     */
    constructor(s?: sys.Null<string>);
    /**
     * 重置 {@linkcode StringBuilder}。
     * @author Wang Yucai
     *
     * @returns {StringBuilder}
     */
    reset(): StringBuilder;
    /**
     * 将 {@linkcode s} 添加到 {@linkcode StringBuilder} 末尾处。
     * @author Wang Yucai
     *
     * @param {string} s 需要添加的字符串。
     * @returns {StringBuilder}
     */
    append(s: string): StringBuilder;
    /**
     * 格式化 {@linkcode s} 并添加到 {@linkcode StringBuilder} 末尾处。
     * @author Wang Yucai
     *
     * @param {string} s 格式化字符串。
     * @param {...any[]} args 格式化参数数组。
     * @returns {StringBuilder}
     * @see {@linkcode append}
     * @see {@linkcode String.format}
     */
    appendFormat(s: string, ...args: any[]): StringBuilder;
    /**
     * 将 {@linkcode StringBuilder} 转换成字符串。
     * @author Wang Yucai
     *
     * @returns {string}
     */
    toString(): string;
    /**
     * 创建一个新的 {@linkcode StringBuilder} 类型的对象实例。
     * @author Wang Yucai
     *
     * @static
     * @param {sys.Null<string>} [s=null] 用于初始化的字符串。
     * @returns {StringBuilder}
     */
    static create(s?: sys.Null<string>): StringBuilder;
}
