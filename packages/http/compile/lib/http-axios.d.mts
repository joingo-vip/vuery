import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { HttpClient, HttpClientOptions, HttpResult } from './http-core.mjs';
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
