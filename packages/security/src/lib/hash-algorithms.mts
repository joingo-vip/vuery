// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************

import CryptoJS from 'crypto-js';
import { useEncoding } from './encoding.mjs';
import { sealed } from '@joingo.vip/core';

/**
 * 提供了哈希算法相关的基本方法。
 * @author Wang Yucai
 *
 * @export
 * @abstract
 * @class HashAlgorithm
 * @typedef {HashAlgorithm}
 */
export abstract class HashAlgorithm {
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
  protected constructor(name: string, provider: sys.Func1<string | CryptoJS.lib.WordArray, CryptoJS.lib.WordArray>) {
    this.name;
    this.hashProvider = provider;
  }

  /**
   * 计算字符串 {@linkcode s} 的哈希数据。
   * @author Wang Yucai
   *
   * @param {sys.Null<string | CryptoJS.lib.WordArray>} s 字符串或 {@link CryptoJS.lib.WordArray} 类型的对象实例。
   * @returns {sys.Null<CryptoJS.lib.WordArray>}
   * @see {@link https://www.npmjs.com/package/crypto-js}
   * @see {@linkcode useEncoding}
   */
  computeHash(s: sys.Null<string | CryptoJS.lib.WordArray>): sys.Null<CryptoJS.lib.WordArray> {
    if (
      console.debugIf(
        Object.isNull(s),
        `[DEBUG] - <hash-algorithms.mts: c2624e>: 无效的字符串 “s”，无法进行哈希计算，将返回 null 值。`
      )
    ) {
      return null;
    } else if (typeof s === 'string') {
      return this.hashProvider(useEncoding('utf-8').encode(s));
    } else {
      return this.hashProvider(s);
    }
  }
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
@sealed
export class MD5Algorithm extends HashAlgorithm {
  /**
   * 初始化 {@linkcode MD5Algorithm} 的新实例。
   * @author Wang Yucai
   *
   * @constructor
   */
  constructor() {
    super('MD5', CryptoJS.MD5);
  }
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
@sealed
export class SHA1Algorithm extends HashAlgorithm {
  /**
   * 初始化 {@linkcode SHA1Algorithm} 的新实例。
   * @author Wang Yucai
   *
   * @constructor
   */
  constructor() {
    super('SHA1', CryptoJS.SHA1);
  }
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
@sealed
export class SHA256Algorithm extends HashAlgorithm {
  /**
   * 初始化 {@linkcode SHA256Algorithm} 的新实例。
   * @author Wang Yucai
   *
   * @constructor
   */
  constructor() {
    super('SHA256', CryptoJS.SHA256);
  }
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
@sealed
export class SHA224Algorithm extends HashAlgorithm {
  /**
   * 初始化 {@linkcode SHA224Algorithm} 的新实例。
   * @author Wang Yucai
   *
   * @constructor
   */
  constructor() {
    super('SHA224', CryptoJS.SHA224);
  }
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
@sealed
export class SHA512Algorithm extends HashAlgorithm {
  /**
   * 初始化 {@linkcode SHA512Algorithm} 的新实例。
   * @author Wang Yucai
   *
   * @constructor
   */
  constructor() {
    super('SHA512', CryptoJS.SHA512);
  }
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
@sealed
export class SHA384Algorithm extends HashAlgorithm {
  /**
   * 初始化 {@linkcode SHA384Algorithm} 的新实例。
   * @author Wang Yucai
   *
   * @constructor
   */
  constructor() {
    super('SHA384', CryptoJS.SHA384);
  }
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
@sealed
export class SHA3Algorithm extends HashAlgorithm {
  /**
   * 初始化 {@linkcode SHA3Algorithm} 的新实例。
   * @author Wang Yucai
   *
   * @constructor
   */
  constructor() {
    super('SHA3', CryptoJS.SHA3);
  }
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
@sealed
export class Ripemd160Algorithm extends HashAlgorithm {
  /**
   * 初始化 {@linkcode Ripemd160Algorithm} 的新实例。
   * @author Wang Yucai
   *
   * @constructor
   */
  constructor() {
    super('RIPEMD160', CryptoJS.RIPEMD160);
  }
}

/**
 * 定义了哈希算法名称枚举类型。
 * @author Wang Yucai
 *
 * @export
 * @typedef {HashAlgorithmName}
 */
export type HashAlgorithmName =
  | 'md5'
  | 'sha1'
  | 'sha256'
  | 'sha224'
  | 'sha512'
  | 'sha384'
  | 'sha3'
  | 'ripemd160'
  | 'MD5'
  | 'SHA1'
  | 'SHA256'
  | 'SHA224'
  | 'SHA512'
  | 'SHA384'
  | 'SHA3'
  | 'RIPEMD160';

const __JOINGO_HASHALGO_MAP__: Record<HashAlgorithmName, HashAlgorithm> = {
  'md5': new MD5Algorithm(),
  'MD5': new MD5Algorithm(),
  'ripemd160': new Ripemd160Algorithm(),
  'RIPEMD160': new Ripemd160Algorithm(),
  'sha1': new SHA1Algorithm(),
  'SHA1': new SHA1Algorithm(),
  'sha224': new SHA224Algorithm(),
  'SHA224': new SHA224Algorithm(),
  'sha256': new SHA256Algorithm(),
  'SHA256': new SHA256Algorithm(),
  'sha3': new SHA3Algorithm(),
  'SHA3': new SHA3Algorithm(),
  'sha384': new SHA384Algorithm(),
  'SHA384': new SHA384Algorithm(),
  'sha512': new SHA512Algorithm(),
  'SHA512': new SHA512Algorithm(),
};

/**
 * 使用指定名称的哈希算法。
 * @author Wang Yucai
 *
 * @export
 * @param {HashAlgorithmName} [name='sha1'] 哈希算法名称。
 * @returns {HashAlgorithm}
 */
export function useHashAlgorithm(name: HashAlgorithmName = 'sha1'): HashAlgorithm {
  return __JOINGO_HASHALGO_MAP__[name ?? 'sha1'];
}
