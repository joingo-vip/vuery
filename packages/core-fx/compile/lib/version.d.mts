/**
 * 定义了默认的补丁名称。
 * @author Wang Yucai
 *
 * @export
 * @typedef {Patch}
 */
export type Patch = 'None' | 'Debug' | 'Release' | 'Pre-Release' | 'Daily-Build' | 'Nightly-Build' | 'Weekly-Build' | 'Alpha' | 'Beta' | 'Stable' | 'Preview' | 'RTM' | 'RC' | 'Bug-fixed' | 'Build' | 'Hot-fixed';
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
export declare class Version {
    /**
     * 获取一个 {@link Number} 类型值，用于表示主要版本号。
     * @author Wang Yucai
     *
     * @readonly
     * @type {number}
     */
    readonly major: number;
    /**
     * 获取一个 {@link Number} 类型值，用于表示次要版本号。
     * @author Wang Yucai
     *
     * @readonly
     * @type {number}
     */
    readonly minor: number;
    /**
     * 获取一个 {@link Number} 类型值，用于表示构建版本号。
     * @author Wang Yucai
     *
     * @readonly
     * @type {number}
     */
    readonly build: number;
    /**
     * 获取一个字符串，用于表示补丁版本号。
     * @author Wang Yucai
     *
     * @readonly
     * @type {(Patch | string)}
     */
    readonly patch: Patch | string;
    /**
     * 获取一个 {@link Number} 类型值，用于表示修订版本号。
     * @author Wang Yucai
     *
     * @readonly
     * @type {number}
     */
    readonly revision: number;
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
    constructor(major?: number, minor?: number, build?: number, patch?: Patch | string, revision?: number);
    /**
     * 获取表示版本号的字符串。
     * @author Wang Yucai
     *
     * @param {boolean} [withRevision=true] 是否包含修订版本号。
     * @type {string}
     */
    getVersion(withRevision?: boolean): string;
    /**
     * 获取包含了修订版本号的版本号字符串。
     * @author Wang Yucai
     *
     * @returns {string}
     * @see {@linkcode getVersion}
     */
    toString(): string;
}
/**
 * 当前的 SDK 版本号。
 * @author Wang Yucai
 *
 * @type {Version}
 */
export declare const SdkVersion: Version;
