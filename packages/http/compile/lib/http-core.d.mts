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
/**
 * 定义了 HTTP 客户端配置选项类型。
 * @author Wang Yucai
 *
 * @export
 * @interface HttpClientOptions
 * @typedef {HttpClientOptions}
 */
export interface HttpClientOptions {
}
/**
 * 提供了执行 HTTP 请求相关的基本方法。
 * @author Wang Yucai
 *
 * @export
 * @abstract
 * @class HttpClient
 * @typedef {HttpClient}
 * @template TRawResponse HTTP 响应类型。
 */
export declare abstract class HttpClient<TRawResponse> {
    /**
     * HTTP 客户端配置选项。
     * @author Wang Yucai
     * @remarks
     *  获取 {@linkcode HttpClientOptions} 类型的对象实例，用于表示 HTTP 客户端配置选项。
     *
     * @protected
     * @readonly
     * @type {HttpClientOptions}
     */
    protected readonly options: HttpClientOptions;
    /**
     * 初始化 {@linkcode HttpClient} 的新实例。
     * @author Wang Yucai
     *
     * @constructor
     * @protected
     * @param {HttpClientOptions} options HTTP 客户端配置选项。
     */
    protected constructor(options: HttpClientOptions);
    /**
     * (可等待的方法) 执行指定的 HTTP 请求。
     * @author Wang Yucai
     *
     * @abstract
     * @returns {Promise<HttpResult<TRawResponse>>}
     */
    abstract requestAsync(): Promise<HttpResult<TRawResponse>>;
}
/**
 * 提供了构建 HTTP 客户端对象实例相关的方法。
 * @author Wang Yucai
 *
 * @export
 * @abstract
 * @class HttpClientBuilder
 * @typedef {HttpClientBuilder}
 * @template TRawResponse HTTP 响应类型。
 */
export declare abstract class HttpClientBuilder<TRawResponse> {
    /**
     * 构建派生自 {@linkcode HttpClient} 类型的对象实例。
     * @author Wang Yucai
     *
     * @abstract
     * @returns {HttpClient<TRawResponse>}
     */
    abstract build(): HttpClient<TRawResponse>;
}
