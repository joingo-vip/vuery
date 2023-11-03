// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************

import { sealedDecorator as sealed } from './sealed-decorator';

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
@sealed
export class StopWatch {
  private m_startedTime: sys.Null<Date>;

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
  start(): void {
    this.m_startedTime = Date.currentDateTime();
  }

  /**
   * 终止测算。
   * @author Wang Yucai
   *
   * @returns {sys.Null<Readonly<sys.TimeSpan>>}
   */
  stop(): sys.Null<Readonly<sys.TimeSpan>> {
    if (!Object.isNull(this.m_startedTime)) {
      const stoppedTime: Date = Date.currentDateTime();
      return stoppedTime.diff(this.m_startedTime);
    }
    return null;
  }
}

/**
 * 使用 {@linkcode StopWatch} 类型的对象实例。
 * @author Wang Yucai
 *
 * @export
 * @returns {StopWatch}
 */
export function useStopWatch(): StopWatch {
  return new StopWatch();
}
