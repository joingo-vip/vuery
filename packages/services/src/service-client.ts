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

import { SR } from '@vuery/runtime';
import axios, { AxiosRequestConfig, AxiosInstance, AxiosResponse } from 'axios';

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
