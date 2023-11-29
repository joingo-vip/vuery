/**
 * 提供了身份相关的基本方法。
 * @author Wang Yucai
 *
 * @export
 * @abstract
 * @class Identity
 * @typedef {Identity}
 */
export declare abstract class Identity {
    private m_isAuthenticated;
    private m_name;
    /**
     * 初始化 {@linkcode Identity} 的新实例。
     * @author Wang Yucai
     *
     * @constructor
     * @protected
     */
    protected constructor();
    /**
     * 是否已经身份认证。
     * @author Wang Yucai
     * @remarks
     *  获取一个 {@link Boolean} 类型值，用于表示是否已经身份认证。
     *
     * @readonly
     * @type {boolean}
     */
    get isAuthenticated(): boolean;
    /**
     * 是否已经身份认证。
     */
    protected set isAuthenticated(v: boolean);
    /**
     * 当前用户的名称。
     * @author Wang Yucai
     * @remarks
     *  获取一个字符串，用于表示当前用户的名称。
     *
     * @readonly
     * @type {string}
     */
    get name(): string;
    /**
     * 当前用户的名称。
     */
    protected set name(v: string);
}
/**
 * 提供了匿名用户身份相关的方法。密闭的，不可以从此类型派生。
 * @author Wang Yucai
 * @remarks
 *  密闭的，不可以从此类型派生。
 *
 * @export
 * @class AnonymousIdentity
 * @typedef {AnonymousIdentity}
 * @extends {Identity}
 */
export declare class AnonymousIdentity extends Identity {
    /**
     * 初始化 {@linkcode AnonymousIdentity} 的新实例。
     * @author Wang Yucai
     *
     * @constructor
     */
    constructor();
}
