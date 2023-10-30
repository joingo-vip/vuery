// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************

import { sealedDecorator as sealed } from './sealed-decorator.mjs';

/**
 * 提供了字符串拼接操作相关的方法。密闭的，不可以从此类型派生。
 * @author Wang Yucai
 *
 * @export
 * @class StringBuilder
 * @typedef {StringBuilder}
 * @sealed
 * @remarks
 *  密闭的，不可以从此类型派生。
 */
@sealed
export class StringBuilder {
  private readonly m_initStr: string;
  private m_buffer: string[];

  /**
   * 初始化 {@linkcode StringBuilder} 的新实例。
   * @author Wang Yucai
   *
   * @constructor
   * @param {?sys.Null<string>} [s] 初始化字符串。
   */
  constructor(s?: sys.Null<string>) {
    this.m_initStr = s ?? String.empty;
    this.m_buffer = [];
  }

  /**
   * 重置 {@linkcode StringBuilder}。
   * @author Wang Yucai
   *
   * @returns {StringBuilder}
   */
  reset(): StringBuilder {
    this.m_buffer = [];
    return this;
  }

  /**
   * 将 {@linkcode s} 添加到 {@linkcode StringBuilder} 末尾处。
   * @author Wang Yucai
   *
   * @param {string} s 需要添加的字符串。
   * @returns {StringBuilder}
   */
  append(s: string): StringBuilder {
    if (!String.isNullOrWhitespace(s)) {
      this.m_buffer.push(s);
    }
    return this;
  }

  /**
   * 格式化 {@linkcode s} 并添加到 {@linkcode StringBuilder} 末尾处。
   * @author Wang Yucai
   *
   * @param {string} s 格式化字符串。
   * @param {...any[]} args 格式化参数数组。
   * @returns {StringBuilder}
   * @see {@linkcode append}
   * @see {@linkcode String.format}
   */
  appendFormat(s: string, ...args: any[]): StringBuilder {
    return this.append(String.format(s, ...args));
  }

  /**
   * 将 {@linkcode StringBuilder} 转换成字符串。
   * @author Wang Yucai
   *
   * @returns {string}
   */
  toString(): string {
    return this.m_buffer.join(String.empty);
  }
}
