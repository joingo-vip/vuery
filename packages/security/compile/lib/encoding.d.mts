/// <reference types="@joingo.vip/native-x" />
/// <reference types="@joingo.vip/native-x" />
import CryptoJS from 'crypto-js';
/**
 * 提供了文本编码相关的基本方法。
 * @author Wang Yucai
 *
 * @export
 * @abstract
 * @class Encoding
 * @typedef {Encoding}
 */
export declare abstract class Encoding {
    /**
     * 初始化 {@linkcode Encoding} 的新实例。
     * @author Wang Yucai
     *
     * @constructor
     * @protected
     * @param {string} name 编码名称。
     * @param {sys.Func1<string, CryptoJS.lib.WordArray>} encoder 编码方法。
     * @param {sys.Func1<CryptoJS.lib.WordArray, string>} decoder 解码方法。
     */
    protected constructor(name: string, encoder: sys.Func1<string, CryptoJS.lib.WordArray>, decoder: sys.Func1<CryptoJS.lib.WordArray, string>);
    /**
     * 编码名称。
     * @author Wang Yucai
     * @remarks
     *  获取一个字符串，用于表示编码名称。
     *
     * @readonly
     * @type {string}
     */
    readonly name: string;
    /**
     * 编码方法。
     * @author Wang Yucai
     * @remarks
     *  获取 {@linkcode sys.Func1} 类型的对象实例，用于表示编码方法。
     *
     * @protected
     * @readonly
     * @type {sys.Func1<string, CryptoJS.lib.WordArray>}
     */
    protected readonly encoder: sys.Func1<string, CryptoJS.lib.WordArray>;
    /**
     * 解码方法。
     * @author Wang Yucai
     * @remarks
     *  获取 {@linkcode sys.Func1} 类型的对象实例，用于表示解码方法。
     *
     * @protected
     * @readonly
     * @type {sys.Func1<CryptoJS.lib.WordArray, string>}
     */
    protected readonly decoder: sys.Func1<CryptoJS.lib.WordArray, string>;
    /**
     * 对字符 {@linkcode s} 进行编码。
     * @author Wang Yucai
     *
     * @param {sys.Null<string>} s 需要进行编码的字符串。
     * @returns {sys.Null<CryptoJS.lib.WordArray>}
     * @see {@link https://www.npmjs.com/package/crypto-js}
     * @see {@linkcode String.isNullOrEmpty}
     */
    encode(s: sys.Null<string>): sys.Null<CryptoJS.lib.WordArray>;
    /**
     * 使用指定编码对 {@linkcode data} 进行解码。
     * @author Wang Yucai
     *
     * @param {sys.Null<CryptoJS.lib.WordArray>} data 字节数据。
     * @returns {sys.Null<string>}
     */
    decode(data: sys.Null<CryptoJS.lib.WordArray>): sys.Null<string>;
}
/**
 * 提供了 UTF-8 编码相关的方法。密闭的，不可以从此类型派生。
 * @author Wang Yucai
 * @remarks
 *  密闭的，不可以从此类型派生。
 *
 * @export
 * @class UTF8Encoding
 * @typedef {UTF8Encoding}
 * @extends {Encoding}
 */
export declare class UTF8Encoding extends Encoding {
    /**
     * 初始化 {@linkcode UTF8Encoding} 的新实例。
     * @author Wang Yucai
     *
     * @constructor
     */
    constructor();
}
/**
 * 提供了 UTF-16 编码相关的方法。密闭的，不可以从此类型派生。
 * @author Wang Yucai
 * @remarks
 *  密闭的，不可以从此类型派生。
 *
 * @export
 * @class UTF16Encoding
 * @typedef {UTF16Encoding}
 * @extends {Encoding}
 */
export declare class UTF16Encoding extends Encoding {
    /**
     * 初始化 {@linkcode UTF16Encoding} 的新实例。
     * @author Wang Yucai
     *
     * @constructor
     */
    constructor();
}
/**
 * 提供了 BASE-64 编码相关的方法。密闭的，不可以从此类型派生。
 * @author Wang Yucai
 * @remarks
 *  密闭的，不可以从此类型派生。
 *
 * @export
 * @class Base64Encoding
 * @typedef {Base64Encoding}
 * @extends {Encoding}
 */
export declare class Base64Encoding extends Encoding {
    /**
     * 初始化 {@linkcode Base64Encoding} 的新实例。
     * @author Wang Yucai
     *
     * @constructor
     */
    constructor();
}
/**
 * 提供了 HEX 十六进制编码相关的方法。密闭的，不可以从此类型派生。
 * @author Wang Yucai
 * @remarks
 *  密闭的，不可以从此类型派生。
 *
 * @export
 * @class HEXEncoding
 * @typedef {HEXEncoding}
 * @extends {Encoding}
 */
export declare class HEXEncoding extends Encoding {
    /**
     * 初始化 {@linkcode HEXEncoding} 的新实例。
     * @author Wang Yucai
     *
     * @constructor
     */
    constructor();
}
/**
 * 定义了编码方式枚举类型。
 * @author Wang Yucai
 *
 * @export
 * @typedef {Encoders}
 */
export type Encoders = 'UTF-8' | 'utf-8' | 'UTF8' | 'utf8' | 'UTF-16' | 'utf-16' | 'UTF16' | 'utf16' | 'BASE64' | 'base64' | 'HEX' | 'hex';
/**
 * 使用指定名称为 {@linkcode encoder} 的编码方法。
 * @author Wang Yucai
 *
 * @export
 * @param {Encoders} [encoder='UTF-8'] 内置的编码名称。
 * @returns {Encoding}
 */
export declare function useEncoding(encoder?: Encoders): Encoding;
