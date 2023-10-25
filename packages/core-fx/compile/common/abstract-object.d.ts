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
export declare abstract class JSObject implements _Object {
    private readonly m_typeName;
    /**
     * 初始化 {@linkcode JSObject} 的新实例。
     * @author Wang Yucai
     *
     * @constructor
     * @protected
     * @param {string} typeName 类型名称。
     */
    protected constructor(typeName: string);
    getType(): string;
}
