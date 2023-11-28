/// <reference types="@joingo.vip/native-x" />
/// <reference types="@joingo.vip/native-x" />
/**
 * 提供了 HTTP 响应结果相关的方法。
 * @author Wang Yucai
 *
 * @export
 * @class HttpResult
 * @typedef {HttpResult}
 * @template TRawResponse 原始 HTTP 响应类型。
 */
export declare class HttpResult<TRawResponse> {
    private m_rawResponse?;
    private m_hasErrors;
    private m_error?;
    /**
     * 初始化 {@linkcode HttpResult} 的新实例。
     * @author Wang Yucai
     *
     * @constructor
     * @param {?TRawResponse} [response] {@linkcode TRawResponse} 类型的原始 HTTP 响应。
     * @param {?HttpError} [error] HTTP 异常。
     */
    constructor(response?: TRawResponse, error?: HttpError);
    protected set rawResponse(v: sys.Null<TRawResponse>);
    /**
     * 原始 HTTP 响应信息。
     * @author Wang Yucai
     * @remarks
     *  获取 {@linkcode TRawResponse} 类型的对象实例，用于表示原始 HTTP 响应信息。
     */
    get rawResponse(): sys.Null<TRawResponse>;
    protected set hasErrors(v: boolean);
    /**
     * 是否抛出了 HTTP 异常。
     * @author Wang Yucai
     * @remarks
     *  获取一个 {@link Boolean} 类型值，用于表示是否抛出了 HTTP 异常。
     *
     * @type {boolean}
     */
    get hasErrors(): boolean;
    protected set error(v: sys.Null<HttpError>);
    /**
     * HTTP 响应异常。
     * @author Wang Yucai
     * @remarks
     *  获取一个 {@linkcode HttpError} 类型值，用于表示 HTTP 响应异常。
     *
     * @type {sys.Null<HttpError>}
     */
    get error(): sys.Null<HttpError>;
}
