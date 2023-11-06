/// <reference types="@joingo.vip/native-x" />
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
export declare class StopWatch {
    private m_startedTime;
    /**
     * 初始化 {@linkcode StopWatch} 的新实例。
     * @author Wang Yucai
     *
     * @constructor
     */
    constructor();
    /**
     * 开始测算。
     * @author Wang Yucai
     */
    start(): void;
    /**
     * 终止测算。
     * @author Wang Yucai
     *
     * @returns {sys.Null<Readonly<sys.TimeSpan>>}
     */
    stop(): sys.Null<Readonly<sys.TimeSpan>>;
}
/**
 * 使用 {@linkcode StopWatch} 类型的对象实例。
 * @author Wang Yucai
 *
 * @export
 * @returns {StopWatch}
 */
export declare function useStopWatch(): StopWatch;
