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
import { sealedDecorator as sealed } from './sealed-decorator';
/**
 * 提供了可能为空 {@linkcode T} 类型相关的方法。密闭的，不可以从此类型派生。
 * @author Wang Yucai
 *
 * @export
 * @class Nullable
 * @typedef {Nullable}
 * @template T
 * @remarks
 *  密闭的，不可以从此类型派生。
 */
let Nullable = class Nullable {
    /**
     * 初始化 {@linkcode Nullable} 的新实例。
     * @author Wang Yucai
     *
     * @constructor
     * @param {sys.Null<T>} value 可能为空的 {@linkcode T} 类型值。
     */
    constructor(value) {
        this.m_rawValue = value;
    }
    /**
     * 原始值。
     * @author Wang Yucai
     *
     * @readonly
     * @type {sys.Null<T>}
     * @remarks
     *  获取 {@linkcode T} 类型的对象实例或值，用于表示原始值。
     */
    get rawValue() {
        return this.m_rawValue;
    }
    /**
     * 当 {@linkcode rawValue} 为 undefined 类型或 null 值时，返回 false；否则返回 true。
     * @author Wang Yucai
     *
     * @readonly
     * @type {boolean}
     * @remarks
     *  获取一个 {@link Boolean} 类型值，用于表示 {@linkcode rawValue} 是否不为 undefined 类型或 null 值。
     */
    get hasValue() {
        return !Object.isNull(this.m_rawValue);
    }
    value(value) {
        if (this.hasValue)
            return this.rawValue;
        else {
            if (typeof value === 'function' && typeof this.rawValue !== 'function')
                return value(this.rawValue);
            return value;
        }
    }
};
Nullable = __decorate([
    sealed,
    __metadata("design:paramtypes", [Object])
], Nullable);
export { Nullable };
/**
 * 使用可能为空的 {@linkcode T} 类型的对象实例。
 * @author Wang Yucai
 *
 * @export
 * @template T
 * @param {sys.Null<T>} value 可能为空的 {@linkcode T} 类型的对象实例或值。
 * @returns {Nullable<T>}
 */
export function useNullable(value) {
    return new Nullable(value);
}
