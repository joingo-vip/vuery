// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************
/**
 * 提供了适用于浏览器的数据存储相关的基本方法。
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
     * @param {(string | StorageProviderOptions)} options 数据存储服务配置选项。
     * @param {Storage} storage 数据存储服务方法。
     */
    constructor(options, storage) {
        this.storage = storage;
        if (typeof options === 'string') {
            this.options = { key: options, secret: false };
        }
        else {
            this.options = Object.extends({ securetKey: JOINGO_DEFAULT_SECUREKEY }, options);
        }
    }
}
