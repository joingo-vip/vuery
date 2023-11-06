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
import { SR } from './resource.mjs';
/**
 * 提供了时钟相关的方法。密闭的，不可以从此类型派生。
 * @author Wang Yucai
 *
 * @export
 * @class Timer
 * @implements {sys.IDisposable}
 * @typedef {Timer}
 * @remarks
 *  密闭的，不可以从此类型派生。
 */
let Timer = class Timer {
    /**
     * 初始化 {@linkcode Timer} 的新实例。
     * @author Wang Yucai
     *
     * @constructor
     * @param {number} interval 时钟间隔。单位毫秒。
     * @param {?TimerElapsedEventHandler} [elapsed] 时钟到达事件。
     */
    constructor(interval, elapsed) {
        this.m_enabled = false;
        this.m_intervalMilliseconds = interval;
        this.m_handler = elapsed;
    }
    /**
     * 启动时钟。
     * @author Wang Yucais
     */
    start() {
        if (!this.m_enabled) {
            if (console.warnIf(this.m_intervalMilliseconds <= 0, `[WARN] - <timer.mts: 2f968d>: Invalid clock interval (ms) setting: "${this.m_intervalMilliseconds}ms".`)) {
                throw new ArgumentError(String.format(SR.getString('invalidArgumentException_1'), 'm_intervalMilliseconds', this.m_intervalMilliseconds), 'm_intervalMilliseconds');
            }
            /**
             * This 上下文代理。
             */
            const $me = this;
            this.m_intervalId = setInterval(() => {
                if (!Object.isNull($me.m_handler)) {
                    $me.m_handler($me, {});
                }
            }, this.m_intervalMilliseconds);
            this.m_enabled = true;
        }
    }
    /**
     * 停止时钟。
     * @author Wang Yucai
     */
    stop() {
        if (this.m_enabled && !Object.isNull(this.m_intervalId)) {
            clearInterval(this.m_intervalId);
            this.m_enabled = false;
        }
    }
    dispose() {
        this.stop();
        this.m_intervalId = null;
    }
    /**
     * 时钟是否已经启动。
     * @author Wang Yucai
     *
     * @readonly
     * @type {boolean}
     * @remarks
     *  获取一个 {@link Boolean} 类型值，用于表示时钟是否已经启动。
     */
    get enabled() {
        return this.m_enabled;
    }
};
Timer = __decorate([
    sealed,
    __metadata("design:paramtypes", [Number, Function])
], Timer);
export { Timer };
/**
 * 使用 {@linkcode Timer} 类型的对象实例。
 * @author Wang Yucai
 *
 * @export
 * @param {number} interval 时钟间隔（单位毫秒）。
 * @param {?TimerElapsedEventHandler} [elapsed] 时钟到达事件。
 * @returns {Timer}
 */
export function useTimer(interval, elapsed) {
    return new Timer(interval, elapsed);
}
