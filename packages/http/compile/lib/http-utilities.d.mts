/**
 * 定义了 URL 解析结果类型。
 * @author Wang Yucai
 *
 * @export
 * @typedef {URLResolveResult}
 */
export type URLResolveResult = {
    /**
     * URL 标识 '#' 后的片段（fragment）标识符的字符串。
     * @author Wang Yucai
     *
     * @type {?string}
     */
    fragment?: string;
    /**
     * 完整的 URL 字符串。
     * @author Wang Yucai
     *
     * @type {string}
     */
    url: string;
    /**
     * 不包含查询字符串的 URL 字符串。
     * @author Wang Yucai
     *
     * @type {string}
     */
    uri: string;
    /**
     * URL 查询字符串等效的查询对象。
     * @author Wang Yucai
     *
     * @type {?Record<string, any>}
     */
    query?: Record<string, any>;
};
/**
 * 提供了 HTTP 相关的辅助方法。
 * @author Wang Yucai
 *
 * @export
 * @class HttpUtilities
 * @typedef {HttpUtilities}
 */
export declare class HttpUtilities {
    /**
     * 初始化 {@linkcode HttpUtilities} 的新实例。
     * @author Wang Yucai
     *
     * @constructor
     * @private
     */
    private constructor();
    /**
     * 对 URL 进行编码。
     * @author Wang Yucai
     *
     * @static
     * @param {(string | URL)} url 需要编码的 URL。
     * @returns {string}
     * @see {@linkcode encodeURI}
     */
    static encodeUrl(url: string | URL): string;
    /**
     * 对 {@linkcode url} 进行解码。
     * @author Wang Yucai
     *
     * @static
     * @param {string} url 需要解码的 URL 字符串。
     * @returns {URL}
     * @see {@linkcode decodeURI}
     */
    static decodeUrl(url: string): URL;
    /**
     * 对 URL 中组成部分进行编码。
     * @author Wang Yucai
     *
     * @static
     * @param {(string | URL)} url 需要编码的 URL。
     * @returns {string}
     * @see {@linkcode encodeURIComponent}
     */
    static encodeUrlPartials(url: string | URL): string;
    /**
     * 对 {@linkcode url} 中的组成部分进行解码。
     * @author Wang Yucai
     *
     * @static
     * @param {string} url 已经编码的 URL。
     * @returns {string}
     * @see {@linkcode decodeURIComponent}
     */
    static decodeUrlPartials(url: string): string;
    /**
     * 尝试的 URL 进行解析。
     * @author Wang Yucai
     *
     * @static
     * @param {(string | URL)} url 需要解析的 URL 字符串。
     * @returns {Readonly<URLResolveResult>}
     * @see {@link https://www.npmjs.com/package/query-string}
     */
    static resolveUrl(url: string | URL): Readonly<URLResolveResult>;
    /**
     * 创建完整的 URL 地址。
     * @author Wang Yucai
     *
     * @static
     * @param {string} url URL 字符串。
     * @param {Record<string, any>} [query=null] 查询字符串。
     * @param {string} [fragment=null] URL 中 # 后的字符串。
     * @returns {string}
     * @see {@link https://www.npmjs.com/package/query-string}
     */
    static createUrl(url: string, query?: Record<string, any>, fragment?: string): string;
}
