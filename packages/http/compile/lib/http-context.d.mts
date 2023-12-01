import { type URLResolveResult } from './http-utilities.mjs';
/**
 * 提供了 HTTP 上下文相关的方法。
 * @author Wang Yucai
 *
 * @export
 * @class HttpContext
 * @typedef {HttpContext}
 */
export declare class HttpContext {
    /**
     * 当前浏览器 URL 路径。
     * @author Wang Yucai
     * @remarks
     *  获取 {@linkcode URLResolveResult} 类型的对象实例，用于表示当前浏览器 URL 路径。
     *
     * @readonly
     * @type {URLResolveResult}
     */
    readonly location: URLResolveResult;
    /**
     * 初始化 {@linkcode HttpContext} 的新实例。
     * @author Wang Yucai
     *
     * @constructor
     * @protected
     */
    protected constructor();
    /**
     * 当前的 HTTP 上下文信息。
     * @author Wang Yucai
     * @remarks
     *  获取 {@linkcode HttpContext} 类型的对象实例，用于表示当前的 HTTP 上下文信息。
     *
     * @static
     * @readonly
     * @type {HttpContext}
     */
    static get currentContext(): HttpContext;
    /**
     * 重定向到指定的 {@linkcode url}。
     * @author Wang Yucai
     *
     * @param {string} url 需要重定向的 URL 地址。
     * @param {boolean} [replace=false] 是否使用 `window.location.replace` 方法替代 `window.location.assign`。
     */
    redirect(url: string, replace?: boolean): void;
}
