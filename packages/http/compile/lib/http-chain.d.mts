/// <reference types="@joingo.vip/native-x" />
/// <reference types="@joingo.vip/native-x" />
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
export declare class HttpChain<TRawResponse> {
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
    constructor(executor: sys.Func<Promise<HttpResult<TRawResponse>>>);
    /**
     * (可等待的方法) 启动调用链。
     * @author Wang Yucai
     *
     * @async
     * @returns {Promise<void>}
     */
    executeAsync(): Promise<void>;
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
export declare class HttpChainBuilder<TRawResponse> {
    private readonly m_executor;
    private m_beforeInjector?;
    private m_endInjector?;
    private m_completed?;
    private m_failed?;
    /**
     * 初始化 {@linkcode HttpChainBuilder} 的新实例。
     * @author Wang Yucai
     *
     * @constructor
     * @param {(sys.Func<Promise<HttpResult<TRawResponse>>> | HttpClientBuilder<TRawResponse>)} executor HTTP 请求执行方法。
     */
    constructor(executor: sys.Func<Promise<HttpResult<TRawResponse>>> | HttpClientBuilder<TRawResponse>);
    /**
     * 设置执行 HTTP 请求前的拦截方法。
     * @author Wang Yucai
     *
     * @param {sys.Action} before 执行 HTTP 请求前的拦截方法。
     * @returns {HttpChainBuilder<TRawResponse>}
     */
    withBefore(before: sys.Action): HttpChainBuilder<TRawResponse>;
    /**
     * 设置执行 HTTP 调用链中结束方法。
     * @author Wang Yucai
     *
     * @param {sys.Action} end 执行 HTTP 调用链中结束方法。
     * @returns {HttpChainBuilder<TRawResponse>}
     */
    withEnd(end: sys.Action): HttpChainBuilder<TRawResponse>;
    /**
     * 设置 HTTP 调用链中执行完成的拦截方法。
     * @author Wang Yucai
     *
     * @param {sys.Action1<HttpResult<TRawResponse>>} completed HTTP 调用链中执行完成的拦截方法。
     * @returns {HttpChainBuilder<TRawResponse>}
     */
    withCompleted(completed: sys.Action1<HttpResult<TRawResponse>>): HttpChainBuilder<TRawResponse>;
    /**
     * 设置 HTTP 调用链中执行失败的拦截方法。
     * @author Wang Yucai
     *
     * @param {sys.Action1<HttpResult<TRawResponse>>} failed HTTP 调用链中执行失败的拦截方法。
     * @returns {HttpChainBuilder<TRawResponse>}
     */
    withFailed(failed: sys.Action1<HttpResult<TRawResponse>>): HttpChainBuilder<TRawResponse>;
    /**
     * 构建调用链 {@linkcode HttpChain} 类型的对象实例。
     * @author Wang Yucai
     *
     * @returns {HttpChain<TRawResponse>}
     */
    build(): HttpChain<TRawResponse>;
}
