// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************

import { type OverridableStyle } from '~/lib/index.mjs';

/**
 * 定义了 `v-action-area.vue` 组件属性类型。
 * @author Wang Yucai
 *
 * @export
 * @typedef {ActionAreaProperty}
 */
export type ActionAreaProperty = {
  /**
   * 可覆盖的样式。
   * @author Wang Yucai
   *
   * @type {?OverridableStyle}
   */
  overridableStyles?: OverridableStyle;

  /**
   * 操作区标题文本。
   * @author Wang Yucai
   *
   * @type {?string}
   */
  title?: string;
};
