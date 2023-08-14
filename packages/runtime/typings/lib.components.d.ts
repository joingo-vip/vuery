// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************

/**
 * 组件相关类型定义模块。
 *
 * @remarks
 * "lib.components.d.ts": 组件相关类型定义模块。
 *
 * @packageDocumentation
 */

declare namespace vuery {
  namespace ui {
    /**
     * 定义了滚动条选项枚举类型。
     * @author Wang Yucai
     *
     * @typedef {ScrollbarOptions}
     */
    type ScrollbarOptions =
      | 'visible'
      | 'hidden'
      | 'clip'
      | 'scroll'
      | 'auto'
      | null;
  }
}
