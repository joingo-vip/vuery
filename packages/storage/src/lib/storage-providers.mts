// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************

/**
 * 定义了需要存储的项目类型。
 * @author Wang Yucai
 *
 * @export
 * @interface InternalStorableItem
 * @typedef {InternalStorableItem}
 */
export interface InternalStorableItem {
  /**
   * 需要存储的项目标识名称。
   * @author Wang Yucai
   *
   * @type {string}
   */
  key: string;

  /**
   * 需要存储的项目值。
   * @author Wang Yucai
   *
   * @type {?sys.Null<any>}
   */
  value?: sys.Null<any>;
}

/**
 * 定义了存储服务配置选项。
 * @author Wang Yucai
 *
 * @export
 * @interface StorageProviderOptions
 * @typedef {StorageProviderOptions}
 */
export interface StorageProviderOptions {
  /**
   * 存储项目标识名称。
   * @author Wang Yucai
   *
   * @type {string}
   */
  key: string;

  /**
   * 用于加密存储的密钥。
   * @author Wang Yucai
   *
   * @type {?sys.Null<string>}
   */
  secretKey?: sys.Null<string>;

  /**
   * 是否需要加密存储。
   * @author Wang Yucai
   *
   * @type {?boolean}
   */
  secret?: boolean;
}

/**
 * 提供了适用于浏览器的数据存储相关的基本方法。
 * @author Wang Yucai
 *
 * @export
 * @abstract
 * @class StorageProvider
 * @typedef {StorageProvider}
 */
export abstract class StorageProvider {
  /**
   * 适用于浏览器的数据存储相关方法。
   * @author Wang Yucai
   *
   * @protected
   * @readonly
   * @type {Storage}
   */
  protected readonly storage: Storage;

  /**
   * 数据存储服务配置选项。
   * @author Wang Yucai
   *
   * @protected
   * @readonly
   * @type {StorageProviderOptions}
   */
  protected readonly options: StorageProviderOptions;

  /**
   * 初始化 {@linkcode StorageProvider} 的新实例。
   * @author Wang Yucai
   *
   * @constructor
   * @protected
   * @param {(string | StorageProviderOptions)} options 数据存储服务配置选项。
   * @param {Storage} storage 数据存储服务方法。
   */
  protected constructor(options: string | StorageProviderOptions, storage: Storage) {
    this.storage = storage;
    if (typeof options === 'string') {
      this.options = { key: options, secret: false };
    } else {
      this.options = Object.extends({ securetKey: JOINGO_DEFAULT_SECUREKEY }, options);
    }
  }
}
