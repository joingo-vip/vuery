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
import { sealedDecorator as sealed } from './sealed-decorator.mjs';
/**
 * 提供了测算程序运行时间相关的方法。密闭的，不可以从此类型派生。
 * @author Wang Yucai
 *
 * @export
 * @class StopWatch
 * @typedef {StopWatch}
 * @remarks
 *  密闭的，不可以从此类型派生。
 */
let StopWatch = class StopWatch {
    /**
     * 初始化 {@linkcode StopWatch} 的新实例。
     * @author Wang Yucai
     *
     * @constructor
     */
    constructor() {
        this.m_startedTime = null;
    }
    /**
     * 开始测算。
     * @author Wang Yucai
     */
    start() {
        this.m_startedTime = Date.currentDateTime();
    }
    /**
     * 终止测算。
     * @author Wang Yucai
     *
     * @returns {sys.Null<Readonly<sys.TimeSpan>>}
     */
    stop() {
        if (!Object.isNull(this.m_startedTime)) {
            const stoppedTime = Date.currentDateTime();
            return stoppedTime.diff(this.m_startedTime);
        }
        return null;
    }
};
StopWatch = __decorate([
    sealed,
    __metadata("design:paramtypes", [])
], StopWatch);
export { StopWatch };
/**
 * 使用 {@linkcode StopWatch} 类型的对象实例。
 * @author Wang Yucai
 *
 * @export
 * @returns {StopWatch}
 */
export function useStopWatch() {
    return new StopWatch();
}
