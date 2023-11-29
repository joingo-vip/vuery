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
/**
 * 提供了 HTTP 调用链相关的方法。
 * @author Wang Yucai
 *
 * @export
 * @class HttpChain
 * @typedef {HttpChain}
 * @template TRawResponse HTTP 原始响应类型。
 */
export class HttpChain {
    /**
     * 初始化 {@linkcode HttpChain} 的新实例。
     * @author Wang Yucai
     *
     * @constructor
     * @param {sys.Func<Promise<HttpResult<TRawResponse>>>} executor 执行 HTTP 请求的方法。
     */
    constructor(executor) {
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
    executeAsync() {
        return __awaiter(this, void 0, void 0, function* () {
            console.groupCollapsed('http-chain.mts');
            try {
                console.debug(`[DEBUG] - <http-chain.mts: c768e3>: 尝试启动 HTTP 调用链。`);
                if (console.debugIf(!Object.isNull(this.before), `[DEBUG] - <http-chain.mts: 088a67>: 尝试调用 HTTP 调用链的 “before” 方法。`)) {
                    this.before();
                }
                console.debug(`[DEBUG] - <http-chain.mts: 26923f>: 尝试调用 HTTP 调用链中的执行器 “executor”。`);
                const result = yield this.executor();
                if (console.errorIf(result.hasErrors, `[ERROR] - <http-chain.mts: e01b5e>: HTTP 调用链中的执行器可能有异常。@see %o`, result)) {
                    if (console.debugIf(!Object.isNull(this.failed), `[DEBUG] - <http-chain.mts: cbaa71>: 尝试执行 HTTP 调用链的 “failed” 方法。`)) {
                        this.failed(result);
                    }
                }
                else {
                    if (console.debugIf(!Object.isNull(this.completed), `[DEBUG] - <http-chain.mts: 6668f2>: 尝试调用 HTTP 调用链中的 “completed” 方法。`)) {
                        this.completed(result);
                    }
                }
            }
            finally {
                console.warn(`[WARN] - <http-chain.mts: 6d7c8f>: HTTP 调用链即将结束。`);
                if (console.warnIf(!Object.isNull(this.end), `[WARN] - <http-chain.mts: a8c0a3>: 尝试调用 HTTP 调用链中的结束方法 “end”。`)) {
                    this.end();
                }
            }
            console.groupEnd();
        });
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
export class HttpChainBuilder {
    /**
     * 初始化 {@linkcode HttpChainBuilder} 的新实例。
     * @author Wang Yucai
     *
     * @constructor
     * @param {(sys.Func<Promise<HttpResult<TRawResponse>>> | HttpClientBuilder<TRawResponse>)} executor HTTP 请求执行方法。
     */
    constructor(executor) {
        if (executor.build) {
            this.m_executor = executor.build().requestAsync;
        }
        else {
            this.m_executor = executor;
        }
    }
    /**
     * 设置执行 HTTP 请求前的拦截方法。
     * @author Wang Yucai
     *
     * @param {sys.Action} before 执行 HTTP 请求前的拦截方法。
     * @returns {HttpChainBuilder<TRawResponse>}
     */
    withBefore(before) {
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
    withEnd(end) {
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
    withCompleted(completed) {
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
    withFailed(failed) {
        this.m_failed = failed;
        return this;
    }
    /**
     * 构建调用链 {@linkcode HttpChain} 类型的对象实例。
     * @author Wang Yucai
     *
     * @returns {HttpChain<TRawResponse>}
     */
    build() {
        const chain = new HttpChain(this.m_executor);
        chain.before = this.m_beforeInjector;
        chain.completed = this.m_completed;
        chain.end = this.m_endInjector;
        chain.failed = this.m_failed;
        return chain;
    }
}
