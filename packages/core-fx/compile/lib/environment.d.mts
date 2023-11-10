/**
 * 提供了环境相关的方法。
 * @author Wang Yucai
 *
 * @export
 * @class Environment
 * @typedef {Environment}
 */
export declare class Environment {
    /**
     * 应用程序版本号。
     * @author Wang Yucai
     * @remarks
     *  获取一个字符串，用于表示应用程序版本号。
     *
     * @static
     * @readonly
     * @type {string}
     */
    static get applicationVersion(): string;
    /**
     * SDK 版本号。
     * @author Wang Yucai
     * @remarks
     *  获取一个字符串，用于表示 SDK 版本号。
     *
     * @static
     * @readonly
     * @type {string}
     */
    static get sdkVersion(): string;
}
