// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************

declare namespace sys {
  /**
   * 定义了释放信息的接口。
   * @author Wang Yucai
   *
   * @interface IDisposable
   * @typedef {IDisposable}
   */
  interface IDisposable {
    /**
     * 释放占用的资源。
     * @author Wang Yucai
     */
    dispose(): void;
  }
}
