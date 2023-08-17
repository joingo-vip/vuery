// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************

/**
 * HTTP 服务客户端相关方法模块。
 *
 * @remarks
 * "service-client.ts": HTTP 服务客户端相关方法模块。
 *
 * @packageDocumentation
 */

import {
  Culture,
  DefaultPagingSize,
  DefaultTimeoutMilliseconds,
  SR,
} from '@vuery/runtime';
import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  Method,
} from 'axios';
import { TokenString } from './security';

/**
 * 定义了描述服务调用失败原因枚举类型。
 * @author Wang Yucai
 *
 * @export
 * @typedef {ServiceFailedReason}
 */
export type ServiceFailedReason =
  | 'SERVER_ERROR'
  | 'RUNTIME_ERROR'
  | 'NOT_FOUND'
  | 'UNAUTHORIZED'
  | 'NETWORK'
  | 'UNKNOWN';

/**
 * 定义了描述服务状态的枚举类型。
 * @author Wang Yucai
 *
 * @export
 * @typedef {ServiceStatus}
 */
export type ServiceStatus = 200 | 500 | 401 | number | null;

/**
 * 提供了服务异常相关的方法。
 * @author Wang Yucai
 *
 * @export
 * @interface ServiceException
 * @typedef {ServiceException}
 * @extends {Error}
 */
export interface ServiceException extends Error {
  /**
   * 服务调用异常基本原因。
   * @author Wang Yucai
   *
   * @readonly
   * @type {ServiceFailedReason}
   * @remarks
   * 获取一个 {@link ServiceFailedReason} 类型值，用于表示服务调用异常基本原因。
   */
  readonly reason: ServiceFailedReason;

  /**
   * 用于描述服务调用异常原因的详情数据。
   * @author Wang Yucai
   *
   * @readonly
   * @type {?(Record<string, any> | null)}
   * @remarks
   * 获取 {@link Record<string,any>} 类型的对象实例，用于表示用于描述服务调用异常原因的详情数据。
   */
  readonly detailed?: Record<string, any> | null;

  /**
   * 用于来自服务本身提供的服务异常描述信息。
   * @author Wang Yucai
   *
   * @readonly
   * @type {?(string | null)}
   * @remarks
   * 获取一个字符串，用于表示用于来自服务本身提供的服务异常描述信息。
   */
  readonly serviceMessage?: string | null;
}

/**
 * 提供了抽象的服务结果相关基本信息。
 * @author Wang Yucai
 *
 * @export
 * @interface AbstractServiceResult
 * @typedef {AbstractServiceResult}
 */
export interface AbstractServiceResult {}

/**
 * 提供了服务结果相关的基本信息。
 * @author Wang Yucai
 *
 * @export
 * @interface ServiceResult
 * @typedef {ServiceResult}
 * @extends {AbstractServiceResult}
 */
export interface ServiceResult extends AbstractServiceResult {
  /**
   * 服务状态码。
   * @author Wang Yucai
   *
   * @type {?ServiceStatus}
   * @remarks
   * 设置或获取一个 {@link ServiceStatus} 类型值，用于表示服务状态码。
   */
  code?: ServiceStatus;

  /**
   * 服务状态描述信息。
   * @author Wang Yucai
   *
   * @type {?(string | null)}
   * @remarks
   * 设置或获取一个字符串，用于表示服务状态描述信息。
   */
  msg?: string | null;
}

/**
 * 提供了包含了 {@link DefaultServiceResult.data} 属性相关的服务结果信息。
 * @author Wang Yucai
 *
 * @export
 * @interface DefaultServiceResult
 * @typedef {DefaultServiceResult}
 * @template TData 服务结果类型。
 * @extends {ServiceResult}
 */
export interface DefaultServiceResult<TData> extends ServiceResult {
  /**
   * {@link TData} 类型的服务结果。
   * @author Wang Yucai
   *
   * @type {?(TData | null)}
   * @remarks
   * 设置或获取 {@link TData} 类型的对象实例或值，用于表示服务结果
   */
  data?: TData | null;
}

/**
 * 提供了可供数据分页的相关服务结果信息。
 * @author Wang Yucai
 *
 * @export
 * @interface PagingServiceResult
 * @typedef {PagingServiceResult}
 * @template TElement 单个数据元素类型。
 * @extends {ServiceResult}
 */
export interface PagingServiceResult<TElement> extends ServiceResult {
  /**
   * {@link TElement} 类型的单页数据集。
   * @author Wang Yucai
   *
   * @type {?(TElement[] | null)}
   */
  rows?: TElement[] | null;

  /**
   * {@link TElement} 类型元素总行数。
   * @author Wang Yucai
   *
   * @type {?(number | null)}
   * @remarks
   * 设置或获取一个 {@link Number} 类型值，用于表示 {@link TElement} 类型元素总行数。
   */
  total?: number | null;
}

/**
 * 提供了分页查询相关的参数。
 * @author Wang Yucai
 *
 * @export
 * @interface PagingQueryParameter
 * @typedef {PagingQueryParameter}
 */
export interface PagingQueryParameter {
  /**
   * 需要分页查询的页索引。
   * @author Wang Yucai
   *
   * @type {?(number | null)}
   * @remarks
   * 设置或获取一个 {@link Number} 类型值，用于表示需要分页查询的页索引。
   */
  pageNum?: number | null;

  /**
   * 每页返回的数据行数。
   * @author Wang Yucai
   *
   * @type {?(number | null)}
   * @remarks
   * 设置或获取一个字符串，用于表示每页返回的数据行数。
   */
  pageSize?: number | null;
}

/**
 * 定义了 HTTP 服务客户端的接口。
 * @author Wang Yucai
 *
 * @export
 * @interface IServiceClient
 * @typedef {IServiceClient}
 */
export interface IServiceClient {
  /**
   * (可等待的方法) 请求指定的服务接口。
   * @author Wang Yucai
   *
   * @template TResult
   * @returns {Promise<TResult>}
   */
  requestAsync<TResult extends AbstractServiceResult>(): Promise<TResult>;
}

/**
 * 提供了访问 HTTP 服务相关的方法。
 * @author Wang Yucai
 *
 * @export
 * @class ServiceClient
 * @typedef {ServiceClient}
 * @implements {IServiceClient}
 */
export class ServiceClient implements IServiceClient {
  /**
   * HTTP 服务客户端配置选项信息。
   * @author Wang Yucai
   *
   * @protected
   * @readonly
   * @type {AxiosRequestConfig}
   * @remarks
   * 获取 {@link AxiosRequestConfig} 类型的对象实例，用于表示 HTTP 服务客户端配置选项信息。
   */
  protected readonly options: AxiosRequestConfig;

  /**
   * 初始化 {@link ServiceClient} 的新实例。
   * @author Wang Yucai
   *
   * @constructor
   * @param {AxiosRequestConfig} options HTTP 服务客户端配置选项信息。
   */
  constructor(options: AxiosRequestConfig) {
    this.options = options;
  }

  requestAsync<TResult extends AbstractServiceResult>(): Promise<TResult> {
    /**
     * This 上下文代理。
     */
    const $this = this;
    return new Promise<TResult>((resolve, reject) => {
      const client = axios.create();
      console.debug(
        `[DEBUG] - <service-client.ts: b40093>: 尝试请求服务 “${$this.options.url}”。`
      );
      client
        .request($this.options)
        .then((response) => {
          if (Object.isNull(response?.data)) {
            const httpError: ServiceException = {
              message: SR.getString('service_request_failed', 'exceptions'),
              name: 'ServiceException',
              reason: 'SERVER_ERROR',
              detailed: { response },
              serviceMessage: SR.getString(
                'service_no_response_data',
                'exceptions'
              ),
            };
            reject(httpError);
          } else {
            const result = response.data as ServiceResult;
            if (result.code && result.code !== 200) {
              if (result.code === 401) {
                const httpError: ServiceException = {
                  message: SR.getString('service_request_failed', 'exceptions'),
                  name: 'ServiceException',
                  reason: 'UNAUTHORIZED',
                  detailed: { response },
                  serviceMessage: SR.getString(
                    'service_unauthorized',
                    'exceptions'
                  ),
                };
                reject(httpError);
              } else {
                const httpError: ServiceException = {
                  message: SR.getString('service_request_failed', 'exceptions'),
                  name: 'ServiceException',
                  reason: 'SERVER_ERROR',
                  detailed: { response },
                  serviceMessage: result.msg,
                };
                reject(httpError);
              }
            } else {
              resolve(result as TResult);
            }
          }
        })
        .catch((error) => {
          if (Object.isNull(error?.response)) {
            console.error(
              `[ERROR] - <service-client.ts: b7628b>: 请求服务 “${$this.options.url}” 失败。详情参见：%o`,
              error
            );
            const httpError: ServiceException = {
              message: SR.getString('service_request_failed', 'exceptions'),
              name: 'ServiceException',
              reason: 'UNKNOWN',
              detailed: { rawException: error },
              serviceMessage: error?.message,
            };
            reject(httpError);
          } else {
            const response = error.response as AxiosResponse;
            if (response.status === 404) {
              const httpError: ServiceException = {
                message: SR.getString('service_request_failed', 'exceptions'),
                name: 'ServiceException',
                reason: 'NOT_FOUND',
                detailed: { rawException: error, response },
                serviceMessage: response.statusText,
              };
              reject(httpError);
            } else if (response.status === 401) {
              const httpError: ServiceException = {
                message: SR.getString('service_request_failed', 'exceptions'),
                name: 'ServiceException',
                reason: 'UNAUTHORIZED',
                detailed: { rawException: error, response },
                serviceMessage: SR.getString(
                  'service_request_failed',
                  'exceptions'
                ),
              };
              reject(httpError);
            } else {
              const httpError: ServiceException = {
                message: SR.getString('service_request_failed', 'exceptions'),
                name: 'ServiceException',
                reason: 'NETWORK',
                detailed: { rawException: error, response },
                serviceMessage: response.statusText,
              };
              reject(httpError);
            }
          }
        });
    });
  }

  /**
   * 创建 HTTP 客户端。
   * @author Wang Yucai
   *
   * @protected
   * @returns {AxiosInstance}
   */
  protected createHttpClient(): AxiosInstance {
    return axios.create();
  }
}

/**
 * 定义了构建 {@link IServiceClient} 的接口。
 * @author Wang Yucai
 *
 * @export
 * @interface IServiceClientBuilder
 * @typedef {IServiceClientBuilder}
 */
export interface IServiceClientBuilder {
  /**
   * 设置基础 URI 地址。
   * @author Wang Yucai
   *
   * @param {string} baseUri 服务基础 URI 地址。
   * @returns {IServiceClientBuilder}
   */
  withBaseUri(baseUri: string): IServiceClientBuilder;

  /**
   * 设置服务的 URI 地址。
   * @author Wang Yucai
   *
   * @param {string} uri 服务 URI 地址。
   * @returns {IServiceClientBuilder}
   */
  withUri(uri: string): IServiceClientBuilder;

  /**
   * 设置服务请求的 HTTP 方式。
   * @author Wang Yucai
   *
   * @param {Method} method 服务请求的 HTTP 方式。
   * @returns {IServiceClientBuilder}
   */
  withMethod(method: Method): IServiceClientBuilder;

  /**
   * 设置以 HTTP-GET 方式请求服务。
   * @author Wang Yucai
   *
   * @returns {IServiceClientBuilder}
   */
  withHttpGet(): IServiceClientBuilder;

  /**
   * 设置以 HTTP-POST 方式请求服务。
   * @author Wang Yucai
   *
   * @returns {IServiceClientBuilder}
   */
  withHttpPost(): IServiceClientBuilder;

  /**
   * 设置以 HTTP-DELETE 方式请求服务。
   * @author Wang Yucai
   *
   * @returns {IServiceClientBuilder}
   */
  withHttpDelete(): IServiceClientBuilder;

  /**
   * 设置以 HTTP-PUT 方式请求服务。
   * @author Wang Yucai
   *
   * @returns {IServiceClientBuilder}
   */
  withHttpPut(): IServiceClientBuilder;

  /**
   * 设置服务请求时所需的查询字符串。
   * @author Wang Yucai
   *
   * @param {?Record<string, any>} [query] 服务请求时所需的查询字符串字典。
   * @returns {IServiceClientBuilder}
   */
  withQuery(query?: Record<string, any>): IServiceClientBuilder;

  /**
   * 设置服务请求时所需提交的数据。
   * @author Wang Yucai
   *
   * @param {?*} [data] 服务请求时所需提交的数据。
   * @returns {IServiceClientBuilder}
   */
  withData(data?: any): IServiceClientBuilder;

  /**
   * 设置分页查询所需的起始查询页索引数字。
   * @author Wang Yucai
   *
   * @param {?number} [value] 分页查询所需的起始查询页索引数字。默认值：1。
   * @returns {IServiceClientBuilder}
   */
  take(value?: number): IServiceClientBuilder;

  /**
   * 设置分页查询所需的每页返回数据行数。
   * @author Wang Yucai
   *
   * @param {?number} [value] 服务请求时所需提交的数据。
   * @returns {IServiceClientBuilder}
   */
  skip(value?: number): IServiceClientBuilder;

  /**
   * 设置忽略 Ruoyi 服务端框架中 Authorization 请求头声明。
   * @author Wang Yucai
   *
   * @returns {IServiceClientBuilder}
   */
  allowAnonymous(): IServiceClientBuilder;

  /**
   * 设置服务请求所需的 HTTP 请求头。
   * @author Wang Yucai
   *
   * @param {?Record<string, string>} [headers] 服务请求所需的 HTTP 请求头字典。
   * @returns {IServiceClientBuilder}
   */
  withHeaders(headers?: Record<string, string>): IServiceClientBuilder;

  /**
   * 设置服务请求超时毫秒数。
   * @author Wang Yucai
   *
   * @param {?number} [timeout] 服务请求超时毫秒数。
   * @returns {IServiceClientBuilder}
   */
  withTimeout(timeout?: number): IServiceClientBuilder;

  /**
   * 构建 {@linkcode IServiceClient} 类型的对象实例。
   * @author Wang Yucai
   *
   * @returns {IServiceClient}
   */
  build(): IServiceClient;
}

/**
 * 提供了构建 {@linkcode IServiceClient} 相关的方法。
 * @author Wang Yucai
 *
 * @export
 * @class ServiceClientBuilder
 * @typedef {ServiceClientBuilder}
 * @implements {IServiceClientBuilder}
 */
export class ServiceClientBuilder implements IServiceClientBuilder {
  private m_baseUri: string = window.__VUERY_BASE_URI;
  private m_uri: string = String.empty();
  private m_method: Method = 'GET';
  private m_queryStr: Record<string, any> = {};
  private m_pageIdx: number | null = null;
  private m_rowsNum: number | null = null;
  private m_postedData: any = null;
  private m_allowAnonymous: boolean = false;
  private m_headers: Record<string, string> = {};
  private m_timeout: number = DefaultTimeoutMilliseconds;

  withBaseUri(baseUri: string): IServiceClientBuilder {
    if (!String.isNullOrWhitespace(baseUri)) {
      this.m_baseUri = baseUri;
    }
    return this;
  }
  withUri(uri: string): IServiceClientBuilder {
    if (!String.isNullOrWhitespace(uri)) {
      this.m_uri = uri;
    }
    return this;
  }
  withMethod(method: Method): IServiceClientBuilder {
    this.m_method = method;
    return this;
  }
  withHttpGet(): IServiceClientBuilder {
    return this.withMethod('GET');
  }
  withHttpPost(): IServiceClientBuilder {
    return this.withMethod('POST');
  }
  withHttpDelete(): IServiceClientBuilder {
    return this.withMethod('DELETE');
  }
  withHttpPut(): IServiceClientBuilder {
    return this.withMethod('PUT');
  }
  withQuery(query?: Record<string, any> | undefined): IServiceClientBuilder {
    if (!Object.isNull(query)) {
      this.m_queryStr = Object.assign({}, this.m_queryStr, query);
    }
    return this;
  }
  withData(data?: any): IServiceClientBuilder {
    if (!Object.isNull(data)) {
      this.m_postedData = data;
    }

    return this;
  }
  take(value?: number | undefined): IServiceClientBuilder {
    this.m_pageIdx = value ?? 1;

    return this;
  }
  skip(value?: number | undefined): IServiceClientBuilder {
    this.m_rowsNum = value ?? DefaultPagingSize;

    return this;
  }
  allowAnonymous(): IServiceClientBuilder {
    this.m_allowAnonymous = true;

    return this;
  }
  withHeaders(
    headers?: Record<string, string> | undefined
  ): IServiceClientBuilder {
    if (!Object.isNull(headers)) {
      headers = Object.assign({}, this.m_headers, headers);
    }

    return this;
  }
  withTimeout(timeout?: number | undefined): IServiceClientBuilder {
    if (!Object.isNull(timeout) || timeout !== this.m_timeout) {
      this.m_timeout = timeout;
    }

    return this;
  }
  build(): IServiceClient {
    const cultureInfo = Culture.getCurrentCulture();
    this.withQuery({ t: cultureInfo.friendlyName ?? cultureInfo.name });
    if (!this.m_allowAnonymous) {
      const tokenStr = TokenString.current;
      if (!String.isNullOrWhitespace(tokenStr?.value)) {
        this.withHeaders({ 'Authorization': `Bearer ${tokenStr.value}` });
      }
    }
    if (!Object.isNull(this.m_pageIdx) || !Object.isNull(this.m_rowsNum)) {
      this.withQuery({
        pageIndex: this.m_pageIdx ?? 1,
        pageNum: this.m_rowsNum ?? DefaultPagingSize,
      });
    }
    const axiosOptions: AxiosRequestConfig = {
      baseURL: this.m_baseUri,
      url: this.m_uri,
      method: this.m_method,
      params: this.m_queryStr,
      data: this.m_postedData,
      headers: this.m_headers,
      timeout: this.m_timeout,
    };
    return new ServiceClient(axiosOptions);
  }
}
