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
}
