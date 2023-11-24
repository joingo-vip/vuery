/// <reference types="@joingo.vip/native-x" />
import { Nullable } from '@joingo.vip/core';
/**
 * 定义了数据存储标识名称类型。
 * @author Wang Yucai
 *
 * @export
 * @interface StorableKey
 * @typedef {StorableKey}
 */
export interface StorableKey {
    /**
     * 需要存储的数据标识名称。
     * @author Wang Yucai
     *
     * @type {string}
     */
    key: string;
}
/**
 * 定义了需要存储的数据结构。
 * @author Wang Yucai
 *
 * @export
 * @interface InternalStorableData
 * @typedef {InternalStorableData}
 * @extends {StorableKey}
 */
export interface InternalStorableData extends StorableKey {
    /**
     * 需要存储的数据。
     * @author Wang Yucai
     *
     * @type {?*}
     */
    data?: any;
}
/**
 * 定义了数据存储服务配置选项。
 * @author Wang Yucai
 *
 * @export
 * @interface StorableOptions
 * @typedef {StorableOptions}
 * @extends {StorableKey}
 */
export interface StorableOptions extends StorableKey {
    /**
     * 是否加密存储。
     * @author Wang Yucai
     *
     * @type {?sys.Null<boolean>}
     */
    secure?: sys.Null<boolean>;
    /**
     * 加密存储密钥。
     * @author Wang Yucai
     *
     * @type {?sys.Null<string>}
     */
    secretKey?: sys.Null<string>;
}
/**
 * 提供了适用于浏览器数据存储相关的基本方法。
 * @author Wang Yucai
 *
 * @export
 * @abstract
 * @class StorageProvider
 * @typedef {StorageProvider}
 */
export declare abstract class StorageProvider {
    /**
     * 数据存储方法。
     * @author Wang Yucai
     * @remarks
     *  获取 {@linkcode Storage} 类型的对象实例，用于表示数据存储方法。
     *
     * @protected
     * @readonly
     * @type {Storage}
     */
    protected readonly storeProvider: Storage;
    /**
     * 数据存储配置选项。
     * @author Wang Yucai
     * @remarks
     *  获取 {@linkcode StorableOptions} 类型的对象实例，用于表示数据存储配置选项。
     *
     * @protected
     * @readonly
     * @type {Readonly<StorableOptions>}
     */
    protected readonly storageOptions: Readonly<StorableOptions>;
    /**
     * 初始化 {@linkcode StorageProvider} 的新实例。
     * @author Wang Yucai
     *
     * @constructor
     * @protected
     * @param {Storage} store 数据存储方法。
     * @param {(string | StorableOptions)} options 数据存储服务配置选项。
     */
    protected constructor(store: Storage, options: string | StorableOptions);
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
    get exists(): boolean;
    /**
     * 获取 {@linkcode T} 类型的数据。
     * @author Wang Yucai
     *
     * @template T
     * @returns {sys.Null<T>}
     */
    value<T>(): sys.Null<T>;
    /**
     * 尝试获取存储的数据。
     * @author Wang Yucai
     *
     * @template T
     * @returns {Nullable<T>}
     */
    tryGet<T>(): Nullable<T>;
    /**
     * 更新需要存储的 {@linkcode T} 类型的数据。
     * @author Wang Yucai
     *
     * @template T
     * @param {sys.Null<T>} value 需要存储的数据。
     */
    update<T>(value: sys.Null<T>): void;
    /**
     * 删除当前已经存储的数据。
     * @author Wang Yucai
     */
    delete(): void;
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
export declare class SessionStorageProvider extends StorageProvider {
    /**
     * 初始化 {@linkcode SessionStorageProvider} 的新实例。
     * @author Wang Yucai
     *
     * @constructor
     * @param {(string | StorableOptions)} options 会话存储相关的配置选项。
     */
    constructor(options: string | StorableOptions);
}
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
export declare class LocalStorageProvider extends StorageProvider {
    /**
     * 初始化 {@linkcode LocalStorageProvider} 的新实例。
     * @author Wang Yucai
     *
     * @constructor
     * @param {(string | StorableOptions)} options 本地存储相关的配置选项。
     */
    constructor(options: string | StorableOptions);
}
/**
 * 定义了 {@linkcode StorageProvider} 构造方法约束。
 * @author Wang Yucai
 *
 * @export
 * @interface StorageProviderConstructor
 * @typedef {StorageProviderConstructor}
 */
export interface StorageProviderConstructor {
    new (options: string | StorableOptions): StorageProvider;
}
/**
 * 使用数据存储服务。
 * @author Wang Yucai
 *
 * @export
 * @param {StorageProviderConstructor} ctor {@linkcode StorageProviderConstructor} 类型的对象实例。
 * @param {(string | StorableOptions)} options 存储服务配置选项。
 * @returns {StorageProvider}
 */
export declare function useStorage(ctor: StorageProviderConstructor, options: string | StorableOptions): StorageProvider;
/**
 * 使用会话数据存储服务。
 * @author Wang Yucai
 *
 * @export
 * @param {(string | StorableOptions)} options 存储服务配置选项。
 * @returns {StorageProvider}
 * @see {@linkcode SessionStorageProvider}
 */
export declare function useSessionStorage(options: string | StorableOptions): StorageProvider;
/**
 * 使用本地数据存储服务。
 * @author Wang Yucai
 *
 * @export
 * @param {(string | StorableOptions)} options 存储服务配置选项。
 * @returns {StorageProvider}
 * @see {@linkcode LocalStorageProvider}
 */
export declare function useLocalStorage(options: string | StorableOptions): StorageProvider;
