/// <reference types="@joingo.vip/native-x" />
import { CultureInfo } from './globalization';
/**
 * 提供了管理资源资源相关的方法。
 * @author Wang Yucai
 *
 * @export
 * @class ResourceManager
 * @typedef {ResourceManager}
 */
export declare class ResourceManager {
    /**
     * 初始化 {@linkcode ResourceManager} 的新实例。
     * @author Wang Yucai
     *
     * @constructor
     * @param {sys.Null<string>} [resourceNamespace=null] 资源命名空间。
     * @see {@link https://www.npmjs.com/package/i18next}
     */
    constructor(resourceNamespace?: sys.Null<string>);
    /**
     * 资源命名空间。
     * @author Wang Yucai
     *
     * @readonly
     * @type {string}
     * @remarks
     *  获取一个字符串，用于表示资源命名空间。
     */
    readonly resourceNamespace: string;
    /**
     * 获取名称为 {@linkcode resourceName} 的资源字符串。
     * @author Wang Yucai
     *
     * @param {string} resourceName 资源名称。
     * @param {sys.Null<string>} [resourceNamespace=null] 资源命名空间。
     * @param {sys.Null<CultureInfo>} [culture=null] 指定的文化区域名称。
     * @returns {string}
     */
    getString(resourceName: string, resourceNamespace?: sys.Null<string>, culture?: sys.Null<CultureInfo>): string;
}
/**
 * 默认的管理资源字符串相关的方法。
 * @author Wang Yucai
 *
 * @type {ResourceManager}
 */
export declare const SR: ResourceManager;
