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
import { Nullable, SR, sealed } from '@joingo.vip/core';
import { useAesAlgorithm } from '@joingo.vip/security';
const aesCryptoService = useAesAlgorithm();
const __JOINGO_STORAGE_OPTIONS_SECRETKEY__ = 'zomN7XXqPfxfhCap';
/**
 * 提供了适用于浏览器数据存储相关的基本方法。
 * @author Wang Yucai
 *
 * @export
 * @abstract
 * @class StorageProvider
 * @typedef {StorageProvider}
 */
export class StorageProvider {
    /**
     * 初始化 {@linkcode StorageProvider} 的新实例。
     * @author Wang Yucai
     *
     * @constructor
     * @protected
     * @param {Storage} store 数据存储方法。
     * @param {(string | StorableOptions)} options 数据存储服务配置选项。
     */
    constructor(store, options) {
        this.storeProvider = store;
        if (Object.isNull(options)) {
            throw ArgumentError(SR.getString('invalidArgumentException'), 'options');
        }
        if (typeof options === 'string') {
            if (String.isNullOrWhitespace(options)) {
                throw ArgumentError(SR.getString('invalidArgumentException'), 'options');
            }
            this.storageOptions = {
                key: options,
                secretKey: String.empty,
                secure: false,
            };
        }
        else {
            if (String.isNullOrWhitespace(options.key)) {
                throw ArgumentError(SR.getString('invalidArgumentException'), 'options');
            }
            this.storageOptions = Object.extends({ secretKey: __JOINGO_STORAGE_OPTIONS_SECRETKEY__ }, options);
        }
    }
    /**
     * 指定的数据存储项是否存在。
     * @author Wang Yucai
     * @remarks
     *  获取一个 {@link Boolean} 类型值，用于表示指定的数据存储项是否存在。
     *
     * @readonly
     * @type {boolean}
     * @see {@linkcode String.isNullOrEmpty}
     */
    get exists() {
        return !console.debugIf(String.isNullOrEmpty(this.storeProvider.getItem(this.storageOptions.key)), `[DEBUG] - <storage-providers.mts: d7278b>: 标识名称为 “${this.storageOptions.key}” 的数据存储项可能不存在。`);
    }
    /**
     * 获取 {@linkcode T} 类型的数据。
     * @author Wang Yucai
     *
     * @template T
     * @returns {sys.Null<T>}
     */
    value() {
        if (!this.exists) {
            return null;
        }
        let storedStr = this.storeProvider.getItem(this.storageOptions.key);
        if (this.storageOptions.secure && !String.isNullOrWhitespace(this.storageOptions.secretKey)) {
            console.warn(`[WARN] - <storage-providers.mts: 7790bc>: 标识名称为 “${this.storageOptions.key}” 的数据持久化需要解密。`);
            storedStr = aesCryptoService.decrypt(storedStr, this.storageOptions.secretKey).toString();
        }
        return JSON.parse(storedStr).data;
    }
    /**
     * 尝试获取存储的数据。
     * @author Wang Yucai
     *
     * @template T
     * @returns {Nullable<T>}
     */
    tryGet() {
        return new Nullable(this.value());
    }
    /**
     * 更新需要存储的 {@linkcode T} 类型的数据。
     * @author Wang Yucai
     *
     * @template T
     * @param {sys.Null<T>} value 需要存储的数据。
     */
    update(value) {
        if (!Object.isNull(value)) {
            const storedData = { key: this.storageOptions.key, data: value };
            let storedStr = JSON.stringify(storedData);
            if (this.storageOptions.secure && !String.isNullOrWhitespace(this.storageOptions.secretKey)) {
                storedStr = aesCryptoService.encrypt(storedStr, this.storageOptions.secretKey).toString();
            }
            this.storeProvider.setItem(this.storageOptions.key, storedStr);
        }
    }
    /**
     * 删除当前已经存储的数据。
     * @author Wang Yucai
     */
    delete() {
        console.warn(`[WARN] - <storage-providers.mts: e1432d>: 即将删除已经存储的数据 “${this.storageOptions.key}”。`);
        this.storeProvider.removeItem(this.storageOptions.key);
    }
}
/**
 * 提供了基于 {@link sessionStorage} 相关的方法。密闭的，不可以从此类型派生。
 * @author Wang Yucai
 * @remarks
 *  密闭的，不可以从此类型派生。
 *
 * @export
 * @class SessionStorageProvider
 * @typedef {SessionStorageProvider}
 * @extends {StorageProvider}
 */
let SessionStorageProvider = class SessionStorageProvider extends StorageProvider {
    /**
     * 初始化 {@linkcode SessionStorageProvider} 的新实例。
     * @author Wang Yucai
     *
     * @constructor
     * @param {(string | StorableOptions)} options 会话存储相关的配置选项。
     */
    constructor(options) {
        super(sessionStorage, options);
    }
};
SessionStorageProvider = __decorate([
    sealed,
    __metadata("design:paramtypes", [Object])
], SessionStorageProvider);
export { SessionStorageProvider };
/**
 * 提供了基于 {@link localStorage} 相关的方法。密闭的，不可以从此类型派生。
 * @author Wang Yucai
 * @remarks
 *  密闭的，不可以从此类型派生。
 *
 * @export
 * @class LocalStorageProvider
 * @typedef {LocalStorageProvider}
 * @extends {StorageProvider}
 */
let LocalStorageProvider = class LocalStorageProvider extends StorageProvider {
    /**
     * 初始化 {@linkcode LocalStorageProvider} 的新实例。
     * @author Wang Yucai
     *
     * @constructor
     * @param {(string | StorableOptions)} options 本地存储相关的配置选项。
     */
    constructor(options) {
        super(localStorage, options);
    }
};
LocalStorageProvider = __decorate([
    sealed,
    __metadata("design:paramtypes", [Object])
], LocalStorageProvider);
export { LocalStorageProvider };
/**
 * 使用数据存储服务。
 * @author Wang Yucai
 *
 * @export
 * @param {StorageProviderConstructor} ctor {@linkcode StorageProviderConstructor} 类型的对象实例。
 * @param {(string | StorableOptions)} options 存储服务配置选项。
 * @returns {StorageProvider}
 */
export function useStorage(ctor, options) {
    return new ctor(options);
}
/**
 * 使用会话数据存储服务。
 * @author Wang Yucai
 *
 * @export
 * @param {(string | StorableOptions)} options 存储服务配置选项。
 * @returns {StorageProvider}
 * @see {@linkcode SessionStorageProvider}
 */
export function useSessionStorage(options) {
    return useStorage(SessionStorageProvider, options);
}
/**
 * 使用本地数据存储服务。
 * @author Wang Yucai
 *
 * @export
 * @param {(string | StorableOptions)} options 存储服务配置选项。
 * @returns {StorageProvider}
 * @see {@linkcode LocalStorageProvider}
 */
export function useLocalStorage(options) {
    return useStorage(LocalStorageProvider, options);
}
