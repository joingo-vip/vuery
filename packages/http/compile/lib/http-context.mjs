// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************
import { HttpUtilities } from './http-utilities.mjs';
/**
 * 提供了 HTTP 上下文相关的方法。
 * @author Wang Yucai
 *
 * @export
 * @class HttpContext
 * @typedef {HttpContext}
 */
export class HttpContext {
    /**
     * 初始化 {@linkcode HttpContext} 的新实例。
     * @author Wang Yucai
     *
     * @constructor
     * @protected
     */
    constructor() {
        this.location = HttpUtilities.resolveUrl(window.location.href);
    }
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
    static get currentContext() {
        return new HttpContext();
    }
    /**
     * 重定向到指定的 {@linkcode url}。
     * @author Wang Yucai
     *
     * @param {string} url 需要重定向的 URL 地址。
     * @param {boolean} [replace=false] 是否使用 `window.location.replace` 方法替代 `window.location.assign`。
     */
    redirect(url, replace = false) {
        console.debug(`[DEBUG] - <http-context.mts: 4848fb>: 尝试重定向到 “${url}”。`);
        if (replace) {
            window.location.replace(url);
        }
        else {
            window.location.assign(url);
        }
    }
    /**
     * 刷新。
     * @author Wang Yucai
     */
    refresh() {
        window.location.reload();
    }
}
