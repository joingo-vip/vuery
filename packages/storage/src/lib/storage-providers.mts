// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************

import { Nullable, SR, sealed } from '@joingo.vip/core';
import { useAesAlgorithm } from '@joingo.vip/security';
import CryptoJS from 'crypto-js';

const aesCryptoService = useAesAlgorithm();
const __JOINGO_STORAGE_OPTIONS_KEY__: string = 'joingo.storage.options';
const __JOINGO_STORAGE_OPTIONS_SECRETKEY__: string = 'zomN7XXqPfxfhCap';

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
export abstract class StorageProvider {
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
  protected constructor(store: Storage, options: string | StorableOptions) {
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
    } else {
      if (String.isNullOrWhitespace(options.key)) {
        throw ArgumentError(SR.getString('invalidArgumentException'), 'options');
      }
      this.storageOptions = Object.extends({ secretKey: JOINGO_DEFAULT_SECUREKEY }, options);
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
  get exists(): boolean {
    return !console.debugIf(
      String.isNullOrEmpty(this.storeProvider.getItem(this.storageOptions.key)),
      `[DEBUG] - <storage-providers.mts: d7278b>: 标识名称为 “${this.storageOptions.key}” 的数据存储项可能不存在。`
    );
  }

  /**
   * 获取 {@linkcode T} 类型的数据。
   * @author Wang Yucai
   *
   * @template T
   * @returns {sys.Null<T>}
   */
  value<T>(): sys.Null<T> {
    if (!this.exists) {
      return null;
    }
    let storedStr: string = this.storeProvider.getItem(this.storageOptions.key);
    if (this.storageOptions.secure && !String.isNullOrWhitespace(this.storageOptions.secretKey)) {
      console.warn(`[WARN] - <storage-providers.mts: 7790bc>: 标识名称为 “${this.storageOptions.key}” 的数据持久化需要解密。`);
      storedStr = aesCryptoService.decrypt(storedStr, this.storageOptions.secretKey).toString();
    }
    return (JSON.parse(storedStr) as InternalStorableData).data as T;
  }

  /**
   * 尝试获取存储的数据。
   * @author Wang Yucai
   *
   * @template T
   * @returns {Nullable<T>}
   */
  tryGet<T>(): Nullable<T> {
    return new Nullable<T>(this.value<T>());
  }

  /**
   * 更新需要存储的 {@linkcode T} 类型的数据。
   * @author Wang Yucai
   *
   * @template T
   * @param {sys.Null<T>} value 需要存储的数据。
   */
  update<T>(value: sys.Null<T>): void {
    if (!Object.isNull(value)) {
      const storedData: Readonly<InternalStorableData> = { key: this.storageOptions.key, data: value };
      let storedStr: string = JSON.stringify(storedData);
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
  delete(): void {
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
@sealed
export class SessionStorageProvider extends StorageProvider {
  /**
   * 初始化 {@linkcode SessionStorageProvider} 的新实例。
   * @author Wang Yucai
   *
   * @constructor
   * @param {(string | StorableOptions)} options 会话存储相关的配置选项。
   */
  constructor(options: string | StorableOptions) {
    super(sessionStorage, options);
  }
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
@sealed
export class LocalStorageProvider extends StorageProvider {
  /**
   * 初始化 {@linkcode LocalStorageProvider} 的新实例。
   * @author Wang Yucai
   *
   * @constructor
   * @param {(string | StorableOptions)} options 本地存储相关的配置选项。
   */
  constructor(options: string | StorableOptions) {
    super(localStorage, options);
  }
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
export function useStorage(ctor: StorageProviderConstructor, options: string | StorableOptions): StorageProvider {
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
export function useSessionStorage(options: string | StorableOptions): StorageProvider {
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
export function useLocalStorage(options: string | StorableOptions): StorageProvider {
  return useStorage(LocalStorageProvider, options);
}
