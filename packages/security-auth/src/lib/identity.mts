// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************

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
export abstract class Identity {
  private m_isAuthenticated: boolean;
  private m_name: string;

  /**
   * 初始化 {@linkcode Identity} 的新实例。
   * @author Wang Yucai
   *
   * @constructor
   * @protected
   */
  protected constructor() {
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
  get isAuthenticated(): boolean {
    return this.m_isAuthenticated;
  }

  /**
   * 是否已经身份认证。
   */
  protected set isAuthenticated(v: boolean) {
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
  get name(): string {
    return this.m_name;
  }

  /**
   * 当前用户的名称。
   */
  protected set name(v: string) {
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
@sealed
export class AnonymousIdentity extends Identity {
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
export class ClaimFields {
  /**
   * 初始化 {@linkcode ClaimFields} 的新实例。
   * @author Wang Yucai
   *
   * @constructor
   * @private
   */
  private constructor() {}

  /**
   * 用户名。
   * @author Wang Yucai
   *
   * @static
   * @readonly
   * @type {string}
   */
  static readonly UserName: string = 'claim:user-name';

  /**
   * 用户真实姓名。
   * @author Wang Yucai
   *
   * @static
   * @readonly
   * @type {string}
   */
  static readonly Name: string = 'claim:name';

  /**
   * 是否已经经过身份认证。
   * @author Wang Yucai
   *
   * @static
   * @readonly
   * @type {string}
   */
  static readonly IsAuthenticated: string = 'claim:authentication';

  /**
   * 用户唯一标识。
   * @author Wang Yucai
   *
   * @static
   * @readonly
   * @type {string}
   */
  static readonly UserId: string = 'claim:user-id';

  /**
   * 身份认证方式。
   * @author Wang Yucai
   *
   * @static
   * @readonly
   * @type {string}
   */
  static readonly AuthenticationMethod: string = 'claim:authentication-method';

  /**
   * 所在的国家/地区。
   * @author Wang Yucai
   *
   * @static
   * @readonly
   * @type {string}
   */
  static readonly Country: string = 'claim:country';

  /**
   * 用户的出生日期。
   * @author Wang Yucai
   *
   * @static
   * @readonly
   * @type {string}
   */
  static readonly DateOfBirth: string = 'claim:date-of-birth';

  /**
   * 用户电邮地址。
   * @author Wang Yucai
   *
   * @static
   * @readonly
   * @type {string}
   */
  static readonly EmailAddress: string = 'claim:e-mail';

  /**
   * 用户移动电话号码。
   * @author Wang Yucai
   *
   * @static
   * @readonly
   * @type {string}
   */
  static readonly MobileNumber: string = 'claim:mobile';

  /**
   * 用户固话号码。
   * @author Wang Yucai
   *
   * @static
   * @readonly
   * @type {string}
   */
  static readonly TelephoneNumber: string = 'claim:telephone';

  /**
   * 失效时间。
   * @author Wang Yucai
   *
   * @static
   * @readonly
   * @type {string}
   */
  static readonly Expired: string = 'claim:expired';

  /**
   * 文化区域设置。
   * @author Wang Yucai
   *
   * @static
   * @readonly
   * @type {string}
   */
  static readonly Culture: string = 'claim:culture-info';

  /**
   * 用户邮编。
   * @author Wang Yucai
   *
   * @static
   * @readonly
   * @type {string}
   */
  static readonly PostalCode: string = 'claim:postal-code';

  /**
   * 用户授权角色集合。
   * @author Wang Yucai
   *
   * @static
   * @readonly
   * @type {string}
   */
  static readonly Roles: string = 'claim:roles';

  /**
   * 原始用户数据。
   * @author Wang Yucai
   *
   * @static
   * @readonly
   * @type {string}
   */
  static readonly UserData: string = 'claim:user-data';

  /**
   * 用户所在州或省份。
   * @author Wang Yucai
   *
   * @static
   * @readonly
   * @type {string}
   */
  static readonly StateOrProvince: string = 'claim:state-or-province';

  /**
   * 用户的名字。
   * @author Wang Yucai
   *
   * @static
   * @readonly
   * @type {string}
   */
  static readonly FirstName: string = 'claim:first-name';

  /**
   * 用户的姓氏。
   * @author Wang Yucai
   *
   * @static
   * @readonly
   * @type {string}
   */
  static readonly LastName: string = 'claim:last-name';

  /**
   * 用户所在的县或区。
   * @author Wang Yucai
   *
   * @static
   * @readonly
   * @type {string}
   */
  static readonly District: string = 'claim:district';

  /**
   * 用户所在的街道地址。
   * @author Wang Yucai
   *
   * @static
   * @readonly
   * @type {string}
   */
  static readonly StreetAddress: string = 'claim:street-address';

  /**
   * Bearer 授权令牌。
   * @author Wang Yucai
   *
   * @static
   * @readonly
   * @type {string}
   */
  static readonly AuthorizationBearerToken: string = 'claim:authorization-bearer';

  /**
   * 授权令牌颁发者。
   * @author Wang Yucai
   *
   * @static
   * @readonly
   * @type {string}
   */
  static readonly Issuer: string = 'claim:token-issuer';

  /**
   * 令牌颁发时间。
   * @author Wang Yucai
   *
   * @static
   * @readonly
   * @type {string}
   */
  static readonly IssuedTime: string = 'claim:issued-time';

  /**
   * 服务器操作系统名称。
   * @author Wang Yucai
   *
   * @static
   * @readonly
   * @type {string}
   */
  static readonly OperatingSystem: string = 'claim:os';

  /**
   * 身份认证服务版本号。
   * @author Wang Yucai
   *
   * @static
   * @readonly
   * @type {string}
   */
  static readonly Version: string = 'claim:version';

  /**
   * 身份认证服务端平台名称。
   * @author Wang Yucai
   *
   * @static
   * @readonly
   * @type {string}
   */
  static readonly Platform: string = 'claim:platform';
}

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
function getClaimValue<TValue>(claims: Claims, key: string, ifUnspecifiedValue: TValue): TValue {
  if (console.debugIf(Object.isNull(claims[key]), `[DEBUG] - <Identity.mts: 5e70ba>: 名称为 “${key}” 声明值不存在。`)) {
    return ifUnspecifiedValue;
  } else return claims[key].value as TValue;
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
@sealed
export class ClaimsIdentity extends Identity {
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
  constructor(claims: Claims) {
    super();
    this.claims = claims ?? {};
    if (!getClaimValue<boolean>(this.claims, ClaimFields.IsAuthenticated, false)) {
      this.isAuthenticated = false;
      this.name = new AnonymousIdentity().name;
    } else {
      this.isAuthenticated = true;
      this.name = getClaimValue<string>(this.claims, ClaimFields.UserName, new AnonymousIdentity().name);
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
  static getClaim(claims: Claims, key: string): sys.Null<Readonly<Claim>> {
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
  static getClaimValue(claims: Claims, key: string): Nullable<string> {
    const claim = ClaimsIdentity.getClaim(claims, key);
    return new Nullable<string>(claim?.value);
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
  static createClaim(key: string, value: any): Readonly<Claim> {
    return {
      key,
      value,
    };
  }
}
