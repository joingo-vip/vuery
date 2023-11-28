// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************
/**
 * 提供了 HTTP 响应结果相关的方法。
 * @author Wang Yucai
 *
 * @export
 * @class HttpResult
 * @typedef {HttpResult}
 * @template TRawResponse 原始 HTTP 响应类型。
 */
export class HttpResult {
    /**
     * 初始化 {@linkcode HttpResult} 的新实例。
     * @author Wang Yucai
     *
     * @constructor
     * @param {?TRawResponse} [response] {@linkcode TRawResponse} 类型的原始 HTTP 响应。
     * @param {?HttpError} [error] HTTP 异常。
     */
    constructor(response, error) {
        this.rawResponse = response;
        this.hasErrors = Object.isNull((this.error = error));
    }
    set rawResponse(v) {
        this.m_rawResponse = v;
    }
    /**
     * 原始 HTTP 响应信息。
     * @author Wang Yucai
     * @remarks
     *  获取 {@linkcode TRawResponse} 类型的对象实例，用于表示原始 HTTP 响应信息。
     */
    get rawResponse() {
        return this.m_rawResponse;
    }
    set hasErrors(v) {
        this.m_hasErrors = v;
    }
    /**
     * 是否抛出了 HTTP 异常。
     * @author Wang Yucai
     * @remarks
     *  获取一个 {@link Boolean} 类型值，用于表示是否抛出了 HTTP 异常。
     *
     * @type {boolean}
     */
    get hasErrors() {
        return this.m_hasErrors || !Object.isNull(this.m_error);
    }
    set error(v) {
        this.m_error = v;
    }
    /**
     * HTTP 响应异常。
     * @author Wang Yucai
     * @remarks
     *  获取一个 {@linkcode HttpError} 类型值，用于表示 HTTP 响应异常。
     *
     * @type {sys.Null<HttpError>}
     */
    get error() {
        return this.m_error;
    }
}
