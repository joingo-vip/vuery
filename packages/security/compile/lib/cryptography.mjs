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
import { sealed } from '@joingo.vip/core';
import CryptoJS from 'crypto-js';
/**
 * 提供了加密解密相关的基本方法。
 * @author Wang Yucai
 *
 * @export
 * @abstract
 * @class CryptographyAlgorithm
 * @typedef {CryptographyAlgorithm}
 */
export class CryptographyAlgorithm {
    /**
     * 初始化 {@linkcode CryptographyAlgorithm} 的新实例。
     * @author Wang Yucai
     *
     * @constructor
     * @protected
     * @param {string} name 加密解密算法名称。
     * @param {sys.Func2<string | CryptoJS.lib.WordArray, string | CryptoJS.lib.WordArray, CryptoJS.lib.CipherParams>} encrypt 加密算法。
     * @param {sys.Func2<string | CryptoJS.lib.CipherParams, string | CryptoJS.lib.WordArray, CryptoJS.lib.WordArray>} decrypt 解密算法。
     */
    constructor(name, encrypt, decrypt) {
        this.name = name;
        this.decrypter = decrypt;
        this.encrypter = encrypt;
    }
    /**
     * 使用密钥 {@linkcode secretKey} 对字符串 {@linkcode s} 进行加密。
     * @author Wang Yucai
     *
     * @param {sys.Null<string | CryptoJS.lib.WordArray>} s 需要进行加密的字符串。
     * @param {?sys.Null<string | CryptoJS.lib.WordArray>} secretKey 需要加密的密钥。
     * @returns {sys.Null<CryptoJS.lib.CipherParams>}
     */
    encrypt(s, secretKey) {
        if (console.debugIf(Object.isNull(s), `[DEBUG] - <cryptography.mts: 28346f>: 无效的需要加密的字符串，将返回 null 值。`)) {
            return null;
        }
        if (console.warnIf(Object.isNull(secretKey) || (typeof secretKey === 'string' && String.isNullOrWhitespace(secretKey)), `[WARN] - <cryptography.mts: 92f172>: 无效加密密钥，将使用默认的。`)) {
            secretKey = (JOINGO_DEFAULT_SECUREKEY + '7wPCdRl2WtQZxevumpOuGNY0jybULP9O').substring(0, 15);
        }
        return this.encrypter(s, secretKey);
    }
    /**
     * 使用指定的密钥 {@linkcode secretKey} 对字符串 {@linkcode s} 进行解密。
     * @author Wang Yucai
     *
     * @param {sys.Null<string | CryptoJS.lib.CipherParams>} s
     * @param {?sys.Null<string | CryptoJS.lib.WordArray>} [secretKey]
     * @returns {sys.Null<CryptoJS.lib.WordArray>}
     */
    decrypt(s, secretKey) {
        if (console.debugIf(Object.isNull(s), `[DEBUG] - <cryptography.mts: q4J89m>: 无效的需要解密的字符串，将返回 null 值。`)) {
            return null;
        }
        if (console.warnIf(Object.isNull(secretKey) || (typeof secretKey === 'string' && String.isNullOrWhitespace(secretKey)), `[WARN] - <cryptography.mts: tq05ex>: 无效解密密钥，将使用默认的。`)) {
            secretKey = (JOINGO_DEFAULT_SECUREKEY + '7wPCdRl2WtQZxevumpOuGNY0jybULP9O').substring(0, 15);
        }
        return this.decrypter(s, secretKey);
    }
}
/**
 * 提供了 AES 加密解密相关的方法。密闭的，不可以从此类型派生。
 * @author Wang Yucai
 * @remarks
 *  密闭的，不可以从此类型派生。
 *
 * @export
 * @class AESCryptographyAlgorithm
 * @typedef {AESCryptographyAlgorithm}
 * @extends {CryptographyAlgorithm}
 */
let AESCryptographyAlgorithm = class AESCryptographyAlgorithm extends CryptographyAlgorithm {
    /**
     * 初始化 {@linkcode AESCryptographyAlgorithm} 的新实例。
     * @author Wang Yucai
     *
     * @constructor
     */
    constructor() {
        super('AES', CryptoJS.AES.encrypt, CryptoJS.AES.decrypt);
    }
};
AESCryptographyAlgorithm = __decorate([
    sealed,
    __metadata("design:paramtypes", [])
], AESCryptographyAlgorithm);
export { AESCryptographyAlgorithm };
const __JOINGO_AES_CRYPTO__ = new AESCryptographyAlgorithm();
/**
 * 使用 AES 加密解密算法。
 * @author Wang Yucai
 *
 * @export
 * @returns {CryptographyAlgorithm}
 */
export function useAesAlgorithm() {
    return __JOINGO_AES_CRYPTO__;
}
