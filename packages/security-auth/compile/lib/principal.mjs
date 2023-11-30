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
import { sealed } from '@joingo.vip/core';
import { AnonymousIdentity, ClaimsIdentity } from './identity.mjs';
/**
 * 提供了身份摘要信息相关的基本方法。
 * @author Wang Yucai
 *
 * @export
 * @abstract
 * @class Principal
 * @typedef {Principal}
 */
export class Principal {
    /**
     * 初始化 {@linkcode Principal} 的新实例。
     * @author Wang Yucai
     *
     * @constructor
     * @protected
     * @param {Identity} identity 当前的用户身份信息。
     */
    constructor(identity) {
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
let AnonymousPrincipal = class AnonymousPrincipal extends Principal {
    /**
     * 初始化 {@linkcode AnonymousPrincipal} 的新实例。
     * @author Wang Yucai
     *
     * @constructor
     */
    constructor() {
        super(new AnonymousIdentity());
    }
};
AnonymousPrincipal = __decorate([
    sealed,
    __metadata("design:paramtypes", [])
], AnonymousPrincipal);
export { AnonymousPrincipal };
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
let ClaimsPrincipal = class ClaimsPrincipal extends Principal {
    /**
     * 初始化 {@linkcode ClaimsPrincipal} 的新实例。
     * @author Wang Yucai
     *
     * @constructor
     * @param {(ClaimsIdentity | Claims)} identity 用户身份信息声明。
     */
    constructor(identity) {
        if (identity instanceof ClaimsIdentity) {
            super(identity);
        }
        else {
            super(new ClaimsIdentity(identity));
        }
    }
};
ClaimsPrincipal = __decorate([
    sealed,
    __metadata("design:paramtypes", [Object])
], ClaimsPrincipal);
export { ClaimsPrincipal };
