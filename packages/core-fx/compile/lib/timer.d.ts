/// <reference types="@joingo.vip/native-x" />
/// <reference types="@joingo.vip/native-x" />
/**
 * 定义了处理时钟到达事件的委托。
 * @author Wang Yucai
 *
 * @export
 * @typedef {TimerElapsedEventHandler}
 */
export type TimerElapsedEventHandler = sys.EventHandler;
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
export declare class Timer implements sys.IDisposable {
    private readonly m_intervalMilliseconds;
    private m_enabled;
    private readonly m_handler;
    private m_intervalId;
    /**
     * 初始化 {@linkcode Timer} 的新实例。
     * @author Wang Yucai
     *
     * @constructor
     * @param {number} interval 时钟间隔。单位毫秒。
     * @param {?TimerElapsedEventHandler} [elapsed] 时钟到达事件。
     */
    constructor(interval: number, elapsed?: TimerElapsedEventHandler);
    /**
     * 启动时钟。
     * @author Wang Yucais
     */
    start(): void;
    /**
     * 停止时钟。
     * @author Wang Yucai
     */
    stop(): void;
    dispose(): void;
    /**
     * 时钟是否已经启动。
     * @author Wang Yucai
     *
     * @readonly
     * @type {boolean}
     * @remarks
     *  获取一个 {@link Boolean} 类型值，用于表示时钟是否已经启动。
     */
    get enabled(): boolean;
}
/**
 * 使用 {@linkcode Timer} 类型的对象实例。
 * @author Wang Yucai
 *
 * @export
 * @param {number} interval 时钟间隔（单位毫秒）。
 * @param {?TimerElapsedEventHandler} [elapsed] 时钟到达事件。
 * @returns {Timer}
 */
export declare function useTimer(interval: number, elapsed?: TimerElapsedEventHandler): Timer;
