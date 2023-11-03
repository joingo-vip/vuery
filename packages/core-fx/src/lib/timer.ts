// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************

import { sealedDecorator as sealed } from './sealed-decorator';
import { SR } from './resource';

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
@sealed
export class Timer implements sys.IDisposable {
  private readonly m_intervalMilliseconds: number;
  private m_enabled: boolean = false;
  private readonly m_handler: sys.Null<TimerElapsedEventHandler>;
  private m_intervalId: sys.Null<number>;

  /**
   * 初始化 {@linkcode Timer} 的新实例。
   * @author Wang Yucai
   *
   * @constructor
   * @param {number} interval 时钟间隔。单位毫秒。
   * @param {?TimerElapsedEventHandler} [elapsed] 时钟到达事件。
   */
  constructor(interval: number, elapsed?: TimerElapsedEventHandler) {
    this.m_intervalMilliseconds = interval;
    this.m_handler = elapsed;
  }

  /**
   * 启动时钟。
   * @author Wang Yucais
   */
  start(): void {
    if (!this.m_enabled) {
      if (
        console.warnIf(
          this.m_intervalMilliseconds <= 0,
          `[WARN] - <timer.mts: 2f968d>: Invalid clock interval (ms) setting: "${this.m_intervalMilliseconds}ms".`
        )
      ) {
        throw new ArgumentError(
          String.format(SR.getString('invalidArgumentException_1'), 'm_intervalMilliseconds', this.m_intervalMilliseconds),
          'm_intervalMilliseconds'
        );
      }
      /**
       * This 上下文代理。
       */
      const $me: Timer = this;
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
  stop(): void {
    if (this.m_enabled && !Object.isNull(this.m_intervalId)) {
      clearInterval(this.m_intervalId);
      this.m_enabled = false;
    }
  }

  dispose(): void {
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
  get enabled(): boolean {
    return this.m_enabled;
  }
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
export function useTimer(interval: number, elapsed?: TimerElapsedEventHandler): Timer {
  return new Timer(interval, elapsed);
}
