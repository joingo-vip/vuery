// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************

/**
 * 身份认证相关服务模块。
 *
 * @remarks
 * "authentication-service.ts": 身份认证相关服务模块。
 *
 * @packageDocumentation
 */

import { sealed } from '@vuery/runtime';
import { IServiceBase, ServiceBase } from '../service-base';
import { ServiceClientBuilder, ServiceResult } from '../service-client';
import { injectable } from 'tsyringe';

/**
 * 身份认证服务负载数据抽象结构。
 * @author Wang Yucai
 *
 * @export
 * @interface AuthenticationPayloadBase
 * @typedef {AuthenticationPayloadBase}
 */
export interface AuthenticationPayloadBase {}

/**
 * 表单身份认证服务所需的基本负载数据。
 * @author Wang Yucai
 *
 * @export
 * @interface FormAuthenticationPayloadBase
 * @typedef {FormAuthenticationPayloadBase}
 * @extends {AuthenticationPayloadBase}
 */
export interface FormAuthenticationPayloadBase
  extends AuthenticationPayloadBase {
  /**
   * 验证码。
   * @author Wang Yucai
   *
   * @type {string}
   * @remarks
   * 设置或获取一个字符串，用于表示验证码。
   */
  captcha: string;

  /**
   * 登录用户名。
   * @author Wang Yucai
   *
   * @type {string}
   * @remarks
   * 设置或获取一个字符串，用于表示登录用户名。
   */
  userName: string;

  /**
   * 登录口令。
   * @author Wang Yucai
   *
   * @type {string}
   * @remarks
   * 设置或获取一个字符串，用于表示登录口令。
   */
  password: string;
}

/**
 * 基于表单登录操作所需的实际负载数据结构。
 * @author Wang Yucai
 *
 * @export
 * @interface FormAuthenticationPayload
 * @typedef {FormAuthenticationPayload}
 * @extends {FormAuthenticationPayloadBase}
 */
export interface FormAuthenticationPayload
  extends FormAuthenticationPayloadBase {
  /**
   * 验证码校验码。
   * @author Wang Yucai
   *
   * @type {string}
   * @remarks
   * 设置或获取一个字符串，用于表示验证码校验码。
   */
  captchaChecksum: string;
}

/**
 * 身份认证令牌。
 * @author Wang Yucai
 *
 * @export
 * @interface ITokenString
 * @typedef {ITokenString}
 */
export interface ITokenString {
  /**
   * 身份认证令牌字符串。
   * @author Wang Yucai
   *
   * @readonly
   * @type {(string | null)}
   * @remarks
   * 获取一个字符串，用于表示身份认证令牌字符串。
   */
  get value(): string | null;

  /**
   * 保存身份认证令牌。
   * @author Wang Yucai
   */
  save(): void;

  /**
   * 删除身份认证令牌。
   * @author Wang Yucai
   */
  remove(): void;
}

/**
 * 提供了身份认证令牌相关的方法。密闭的，不可以从此类型派生。
 * @author Wang Yucai
 *
 * @export
 * @class TokenString
 * @typedef {TokenString}
 * @implements {ITokenString}
 * @sealed
 * @remarks
 * 密闭的，不可以从此类型派生。
 */
@sealed
export class TokenString implements ITokenString {
  private static readonly s_keyOfTokenStrStorage: string =
    'Dz6w48eLQihsUptxzGsjabyjwc9MCdbJfOlyNGCaAXhwrPRoaQHdSamRz19XFgOV';
  private readonly m_tokenStr;

  /**
   * 初始化 {@link TokenString} 的新实例。
   * @author Wang Yucai
   *
   * @constructor
   * @public
   * @param {string} tokenStr 身份认证令牌字符串。
   */
  public constructor(tokenStr: string) {
    this.m_tokenStr = tokenStr;
  }

  get value(): string | null {
    return this.m_tokenStr;
  }
  save(): void {
    if (!String.isNullOrWhitespace(this.m_tokenStr))
      sessionStorage.setItem(
        TokenString.s_keyOfTokenStrStorage,
        this.m_tokenStr
      );
  }
  remove(): void {
    sessionStorage.removeItem(TokenString.s_keyOfTokenStrStorage);
  }

  /**
   * 当前的身份认证令牌。
   * @author Wang Yucai
   *
   * @public
   * @static
   * @readonly
   * @type {(ITokenString | null)}
   */
  public static get current(): ITokenString | null {
    try {
      const tokenStr: string | null | undefined = sessionStorage.getItem(
        TokenString.s_keyOfTokenStrStorage
      );
      if (String.isNullOrWhitespace(tokenStr)) return null;
      return new TokenString(tokenStr);
    } catch {
      return null;
    }
  }
}

/**
 * 提供了特殊的验证码服务返回值结果类型。
 * @author Wang Yucai
 *
 * @export
 * @interface CaptchaResult
 * @typedef {CaptchaResult}
 * @extends {ServiceResult}
 */
export interface CaptchaResult extends ServiceResult {
  img?: string | null;
  captchaEnabled: boolean;
  uuid?: string | null;
}

/**
 * 定义了验证码相关的服务接口。
 * @author Wang Yucai
 *
 * @export
 * @interface ICaptchaService
 * @typedef {ICaptchaService}
 * @extends {IServiceBase}
 */
export interface ICaptchaService extends IServiceBase {
  /**
   * (可等待的方法) 刷新并获取一个新的验证码结果。
   * @author Wang Yucai
   *
   * @returns {Promise<CaptchaResult>}
   */
  refreshAsync(): Promise<CaptchaResult>;
}

/**
 * 提供了验证码相关的方法。密闭的，不可以从此类型派生。
 * @author Wang Yucai
 *
 * @export
 * @class CaptchaServiceProvider
 * @typedef {CaptchaServiceProvider}
 * @extends {ServiceBase}
 * @implements {ICaptchaService}
 * @remarks
 * 密闭的，不可以从此类型派生。
 */
@sealed
@injectable()
export class CaptchaServiceProvider
  extends ServiceBase
  implements ICaptchaService
{
  private readonly m_captchaServiceUri: string = '/captchaImage';

  /**
   * 初始化 {@link CaptchaServiceProvider} 的新实例。
   * @author Wang Yucai
   *
   * @constructor
   */
  constructor() {
    super();
  }

  /**
   * (可等待的方法) 刷新并获取一个新的验证码结果。
   * @author Wang Yucai
   *
   * @returns {Promise<CaptchaResult>}
   */
  async refreshAsync(): Promise<CaptchaResult> {
    const client = new ServiceClientBuilder()
      .withUri(this.m_captchaServiceUri)
      .allowAnonymous()
      .withHttpGet()
      .withTimeout()
      .build();
    return await client.requestAsync<CaptchaResult>();
  }
}
