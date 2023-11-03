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
var StringBuilder_1;
import { sealedDecorator as sealed } from './sealed-decorator';
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
let StringBuilder = StringBuilder_1 = class StringBuilder {
    /**
     * 初始化 {@linkcode StringBuilder} 的新实例。
     * @author Wang Yucai
     *
     * @constructor
     * @param {?sys.Null<string>} [s] 初始化字符串。
     */
    constructor(s) {
        this.m_initStr = s !== null && s !== void 0 ? s : String.empty;
        this.m_buffer = [];
    }
    /**
     * 重置 {@linkcode StringBuilder}。
     * @author Wang Yucai
     *
     * @returns {StringBuilder}
     */
    reset() {
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
    append(s) {
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
    appendFormat(s, ...args) {
        return this.append(String.format(s, ...args));
    }
    /**
     * 将 {@linkcode StringBuilder} 转换成字符串。
     * @author Wang Yucai
     *
     * @returns {string}
     */
    toString() {
        return this.m_buffer.join(String.empty);
    }
    /**
     * 创建一个新的 {@linkcode StringBuilder} 类型的对象实例。
     * @author Wang Yucai
     *
     * @static
     * @param {sys.Null<string>} [s=null] 用于初始化的字符串。
     * @returns {StringBuilder}
     */
    static create(s = null) {
        return new StringBuilder_1(s);
    }
};
StringBuilder = StringBuilder_1 = __decorate([
    sealed,
    __metadata("design:paramtypes", [Object])
], StringBuilder);
export { StringBuilder };
