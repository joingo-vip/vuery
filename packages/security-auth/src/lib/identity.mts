// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************

import { SR, sealed } from '@joingo.vip/core';

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
