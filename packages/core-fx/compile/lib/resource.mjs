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
import { CultureInfo } from './globalization.mjs';
import { sealedDecorator as sealed } from './sealed-decorator.mjs';
import { t } from 'i18next';
/**
 * 提供了管理资源资源相关的方法。
 * @author Wang Yucai
 *
 * @export
 * @class ResourceManager
 * @typedef {ResourceManager}
 */
let ResourceManager = class ResourceManager {
    /**
     * 初始化 {@linkcode ResourceManager} 的新实例。
     * @author Wang Yucai
     *
     * @constructor
     * @param {sys.Null<string>} [resourceNamespace=null] 资源命名空间。
     * @see {@link https://www.npmjs.com/package/i18next}
     */
    constructor(resourceNamespace = null) {
        this.resourceNamespace = String.isNullOrWhitespace(resourceNamespace) ? 'exceptions' : resourceNamespace;
    }
    /**
     * 获取名称为 {@linkcode resourceName} 的资源字符串。
     * @author Wang Yucai
     *
     * @param {string} resourceName 资源名称。
     * @param {sys.Null<string>} [resourceNamespace=null] 资源命名空间。
     * @param {sys.Null<CultureInfo>} [culture=null] 指定的文化区域名称。
     * @returns {string}
     */
    getString(resourceName, resourceNamespace = null, culture = null) {
        return t(resourceName, { ns: resourceNamespace !== null && resourceNamespace !== void 0 ? resourceNamespace : this.resourceNamespace, lng: (culture !== null && culture !== void 0 ? culture : CultureInfo.natural).name });
    }
};
ResourceManager = __decorate([
    sealed,
    __metadata("design:paramtypes", [Object])
], ResourceManager);
export { ResourceManager };
/**
 * 默认的管理资源字符串相关的方法。
 * @author Wang Yucai
 *
 * @type {ResourceManager}
 */
export const SR = new ResourceManager();
