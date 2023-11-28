// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************

import { SR } from '@joingo.vip/core';
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
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
export class HttpAxiosResult extends HttpResult<AxiosResponse> {
  /**
   * 初始化 {@linkcode HttpAxiosResult} 的新实例。
   * @author Wang Yucai
   *
   * @constructor
   * @param {?AxiosResponse} [response] Axios 客户端 HTTP 响应信息。
   */
  constructor(response?: AxiosResponse) {
    super(response);

    if (
      console.warnIf(Object.isNull(response), `[WARN] - <http-axios.mts: 7db0b1>: Axios 客户端 HTTP 响应信息可能为 NULL 值。`)
    ) {
      this.error = new HttpError(SR.getString('exceptions:httpException_no_response'), 0, null, null);
    } else if (
      console.errorIf(
        response.status >= 400 || response.status < 100,
        `[ERROR] - <http-axios.mts: 5e8c0e>: Axios 客户端 HTTP 响应状态码异常 #${response.status}。`
      )
    ) {
      this.error = new HttpError(
        String.format(SR.getString('exceptions:httpException_wrong_http_status'), response.status),
        response.status,
        response.request?.url,
        response
      );
    } else {
      this.error = null;
      this.hasErrors = false;
    }
  }
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
export interface HttpAxiosClientOptions extends HttpClientOptions, AxiosRequestConfig {}

/**
 * 提供了基于 Axios 的 HTTP 客户端相关的方法。
 * @author Wang Yucai
 *
 * @export
 * @class HttpAxiosClient
 * @typedef {HttpAxiosClient}
 * @extends {HttpClient}
 */
export class HttpAxiosClient extends HttpClient<AxiosResponse> {
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
  constructor(options: HttpAxiosClientOptions) {
    super(options);
    this.axiosOptions = options;
    if (String.isNullOrWhitespace(options.baseURL) && !options.url?.toLowerCase().startsWith('http')) {
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
  async requestAsync(): Promise<HttpResult<AxiosResponse>> {
    try {
      const axiosResponse = await this.axiosClient(this.axiosOptions);
      return new HttpAxiosResult(axiosResponse);
    } catch (error) {
      return new HttpAxiosResult((error as any)?.response);
    }
  }
}
