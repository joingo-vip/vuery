import { AxiosInstance, AxiosRequestConfig, AxiosResponse, Method } from 'axios';
import { HttpClient, HttpClientBuilder, HttpResult, type HttpClientOptions } from './http-core.mjs';
/**
 * 提供了基于 {@link AxiosResponse} 相关的 HTTP 响应信息。
 * @author Wang Yucai
 *
 * @export
 * @class HttpAxiosResult
 * @typedef {HttpAxiosResult}
 * @extends {HttpResult<AxiosResponse>}
 */
export declare class HttpAxiosResult extends HttpResult<AxiosResponse> {
    /**
     * 初始化 {@linkcode HttpAxiosResult} 的新实例。
     * @author Wang Yucai
     *
     * @constructor
     * @param {?AxiosResponse} [response] Axios 客户端 HTTP 响应信息。
     */
    constructor(response?: AxiosResponse);
}
/**
 * 定义了基于 Axios 的客户端配置选项。
 * @author Wang Yucai
 *
 * @export
 * @interface HttpAxiosClientOptions
 * @typedef {HttpAxiosClientOptions}
 * @extends {HttpClientOptions}
 * @extends {AxiosRequestConfig}
 */
export interface HttpAxiosClientOptions extends HttpClientOptions, AxiosRequestConfig {
}
/**
 * 提供了基于 Axios 的 HTTP 客户端相关的方法。
 * @author Wang Yucai
 *
 * @export
 * @class HttpAxiosClient
 * @typedef {HttpAxiosClient}
 * @extends {HttpClient}
 */
export declare class HttpAxiosClient extends HttpClient<AxiosResponse> {
    /**
     * Axios 客户端配置选项。
     * @author Wang Yucai
     * @remarks
     *  获取 {@linkcode HttpAxiosClientOptions} 类型的对象实例，用于表示 Axios 客户端配置选项。
     *
     * @protected
     * @readonly
     * @type {HttpAxiosClientOptions}
     */
    protected readonly axiosOptions: HttpAxiosClientOptions;
    /**
     * Axios 客户端。
     * @author Wang Yucai
     * @remarks
     *  获取 {@linkcode AxiosInstance} 类型的对象实例，用于表示 Axios 客户端。
     *
     * @protected
     * @readonly
     * @type {AxiosInstance}
     */
    protected readonly axiosClient: AxiosInstance;
    /**
     * 初始化 {@linkcode HttpAxiosClient} 的新实例。
     * @author Wang Yucai
     *
     * @constructor
     * @param {HttpAxiosClientOptions} options Axios 客户端配置选项。
     */
    constructor(options: HttpAxiosClientOptions);
    /**
     * (可等待的方法) 执行 Axios HTTP 请求。
     * @author Wang Yucai
     *
     * @returns {Promise<HttpResult<AxiosResponse>>}
     */
    requestAsync(): Promise<HttpResult<AxiosResponse>>;
}
/**
 * 提供了构建 {@linkcode HttpAxiosClient} 类型的对象实例相关的方法。
 * @author Wang Yucai
 *
 * @export
 * @class HttpAxiosClientBuilder
 * @typedef {HttpAxiosClientBuilder}
 * @extends {HttpClientBuilder<AxiosResponse>}
 */
export declare class HttpAxiosClientBuilder extends HttpClientBuilder<AxiosResponse> {
    private m_baseUri;
    private m_uri;
    private m_method;
    private m_headers;
    private m_query;
    private m_data;
    private m_timeout;
    /**
     * 初始化 {@linkcode HttpAxiosClientBuilder} 的新实例。
     * @author Wang Yucai
     *
     * @constructor
     */
    constructor();
    /**
     * 设置 HTTP 请求基础 URI 地址。
     * @author Wang Yucai
     *
     * @param {?string} [baseUri]
     * @returns {HttpAxiosClientBuilder}
     */
    withBaseUri(baseUri?: string): HttpAxiosClientBuilder;
    /**
     * 设置需要请求 URI 地址。
     * @author Wang Yucai
     *
     * @param {string} uri
     * @returns {HttpAxiosClientBuilder}
     */
    withUri(uri: string): HttpAxiosClientBuilder;
    /**
     * 设置 HTTP 请求方式。
     * @author Wang Yucai
     *
     * @param {Method} [method='GET']
     * @returns {HttpAxiosClientBuilder}
     */
    withMethod(method?: Method): HttpAxiosClientBuilder;
    /**
     * 设置需要提交的数据。
     * @author Wang Yucai
     *
     * @param {?*} [data]
     * @returns {HttpAxiosClientBuilder}
     */
    withData(data?: any): HttpAxiosClientBuilder;
    /**
     * 使用 HTTP-GET 方式。
     * @author Wang Yucai
     *
     * @returns {HttpAxiosClientBuilder}
     * @see {@linkcode withMethod}
     */
    httpGet(): HttpAxiosClientBuilder;
    /**
     * 使用 HTTP-POST 方式。
     * @author Wang Yucai
     *
     * @param {?*} [data] 需要提交的数据。
     * @returns {HttpAxiosClientBuilder}
     * @see {@linkcode withMethod}
     * @see {@linkcode withData}
     */
    httpPost(data?: any): HttpAxiosClientBuilder;
    /**
     * 使用 HTTP-PUT 方式。
     * @author Wang Yucai
     *
     * @param {?*} [data] 需要提交的数据。
     * @returns {HttpAxiosClientBuilder}
     * @see {@linkcode withMethod}
     * @see {@linkcode withData}
     */
    httpPut(data?: any): HttpAxiosClientBuilder;
    /**
     * 使用 HTTP-DELETE 方式。
     * @author Wang Yucai
     *
     * @returns {HttpAxiosClientBuilder}
     * @see {@linkcode withMethod}
     */
    httpDelete(): HttpAxiosClientBuilder;
    /**
     * 设置 HTTP 请求头。
     * @author Wang Yucai
     *
     * @param {string} key 请求头标识名称。
     * @param {?string} [value] 请求头值。
     * @returns {HttpAxiosClientBuilder}
     */
    withHeader(key: string, value?: string): HttpAxiosClientBuilder;
    /**
     * 设置 HTTP 请求头。
     * @author Wang Yucai
     *
     * @param {?Record<string, string>} [headers] HTTP 请求头配置选项。
     * @returns {HttpAxiosClientBuilder}
     */
    withHeaders(headers?: Record<string, string>): HttpAxiosClientBuilder;
    /**
     * 设置 HTTP MimeType 请求头。
     * @author Wang Yucai
     *
     * @param {string} value Content-Type 值。
     * @returns {HttpAxiosClientBuilder}
     * @see {@linkcode withHeader}
     */
    contentType(value: string): HttpAxiosClientBuilder;
    /**
     * 设置 HTTP Content-Type 请求头为 `application/x-www-form-urlencoded`。
     * @author Wang Yucai
     *
     * @returns {HttpAxiosClientBuilder}
     * @see {@linkcode contentType}
     */
    formType(): HttpAxiosClientBuilder;
    /**
     * 设置 HTTP Content-Type 请求头为 `multipart/form-data`。
     * @author Wang Yucai
     *
     * @returns {HttpAxiosClientBuilder}
     * @see {@linkcode contentType}
     */
    fileType(): HttpAxiosClientBuilder;
    /**
     * 设置 HTTP Content-Type 请求头为 `application/json`。
     * @author Wang Yucai
     *
     * @returns {HttpAxiosClientBuilder}
     * @see {@linkcode contentType}
     */
    jsonType(): HttpAxiosClientBuilder;
    /**
     * 设置 HTTP 查询字符串。
     * @author Wang Yucai
     *
     * @param {?Record<string, any>} [query]
     * @returns {HttpAxiosClientBuilder}
     */
    withQuery(query?: Record<string, any>): HttpAxiosClientBuilder;
    /**
     * 设置 HTTP 请求超时（单位：秒）。
     * @author Wang Yucai
     *
     * @param {number} [timeout=0]
     * @returns {HttpAxiosClientBuilder}
     */
    withTimeout(timeout?: number): HttpAxiosClientBuilder;
    /**
     * 构建 {@linkcode HttpAxiosClientOptions} 类型的对象实例。
     * @author Wang Yucai
     *
     * @protected
     * @returns {HttpAxiosClientOptions}
     */
    protected buildOptions(): HttpAxiosClientOptions;
    build(): HttpClient<AxiosResponse>;
}
/**
 * 使用 {@linkcode HttpAxiosClientBuilder} 类型的对象实例。
 * @author Wang Yucai
 *
 * @export
 * @returns {HttpAxiosClientBuilder}
 */
export declare function useAxiosBuilder(): HttpAxiosClientBuilder;
