/// <reference types="@joingo.vip/native-x" />
import { Nullable } from '@joingo.vip/core';
/**
 * 提供了身份相关的基本方法。
 * @author Wang Yucai
 *
 * @export
 * @abstract
 * @class Identity
 * @typedef {Identity}
 */
export declare abstract class Identity {
    private m_isAuthenticated;
    private m_name;
    /**
     * 初始化 {@linkcode Identity} 的新实例。
     * @author Wang Yucai
     *
     * @constructor
     * @protected
     */
    protected constructor();
    /**
     * 是否已经身份认证。
     * @author Wang Yucai
     * @remarks
     *  获取一个 {@link Boolean} 类型值，用于表示是否已经身份认证。
     *
     * @readonly
     * @type {boolean}
     */
    get isAuthenticated(): boolean;
    /**
     * 是否已经身份认证。
     */
    protected set isAuthenticated(v: boolean);
    /**
     * 当前用户的名称。
     * @author Wang Yucai
     * @remarks
     *  获取一个字符串，用于表示当前用户的名称。
     *
     * @readonly
     * @type {string}
     */
    get name(): string;
    /**
     * 当前用户的名称。
     */
    protected set name(v: string);
}
/**
 * 提供了匿名用户身份相关的方法。密闭的，不可以从此类型派生。
 * @author Wang Yucai
 * @remarks
 *  密闭的，不可以从此类型派生。
 *
 * @export
 * @class AnonymousIdentity
 * @typedef {AnonymousIdentity}
 * @extends {Identity}
 */
export declare class AnonymousIdentity extends Identity {
    /**
     * 初始化 {@linkcode AnonymousIdentity} 的新实例。
     * @author Wang Yucai
     *
     * @constructor
     */
    constructor();
}
/**
 * 定义了身份信息声明类型。
 * @author Wang Yucai
 *
 * @export
 * @interface Claim
 * @typedef {Claim}
 */
export interface Claim {
    /**
     * 身份信息声明标识名称。
     * @author Wang Yucai
     *
     * @type {string}
     */
    key: string;
    /**
     * 身份信息声明值。
     * @author Wang Yucai
     *
     * @type {*}
     */
    value: any;
}
/**
 * 定义了身份信息声明集合类型。
 * @author Wang Yucai
 *
 * @export
 * @typedef {Claims}
 */
export type Claims = Record<string, Claim>;
/**
 * 提供了身份信息声明字段相关的方法。
 * @author Wang Yucai
 *
 * @export
 * @class ClaimFields
 * @typedef {ClaimFields}
 */
export declare class ClaimFields {
    /**
     * 初始化 {@linkcode ClaimFields} 的新实例。
     * @author Wang Yucai
     *
     * @constructor
     * @private
     */
    private constructor();
    /**
     * 用户名。
     * @author Wang Yucai
     *
     * @static
     * @readonly
     * @type {string}
     */
    static readonly UserName: string;
    /**
     * 用户真实姓名。
     * @author Wang Yucai
     *
     * @static
     * @readonly
     * @type {string}
     */
    static readonly Name: string;
    /**
     * 是否已经经过身份认证。
     * @author Wang Yucai
     *
     * @static
     * @readonly
     * @type {string}
     */
    static readonly IsAuthenticated: string;
    /**
     * 用户唯一标识。
     * @author Wang Yucai
     *
     * @static
     * @readonly
     * @type {string}
     */
    static readonly UserId: string;
    /**
     * 身份认证方式。
     * @author Wang Yucai
     *
     * @static
     * @readonly
     * @type {string}
     */
    static readonly AuthenticationMethod: string;
    /**
     * 所在的国家/地区。
     * @author Wang Yucai
     *
     * @static
     * @readonly
     * @type {string}
     */
    static readonly Country: string;
    /**
     * 用户的出生日期。
     * @author Wang Yucai
     *
     * @static
     * @readonly
     * @type {string}
     */
    static readonly DateOfBirth: string;
    /**
     * 用户电邮地址。
     * @author Wang Yucai
     *
     * @static
     * @readonly
     * @type {string}
     */
    static readonly EmailAddress: string;
    /**
     * 用户移动电话号码。
     * @author Wang Yucai
     *
     * @static
     * @readonly
     * @type {string}
     */
    static readonly MobileNumber: string;
    /**
     * 用户固话号码。
     * @author Wang Yucai
     *
     * @static
     * @readonly
     * @type {string}
     */
    static readonly TelephoneNumber: string;
    /**
     * 失效时间。
     * @author Wang Yucai
     *
     * @static
     * @readonly
     * @type {string}
     */
    static readonly Expired: string;
    /**
     * 文化区域设置。
     * @author Wang Yucai
     *
     * @static
     * @readonly
     * @type {string}
     */
    static readonly Culture: string;
    /**
     * 用户邮编。
     * @author Wang Yucai
     *
     * @static
     * @readonly
     * @type {string}
     */
    static readonly PostalCode: string;
    /**
     * 用户授权角色集合。
     * @author Wang Yucai
     *
     * @static
     * @readonly
     * @type {string}
     */
    static readonly Roles: string;
    /**
     * 原始用户数据。
     * @author Wang Yucai
     *
     * @static
     * @readonly
     * @type {string}
     */
    static readonly UserData: string;
    /**
     * 用户所在州或省份。
     * @author Wang Yucai
     *
     * @static
     * @readonly
     * @type {string}
     */
    static readonly StateOrProvince: string;
    /**
     * 用户的名字。
     * @author Wang Yucai
     *
     * @static
     * @readonly
     * @type {string}
     */
    static readonly FirstName: string;
    /**
     * 用户的姓氏。
     * @author Wang Yucai
     *
     * @static
     * @readonly
     * @type {string}
     */
    static readonly LastName: string;
    /**
     * 用户所在的县或区。
     * @author Wang Yucai
     *
     * @static
     * @readonly
     * @type {string}
     */
    static readonly District: string;
    /**
     * 用户所在的街道地址。
     * @author Wang Yucai
     *
     * @static
     * @readonly
     * @type {string}
     */
    static readonly StreetAddress: string;
    /**
     * Bearer 授权令牌。
     * @author Wang Yucai
     *
     * @static
     * @readonly
     * @type {string}
     */
    static readonly AuthorizationBearerToken: string;
    /**
     * 授权令牌颁发者。
     * @author Wang Yucai
     *
     * @static
     * @readonly
     * @type {string}
     */
    static readonly Issuer: string;
    /**
     * 令牌颁发时间。
     * @author Wang Yucai
     *
     * @static
     * @readonly
     * @type {string}
     */
    static readonly IssuedTime: string;
    /**
     * 服务器操作系统名称。
     * @author Wang Yucai
     *
     * @static
     * @readonly
     * @type {string}
     */
    static readonly OperatingSystem: string;
    /**
     * 身份认证服务版本号。
     * @author Wang Yucai
     *
     * @static
     * @readonly
     * @type {string}
     */
    static readonly Version: string;
    /**
     * 身份认证服务端平台名称。
     * @author Wang Yucai
     *
     * @static
     * @readonly
     * @type {string}
     */
    static readonly Platform: string;
}
/**
 * 提供了基于声明的用户身份相关的方法。密闭的，不可以从此类型派生。
 * @author Wang Yucai
 * @remarks
 *  密闭的，不可以从此类型派生。
 *
 * @export
 * @class ClaimsIdentity
 * @typedef {ClaimsIdentity}
 * @extends {Identity}
 */
export declare class ClaimsIdentity extends Identity {
    /**
     * 身份信息声明。
     * @author Wang Yucai
     * @remarks
     *  获取 {@linkcode Claims} 类型的对象实例，用于表示身份信息声明。
     *
     * @readonly
     * @type {Claims}
     */
    readonly claims: Claims;
    /**
     * 初始化 {@linkcode ClaimsIdentity} 的新实例。
     * @author Wang Yucai
     *
     * @constructor
     * @param {Claims} claims 身份认证声明。
     */
    constructor(claims: Claims);
    /**
     * 获取指定名称 {@linkcode key} 的身份信息声明。
     * @author Wang Yucai
     *
     * @static
     * @param {Claims} claims 身份信息声明集合。
     * @param {string} key 身份信息声明名称。
     * @returns {sys.Null<Readonly<Claim>>}
     */
    static getClaim(claims: Claims, key: string): sys.Null<Readonly<Claim>>;
    /**
     * 获取指定名称 {@linkcode key} 的身份信息声明值。
     * @author Wang Yucai
     *
     * @static
     * @param {Claims} claims 身份信息声明集合。
     * @param {string} key 身份信息声明名称。
     * @returns {Nullable<string>}
     */
    static getClaimValue(claims: Claims, key: string): Nullable<string>;
    /**
     * 创建一个新的身份信息声明。
     * @author Wang Yucai
     *
     * @static
     * @param {string} key 身份信息声明标识名称。
     * @param {*} value 身份信息声明值。
     * @returns {Readonly<Claim>}
     */
    static createClaim(key: string, value: any): Readonly<Claim>;
}
