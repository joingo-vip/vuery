// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var ClaimsIdentity_1;
import { Nullable, SR, sealed } from '@joingo.vip/core';
/**
 * 提供了身份相关的基本方法。
 * @author Wang Yucai
 *
 * @export
 * @abstract
 * @class Identity
 * @typedef {Identity}
 */
export class Identity {
    /**
     * 初始化 {@linkcode Identity} 的新实例。
     * @author Wang Yucai
     *
     * @constructor
     * @protected
     */
    constructor() {
        this.isAuthenticated = false;
    }
    /**
     * 是否已经身份认证。
     * @author Wang Yucai
     * @remarks
     *  获取一个 {@link Boolean} 类型值，用于表示是否已经身份认证。
     *
     * @readonly
     * @type {boolean}
     */
    get isAuthenticated() {
        return this.m_isAuthenticated;
    }
    /**
     * 是否已经身份认证。
     */
    set isAuthenticated(v) {
        this.m_isAuthenticated = v;
    }
    /**
     * 当前用户的名称。
     * @author Wang Yucai
     * @remarks
     *  获取一个字符串，用于表示当前用户的名称。
     *
     * @readonly
     * @type {string}
     */
    get name() {
        return this.m_name;
    }
    /**
     * 当前用户的名称。
     */
    set name(v) {
        this.m_name = v;
    }
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
let AnonymousIdentity = class AnonymousIdentity extends Identity {
    /**
     * 初始化 {@linkcode AnonymousIdentity} 的新实例。
     * @author Wang Yucai
     *
     * @constructor
     */
    constructor() {
        super();
        this.isAuthenticated = false;
        this.name = SR.getString('words:anonymousUser');
    }
};
AnonymousIdentity = __decorate([
    sealed,
    __metadata("design:paramtypes", [])
], AnonymousIdentity);
export { AnonymousIdentity };
/**
 * 提供了身份信息声明字段相关的方法。
 * @author Wang Yucai
 *
 * @export
 * @class ClaimFields
 * @typedef {ClaimFields}
 */
export class ClaimFields {
    /**
     * 初始化 {@linkcode ClaimFields} 的新实例。
     * @author Wang Yucai
     *
     * @constructor
     * @private
     */
    constructor() { }
}
/**
 * 用户名。
 * @author Wang Yucai
 *
 * @static
 * @readonly
 * @type {string}
 */
ClaimFields.UserName = 'claim:user-name';
/**
 * 用户真实姓名。
 * @author Wang Yucai
 *
 * @static
 * @readonly
 * @type {string}
 */
ClaimFields.Name = 'claim:name';
/**
 * 是否已经经过身份认证。
 * @author Wang Yucai
 *
 * @static
 * @readonly
 * @type {string}
 */
ClaimFields.IsAuthenticated = 'claim:authentication';
/**
 * 用户唯一标识。
 * @author Wang Yucai
 *
 * @static
 * @readonly
 * @type {string}
 */
ClaimFields.UserId = 'claim:user-id';
/**
 * 身份认证方式。
 * @author Wang Yucai
 *
 * @static
 * @readonly
 * @type {string}
 */
ClaimFields.AuthenticationMethod = 'claim:authentication-method';
/**
 * 所在的国家/地区。
 * @author Wang Yucai
 *
 * @static
 * @readonly
 * @type {string}
 */
ClaimFields.Country = 'claim:country';
/**
 * 用户的出生日期。
 * @author Wang Yucai
 *
 * @static
 * @readonly
 * @type {string}
 */
ClaimFields.DateOfBirth = 'claim:date-of-birth';
/**
 * 用户电邮地址。
 * @author Wang Yucai
 *
 * @static
 * @readonly
 * @type {string}
 */
ClaimFields.EmailAddress = 'claim:e-mail';
/**
 * 用户移动电话号码。
 * @author Wang Yucai
 *
 * @static
 * @readonly
 * @type {string}
 */
ClaimFields.MobileNumber = 'claim:mobile';
/**
 * 用户固话号码。
 * @author Wang Yucai
 *
 * @static
 * @readonly
 * @type {string}
 */
ClaimFields.TelephoneNumber = 'claim:telephone';
/**
 * 失效时间。
 * @author Wang Yucai
 *
 * @static
 * @readonly
 * @type {string}
 */
ClaimFields.Expired = 'claim:expired';
/**
 * 文化区域设置。
 * @author Wang Yucai
 *
 * @static
 * @readonly
 * @type {string}
 */
ClaimFields.Culture = 'claim:culture-info';
/**
 * 用户邮编。
 * @author Wang Yucai
 *
 * @static
 * @readonly
 * @type {string}
 */
ClaimFields.PostalCode = 'claim:postal-code';
/**
 * 用户授权角色集合。
 * @author Wang Yucai
 *
 * @static
 * @readonly
 * @type {string}
 */
ClaimFields.Roles = 'claim:roles';
/**
 * 原始用户数据。
 * @author Wang Yucai
 *
 * @static
 * @readonly
 * @type {string}
 */
ClaimFields.UserData = 'claim:user-data';
/**
 * 用户所在州或省份。
 * @author Wang Yucai
 *
 * @static
 * @readonly
 * @type {string}
 */
ClaimFields.StateOrProvince = 'claim:state-or-province';
/**
 * 用户的名字。
 * @author Wang Yucai
 *
 * @static
 * @readonly
 * @type {string}
 */
ClaimFields.FirstName = 'claim:first-name';
/**
 * 用户的姓氏。
 * @author Wang Yucai
 *
 * @static
 * @readonly
 * @type {string}
 */
ClaimFields.LastName = 'claim:last-name';
/**
 * 用户所在的县或区。
 * @author Wang Yucai
 *
 * @static
 * @readonly
 * @type {string}
 */
ClaimFields.District = 'claim:district';
/**
 * 用户所在的街道地址。
 * @author Wang Yucai
 *
 * @static
 * @readonly
 * @type {string}
 */
ClaimFields.StreetAddress = 'claim:street-address';
/**
 * Bearer 授权令牌。
 * @author Wang Yucai
 *
 * @static
 * @readonly
 * @type {string}
 */
ClaimFields.AuthorizationBearerToken = 'claim:authorization-bearer';
/**
 * 授权令牌颁发者。
 * @author Wang Yucai
 *
 * @static
 * @readonly
 * @type {string}
 */
ClaimFields.Issuer = 'claim:token-issuer';
/**
 * 令牌颁发时间。
 * @author Wang Yucai
 *
 * @static
 * @readonly
 * @type {string}
 */
ClaimFields.IssuedTime = 'claim:issued-time';
/**
 * 服务器操作系统名称。
 * @author Wang Yucai
 *
 * @static
 * @readonly
 * @type {string}
 */
ClaimFields.OperatingSystem = 'claim:os';
/**
 * 身份认证服务版本号。
 * @author Wang Yucai
 *
 * @static
 * @readonly
 * @type {string}
 */
ClaimFields.Version = 'claim:version';
/**
 * 身份认证服务端平台名称。
 * @author Wang Yucai
 *
 * @static
 * @readonly
 * @type {string}
 */
ClaimFields.Platform = 'claim:platform';
/**
 * 尝试获取名称为 {@linkcode key} 的身份声明值。
 * @author Wang Yucai
 *
 * @template TValue 声明值类型。
 * @param {Claims} claims 身份信息声明集合。
 * @param {string} key 身份声明标识名称。
 * @param {TValue} ifUnspecifiedValue 当名称为 {@linkcode key} 的声明不存在时需要返回的值。
 * @returns {TValue}
 */
function getClaimValue(claims, key, ifUnspecifiedValue) {
    if (console.debugIf(Object.isNull(claims[key]), `[DEBUG] - <Identity.mts: 5e70ba>: 名称为 “${key}” 声明值不存在。`)) {
        return ifUnspecifiedValue;
    }
    else
        return claims[key].value;
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
let ClaimsIdentity = ClaimsIdentity_1 = class ClaimsIdentity extends Identity {
    /**
     * 初始化 {@linkcode ClaimsIdentity} 的新实例。
     * @author Wang Yucai
     *
     * @constructor
     * @param {Claims} claims 身份认证声明。
     */
    constructor(claims) {
        super();
        this.claims = claims !== null && claims !== void 0 ? claims : {};
        if (!getClaimValue(this.claims, ClaimFields.IsAuthenticated, false)) {
            this.isAuthenticated = false;
            this.name = new AnonymousIdentity().name;
        }
        else {
            this.isAuthenticated = true;
            this.name = getClaimValue(this.claims, ClaimFields.UserName, new AnonymousIdentity().name);
        }
    }
    /**
     * 获取指定名称 {@linkcode key} 的身份信息声明。
     * @author Wang Yucai
     *
     * @static
     * @param {Claims} claims 身份信息声明集合。
     * @param {string} key 身份信息声明名称。
     * @returns {sys.Null<Readonly<Claim>>}
     */
    static getClaim(claims, key) {
        if (String.isNullOrWhitespace(key) || Object.isNull(claims)) {
            throw new ArgumentError(SR.getString('exceptions:invalidArgumentException'), 'key');
        }
        return claims[key];
    }
    /**
     * 获取指定名称 {@linkcode key} 的身份信息声明值。
     * @author Wang Yucai
     *
     * @static
     * @param {Claims} claims 身份信息声明集合。
     * @param {string} key 身份信息声明名称。
     * @returns {Nullable<string>}
     */
    static getClaimValue(claims, key) {
        const claim = ClaimsIdentity_1.getClaim(claims, key);
        return new Nullable(claim === null || claim === void 0 ? void 0 : claim.value);
    }
    /**
     * 创建一个新的身份信息声明。
     * @author Wang Yucai
     *
     * @static
     * @param {string} key 身份信息声明标识名称。
     * @param {*} value 身份信息声明值。
     * @returns {Readonly<Claim>}
     */
    static createClaim(key, value) {
        return {
            key,
            value,
        };
    }
};
ClaimsIdentity = ClaimsIdentity_1 = __decorate([
    sealed,
    __metadata("design:paramtypes", [Object])
], ClaimsIdentity);
export { ClaimsIdentity };
