// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************

import { SR } from '@joingo.vip/core';
import { HttpClientBuilder, HttpResult } from './http-core.mjs';

/**
 * 提供了 HTTP 调用链相关的方法。
 * @author Wang Yucai
 *
 * @export
 * @class HttpChain
 * @typedef {HttpChain}
 * @template TRawResponse HTTP 原始响应类型。
 */
export class HttpChain<TRawResponse> {
  /**
   * 执行 HTTP 请求的方法。
   * @author Wang Yucai
   * @remarks
   *  获取 {@linkcode sys.Func} 类型的对象实例，用于表示执行 HTTP 请求的方法。
   *
   * @readonly
   * @type {sys.Func<Promise<HttpResult<TRawResponse>>>}
   */
  readonly executor: sys.Func<Promise<HttpResult<TRawResponse>>>;

  /**
   * 执行 HTTP 请求之前调用的方法。
   * @author Wang Yucai
   *
   * @type {?sys.Null<sys.Action>}
   */
  before?: sys.Null<sys.Action>;

  /**
   * 执行 HTTP 请求完成之后调用的方法。
   * @author Wang Yucai
   *
   * @type {?sys.Action1<HttpResult<TRawResponse>>}
   */
  completed?: sys.Action1<HttpResult<TRawResponse>>;

  /**
   * 执行 HTTP 请求失败之后调用的方法。
   * @author Wang Yucai
   *
   * @type {?sys.Action1<HttpResult<TRawResponse>>}
   */
  failed?: sys.Action1<HttpResult<TRawResponse>>;

  /**
   * 调用链终止后调用的方法。
   * @author Wang Yucai
   *
   * @type {?sys.Action}
   */
  end?: sys.Action;

  /**
   * 初始化 {@linkcode HttpChain} 的新实例。
   * @author Wang Yucai
   *
   * @constructor
   * @param {sys.Func<Promise<HttpResult<TRawResponse>>>} executor 执行 HTTP 请求的方法。
   */
  constructor(executor: sys.Func<Promise<HttpResult<TRawResponse>>>) {
    if (Object.isNull(executor)) {
      throw new ArgumentError(String.format(SR.getString('exceptions:argumentNullException_1', 'executor')), 'executor');
    }

    this.executor = executor;
  }

  /**
   * (可等待的方法) 启动调用链。
   * @author Wang Yucai
   *
   * @async
   * @returns {Promise<void>}
   */
  async executeAsync(): Promise<void> {
    console.groupCollapsed('http-chain.mts');

    try {
      console.debug(`[DEBUG] - <http-chain.mts: c768e3>: 尝试启动 HTTP 调用链。`);
      if (
        console.debugIf(
          !Object.isNull(this.before),
          `[DEBUG] - <http-chain.mts: 088a67>: 尝试调用 HTTP 调用链的 “before” 方法。`
        )
      ) {
        this.before();
      }
      console.debug(`[DEBUG] - <http-chain.mts: 26923f>: 尝试调用 HTTP 调用链中的执行器 “executor”。`);
      const result = await this.executor();
      if (
        console.errorIf(
          result.hasErrors,
          `[ERROR] - <http-chain.mts: e01b5e>: HTTP 调用链中的执行器可能有异常。@see %o`,
          result
        )
      ) {
        if (
          console.debugIf(
            !Object.isNull(this.failed),
            `[DEBUG] - <http-chain.mts: cbaa71>: 尝试执行 HTTP 调用链的 “failed” 方法。`
          )
        ) {
          this.failed(result);
        }
      } else {
        if (
          console.debugIf(
            !Object.isNull(this.completed),
            `[DEBUG] - <http-chain.mts: 6668f2>: 尝试调用 HTTP 调用链中的 “completed” 方法。`
          )
        ) {
          this.completed(result);
        }
      }
    } finally {
      console.warn(`[WARN] - <http-chain.mts: 6d7c8f>: HTTP 调用链即将结束。`);
      if (
        console.warnIf(!Object.isNull(this.end), `[WARN] - <http-chain.mts: a8c0a3>: 尝试调用 HTTP 调用链中的结束方法 “end”。`)
      ) {
        this.end();
      }
    }

    console.groupEnd();
  }
}

/**
 * 提供了构建 {@linkcode HttpChain} 类型的对象实例相关的方法。
 * @author Wang Yucai
 *
 * @export
 * @class HttpChainBuilder
 * @typedef {HttpChainBuilder}
 * @template TRawResponse HTTP 原始响应类型。
 */
export class HttpChainBuilder<TRawResponse> {
  private readonly m_executor: sys.Func<Promise<HttpResult<TRawResponse>>>;
  private m_beforeInjector?: sys.Action;
  private m_endInjector?: sys.Action;
  private m_completed?: sys.Action1<HttpResult<TRawResponse>>;
  private m_failed?: sys.Action1<HttpResult<TRawResponse>>;

  /**
   * 初始化 {@linkcode HttpChainBuilder} 的新实例。
   * @author Wang Yucai
   *
   * @constructor
   * @param {(sys.Func<Promise<HttpResult<TRawResponse>>> | HttpClientBuilder<TRawResponse>)} executor HTTP 请求执行方法。
   */
  constructor(executor: sys.Func<Promise<HttpResult<TRawResponse>>> | HttpClientBuilder<TRawResponse>) {
    if ((executor as any).build) {
      this.m_executor = (executor as HttpClientBuilder<TRawResponse>).build().requestAsync;
    } else {
      this.m_executor = executor as sys.Func<Promise<HttpResult<TRawResponse>>>;
    }
  }

  /**
   * 设置执行 HTTP 请求前的拦截方法。
   * @author Wang Yucai
   *
   * @param {sys.Action} before 执行 HTTP 请求前的拦截方法。
   * @returns {HttpChainBuilder<TRawResponse>}
   */
  withBefore(before: sys.Action): HttpChainBuilder<TRawResponse> {
    this.m_beforeInjector = before;
    return this;
  }

  /**
   * 设置执行 HTTP 调用链中结束方法。
   * @author Wang Yucai
   *
   * @param {sys.Action} end 执行 HTTP 调用链中结束方法。
   * @returns {HttpChainBuilder<TRawResponse>}
   */
  withEnd(end: sys.Action): HttpChainBuilder<TRawResponse> {
    this.m_endInjector = end;
    return this;
  }

  /**
   * 设置 HTTP 调用链中执行完成的拦截方法。
   * @author Wang Yucai
   *
   * @param {sys.Action1<HttpResult<TRawResponse>>} completed HTTP 调用链中执行完成的拦截方法。
   * @returns {HttpChainBuilder<TRawResponse>}
   */
  withCompleted(completed: sys.Action1<HttpResult<TRawResponse>>): HttpChainBuilder<TRawResponse> {
    this.m_completed = completed;
    return this;
  }

  /**
   * 设置 HTTP 调用链中执行失败的拦截方法。
   * @author Wang Yucai
   *
   * @param {sys.Action1<HttpResult<TRawResponse>>} failed HTTP 调用链中执行失败的拦截方法。
   * @returns {HttpChainBuilder<TRawResponse>}
   */
  withFailed(failed: sys.Action1<HttpResult<TRawResponse>>): HttpChainBuilder<TRawResponse> {
    this.m_failed = failed;
    return this;
  }

  /**
   * 构建调用链 {@linkcode HttpChain} 类型的对象实例。
   * @author Wang Yucai
   *
   * @returns {HttpChain<TRawResponse>}
   */
  build(): HttpChain<TRawResponse> {
    const chain = new HttpChain<TRawResponse>(this.m_executor);
    chain.before = this.m_beforeInjector;
    chain.completed = this.m_completed;
    chain.end = this.m_endInjector;
    chain.failed = this.m_failed;
    return chain;
  }
}
