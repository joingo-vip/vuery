/// <reference types="@joingo.vip/native-x" />
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
export declare class CultureInfo {
    /**
     * 初始化 {@linkcode CultureInfo} 的新实例。
     * @author Wang Yucai
     *
     * @constructor
     * @param {string} name 文化区域名称。
     */
    constructor(name: string);
    /**
     * 文化区域名称。
     * @author Wang Yucai
     *
     * @readonly
     * @type {string}
     * @remarks
     *  获取一个字符串，用于表示文化区域名称。
     */
    readonly name: string;
    /**
     * 设置默认的文化区域。
     * @author Wang Yucai
     *
     * @static
     * @param {string} name 文化区域名称。
     */
    static setDefaultCulture(name: string): void;
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
    static get natural(): CultureInfo;
    /**
     * 获取当前的文化区域名称。
     * @author Wang Yucai
     *
     * @returns {string}
     * @see {@linkcode name}
     */
    toString(): string;
    /**
     * 变更当前的文化区域信息。
     * @author Wang Yucai
     *
     * @returns {CultureInfo}
     */
    change(callback?: sys.Action): CultureInfo;
    /**
     * 变更当前的文化区域信息。
     * @author Wang Yucai
     *
     * @param {sys.Action1<string>} storage 存储文化区域信息的方法。
     * @returns {CultureInfo}
     */
    change(storage: sys.Action1<string>): CultureInfo;
    /**
     * 当前的文化区域变更后执行的方法。
     * @author Wang Yucai
     *
     * @param {sys.Action1<CultureInfo>} callback 回调方法。
     */
    changed(callback: sys.Action1<CultureInfo>): void;
    /**
     * 获取当前的文化区域信息。
     * @author Wang Yucai
     *
     * @static
     * @returns {CultureInfo}
     */
    static currentCulture(): CultureInfo;
    /**
     * 获取当前的文化区域信息。
     * @author Wang Yucai
     *
     * @static
     * @param {sys.Func<string>} from 获取当前的文化区域信息的方法。
     * @returns {CultureInfo}
     */
    static currentCulture(from: sys.Func<string>): CultureInfo;
}
/**
 * 提供了默认的文化区域存储相关的方法。
 * @author Wang Yucai
 */
export declare const DefaultCultureInfoStorageProvider: sys.Action1<string>;
/**
 * 提供了默认的获取文化区域信息相关的方法。
 * @author Wang Yucai
 */
export declare const DefaultCultureInfoGetProvider: sys.Func<string>;
/**
 * 提供了默认的文化区域变更后回调相关的方法。
 * @author Wang Yucai
 */
export declare const DefaultCultureChangedCallbackHandler: sys.Action1<CultureInfo>;
/**
 * 定义了 i18n 中间件配置选项类型。
 * @author Wang Yucai
 *
 * @export
 * @interface I18nMiddlewareOptions
 * @typedef {I18nMiddlewareOptions}
 */
export interface I18nMiddlewareOptions {
    /**
     * 默认的文化区域名称。
     * @author Wang Yucai
     *
     * @type {string}
     */
    natural: string;
    /**
     * 默认的资源命名空间。
     * @author Wang Yucai
     *
     * @type {string}
     */
    resourceNamespace: string;
    /**
     * 资源文件。
     * @author Wang Yucai
     *
     * @type {?Record<string, Record<string, any>>}
     */
    resources?: Record<string, Record<string, any>>;
}
