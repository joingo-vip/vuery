// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************

/**
 * 提供了 JavaScript {@link Object} 相关的基本方法。
 * @author Wang Yucai
 *
 * @export
 * @abstract
 * @class JSObject
 * @typedef {JSObject}
 * @implements {_Object}
 * @see {@linkcode _Object}
 */
export abstract class JSObject implements _Object {
  private readonly m_typeName: string;

  /**
   * 初始化 {@linkcode JSObject} 的新实例。
   * @author Wang Yucai
   *
   * @constructor
   * @protected
   * @param {string} typeName 类型名称。
   */
  protected constructor(typeName: string) {
    this.m_typeName = typeName;
  }

  getType(): string {
    return this.m_typeName;
  }
}
