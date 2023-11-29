/// <reference types="@joingo.vip/native-x" />
import { HttpResult } from '@joingo.vip/http';
import { AxiosResponse } from 'axios';
/**
 * 提供了适用于 “若依” 服务端框架的相关辅助方法。
 * @author Wang Yucai
 *
 * @export
 * @class Ryu
 * @typedef {Ryu}
 */
export declare class Ryu {
    /**
     * 初始化 {@linkcode Ryu} 的新实例。
     * @author Wang Yucai
     *
     * @constructor
     * @private
     */
    private constructor();
    /**
     * 当 {@linkcode result} 响应中包含了 `data` 字段时，返回 true；否则返回 false。
     * @author Wang Yucai
     *
     * @static
     * @param {?HttpResult<AxiosResponse>} [result] 需要校验的 HTTP 结果。
     * @returns {boolean}
     */
    static hasData(result?: HttpResult<AxiosResponse>): boolean;
    /**
     * 校验若依 HTTP 服务端框架是否返回 401 错误代码。
     * @author Wang Yucai
     *
     * @static
     * @param {HttpResult<AxiosResponse>} result 需要校验的结果。
     * @returns {boolean}
     */
    static isUnauthorized(result: HttpResult<AxiosResponse>): boolean;
    /**
     * 校验若依 HTTP 服务是否有服务器异常。
     * @author Wang Yucai
     *
     * @static
     * @param {HttpResult<AxiosResponse>} result 需要校验的结果。
     * @returns {boolean}
     */
    static hasServerError(result: HttpResult<AxiosResponse>): boolean;
    /**
     * 当若依 HTTP 服务返回异常时，获取异常描述信息。
     * @author Wang Yucai
     *
     * @static
     * @param {HttpResult<AxiosResponse>} result HTTP 服务返回值结果。
     * @param {string|sys.Func} ifNullOrEmpty 当 {@linkcode result} 异常结果为 `null` 或空白时，需要替换的异常描述字符串。
     * @returns {string}
     */
    static getErrorDescription(result: HttpResult<AxiosResponse>, ifNullOrEmpty: string | sys.Func<string>): string;
}
