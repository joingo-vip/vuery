// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************
/**
 * 身份认证信息存储标识。
 * @author Wang Yucai
 *
 * @type {string}
 */
export const DefaultAuthenticationStorageKey = 'com.joingo.security.authentication';
/**
 * 身份认证信息存储配置配置选项。
 * @author Wang Yucai
 *
 * @type {StorableOptions}
 */
export const DefaultAuthenticationStorageOptions = {
    key: DefaultAuthenticationStorageKey,
    secretKey: 'P^7HCG*GE<3G/T4B',
    secure: true,
};
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
export class AuthenticationService {
    /**
     * 初始化 {@linkcode AuthenticationService} 的新实例。
     * @author Wang Yucai
     *
     * @constructor
     * @protected
     */
    constructor() { }
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
export class AuthorizationService {
    /**
     * 初始化 {@linkcode AuthorizationService} 的新实例。
     * @author Wang Yucai
     *
     * @constructor
     * @protected
     */
    constructor() { }
}
