// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************

/**
 * 字符串扩展类型定义模块。
 *
 * @remarks
 * "lib.native-string.d.ts": 字符串扩展类型定义模块。
 *
 * @packageDocumentation
 */

export {};

declare global {
  /**
   * 为 {@link String} 类型提供的静态扩展方法。
   * @author Wang Yucai
   *
   * @interface StringConstructor
   * @typedef {StringConstructor}
   */
  interface StringConstructor {
    /**
     * 获取字符串长度为 0 的字符串。
     * @author Wang Yucai
     *
     * @type {() => string}
     * @example
     *  const s = String.empty();
     */
    empty: () => string;

    /**
     * 当字符串 {@link s} 等于 undefined、null、或者长度等于 0 时返回 true；否则返回 false。
     * @author Wang Yucai
     *
     * @type {(s: string | null) => boolean}
     * @example
     *  if (String.isNullOrEmpty(null)) {
     *      // Your code
     *  }
     */
    isNullOrEmpty: (s: string | null) => boolean;

    /**
     * 当字符串 {@link s} 等于 undefined、null、长度等于 0、或者全为空白符时返回 true；否则返回 false。
     * @author Wang Yucai
     *
     * @type {(s: string | null) => boolean}
     * @example
     *  if (String.isNullOrWhitespace(" ")) {
     *      // Your code
     *  }
     */
    isNullOrWhitespace: (s: string | null) => boolean;

    /**
     * 格式化字符串。
     * @author Wang Yucai
     *
     * @type {(s: string | null, ...args: Array<any>) => string | null}
     *
     */
    format: (s: string | null, ...args: Array<any>) => string | null;
  }
}
