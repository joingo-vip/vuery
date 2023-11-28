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
import { HttpClient, HttpResult } from './http-core.mjs';
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
