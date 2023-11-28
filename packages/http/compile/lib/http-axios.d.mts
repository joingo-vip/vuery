import { AxiosResponse } from 'axios';
import { HttpResult } from './http-core.mjs';
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
