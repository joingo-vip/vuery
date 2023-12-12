// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************

import { type OverridableStyle } from '~/lib/index.mjs';

/**
 * 定义了 `v-databox.vue` 组件属性类型。
 * @author Wang Yucai
 *
 * @export
 * @typedef {DataboxProperty}
 */
export type DataboxProperty = {
  /**
   * 可覆盖的样式。
   * @author Wang Yucai
   *
   * @type {?OverridableStyle}
   */
  overridableStyles?: OverridableStyle;
};
