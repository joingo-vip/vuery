// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************

/**
 * Vuery 组件定义模块。
 *
 * @remarks
 * "lib.components.d.ts": Vuery 组件定义模块。
 *
 * @packageDocumentation
 */

declare namespace vuery {
  namespace ui {
    /**
     * 定义了滚动条选项枚举类型。
     * @author Wang Yucai
     *
     * @typedef {UIScrollbarOptions}
     */
    type UIScrollbarOptions =
      | 'visible'
      | 'hidden'
      | 'clip'
      | 'scroll'
      | 'auto'
      | null;
  }
}
