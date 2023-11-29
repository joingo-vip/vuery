// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************
import { HttpStatus } from '@joingo.vip/http';
/**
 * 提供了适用于 “若依” 服务端框架的相关辅助方法。
 * @author Wang Yucai
 *
 * @export
 * @class Ryu
 * @typedef {Ryu}
 */
export class Ryu {
    /**
     * 初始化 {@linkcode Ryu} 的新实例。
     * @author Wang Yucai
     *
     * @constructor
     * @private
     */
    constructor() { }
    /**
     * 当 {@linkcode result} 响应中包含了 `data` 字段时，返回 true；否则返回 false。
     * @author Wang Yucai
     *
     * @static
     * @param {?HttpResult<AxiosResponse>} [result] 需要校验的 HTTP 结果。
     * @returns {boolean}
     */
    static hasData(result) {
        var _a;
        return !console.debugIf(Object.isNull((_a = result.rawResponse) === null || _a === void 0 ? void 0 : _a.data), `[DEBUG] - <ryu.mts: 29ab75>: 若依的 HTTP 服务并未返回任何有效的数据结果。`);
    }
    /**
     * 校验若依 HTTP 服务端框架是否返回 401 错误代码。
     * @author Wang Yucai
     *
     * @static
     * @param {HttpResult<AxiosResponse>} result 需要校验的结果。
     * @returns {boolean}
     */
    static isUnauthorized(result) {
        if (result.hasErrors) {
            if (console.errorIf(result.error.statusCode && result.error.statusCode === HttpStatus.ClientErrorResponse.Unauthorized, `[ERROR] - <ryu.mts: eb57a4>: 当前请求的若依 HTTP 服务未授权使用。`)) {
                return true;
            }
        }
        if (Ryu.hasData(result)) {
            const _void = result.rawResponse.data;
            if (console.errorIf(_void.code && _void.code === HttpStatus.ClientErrorResponse.Unauthorized, `[ERROR] - <ryu.mts: eb57a4>: 当前请求的若依 HTTP 服务未授权使用。`)) {
                return true;
            }
        }
        return false;
    }
    /**
     * 校验若依 HTTP 服务是否有服务器异常。
     * @author Wang Yucai
     *
     * @static
     * @param {HttpResult<AxiosResponse>} result 需要校验的结果。
     * @returns {boolean}
     */
    static hasServerError(result) {
        if (result.hasErrors) {
            if (console.errorIf(result.error.statusCode && result.error.statusCode === HttpStatus.ServerErrorResponse.InternalServerError, `[ERROR] - <ryu.mts: eb57a4>: 当前请求的若依 HTTP 服务抛出了未处理的异常。`)) {
                return true;
            }
        }
        if (Ryu.hasData(result)) {
            const _void = result.rawResponse.data;
            if (console.errorIf(_void.code && _void.code === HttpStatus.ServerErrorResponse.InternalServerError, `[ERROR] - <ryu.mts: eb57a4>: 当前请求的若依 HTTP 服务抛出了未处理的异常。`)) {
                return true;
            }
        }
        return false;
    }
    /**
     * 当若依 HTTP 服务返回异常时，获取异常描述信息。
     * @author Wang Yucai
     *
     * @static
     * @param {HttpResult<AxiosResponse>} result HTTP 服务返回值结果。
     * @param {string|sys.Func} ifNullOrEmpty 当 {@linkcode result} 异常结果为 `null` 或空白时，需要替换的异常描述字符串。
     * @returns {string}
     */
    static getErrorDescription(result, ifNullOrEmpty) {
        var _a, _b;
        if (Ryu.hasData(result) && !String.isNullOrWhitespace((_b = (_a = result.rawResponse) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.msg)) {
            return result.rawResponse.data.msg;
        }
        if (typeof ifNullOrEmpty === 'string') {
            return ifNullOrEmpty;
        }
        return ifNullOrEmpty();
    }
}
