// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************

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
export abstract class CryptographyAlgorithm {
  /**
   * 加密解密算法名称。
   * @author Wang Yucai
   * @remarks
   *  获取一个字符串，用于表示加密解密算法名称。
   *
   * @readonly
   * @type {string}
   */
  readonly name: string;

  /**
   * 加密方法。
   * @author Wang Yucai
   * @remarks
   *  获取 {@linkcode sys.Func2} 类型的对象实例，用于表示加密方法。
   *
   * @protected
   * @readonly
   * @type {sys.Func2<
   *     string | CryptoJS.lib.WordArray,
   *     string | CryptoJS.lib.WordArray,
   *     CryptoJS.lib.CipherParams
   *   >}
   */
  protected readonly encrypter: sys.Func2<
    string | CryptoJS.lib.WordArray,
    string | CryptoJS.lib.WordArray,
    CryptoJS.lib.CipherParams
  >;

  /**
   * 解密方法。
   * @author Wang Yucai
   * @remarks
   *  获取 {@linkcode sys.Func2} 类型的对象实例，用于表示解密方法。
   *
   * @protected
   * @readonly
   * @type {sys.Func2<
   *     string | CryptoJS.lib.CipherParams,
   *     string | CryptoJS.lib.WordArray,
   *     CryptoJS.lib.WordArray
   *   >}
   */
  protected readonly decrypter: sys.Func2<
    string | CryptoJS.lib.CipherParams,
    string | CryptoJS.lib.WordArray,
    CryptoJS.lib.WordArray
  >;

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
  protected constructor(
    name: string,
    encrypt: sys.Func2<string | CryptoJS.lib.WordArray, string | CryptoJS.lib.WordArray, CryptoJS.lib.CipherParams>,
    decrypt: sys.Func2<string | CryptoJS.lib.CipherParams, string | CryptoJS.lib.WordArray, CryptoJS.lib.WordArray>
  ) {
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
  encrypt(
    s: sys.Null<string | CryptoJS.lib.WordArray>,
    secretKey?: sys.Null<string | CryptoJS.lib.WordArray>
  ): sys.Null<CryptoJS.lib.CipherParams> {
    if (console.debugIf(Object.isNull(s), `[DEBUG] - <cryptography.mts: 28346f>: 无效的需要加密的字符串，将返回 null 值。`)) {
      return null;
    }
    if (
      console.warnIf(
        Object.isNull(secretKey) || (typeof secretKey === 'string' && String.isNullOrWhitespace(secretKey)),
        `[WARN] - <cryptography.mts: 92f172>: 无效加密密钥，将使用默认的。`
      )
    ) {
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
  decrypt(
    s: sys.Null<string | CryptoJS.lib.CipherParams>,
    secretKey?: sys.Null<string | CryptoJS.lib.WordArray>
  ): sys.Null<CryptoJS.lib.WordArray> {
    if (console.debugIf(Object.isNull(s), `[DEBUG] - <cryptography.mts: q4J89m>: 无效的需要解密的字符串，将返回 null 值。`)) {
      return null;
    }
    if (
      console.warnIf(
        Object.isNull(secretKey) || (typeof secretKey === 'string' && String.isNullOrWhitespace(secretKey)),
        `[WARN] - <cryptography.mts: tq05ex>: 无效解密密钥，将使用默认的。`
      )
    ) {
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
@sealed
export class AESCryptographyAlgorithm extends CryptographyAlgorithm {
  /**
   * 初始化 {@linkcode AESCryptographyAlgorithm} 的新实例。
   * @author Wang Yucai
   *
   * @constructor
   */
  constructor() {
    super('AES', CryptoJS.AES.encrypt, CryptoJS.AES.decrypt);
  }
}

const __JOINGO_AES_CRYPTO__: AESCryptographyAlgorithm = new AESCryptographyAlgorithm();

/**
 * 使用 AES 加密解密算法。
 * @author Wang Yucai
 *
 * @export
 * @returns {CryptographyAlgorithm}
 */
export function useAesAlgorithm(): CryptographyAlgorithm {
  return __JOINGO_AES_CRYPTO__;
}
