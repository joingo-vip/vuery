/// <reference types="@joingo.vip/native-x" />
/// <reference types="@joingo.vip/native-x" />
import CryptoJS from 'crypto-js';
/**
 * 提供了哈希算法相关的基本方法。
 * @author Wang Yucai
 *
 * @export
 * @abstract
 * @class HashAlgorithm
 * @typedef {HashAlgorithm}
 */
export declare abstract class HashAlgorithm {
    /**
     * 计算哈希算法相关的方法。
     * @author Wang Yucai
     * @remarks
     *  获取 {@linkcode sys.Func1} 类型的对象实例，用于表示计算哈希算法相关的方法。
     *
     * @protected
     * @readonly
     * @type {sys.Func1<string | CryptoJS.lib.WordArray, CryptoJS.lib.WordArray>}
     */
    protected readonly hashProvider: sys.Func1<string | CryptoJS.lib.WordArray, CryptoJS.lib.WordArray>;
    /**
     * 哈希算法名称。
     * @author Wang Yucai
     * @remarks
     *  获取一个字符串，用于表示哈希算法名称。
     *
     * @readonly
     * @type {string}
     */
    readonly name: string;
    /**
     * 初始化 {@linkcode HashAlgorithm} 的新实例。
     * @author Wang Yucai
     *
     * @constructor
     * @protected
     * @param {string} name 哈希算法名称。
     * @param {sys.Func1<string | CryptoJS.lib.WordArray, CryptoJS.lib.WordArray>} provider 计算哈希算法相关的方法。
     */
    protected constructor(name: string, provider: sys.Func1<string | CryptoJS.lib.WordArray, CryptoJS.lib.WordArray>);
    /**
     * 计算字符串 {@linkcode s} 的哈希数据。
     * @author Wang Yucai
     *
     * @param {sys.Null<string | CryptoJS.lib.WordArray>} s 字符串或 {@link CryptoJS.lib.WordArray} 类型的对象实例。
     * @returns {sys.Null<CryptoJS.lib.WordArray>}
     * @see {@link https://www.npmjs.com/package/crypto-js}
     * @see {@linkcode useEncoding}
     */
    computeHash(s: sys.Null<string | CryptoJS.lib.WordArray>): sys.Null<CryptoJS.lib.WordArray>;
}
/**
 * 提供了 MD5 哈希算法相关的方法。密闭的，不可以从此类型派生。
 * @author Wang Yucai
 * @remarks
 *  密闭的，不可以从此类型派生。
 *
 * @export
 * @class MD5Algorithm
 * @typedef {MD5Algorithm}
 * @extends {HashAlgorithm}
 */
export declare class MD5Algorithm extends HashAlgorithm {
    /**
     * 初始化 {@linkcode MD5Algorithm} 的新实例。
     * @author Wang Yucai
     *
     * @constructor
     */
    constructor();
}
/**
 * 提供了 SHA1 哈希算法相关的方法。密闭的，不可以从此类型派生。
 * @author Wang Yucai
 * @remarks
 *  密闭的，不可以从此类型派生。
 *
 * @export
 * @class SHA1Algorithm
 * @typedef {SHA1Algorithm}
 * @extends {HashAlgorithm}
 */
export declare class SHA1Algorithm extends HashAlgorithm {
    /**
     * 初始化 {@linkcode SHA1Algorithm} 的新实例。
     * @author Wang Yucai
     *
     * @constructor
     */
    constructor();
}
/**
 * 提供了 SHA256 哈希算法相关的方法。密闭的，不可以从此类型派生。
 * @author Wang Yucai
 * @remarks
 *  密闭的，不可以从此类型派生。
 *
 * @export
 * @class SHA256Algorithm
 * @typedef {SHA256Algorithm}
 * @extends {HashAlgorithm}
 */
export declare class SHA256Algorithm extends HashAlgorithm {
    /**
     * 初始化 {@linkcode SHA256Algorithm} 的新实例。
     * @author Wang Yucai
     *
     * @constructor
     */
    constructor();
}
/**
 * 提供了 SHA224 哈希算法相关的方法。密闭的，不可以从此类型派生。
 * @author Wang Yucai
 * @remarks
 *  密闭的，不可以从此类型派生。
 *
 * @export
 * @class SHA224Algorithm
 * @typedef {SHA224Algorithm}
 * @extends {HashAlgorithm}
 */
export declare class SHA224Algorithm extends HashAlgorithm {
    /**
     * 初始化 {@linkcode SHA224Algorithm} 的新实例。
     * @author Wang Yucai
     *
     * @constructor
     */
    constructor();
}
/**
 * 提供了 SHA512 哈希算法相关的方法。密闭的，不可以从此类型派生。
 * @author Wang Yucai
 * @remarks
 *  密闭的，不可以从此类型派生。
 *
 * @export
 * @class SHA512Algorithm
 * @typedef {SHA512Algorithm}
 * @extends {HashAlgorithm}
 */
export declare class SHA512Algorithm extends HashAlgorithm {
    /**
     * 初始化 {@linkcode SHA512Algorithm} 的新实例。
     * @author Wang Yucai
     *
     * @constructor
     */
    constructor();
}
/**
 * 提供了 SHA384 哈希算法相关的方法。密闭的，不可以从此类型派生。
 * @author Wang Yucai
 * @remarks
 *  密闭的，不可以从此类型派生。
 *
 * @export
 * @class SHA384Algorithm
 * @typedef {SHA384Algorithm}
 * @extends {HashAlgorithm}
 */
export declare class SHA384Algorithm extends HashAlgorithm {
    /**
     * 初始化 {@linkcode SHA384Algorithm} 的新实例。
     * @author Wang Yucai
     *
     * @constructor
     */
    constructor();
}
/**
 * 提供了 SHA3 哈希算法相关的方法。密闭的，不可以从此类型派生。
 * @author Wang Yucai
 * @remarks
 *  密闭的，不可以从此类型派生。
 *
 * @export
 * @class SHA3Algorithm
 * @typedef {SHA3Algorithm}
 * @extends {HashAlgorithm}
 */
export declare class SHA3Algorithm extends HashAlgorithm {
    /**
     * 初始化 {@linkcode SHA3Algorithm} 的新实例。
     * @author Wang Yucai
     *
     * @constructor
     */
    constructor();
}
/**
 * 提供了 RIPEMD160 哈希算法相关的方法。密闭的，不可以从此类型派生。
 * @author Wang Yucai
 * @remarks
 *  密闭的，不可以从此类型派生。
 *
 * @export
 * @class Ripemd160Algorithm
 * @typedef {Ripemd160Algorithm}
 * @extends {HashAlgorithm}
 */
export declare class Ripemd160Algorithm extends HashAlgorithm {
    /**
     * 初始化 {@linkcode Ripemd160Algorithm} 的新实例。
     * @author Wang Yucai
     *
     * @constructor
     */
    constructor();
}
/**
 * 定义了哈希算法名称枚举类型。
 * @author Wang Yucai
 *
 * @export
 * @typedef {HashAlgorithmName}
 */
export type HashAlgorithmName = 'md5' | 'sha1' | 'sha256' | 'sha224' | 'sha512' | 'sha384' | 'sha3' | 'ripemd160' | 'MD5' | 'SHA1' | 'SHA256' | 'SHA224' | 'SHA512' | 'SHA384' | 'SHA3' | 'RIPEMD160';
/**
 * 使用指定名称的哈希算法。
 * @author Wang Yucai
 *
 * @export
 * @param {HashAlgorithmName} [name='sha1'] 哈希算法名称。
 * @returns {HashAlgorithm}
 */
export declare function useHashAlgorithm(name?: HashAlgorithmName): HashAlgorithm;
