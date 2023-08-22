// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************

/**
 * 身份信息摘要模块。
 *
 * @remarks
 * "principal.ts": 身份信息摘要模块。
 *
 * @packageDocumentation
 */

import { sealed } from '@vuery/runtime';
import { ITokenString, TokenString } from './authentication-service';
import { AESCryptographyServiceProvider } from './cryptography-service';

/**
 * 定义了身份信息接口。
 * @author Wang Yucai
 *
 * @export
 * @interface IIdentity
 * @typedef {IIdentity}
 */
export interface IIdentity {
  /**
   * 是否已经身份认证。
   * @author Wang Yucai
   *
   * @readonly
   * @type {boolean}
   * @remarks
   * 获取一个 {@link Boolean} 类型值，用于表示是否已经身份认证。
   */
  get isAuthenticated(): boolean;
}

/**
 * 提供了匿名用户身份信息相关的方法。密闭的，不可以从此类型派生。
 * @author Wang Yucai
 *
 * @export
 * @class AnonymousIdentity
 * @typedef {AnonymousIdentity}
 * @implements {IIdentity}
 * @remarks
 * 密闭的，不可以从此类型派生。
 */
@sealed
export class AnonymousIdentity implements IIdentity {
  get isAuthenticated(): boolean {
    console.warn(`[WARN] - <principal.ts: 45cc23>: 当前为匿名用户。`);
    return false;
  }
}

/**
 * 定义了身份摘要信息的接口。
 * @author Wang Yucai
 *
 * @export
 * @interface IPrincipal
 * @typedef {IPrincipal}
 */
export interface IPrincipal {
  /**
   * 获取当前的用户身份信息。
   * @author Wang Yucai
   *
   * @readonly
   * @type {IIdentity}
   */
  get user(): IIdentity;
}

/**
 * 提供了你明身份摘要信息相关的方法。密闭的，不可以从此类型派生。
 * @author Wang Yucai
 *
 * @export
 * @class AnonymousPrincipal
 * @typedef {AnonymousPrincipal}
 * @implements {IPrincipal}
 * @see {@linkcode AnonymousIdentity}
 * @remarks
 * 密闭的，不可以从此类型派生。
 */
@sealed
export class AnonymousPrincipal implements IPrincipal {
  private static readonly s_anonymousIdentity: AnonymousIdentity =
    new AnonymousIdentity();

  get user(): IIdentity {
    return AnonymousPrincipal.s_anonymousIdentity;
  }
}

/**
 * 提供了基于声明的身份信息相关的方法。密闭的，不可以从此类型派生。
 * @author Wang Yucai
 *
 * @export
 * @class ClaimsIdentity
 * @typedef {ClaimsIdentity}
 * @implements {IIdentity}
 * @remarks
 * 密闭的，不可以从此类型派生。
 */
@sealed
export class ClaimsIdentity implements IIdentity {
  /**
   * 身份令牌。
   * @author Wang Yucai
   *
   * @static
   * @readonly
   * @type {string}
   */
  static readonly ACCESS_TOKEN: string = 'atn';

  /**
   * 身份信息声明信息。
   * @author Wang Yucai
   *
   * @readonly
   * @type {Record<string, string>}
   */
  readonly claims: Record<string, string>;

  /**
   * 初始化 {@link ClaimsIdentity} 的新实例。
   * @author Wang Yucai
   *
   * @constructor
   * @param {ITokenString} token 身份令牌字符串。
   */
  constructor(token: ITokenString) {
    this.claims = {};
    this.claims[ClaimsIdentity.ACCESS_TOKEN] =
      new AESCryptographyServiceProvider().decrypt(token.value);
  }

  get isAuthenticated(): boolean {
    return true;
  }
}

/**
 * 提供了基于声明的身份摘要信息相关的方法。密闭的，不可以从此类型派生。
 * @author Wang Yucai
 *
 * @export
 * @class ClaimsPrincipal
 * @typedef {ClaimsPrincipal}
 * @implements {IPrincipal}
 * @remarks
 * 密闭的，不可以从此类型派生。
 */
@sealed
export class ClaimsPrincipal implements IPrincipal {
  private readonly m_claimsIdentity: ClaimsIdentity;

  /**
   * 初始化 {@link ClaimsPrincipal} 的新实例。
   * @author Wang Yucai
   *
   * @constructor
   * @param {ITokenString} token 身份令牌字符串。
   */
  constructor(token: ITokenString) {
    this.m_claimsIdentity = new ClaimsIdentity(token);
  }

  get user(): IIdentity {
    return this.m_claimsIdentity;
  }
}

/**
 * 提供了获取身份摘要信息相关的方法。
 * @author Wang Yucai
 *
 * @export
 * @class Principal
 * @typedef {Principal}
 */
export class Principal {
  /**
   * 初始化 {@linkcode Principal} 的新实例。
   * @author Wang Yucai
   *
   * @constructor
   * @private
   */
  private constructor() {}

  /**
   * 当前的用户身份摘要信息。
   * @author Wang Yucai
   *
   * @static
   * @readonly
   * @type {IPrincipal}
   */
  static get currentPrincipal(): IPrincipal {
    const token = TokenString.current;
    return String.isNullOrWhitespace(token?.value)
      ? new AnonymousPrincipal()
      : new ClaimsPrincipal(token);
  }
}
