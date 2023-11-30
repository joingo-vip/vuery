// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************

import { sealed } from '@joingo.vip/core';
import { AnonymousIdentity, ClaimsIdentity, Identity, type Claims } from './identity.mjs';

/**
 * 提供了身份摘要信息相关的基本方法。
 * @author Wang Yucai
 *
 * @export
 * @abstract
 * @class Principal
 * @typedef {Principal}
 */
export abstract class Principal {
  /**
   * 当前的用户身份信息。
   * @author Wang Yucai
   * @remarks
   *  获取 {@linkcode Identity} 类型的对象实例，用于表示当前的用户身份信息。
   *
   * @readonly
   * @type {Identity}
   */
  readonly user: Identity;

  /**
   * 初始化 {@linkcode Principal} 的新实例。
   * @author Wang Yucai
   *
   * @constructor
   * @protected
   * @param {Identity} identity 当前的用户身份信息。
   */
  protected constructor(identity: Identity) {
    if (console.warnIf(Object.isNull(identity), `[WARN] - <principal.mts: 7529af>: 为提供有效的用户身份信息 “Identity”。`)) {
      throw new ArgumentError('exceptions:invalidArgumentException', 'identity');
    }
    this.user = identity;
  }
}

/**
 * 提供了匿名的用户身份摘要相关的方法。密闭的，不可以从此类型派生。
 * @author Wang Yucai
 * @remarks
 *  密闭的，不可以从此类型派生。
 *
 * @export
 * @class AnonymousPrincipal
 * @typedef {AnonymousPrincipal}
 * @extends {Principal}
 */
@sealed
export class AnonymousPrincipal extends Principal {
  /**
   * 初始化 {@linkcode AnonymousPrincipal} 的新实例。
   * @author Wang Yucai
   *
   * @constructor
   */
  constructor() {
    super(new AnonymousIdentity());
  }
}

/**
 * 提供了用户身份摘要声明相关的方法。密闭的，不可以从此类型派生。
 * @author Wang Yucai
 * @remarks
 *  密闭的，不可以从此类型派生。
 *
 * @export
 * @class ClaimsPrincipal
 * @typedef {ClaimsPrincipal}
 * @extends {Principal}
 */
@sealed
export class ClaimsPrincipal extends Principal {
  /**
   * 初始化 {@linkcode ClaimsPrincipal} 的新实例。
   * @author Wang Yucai
   *
   * @constructor
   * @param {(ClaimsIdentity | Claims)} identity 用户身份信息声明。
   */
  constructor(identity: ClaimsIdentity | Claims) {
    if (identity instanceof ClaimsIdentity) {
      super(identity);
    } else {
      super(new ClaimsIdentity(identity));
    }
  }
}
