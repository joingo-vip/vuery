// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************

import { SR } from '@joingo.vip/core';
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, Method } from 'axios';
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
      console.error(`[ERROR] - <http-axios.mts: 38eed4>: Axios HTTP 请求失败。详情参见：%o`, error);
      return new HttpAxiosResult((error as any)?.response);
    }
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
export class HttpAxiosClientBuilder extends HttpClientBuilder<AxiosResponse> {
  private m_baseUri: string = '';
  private m_uri: string = '';
  private m_method: Method;
  private m_headers: Record<string, string>;
  private m_query: Record<string, any>;
  private m_data: any;
  private m_timeout: number;

  /**
   * 初始化 {@linkcode HttpAxiosClientBuilder} 的新实例。
   * @author Wang Yucai
   *
   * @constructor
   */
  constructor() {
    super();
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
  withBaseUri(baseUri?: string): HttpAxiosClientBuilder {
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
  withUri(uri: string): HttpAxiosClientBuilder {
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
  withMethod(method: Method = 'GET'): HttpAxiosClientBuilder {
    this.m_method = method ?? 'GET';
    return this;
  }

  /**
   * 设置需要提交的数据。
   * @author Wang Yucai
   *
   * @param {?*} [data]
   * @returns {HttpAxiosClientBuilder}
   */
  withData(data?: any): HttpAxiosClientBuilder {
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
  httpGet(): HttpAxiosClientBuilder {
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
  httpPost(data?: any): HttpAxiosClientBuilder {
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
  httpPut(data?: any): HttpAxiosClientBuilder {
    return this.withMethod('PUT').withData(data);
  }

  /**
   * 使用 HTTP-DELETE 方式。
   * @author Wang Yucai
   *
   * @returns {HttpAxiosClientBuilder}
   * @see {@linkcode withMethod}
   */
  httpDelete(): HttpAxiosClientBuilder {
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
  withHeader(key: string, value?: string): HttpAxiosClientBuilder {
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
  withHeaders(headers?: Record<string, string>): HttpAxiosClientBuilder {
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
  contentType(value: string): HttpAxiosClientBuilder {
    return this.withHeader('Content-Type', value);
  }

  /**
   * 设置 HTTP Content-Type 请求头为 `application/x-www-form-urlencoded`。
   * @author Wang Yucai
   *
   * @returns {HttpAxiosClientBuilder}
   * @see {@linkcode contentType}
   */
  formType(): HttpAxiosClientBuilder {
    return this.contentType('application/x-www-form-urlencoded');
  }

  /**
   * 设置 HTTP Content-Type 请求头为 `multipart/form-data`。
   * @author Wang Yucai
   *
   * @returns {HttpAxiosClientBuilder}
   * @see {@linkcode contentType}
   */
  fileType(): HttpAxiosClientBuilder {
    return this.contentType('multipart/form-data');
  }

  /**
   * 设置 HTTP Content-Type 请求头为 `application/json`。
   * @author Wang Yucai
   *
   * @returns {HttpAxiosClientBuilder}
   * @see {@linkcode contentType}
   */
  jsonType(): HttpAxiosClientBuilder {
    return this.contentType('application/json;charset=UTF-8');
  }

  /**
   * 设置 HTTP 查询字符串。
   * @author Wang Yucai
   *
   * @param {?Record<string, any>} [query]
   * @returns {HttpAxiosClientBuilder}
   */
  withQuery(query?: Record<string, any>): HttpAxiosClientBuilder {
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
  withTimeout(timeout: number = 0): HttpAxiosClientBuilder {
    if (timeout < 0) {
      throw new ArgumentError(
        String.format(SR.getString('exceptions:invalidArgumentException_1'), 'timeout', timeout),
        'timeout'
      );
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
  protected buildOptions(): HttpAxiosClientOptions {
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

  build(): HttpClient<AxiosResponse> {
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
export function useAxiosBuilder(): HttpAxiosClientBuilder {
  return new HttpAxiosClientBuilder();
}
