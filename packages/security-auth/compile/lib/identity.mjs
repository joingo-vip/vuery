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
