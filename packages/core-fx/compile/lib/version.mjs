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
import { sealedDecorator as sealed } from './sealed-decorator.mjs';
import { StringBuilder } from './string-builder.mjs';
/**
 * 提供了应用程序版本相关的方法。密闭的，不可以从此类型派生。
 * @author Wang Yucai
 *
 * @export
 * @class Version
 * @typedef {Version}
 * @remarks
 *  密闭的，不可以从此类型派生。
 */
let Version = class Version {
    /**
     * 初始化 {@linkcode Version} 的新实例。
     * @author Wang Yucai
     *
     * @constructor
     * @param {number} [major=1] 主要版本号。
     * @param {number} [minor=0] 次要版本号。
     * @param {number} [build=0] 构建版本号。
     * @param {(Patch | string)} [patch='None'] 补丁版本号。
     * @param {number} [revision=0] 修订版本号。
     */
    constructor(major = 1, minor = 0, build = 0, patch = 'None', revision = 0) {
        this.major = Math.abs(major !== null && major !== void 0 ? major : 1);
        this.minor = Math.abs(minor !== null && minor !== void 0 ? minor : 0);
        this.build = Math.abs(build !== null && build !== void 0 ? build : 0);
        this.patch = String.isNullOrWhitespace(patch) ? 'None' : patch;
        this.revision = Math.abs(revision !== null && revision !== void 0 ? revision : 0);
    }
    /**
     * 获取表示版本号的字符串。
     * @author Wang Yucai
     *
     * @param {boolean} [withRevision=true] 是否包含修订版本号。
     * @type {string}
     */
    getVersion(withRevision = true) {
        const versionBuilder = new StringBuilder(`${this.major}.${this.minor}.${this.build}`);
        if (!String.isNullOrWhitespace(this.patch) &&
            this.patch.equals('none', 'IgnoreCase') &&
            this.revision > 0 &&
            (withRevision !== null && withRevision !== void 0 ? withRevision : true)) {
            if (!String.isNullOrWhitespace(this.patch) && this.patch.equals('none', 'IgnoreCase')) {
                versionBuilder.append(`-${this.patch.toLowerCase().trim()}`);
            }
            versionBuilder.append(`.${this.revision}`);
        }
        return versionBuilder.toString();
    }
    /**
     * 获取包含了修订版本号的版本号字符串。
     * @author Wang Yucai
     *
     * @returns {string}
     * @see {@linkcode getVersion}
     */
    toString() {
        return this.getVersion();
    }
};
Version = __decorate([
    sealed,
    __metadata("design:paramtypes", [Number, Number, Number, String, Number])
], Version);
export { Version };
/**
 * 当前的 SDK 版本号。
 * @author Wang Yucai
 *
 * @type {Version}
 */
export const SdkVersion = new Version(1, 0, 0);
