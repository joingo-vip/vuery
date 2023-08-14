// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************

/**
 * 组件相关类型模块。
 *
 * @remarks
 * "components.ts": 组件相关类型模块。
 *
 * @packageDocumentation
 */

/**
 * 定义了 ScrollableBox 组件属性。
 * @author Wang Yucai
 *
 * @export
 * @interface UIScrollableBoxProperties
 * @typedef {UIScrollableBoxProperties}
 */
export interface UIScrollableBoxProperties {
  /**
   * 横向滚动条选项。
   * @author Wang Yucai
   *
   * @type {vuery.ui.ScrollbarOptions}
   * @remarks
   * 设置或获取一个 {@link vuery.ui.ScrollbarOptions} 类型值，用于表示横向滚动条选项。
   */
  horizontalScrollbar: vuery.ui.ScrollbarOptions;

  /**
   * 纵向滚动条选项。
   * @author Wang Yucai
   *
   * @type {vuery.ui.ScrollbarOptions}
   * @remarks
   * 设置或获取一个 {@link vuery.ui.ScrollbarOptions} 类型值，用于表示纵向滚动条选项。
   */
  verticalScrollbar: vuery.ui.ScrollbarOptions;
}
