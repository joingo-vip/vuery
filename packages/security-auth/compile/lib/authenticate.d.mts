/// <reference types="@joingo.vip/native-x" />
import { type StorableOptions } from '@joingo.vip/storage';
/**
 * 身份认证信息存储标识。
 * @author Wang Yucai
 *
 * @type {string}
 */
export declare const DefaultAuthenticationStorageKey: string;
/**
 * 身份认证信息存储配置配置选项。
 * @author Wang Yucai
 *
 * @type {StorableOptions}
 */
export declare const DefaultAuthenticationStorageOptions: StorableOptions;
/**
 * 定义了身份认证凭据基础类型。
 * @author Wang Yucai
 *
 * @export
 * @interface Credentials
 * @typedef {Credentials}
 */
export interface Credentials {
}
/**
 * 定义了基于用户名、密码的身份认证凭据基础类型。
 * @author Wang Yucai
 *
 * @export
 * @interface BasicCredentials
 * @typedef {BasicCredentials}
 * @extends {Credentials}
 */
export interface BasicCredentials extends Credentials {
    /**
     * 用户账户名。
     * @author Wang Yucai
     *
     * @type {string}
     */
    userName: string;
    /**
     * 用户口令。
     * @author Wang Yucai
     *
     * @type {string}
     */
    password: string;
    /**
     * 验证码。
     * @author Wang Yucai
     *
     * @type {?sys.Null<string>}
     */
    validationCode?: sys.Null<string>;
}
/**
 * 定义了身份认证结果类型。
 * @author Wang Yucai
 *
 * @export
 * @interface AuthenticatedResult
 * @typedef {AuthenticatedResult}
 * @template T 实际身份认证结果类型。
 */
export interface AuthenticatedResult<T> {
    /**
     * 身份认证结果。
     * @author Wang Yucai
     *
     * @type {T}
     */
    result: T;
}
/**
 * 提供了身份认证相关的基本服务方法。
 * @author Wang Yucai
 *
 * @export
 * @abstract
 * @class AuthenticationService
 * @typedef {AuthenticationService}
 * @template TResult 身份认证结果类型。
 */
export declare abstract class AuthenticationService<TResult> {
    /**
     * 初始化 {@linkcode AuthenticationService} 的新实例。
     * @author Wang Yucai
     *
     * @constructor
     * @protected
     */
    protected constructor();
    /**
     * (可等待的方法) 尝试进行登录。
     * @author Wang Yucai
     *
     * @abstract
     * @template {Credentials} TCredentials 派生自 {@linkcode Credentials} 的类型。
     * @param {TCredentials} credentials 用户登录凭据。{@linkcode TCredentials} 类型的对象实例。
     * @returns {Promise<AuthenticatedResult<TResult>>}
     */
    abstract signInAsync<TCredentials extends Credentials>(credentials: TCredentials): Promise<AuthenticatedResult<TResult>>;
}
/**
 * 提供了用户授权相关的基本服务方法。
 * @author Wang Yucai
 *
 * @export
 * @abstract
 * @class AuthorizationService
 * @typedef {AuthorizationService}
 * @template TAuthenticatedResult 身份认证结果类型。
 */
export declare abstract class AuthorizationService<TAuthenticatedResult> {
    /**
     * 初始化 {@linkcode AuthorizationService} 的新实例。
     * @author Wang Yucai
     *
     * @constructor
     * @protected
     */
    protected constructor();
    /**
     * 授权访问当前的系统。
     * @author Wang Yucai
     *
     * @abstract
     * @param {AuthenticatedResult<TAuthenticatedResult>} result
     */
    abstract authorize(result: AuthenticatedResult<TAuthenticatedResult>): void;
}
