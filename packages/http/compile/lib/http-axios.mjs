// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { SR } from '@joingo.vip/core';
import axios from 'axios';
import { HttpClient, HttpClientBuilder, HttpResult } from './http-core.mjs';
/**
 * 提供了基于 {@link AxiosResponse} 相关的 HTTP 响应信息。
 * @author Wang Yucai
 *
 * @export
 * @class HttpAxiosResult
 * @typedef {HttpAxiosResult}
 * @extends {HttpResult<AxiosResponse>}
 */
export class HttpAxiosResult extends HttpResult {
    /**
     * 初始化 {@linkcode HttpAxiosResult} 的新实例。
     * @author Wang Yucai
     *
     * @constructor
     * @param {?AxiosResponse} [response] Axios 客户端 HTTP 响应信息。
     */
    constructor(response) {
        var _a;
        super(response);
        if (console.warnIf(Object.isNull(response), `[WARN] - <http-axios.mts: 7db0b1>: Axios 客户端 HTTP 响应信息可能为 NULL 值。`)) {
            this.error = new HttpError(SR.getString('exceptions:httpException_no_response'), 0, null, null);
        }
        else if (console.errorIf(response.status >= 400 || response.status < 100, `[ERROR] - <http-axios.mts: 5e8c0e>: Axios 客户端 HTTP 响应状态码异常 #${response.status}。`)) {
            this.error = new HttpError(String.format(SR.getString('exceptions:httpException_wrong_http_status'), response.status), response.status, (_a = response.request) === null || _a === void 0 ? void 0 : _a.url, response);
        }
        else {
            this.error = null;
            this.hasErrors = false;
        }
    }
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
export class HttpAxiosClient extends HttpClient {
    /**
     * 初始化 {@linkcode HttpAxiosClient} 的新实例。
     * @author Wang Yucai
     *
     * @constructor
     * @param {HttpAxiosClientOptions} options Axios 客户端配置选项。
     */
    constructor(options) {
        var _a;
        super(options);
        this.axiosOptions = options;
        if (String.isNullOrWhitespace(options.baseURL) && !((_a = options.url) === null || _a === void 0 ? void 0 : _a.toLowerCase().startsWith('http'))) {
            this.axiosOptions.baseURL = JOINGO_DEFAULT_HTTP_BASEURI;
        }
        this.axiosClient = axios;
    }
    /**
     * (可等待的方法) 执行 Axios HTTP 请求。
     * @author Wang Yucai
     *
     * @returns {Promise<HttpResult<AxiosResponse>>}
     */
    requestAsync() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const axiosResponse = yield this.axiosClient(this.axiosOptions);
                return new HttpAxiosResult(axiosResponse);
            }
            catch (error) {
                return new HttpAxiosResult(error === null || error === void 0 ? void 0 : error.response);
            }
        });
    }
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
export class HttpAxiosClientBuilder extends HttpClientBuilder {
    /**
     * 初始化 {@linkcode HttpAxiosClientBuilder} 的新实例。
     * @author Wang Yucai
     *
     * @constructor
     */
    constructor() {
        super();
        this.m_baseUri = '';
        this.m_uri = '';
        this.m_baseUri = JOINGO_DEFAULT_HTTP_BASEURI;
        this.m_uri = '';
        this.m_method = 'GET';
        this.m_headers = { 'Content-Type': 'application/json;charset=UTF-8' };
        this.m_query = {};
        this.m_data = null;
        this.m_timeout = 30000;
    }
    /**
     * 设置 HTTP 请求基础 URI 地址。
     * @author Wang Yucai
     *
     * @param {?string} [baseUri]
     * @returns {HttpAxiosClientBuilder}
     */
    withBaseUri(baseUri) {
        if (!String.isNullOrWhitespace(baseUri)) {
            this.m_baseUri = baseUri;
        }
        return this;
    }
    /**
     * 设置需要请求 URI 地址。
     * @author Wang Yucai
     *
     * @param {string} uri
     * @returns {HttpAxiosClientBuilder}
     */
    withUri(uri) {
        if (String.isNullOrWhitespace(uri)) {
            throw ArgumentError(SR.getString('exceptions:invalidArgumentException'), 'uri');
        }
        this.m_uri = uri;
        return this;
    }
    /**
     * 设置 HTTP 请求方式。
     * @author Wang Yucai
     *
     * @param {Method} [method='GET']
     * @returns {HttpAxiosClientBuilder}
     */
    withMethod(method = 'GET') {
        this.m_method = method !== null && method !== void 0 ? method : 'GET';
        return this;
    }
    /**
     * 设置需要提交的数据。
     * @author Wang Yucai
     *
     * @param {?*} [data]
     * @returns {HttpAxiosClientBuilder}
     */
    withData(data) {
        if (!Object.isNull(data)) {
            this.m_data = data;
        }
        return this;
    }
    /**
     * 使用 HTTP-GET 方式。
     * @author Wang Yucai
     *
     * @returns {HttpAxiosClientBuilder}
     * @see {@linkcode withMethod}
     */
    httpGet() {
        return this.withMethod('GET');
    }
    /**
     * 使用 HTTP-POST 方式。
     * @author Wang Yucai
     *
     * @param {?*} [data] 需要提交的数据。
     * @returns {HttpAxiosClientBuilder}
     * @see {@linkcode withMethod}
     * @see {@linkcode withData}
     */
    httpPost(data) {
        return this.withMethod('POST').withData(data);
    }
    /**
     * 使用 HTTP-PUT 方式。
     * @author Wang Yucai
     *
     * @param {?*} [data] 需要提交的数据。
     * @returns {HttpAxiosClientBuilder}
     * @see {@linkcode withMethod}
     * @see {@linkcode withData}
     */
    httpPut(data) {
        return this.withMethod('PUT').withData(data);
    }
    /**
     * 使用 HTTP-DELETE 方式。
     * @author Wang Yucai
     *
     * @returns {HttpAxiosClientBuilder}
     * @see {@linkcode withMethod}
     */
    httpDelete() {
        return this.withMethod('DELETE');
    }
    /**
     * 设置 HTTP 请求头。
     * @author Wang Yucai
     *
     * @param {string} key 请求头标识名称。
     * @param {?string} [value] 请求头值。
     * @returns {HttpAxiosClientBuilder}
     */
    withHeader(key, value) {
        if (String.isNullOrWhitespace(key)) {
            throw ArgumentError(SR.getString('exceptions:invalidArgumentException'), 'key');
        }
        if (!String.isNullOrWhitespace(value)) {
            this.m_headers = Object.extends(this.m_headers, { key: value });
        }
        return this;
    }
    /**
     * 设置 HTTP 请求头。
     * @author Wang Yucai
     *
     * @param {?Record<string, string>} [headers] HTTP 请求头配置选项。
     * @returns {HttpAxiosClientBuilder}
     */
    withHeaders(headers) {
        if (!Object.isNull(headers)) {
            this.m_headers = Object.extends(this.m_headers, headers);
        }
        return this;
    }
    /**
     * 设置 HTTP MimeType 请求头。
     * @author Wang Yucai
     *
     * @param {string} value Content-Type 值。
     * @returns {HttpAxiosClientBuilder}
     * @see {@linkcode withHeader}
     */
    contentType(value) {
        return this.withHeader('Content-Type', value);
    }
    /**
     * 设置 HTTP Content-Type 请求头为 `application/x-www-form-urlencoded`。
     * @author Wang Yucai
     *
     * @returns {HttpAxiosClientBuilder}
     * @see {@linkcode contentType}
     */
    formType() {
        return this.contentType('application/x-www-form-urlencoded');
    }
    /**
     * 设置 HTTP Content-Type 请求头为 `multipart/form-data`。
     * @author Wang Yucai
     *
     * @returns {HttpAxiosClientBuilder}
     * @see {@linkcode contentType}
     */
    fileType() {
        return this.contentType('multipart/form-data');
    }
    /**
     * 设置 HTTP Content-Type 请求头为 `application/json`。
     * @author Wang Yucai
     *
     * @returns {HttpAxiosClientBuilder}
     * @see {@linkcode contentType}
     */
    jsonType() {
        return this.contentType('application/json;charset=UTF-8');
    }
    /**
     * 设置 HTTP 查询字符串。
     * @author Wang Yucai
     *
     * @param {?Record<string, any>} [query]
     * @returns {HttpAxiosClientBuilder}
     */
    withQuery(query) {
        this.m_query = Object.extends(this.m_query, query);
        return this;
    }
    /**
     * 设置 HTTP 请求超时（单位：秒）。
     * @author Wang Yucai
     *
     * @param {number} [timeout=0]
     * @returns {HttpAxiosClientBuilder}
     */
    withTimeout(timeout = 0) {
        if (timeout < 0) {
            throw new ArgumentError(String.format(SR.getString('exceptions:invalidArgumentException_1'), 'timeout', timeout), 'timeout');
        }
        this.m_timeout = timeout * 1000;
        return this;
    }
    /**
     * 构建 {@linkcode HttpAxiosClientOptions} 类型的对象实例。
     * @author Wang Yucai
     *
     * @protected
     * @returns {HttpAxiosClientOptions}
     */
    buildOptions() {
        return {
            baseURL: this.m_baseUri,
            url: this.m_uri,
            headers: this.m_headers,
            params: this.m_query,
            timeout: this.m_timeout,
            method: this.m_method,
            data: this.m_data,
        };
    }
    build() {
        return new HttpAxiosClient(this.buildOptions());
    }
}
/**
 * 使用 {@linkcode HttpAxiosClientBuilder} 类型的对象实例。
 * @author Wang Yucai
 *
 * @export
 * @returns {HttpAxiosClientBuilder}
 */
export function useAxiosBuilder() {
    return new HttpAxiosClientBuilder();
}
