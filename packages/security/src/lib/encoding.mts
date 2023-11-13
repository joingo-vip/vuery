// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************

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
export abstract class Encoding {
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
  protected constructor(
    name: string,
    encoder: sys.Func1<string, CryptoJS.lib.WordArray>,
    decoder: sys.Func1<CryptoJS.lib.WordArray, string>
  ) {
    this.name = name;
    this.encoder = encoder;
    this.decoder = decoder;
  }

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
  encode(s: sys.Null<string>): sys.Null<CryptoJS.lib.WordArray> {
    if (
      console.debugIf(
        String.isNullOrEmpty(s),
        `[DEBUG] - <encoding.mts: 1e0644>: 字符串 “s” 可能为 undefined 类型、null 值或长度为 0，将返回 null。`
      )
    ) {
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
  decode(data: sys.Null<CryptoJS.lib.WordArray>): sys.Null<string> {
    if (
      console.debugIf(
        Object.isNull(data),
        `[DEBUG] - <encoding.mts: 3cf1b4>: 字节数据 “s” 可能为 undefined 或 null 值，将返回 null。`
      )
    ) {
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
@sealed
export class UTF8Encoding extends Encoding {
  /**
   * 初始化 {@linkcode UTF8Encoding} 的新实例。
   * @author Wang Yucai
   *
   * @constructor
   */
  constructor() {
    super('UTF-8', CryptoJS.enc.Utf8.parse, CryptoJS.enc.Utf8.stringify);
  }
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
@sealed
export class UTF16Encoding extends Encoding {
  /**
   * 初始化 {@linkcode UTF16Encoding} 的新实例。
   * @author Wang Yucai
   *
   * @constructor
   */
  constructor() {
    super('UTF-16', CryptoJS.enc.Utf16.parse, CryptoJS.enc.Utf16.stringify);
  }
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
@sealed
export class Base64Encoding extends Encoding {
  /**
   * 初始化 {@linkcode Base64Encoding} 的新实例。
   * @author Wang Yucai
   *
   * @constructor
   */
  constructor() {
    super('BASE-64', CryptoJS.enc.Base64.parse, CryptoJS.enc.Base64.stringify);
  }
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
@sealed
export class HEXEncoding extends Encoding {
  /**
   * 初始化 {@linkcode HEXEncoding} 的新实例。
   * @author Wang Yucai
   *
   * @constructor
   */
  constructor() {
    super('HEX', CryptoJS.enc.Hex.parse, CryptoJS.enc.Hex.stringify);
  }
}

/**
 * 定义了编码方式枚举类型。
 * @author Wang Yucai
 *
 * @export
 * @typedef {Encoders}
 */
export type Encoders =
  | 'UTF-8'
  | 'utf-8'
  | 'UTF8'
  | 'utf8'
  | 'UTF-16'
  | 'utf-16'
  | 'UTF16'
  | 'utf16'
  | 'BASE64'
  | 'base64'
  | 'HEX'
  | 'hex';

const _JOINGO_ENCODER_MAP_: Record<Encoders, Encoding> = {
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
export function useEncoding(encoder: Encoders = 'UTF-8'): Encoding {
  return _JOINGO_ENCODER_MAP_[encoder ?? 'UTF-8'];
}
