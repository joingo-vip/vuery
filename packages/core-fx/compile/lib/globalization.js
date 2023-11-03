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
var CultureInfo_1;
import { changeLanguage } from 'i18next';
import { sealedDecorator as sealed } from './sealed-decorator';
let __JOINGO_NATURAL_CULTUREINFO_MAP__ = 'zh-Hans';
let __JOINGO_CURRENT_CULTUREINFO__ = __JOINGO_NATURAL_CULTUREINFO_MAP__;
const __JOINGO_CULTUREINFO_STORAGEKEY__ = 'joingo.vip.globalization.cultureinfo';
/**
 * 提供了文化区域信息相关的方法。密闭的，不可以从此类型派生。
 * @author Wang Yucai
 *
 * @export
 * @class CultureInfo
 * @typedef {CultureInfo}
 * @remarks
 *  密闭的，不可以从此类型派生。
 */
let CultureInfo = CultureInfo_1 = class CultureInfo {
    /**
     * 初始化 {@linkcode CultureInfo} 的新实例。
     * @author Wang Yucai
     *
     * @constructor
     * @param {string} name 文化区域名称。
     */
    constructor(name) {
        this.name = String.isNullOrWhitespace(name) ? __JOINGO_NATURAL_CULTUREINFO_MAP__ : name.trim();
    }
    /**
     * 设置默认的文化区域。
     * @author Wang Yucai
     *
     * @static
     * @param {string} name 文化区域名称。
     */
    static setDefaultCulture(name) {
        if (!String.isNullOrWhitespace(name)) {
            __JOINGO_NATURAL_CULTUREINFO_MAP__ = name.trim();
        }
    }
    /**
     * 默认的文化区域信息。
     * @author Wang Yucai
     *
     * @static
     * @readonly
     * @type {CultureInfo}
     * @remarks
     *  获取 {@linkcode CultureInfo} 类型的对象实例，用于表示默认的文化区域信息。
     */
    static get natural() {
        return new CultureInfo_1(__JOINGO_NATURAL_CULTUREINFO_MAP__);
    }
    /**
     * 获取当前的文化区域名称。
     * @author Wang Yucai
     *
     * @returns {string}
     * @see {@linkcode name}
     */
    toString() {
        return this.name;
    }
    change(storage) {
        if (!console.warnIf(String.isNullOrWhitespace(this.name), `[WARN] - <globalization.mts: 700217>: Cultural information name is required.`)) {
            if (!Object.isNull(storage)) {
                storage(this.name);
            }
            __JOINGO_CURRENT_CULTUREINFO__ = this.name;
        }
        return this;
    }
    /**
     * 当前的文化区域变更后执行的方法。
     * @author Wang Yucai
     *
     * @param {sys.Action1<CultureInfo>} callback 回调方法。
     */
    changed(callback) {
        callback(this);
    }
    static currentCulture(from) {
        if (Object.isNull(from)) {
            return new CultureInfo_1(__JOINGO_CURRENT_CULTUREINFO__);
        }
        else {
            return new CultureInfo_1(from());
        }
    }
};
CultureInfo = CultureInfo_1 = __decorate([
    sealed,
    __metadata("design:paramtypes", [String])
], CultureInfo);
export { CultureInfo };
/**
 * 提供了默认的文化区域存储相关的方法。
 * @author Wang Yucai
 */
export const DefaultCultureInfoStorageProvider = function (name) {
    var _a;
    if (!console.debugIf(String.isNullOrWhitespace(name), `[DEBUG] - <globalization.mts: 4a8112>: Cultural information name is required.`)) {
        (_a = window.localStorage) === null || _a === void 0 ? void 0 : _a.setItem(__JOINGO_CULTUREINFO_STORAGEKEY__, name.trim());
    }
};
/**
 * 提供了默认的获取文化区域信息相关的方法。
 * @author Wang Yucai
 */
export const DefaultCultureInfoGetProvider = function () {
    var _a;
    const value = (_a = window.localStorage) === null || _a === void 0 ? void 0 : _a.getItem(__JOINGO_CULTUREINFO_STORAGEKEY__);
    if (console.debugIf(String.isNullOrWhitespace(value), `[DEBUG] - <globalization.mts: 9e429d>: No cultural information was found in local storage.`)) {
        return __JOINGO_CURRENT_CULTUREINFO__;
    }
    return value;
};
/**
 * 提供了默认的文化区域变更后回调相关的方法。
 * @author Wang Yucai
 */
export const DefaultCultureChangedCallbackHandler = function (current) {
    if (!String.isNullOrWhitespace(current === null || current === void 0 ? void 0 : current.name)) {
        changeLanguage(current.name)
            .then(() => {
            console.debug(`[DEBUG] - <globalization.mts: 86573a>: The current language of "i18next" has been changed to "${current.name}".`);
        })
            .catch((reason) => {
            console.error(`[ERROR] - <globalization.mts: 555668>: Trying to change the current language setting of "i18next" failed. The details：%o`, reason);
        });
    }
};
