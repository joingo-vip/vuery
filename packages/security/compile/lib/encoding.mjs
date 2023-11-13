// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import CryptoJS from 'crypto-js';
import { sealed } from '@joingo.vip/core';
/**
 * 提供了文本编码相关的基本方法。
 * @author Wang Yucai
 *
 * @export
 * @abstract
 * @class Encoding
 * @typedef {Encoding}
 */
export class Encoding {
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
    constructor(name, encoder, decoder) {
        this.name = name;
        this.encoder = encoder;
        this.decoder = decoder;
    }
    /**
     * 对字符 {@linkcode s} 进行编码。
     * @author Wang Yucai
     *
     * @param {sys.Null<string>} s 需要进行编码的字符串。
     * @returns {sys.Null<CryptoJS.lib.WordArray>}
     * @see {@link https://www.npmjs.com/package/crypto-js}
     * @see {@linkcode String.isNullOrEmpty}
     */
    encode(s) {
        if (console.debugIf(String.isNullOrEmpty(s), `[DEBUG] - <encoding.mts: 1e0644>: 字符串 “s” 可能为 undefined 类型、null 值或长度为 0，将返回 null。`)) {
            return null;
        }
        return this.encoder(s);
    }
    /**
     * 使用指定编码对 {@linkcode data} 进行解码。
     * @author Wang Yucai
     *
     * @param {sys.Null<CryptoJS.lib.WordArray>} data 字节数据。
     * @returns {sys.Null<string>}
     */
    decode(data) {
        if (console.debugIf(Object.isNull(data), `[DEBUG] - <encoding.mts: 3cf1b4>: 字节数据 “s” 可能为 undefined 或 null 值，将返回 null。`)) {
            return null;
        }
        return this.decoder(data);
    }
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
let UTF8Encoding = class UTF8Encoding extends Encoding {
    /**
     * 初始化 {@linkcode UTF8Encoding} 的新实例。
     * @author Wang Yucai
     *
     * @constructor
     */
    constructor() {
        super('UTF-8', CryptoJS.enc.Utf8.parse, CryptoJS.enc.Utf8.stringify);
    }
};
UTF8Encoding = __decorate([
    sealed,
    __metadata("design:paramtypes", [])
], UTF8Encoding);
export { UTF8Encoding };
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
let UTF16Encoding = class UTF16Encoding extends Encoding {
    /**
     * 初始化 {@linkcode UTF16Encoding} 的新实例。
     * @author Wang Yucai
     *
     * @constructor
     */
    constructor() {
        super('UTF-16', CryptoJS.enc.Utf16.parse, CryptoJS.enc.Utf16.stringify);
    }
};
UTF16Encoding = __decorate([
    sealed,
    __metadata("design:paramtypes", [])
], UTF16Encoding);
export { UTF16Encoding };
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
let Base64Encoding = class Base64Encoding extends Encoding {
    /**
     * 初始化 {@linkcode Base64Encoding} 的新实例。
     * @author Wang Yucai
     *
     * @constructor
     */
    constructor() {
        super('BASE-64', CryptoJS.enc.Base64.parse, CryptoJS.enc.Base64.stringify);
    }
};
Base64Encoding = __decorate([
    sealed,
    __metadata("design:paramtypes", [])
], Base64Encoding);
export { Base64Encoding };
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
let HEXEncoding = class HEXEncoding extends Encoding {
    /**
     * 初始化 {@linkcode HEXEncoding} 的新实例。
     * @author Wang Yucai
     *
     * @constructor
     */
    constructor() {
        super('HEX', CryptoJS.enc.Hex.parse, CryptoJS.enc.Hex.stringify);
    }
};
HEXEncoding = __decorate([
    sealed,
    __metadata("design:paramtypes", [])
], HEXEncoding);
export { HEXEncoding };
const _JOINGO_ENCODER_MAP_ = {
    'base64': new Base64Encoding(),
    'BASE64': new Base64Encoding(),
    'hex': new HEXEncoding(),
    'HEX': new HEXEncoding(),
    'utf-16': new UTF16Encoding(),
    'UTF-16': new UTF16Encoding(),
    'utf-8': new UTF8Encoding(),
    'UTF-8': new UTF8Encoding(),
    'utf16': new UTF16Encoding(),
    'UTF16': new UTF16Encoding(),
    'utf8': new UTF8Encoding(),
    'UTF8': new UTF8Encoding(),
};
/**
 * 使用指定名称为 {@linkcode encoder} 的编码方法。
 * @author Wang Yucai
 *
 * @export
 * @param {Encoders} [encoder='UTF-8'] 内置的编码名称。
 * @returns {Encoding}
 */
export function useEncoding(encoder = 'UTF-8') {
    return _JOINGO_ENCODER_MAP_[encoder !== null && encoder !== void 0 ? encoder : 'UTF-8'];
}
